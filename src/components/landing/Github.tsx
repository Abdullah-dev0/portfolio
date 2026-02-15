"use client";

import { useSyncExternalStore } from "react";
import { GitHubCalendar } from "react-github-calendar";

import { useTheme } from "next-themes";

import { Skeleton } from "@/components/ui/skeleton";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function Github() {
  const { theme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="scrollbar-hide w-full overflow-x-auto pt-10 pb-4">
        <GithubGraphSkeleton />
      </div>
    );
  }

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Github" heading="Activitie" />
      <div className="flex justify-center px-4 text-xs">
        <GitHubCalendar
          username="Abdullah-dev0"
          colorScheme={theme === "dark" ? "dark" : "light"}
          blockSize={10}
          blockMargin={3}
          fontSize={14}
        />
      </div>
    </Container>
  );
}

function GithubGraphSkeleton() {
  return (
    <div className="flex justify-center px-4 text-xs">
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
