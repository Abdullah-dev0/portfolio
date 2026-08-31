import { Calendar } from "lucide-react";

import { getPublishedProjects, sortProjectsByLatest } from "@/lib/projects";

import { FeaturedListSection } from "./FeaturedListSection";

export default function Projects() {
  const items = sortProjectsByLatest(
    getPublishedProjects().filter((project) => project.featured)
  )
    .slice(0, 3)
    .map((project) => ({
      slug: project.slug,
      href: `/projects/${project.slug}`,
      title: project.title,
      description: project.description,
      meta: project.timeline ? (
        <p className="text-secondary mt-1 flex items-center gap-2 text-xs">
          <Calendar className="size-3.5" />
          {project.timeline}
        </p>
      ) : undefined,
      actionLabel: "View project",
    }));

  return (
    <FeaturedListSection
      title="Projects"
      items={items}
      allHref="/projects"
      allLabel="Show all projects"
    />
  );
}
