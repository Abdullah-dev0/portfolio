"use client";

import { useSyncExternalStore } from "react";

import { useTheme } from "next-themes";

import Giscus from "@giscus/react";

import { Skeleton } from "@/components/ui/skeleton";
import { giscusConfig, isGiscusConfigured } from "@/config/Giscus";

// Helper for useSyncExternalStore to detect client-side mounting
function subscribe() {
  return () => {};
}

export default function Comments() {
  const { resolvedTheme } = useTheme();

  // Detect client-side mounting without triggering cascading renders
  const mounted = useSyncExternalStore(
    subscribe,
    () => true, // Client returns true
    () => false // Server returns false
  );

  if (!isGiscusConfigured) {
    return null;
  }

  if (!mounted) {
    return <Skeleton className="h-75 w-full rounded-md" />;
  }

  return (
    <Giscus
      {...giscusConfig}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
}
