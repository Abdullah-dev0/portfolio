import { Link } from "next-view-transitions";

import { allProjects } from "content-collections";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { ProjectList } from "../projects/ProjectList";
import { Button } from "../ui/button";

export default function Projects() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Projects" />

      <ProjectList className="mt-8" projects={allProjects.slice(-2)} />
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/projects">Show all projects</Link>
        </Button>
      </div>
    </Container>
  );
}
