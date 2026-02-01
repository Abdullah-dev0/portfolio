import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLastSessionInfo = (
  lastActivityStart: number | null,
  lastActivityEnd: number | null
) => {
  if (!lastActivityStart || !lastActivityEnd) return null;

  // Calculate session duration
  const sessionDuration = Math.max(0, lastActivityEnd - lastActivityStart);
  const hours = Math.floor(sessionDuration / 3600000);
  const minutes = Math.floor((sessionDuration % 3600000) / 60000);

  // Format the date
  const sessionDate = new Date(lastActivityStart);
  const today = new Date();
  const isToday = sessionDate.toDateString() === today.toDateString();

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const isYesterday = sessionDate.toDateString() === yesterday.toDateString();

  let dateStr;
  if (isToday) {
    dateStr = "today";
  } else if (isYesterday) {
    dateStr = "yesterday";
  } else {
    dateStr = sessionDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  let durationStr;
  if (hours > 0) {
    durationStr = `${hours}h ${minutes}m`;
  } else {
    durationStr = `${minutes}m`;
  }

  return { dateStr, durationStr };
};
