import { systemPrompt } from '@/config/ChatPrompt';
import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// 2. Initialize Upstash Redis
const redis = Redis.fromEnv();

// 3. Configure Rate Limiter
// Allow 5 requests every 60 seconds per IP
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(5, '60 s'),
  analytics: true,
});

const chatSchema = z.object({
  message: z.string().min(1).max(2000),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'model']),
        parts: z.array(z.object({ text: z.string() })),
      }),
    )
    .optional()
    .default([]),
});

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');

  if (cfConnectingIP) return cfConnectingIP;
  if (forwarded) return forwarded.split(',')[0].trim();
  if (realIP) return realIP;

  return 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    const { success, limit, reset } = await ratelimit.limit(clientIP);

    if (!success) {
      const resetInSeconds = Math.ceil((reset - Date.now()) / 1000);

      return NextResponse.json(
        {
          error: 'rate_limit_exceeded',
          message: 'You have reached the message limit.',
          limit,
          remaining: 0,
          resetAt: reset,
          resetInSeconds,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': reset.toString(),
          },
        },
      );
    }

    const body = await request.json();
    const validatedData = chatSchema.parse(body);

    // Prepare the request body for Gemini REST API

    const contents = [
      {
        parts: [{ text: systemPrompt }],
        role: 'user',
      },
      {
        parts: [
          { text: 'I understand. I will act as your portfolio assistant.' },
        ],
        role: 'model',
      },
      // Add conversation history
      ...validatedData.history.map((msg) => ({
        ...msg,
        parts: msg.parts.map((part) => ({
          ...part,
          text: msg.role === 'user' ? part.text : part.text,
        })),
      })),
      // Add current message
      {
        parts: [{ text: validatedData.message }],
        role: 'user',
      },
    ];

    const model = 'gemini-flash-lite-latest';

    const response = await ai.models.generateContentStream({
      model,
      config: {
        maxOutputTokens: 512,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
      contents,
    });

    // Create a ReadableStream for streaming the response
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of response) {
            const text = chunk.text || '';
            if (text) {
              // Send each chunk in SSE format
              controller.enqueue(
                new TextEncoder().encode(
                  `data: ${JSON.stringify({ text, done: false })}\n\n`,
                ),
              );
            }
          }
          // Send final message to signal completion
          controller.enqueue(
            new TextEncoder().encode(
              `data: ${JSON.stringify({ text: '', done: true })}\n\n`,
            ),
          );
          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          controller.enqueue(
            new TextEncoder().encode(
              `data: ${JSON.stringify({ error: 'Streaming failed', done: true })}\n\n`,
            ),
          );
          controller.close();
        }
      },
    });

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
