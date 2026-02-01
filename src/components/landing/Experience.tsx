import React from "react";

import { Link } from "next-view-transitions";

import { type Experience, experiences } from "@/config/Experience";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { ExperienceCard } from "../experience/ExperienceCard";
import { Button } from "../ui/button";

export default function Experience() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Experience" />
      <div className="mt-4 flex flex-col gap-8">
        {experiences.slice(0, 2).map((experience: Experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
      {experiences.length > 2 && (
        <div className="mt-8 flex justify-center">
          <Button variant="outline">
            <Link href="/work-experience">Show all work experiences</Link>
          </Button>
        </div>
      )}
    </Container>
  );
}
