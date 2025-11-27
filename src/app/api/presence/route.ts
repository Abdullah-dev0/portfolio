import { NextResponse } from 'next/server';

const LANYARD_USER_ID = process.env.LANYARD_USER_ID;

const LANYARD_API_KEY = process.env.LANYARD_API_KEY;

const LANYARD_ENDPOINT = `https://api.lanyard.rest/v1/users/${LANYARD_USER_ID}`;

export interface LanyardActivity {
  type: number;
  timestamps?: {
    start?: number;
  };
  state?: string;
  name: string;
  id: string;
  details?: string;
  created_at?: number;
  assets?: {
    small_text?: string;
    small_image?: string;
    large_text?: string;
    large_image?: string;
  };
}

export interface LanyardResponse {
  success: boolean;
  data: {
    kv: {
      last_activity_start?: string;
      last_activity_end?: string;
    };

    activities: LanyardActivity[];
  };
}

// Helper to save key-value to Lanyard KV
async function saveToKV(key: string, value: number) {
  if (!LANYARD_API_KEY) {
    console.warn('[livedata] No API key, skipping KV');
    return;
  }

  try {
    const response = await fetch(
      `https://api.lanyard.rest/v1/users/${LANYARD_USER_ID}/kv/${key}`,
      {
        method: 'PUT',
        headers: {
          Authorization: LANYARD_API_KEY,
          'Content-Type': 'text/plain',
        },
        body: String(value),
      },
    );

    if (!response.ok) {
      console.error(
        `[livedata] Failed to save ${key} to KV: ${response.status}`,
      );
    }
  } catch (error) {
    console.error(`[livedata] Failed to save ${key} to KV`, error);
  }
}

function parseKV(value?: string) {
  return value ? Number(value) : null;
}

export async function GET() {
  try {
    const response = await fetch(LANYARD_ENDPOINT);

    if (!response.ok)
      throw new Error(`Lanyard request failed with status ${response.status}`);

    const payload: LanyardResponse = await response.json();

    if (!payload.success)
      throw new Error('Invalid Lanyard API response format');

    const codingActivity =
      payload.data.activities.find((a) => a.name === 'Code') ?? null;
    const storedStart = parseKV(payload.data.kv.last_activity_start);
    const storedEnd = parseKV(payload.data.kv.last_activity_end);
    const currentStart = codingActivity?.timestamps?.start ?? null;
    const isActivelyCoding = !!codingActivity;
    let finalStart = storedStart;
    let finalEnd = storedEnd;

    if (isActivelyCoding && currentStart) {
      // New session detected: either no stored start or current is newer
      const isNewSession = !storedStart || currentStart > storedStart;

      if (isNewSession) {
        await saveToKV('last_activity_start', currentStart);
        finalStart = currentStart;
      }

      // Clear end time when actively coding
      if (storedEnd !== null && storedEnd !== 0) {
        await saveToKV('last_activity_end', 0);
        finalEnd = null;
      }
    } else if (!isActivelyCoding && storedStart) {
      // Session ended: set end time if not already set
      const needsEndTime = !storedEnd || storedEnd === 0;

      if (needsEndTime) {
        const endTime = Date.now();
        await saveToKV('last_activity_end', endTime);
        finalEnd = endTime;
      }
    }

    return NextResponse.json({
      activity: codingActivity,
      lastActivityStart: finalStart,
      lastActivityEnd: finalEnd,
    });
  } catch (error) {
    console.error('[livedata] Failed to load activity', error);

    return NextResponse.json(
      {
        activity: null,
        lastActivityStart: null,
        lastActivityEnd: null,
      },
      { status: 200 },
    );
  }
}
