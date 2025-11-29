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
      last_seen_coding?: string;
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
    const lastSeenCoding = parseKV(payload.data.kv.last_seen_coding);
    const currentStart = codingActivity?.timestamps?.start ?? null;
    const isActivelyCoding = !!codingActivity;
    const now = Date.now();

    let finalStart = storedStart;
    let finalEnd = storedEnd;

    if (isActivelyCoding && currentStart) {
      // Currently coding
      finalStart = currentStart;
      finalEnd = null;

      // Update start time if this is a new session
      if (!storedStart || currentStart !== storedStart) {
        await saveToKV('last_activity_start', currentStart);
      }

      // Update "last seen coding" timestamp - this tracks when we last saw activity
      // We update this every time we poll while coding
      await saveToKV('last_seen_coding', now);

      // Clear stored end time when actively coding
      if (storedEnd !== null && storedEnd !== 0) {
        await saveToKV('last_activity_end', 0);
      }
    } else if (!isActivelyCoding && storedStart) {
      // Not currently coding
      const needsEndTime = !storedEnd || storedEnd === 0;

      if (needsEndTime && lastSeenCoding) {
        // Session just ended - use the last time we saw them coding as the end time
        // This is accurate because we update last_seen_coding on every poll while coding
        await saveToKV('last_activity_end', lastSeenCoding);
        finalEnd = lastSeenCoding;
      } else if (needsEndTime && !lastSeenCoding) {
        // No last_seen_coding data (first time or old data) - use start time as fallback
        // This means we show "0m" which is better than a wrong duration
        await saveToKV('last_activity_end', storedStart);
        finalEnd = storedStart;
      }
      // If we already have an end time stored, just use it (finalEnd = storedEnd from above)
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
