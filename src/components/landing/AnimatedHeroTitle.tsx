"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import { getReduceMotionSnapshot, subscribeReduceMotion } from "@/lib/utils";

const ROTATE_INTERVAL_MS = 2500;
const SLIDE_DURATION_MS = 900;
/** Overshoot for a bouncy feel when the new title lands (kept under 2 so next line doesn’t peek) */
const SLIDE_EASING = "cubic-bezier(0.34, 1.65, 0.64, 1)";

interface AnimatedHeroTitleProps {
  titles: string[];
  intervalMs?: number;
}
export default function AnimatedHeroTitle({
  titles,
  intervalMs = ROTATE_INTERVAL_MS,
}: AnimatedHeroTitleProps) {
  const [index, setIndex] = useState(0);

  const reduceMotion = useSyncExternalStore(
    subscribeReduceMotion,
    getReduceMotionSnapshot,
    () => false
  );

  useEffect(() => {
    if (reduceMotion || titles.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % titles.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [reduceMotion, titles.length, intervalMs]);

  const displayIndex = reduceMotion ? 0 : index;
  const currentTitle = titles[displayIndex] ?? titles[0];

  if (reduceMotion) {
    return <span className="text-secondary">{currentTitle}.</span>;
  }

  return (
    <span className="text-secondary">
      <span
        className="inline-block h-[1.2em] overflow-x-visible overflow-y-hidden align-bottom leading-[1.2]"
        aria-live="polite"
        aria-atomic="true"
      >
        <span
          className="inline-block transition-transform will-change-transform"
          style={{
            transitionDuration: `${SLIDE_DURATION_MS}ms`,
            transitionTimingFunction: SLIDE_EASING,
            transform: `translateY(-${displayIndex * 1.2}em)`,
          }}
        >
          {titles.map((title) => (
            <span
              key={title}
              className="block h-[1.2em] min-h-[1.2em] leading-[1.2em] font-semibold"
            >
              {title}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}
