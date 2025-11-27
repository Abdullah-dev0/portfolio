import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

    if (!DISCORD_WEBHOOK_URL) {
      return NextResponse.json(
        { error: 'Webhook not configured' },
        { status: 500 },
      );
    }

    const formData = await req.json();

    // Validate
    if (!formData?.name || !formData?.email || !formData?.message) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    // Send to Discord webhook
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [
          {
            author: {
              name: 'New Message Received',
              icon_url:
                'https://em-content.zobj.net/source/twitter/376/incoming-envelope_1f4e8.png',
            },
            color: 0x3b82f6, // Modern blue
            fields: [
              {
                name: '━━━━━━━━━━━━━━━━━━━━',
                value: '** **',
                inline: false,
              },
              {
                name: 'Name',
                value: `> ${formData.name}`,
                inline: false,
              },
              {
                name: 'Email',
                value: `> [${formData.email}](mailto:${formData.email})`,
                inline: false,
              },
              ...(formData.phone
                ? [
                    {
                      name: 'Phone',
                      value: `> ${formData.phone}`,
                      inline: false,
                    },
                  ]
                : []),
              {
                name: '━━━━━━━━━━━━━━━━━━━━',
                value: '** **',
                inline: false,
              },
              {
                name: 'Message',
                value: formData.message,
                inline: false,
              },
            ],
            timestamp: new Date().toISOString(),
            footer: {
              text: 'Portfolio Contact',
            },
          },
        ],
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
