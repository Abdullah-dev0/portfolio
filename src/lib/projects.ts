import { type Project } from "@/types/project";

function getTimelineYear(timeline?: string): number {
  if (!timeline) return 0;

  const match = timeline.match(/\d{4}/);
  return match ? Number(match[0]) : 0;
}

export function sortProjectsByLatest<T extends Project & { timeline?: string }>(
  projects: T[]
): T[] {
  return [...projects].sort((a, b) => {
    const yearDiff = getTimelineYear(b.timeline) - getTimelineYear(a.timeline);

    if (yearDiff !== 0) {
      return yearDiff;
    }

    return a.title.localeCompare(b.title);
  });
}
