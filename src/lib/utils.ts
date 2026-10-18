import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DEFAULT_DATE_FORMAT: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export function formatDate(
  date: string | number | Date,
  options: Intl.DateTimeFormatOptions = DEFAULT_DATE_FORMAT
): string {
  return new Date(date).toLocaleDateString("en-US", options);
}

/** Snapshot for useSyncExternalStore: prefers-reduced-motion media query. */
export function getReduceMotionSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Subscribe for useSyncExternalStore: prefers-reduced-motion media query. */
export function subscribeReduceMotion(onStoreChange: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}
