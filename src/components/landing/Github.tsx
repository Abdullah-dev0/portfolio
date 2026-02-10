"use client";

import { useSyncExternalStore } from "react";
import { GitHubCalendar } from "react-github-calendar";

import { useTheme } from "next-themes";

import { Skeleton } from "@/components/ui/skeleton";

function GithubGraphSkeleton() {
  return (
    <div className="flex min-w-max justify-center px-4 text-xs">
      <div className="flex gap-1">
        {Array.from({ length: 53 }).map((_, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {Array.from({ length: 7 }).map((_, dayIndex) => (
              <Skeleton key={dayIndex} className="size-2.5 rounded-sm" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Github() {
  const { theme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="scrollbar-hide w-full overflow-x-auto pt-6 pb-4">
        <GithubGraphSkeleton />
      </div>
    );
  }

  return (
    <div className="scrollbar-hide w-full overflow-x-auto pt-6 pb-4">
      <div className="flex min-w-max justify-center px-4 text-xs">
        <GitHubCalendar
          username="Abdullah-dev0"
          colorScheme={theme === "dark" ? "dark" : "light"}
          blockSize={10}
          blockMargin={4}
          fontSize={12}
        />
      </div>
    </div>
  );
}
