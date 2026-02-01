"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";

// Type declaration for View Transition API
interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
}

declare global {
  interface Document {
    startViewTransition(callback: () => void): ViewTransition;
  }
}

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  // Only render after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = async () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";

    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(newTheme);
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    }).ready;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };
  // Prevent rendering until mounted and theme is resolved
  if (!mounted) {
    return (
      <div className="rounded-lg p-2">
        <Skeleton className="h-5 w-5 rounded" />
      </div>
    );
  }

  return (
    <button
      ref={ref}
      onClick={toggleDarkMode}
      className="cursor-pointer rounded-lg p-2"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
