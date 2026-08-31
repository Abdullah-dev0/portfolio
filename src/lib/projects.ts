import { allProjects } from "content-collections";

import type { Project } from "@/types/project";

import { getRelatedItems } from "./relatedItems";

export function getPublishedProjects(): Project[] {
  return allProjects.filter((project) => project.isPublished);
}

export function getRelatedProjects(project: Project, limit = 2): Project[] {
  return getRelatedItems(
    getPublishedProjects(),
    project.slug,
    project.technologies,
    (candidate) => candidate.technologies,
    limit
  );
}

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
