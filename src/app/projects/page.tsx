import { Metadata } from "next";

import Container from "@/components/common/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { ProjectList } from "@/components/projects/ProjectList";
import { generateMetadata as getMetadata } from "@/config/Meta";
import { getPublishedProjects } from "@/lib/projects";

export const metadata: Metadata = getMetadata("/projects");

export default function ProjectsPage() {
  const projects = getPublishedProjects();

  return (
    <Container className="py-16">
      <div className="space-y-8">
        <PageHeader
          title="Projects"
          description="A curated collection of what I’ve created, coded, and crafted."
        />

        {/* Projects */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              All Projects
              {projects.length > 0 && (
                <span className="text-muted-foreground ml-2 text-sm font-normal">
                  ({projects.length}{" "}
                  {projects.length === 1 ? "project" : "projects"})
                </span>
              )}
            </h2>
          </div>

          <ProjectList projects={projects} />
        </div>
      </div>
    </Container>
  );
}
