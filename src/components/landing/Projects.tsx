import Link from "next/link";

import { allProjects } from "content-collections";
import { ArrowRight, Calendar } from "lucide-react";

import { sortProjectsByLatest } from "@/lib/projects";

import Container from "../common/Container";
import { Button } from "../ui/button";

export default function Projects() {
  const featuredProjects = sortProjectsByLatest(
    allProjects.filter((project) => project.isPublished && project.featured)
  ).slice(0, 3);

  return (
    <Container className="mt-20">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-7 space-y-8">
        {featuredProjects.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-lg font-semibold hover:underline">
                  {project.title}
                </h3>
              </Link>
              <p className="text-secondary line-clamp-2">
                {project.description}
              </p>
              {project.timeline && (
                <p className="text-secondary mt-1 flex items-center gap-2 text-xs">
                  <Calendar className="size-3.5" />
                  {project.timeline}
                </p>
              )}
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="text-secondary hover:text-foreground flex shrink-0 items-center gap-2 text-sm transition-colors"
            >
              View project <ArrowRight className="size-4" />
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/projects">Show all projects</Link>
        </Button>
      </div>
    </Container>
  );
}
