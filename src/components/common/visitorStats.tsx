"use client";

import { useEffect, useState } from "react";

type Stats = { online: number | null; total: number | null };

export default function VisitorStats() {
  const [stats, setStats] = useState<Stats>({ online: null, total: null });

  useEffect(() => {
    const controller = new AbortController();

    async function loadTotal() {
      try {
        const response = await fetch("/api/visitors", {
          signal: controller.signal,
        });
        const data: Pick<Stats, "total"> = await response.json();
        setStats((previous) => ({ ...previous, total: data.total }));
      } catch {}
    }

    async function heartbeat() {
      if (document.hidden) return;
      try {
        const response = await fetch("/api/visitors", {
          method: "POST",
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Stats unavailable");
        const data: Pick<Stats, "online"> = await response.json();
        if (!controller.signal.aborted) {
          setStats((previous) => ({ ...previous, online: data.online }));
        }
      } catch {
        if (!controller.signal.aborted) {
          setStats((previous) => ({ ...previous, online: null }));
        }
      }
    }

    void loadTotal();
    void heartbeat();
    const interval = window.setInterval(heartbeat, 25_000);
    return () => {
      window.clearInterval(interval);
      controller.abort();
    };
  }, []);

  const isLive = stats.online !== null;

  return (
    <span
      title="Online: active in the last 60 seconds · Visitors: unique tracked, updated every 30 minutes"
      className="text-muted-foreground/70 hidden shrink-0 items-center gap-1.5 text-xs whitespace-nowrap tabular-nums sm:flex"
    >
      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
        {isLive && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:animate-none" />
        )}
        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
            isLive ? "bg-emerald-500" : "bg-muted-foreground/40"
          }`}
        />
      </span>
      <span>
        {stats.online?.toLocaleString() ?? "···"} online ·{" "}
        {stats.total?.toLocaleString() ?? "···"} visitors
      </span>
    </span>
  );
}
