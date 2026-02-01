"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { LanyardActivity } from "@/app/api/presence/route";
import { getLastSessionInfo } from "@/lib/utils";

const POLL_INTERVAL_MS = 7000; // 7 sec

export interface LanyardActivityProps {
  activity: LanyardActivity;
  lastActivityStart: number;
  lastActivityEnd: number;
}

export default function Presence() {
  const [activity, setActivity] = useState<LanyardActivity | null>(null);
  const [lastActivityStart, setLastActivityStart] = useState<number | null>(
    null
  );
  const [lastActivityEnd, setLastActivityEnd] = useState<number | null>(null);
  const [nowTime, setNowTime] = useState(Date.now());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    let hasLoadedOnce = false;

    const load = async () => {
      try {
        const res = await fetch("/api/presence");

        if (!res.ok) throw new Error(String(res.status));

        const { activity, lastActivityStart, lastActivityEnd } =
          await res.json();

        if (active) {
          setActivity(activity ?? null);
          setLastActivityStart(lastActivityStart ?? null);
          setLastActivityEnd(lastActivityEnd ?? null);
          setError(false);
          if (!hasLoadedOnce) {
            setLoading(false);
            hasLoadedOnce = true;
          }
        }
      } catch (err) {
        console.error("[Presence] Failed to fetch activity", err);
        if (active) {
          setError(true);
          if (!hasLoadedOnce) {
            setLoading(false);
            hasLoadedOnce = true;
          }
        }
      }
    };

    load();
    const intervalId = window.setInterval(load, POLL_INTERVAL_MS);
    return () => {
      active = false;
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setNowTime(Date.now());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-3">
        <p className="text-muted-foreground">Loading presence...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-3">
        <div className="bg-destructive/10 flex h-16 w-16 items-center justify-center rounded-lg">
          <span className="text-sm">⚠️</span>
        </div>
        <div>
          <p className="text-destructive font-medium">Connection Error</p>
          <p className="text-muted-foreground text-sm">
            Failed to fetch presence data
          </p>
        </div>
      </div>
    );
  }

  if (!activity) {
    const sessionInfo = getLastSessionInfo(lastActivityStart, lastActivityEnd);

    return (
      <div className="flex items-center gap-3">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            fillRule="evenodd"
            height="1em"
            style={{ flex: "none", lineHeight: 1 }}
            viewBox="0 0 24 24"
            width="1em"
          >
            <title>Cursor</title>
            <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium">Offline</p>
          {sessionInfo ? (
            <p className="text-muted-foreground text-sm">
              Coded {sessionInfo.durationStr} {sessionInfo.dateStr}
            </p>
          ) : (
            <p className="text-muted-foreground text-sm">No recent activity</p>
          )}
        </div>
      </div>
    );
  }

  const start = activity.timestamps?.start;
  const elapsed = start ? nowTime - start : 0;
  const h = Math.floor(elapsed / 3600000);
  const m = Math.floor((elapsed % 3600000) / 60000);
  const s = Math.floor((elapsed % 60000) / 1000);

  const activityLabel =
    activity.assets?.small_text || activity.name || "Editor";

  // Convert Discord CDN URLs to actual image URLs
  const largeImage = activity.assets?.large_image?.replace(
    "mp:external/",
    "https://media.discordapp.net/external/"
  );
  const smallImage = activity.assets?.small_image?.replace(
    "mp:external/",
    "https://media.discordapp.net/external/"
  );

  return (
    <div className="flex items-center gap-3">
      {largeImage ? (
        <div className="relative self-start">
          <Image
            src={largeImage}
            alt={activity.assets?.large_text || "Activity"}
            className="rounded-lg object-cover"
            width={30}
            height={30}
          />
          {smallImage && (
            <Image
              src={smallImage}
              alt={activity.assets?.small_text || "Editor"}
              width={20}
              height={20}
              className="border-background absolute -right-1 -bottom-1 rounded-full border-2"
            />
          )}
        </div>
      ) : (
        <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-lg">
          <span className="text-2xl">💻</span>
        </div>
      )}
      <div>
        <p className="text-sm font-medium">
          {activity.details || `Coding in ${activityLabel}`}
        </p>
        <p className="text-muted-foreground text-sm">
          {h > 0 && `${h}h `}
          {m}m {s}s
        </p>
        {activity.state && (
          <p className="text-muted-foreground text-xs">{activity.state}</p>
        )}
      </div>
    </div>
  );
}
