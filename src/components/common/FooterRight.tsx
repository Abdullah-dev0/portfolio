"use client";

import { useEffect, useState } from "react";

import { footerConfig } from "@/config/Footer";

export default function FooterRight() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
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
      <p>
        <span className="text-foreground font-semibold">
          {footerConfig.location}
        </span>{" "}
        <span className="text-foreground font-semibold">{time}</span>
      </p>
    </div>
  );
}
