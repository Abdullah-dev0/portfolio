"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import { footerConfig } from "@/config/Footer";

import { Skeleton } from "../ui/skeleton";

export default function FooterRight() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  );

  const mouted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    const id = setInterval(
      () =>
        setTime(
          new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
        ),
      60_000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-muted-foreground text-right text-sm">
      <div>
        <span className="text-foreground font-semibold">
          {footerConfig.location}
        </span>{" "}
        {mouted ? (
          <span className="text-foreground font-semibold">{time}</span>
        ) : (
          <Skeleton className="inline-block h-4 w-14 align-middle" />
        )}
      </div>
    </div>
  );
}
