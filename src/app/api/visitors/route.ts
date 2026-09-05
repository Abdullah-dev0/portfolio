import { NextRequest, NextResponse } from "next/server";

import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
const onlineKey = "portfolio:onlineVisitors";

export async function GET() {
  const response = await fetch(
    `https://us.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/query/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: {
          kind: "HogQLQuery",
          query:
            "SELECT count(DISTINCT distinct_id) FROM events WHERE event = '$pageview'",
        },
      }),
      cache: "force-cache",
      next: { revalidate: 1800 },
    }
  );
  if (!response.ok) throw new Error("PostHog unavailable");
  const data = await response.json();
  const total = Number(data.results?.[0]?.[0]);
  return NextResponse.json({ total });
}

export async function POST(request: NextRequest) {
  const visitorId =
    request.cookies.get("visitorId")?.value || crypto.randomUUID();

  const now = Date.now();
  const transaction = redis.multi();
  transaction.zadd(onlineKey, { score: now, member: visitorId });
  transaction.zremrangebyscore(onlineKey, "-inf", now - 60_000);
  transaction.expire(onlineKey, 120);
  transaction.zcard(onlineKey);

  const counts = await transaction.exec<number[]>().catch(() => null);
  const online = counts ? counts[counts.length - 1] : null;
  const response = NextResponse.json({ online });

  if (!request.cookies.has("visitorId")) {
    response.cookies.set("visitorId", visitorId, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  return response;
}
