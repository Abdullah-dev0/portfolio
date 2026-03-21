import Link from "next/link";

import { allProjects } from "content-collections";

import { sortProjectsByLatest } from "@/lib/projects";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { ProjectList } from "../projects/ProjectList";
import { Button } from "../ui/button";

export default function Projects() {
  const featuredProjects = sortProjectsByLatest(
    allProjects.filter((project) => project.isPublished && project.featured)
  ).slice(0, 2);

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Projects" />

      <ProjectList className="mt-8" projects={featuredProjects} />
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/projects">Show all projects</Link>
        </Button>
      </div>
    </Container>
  );
}
