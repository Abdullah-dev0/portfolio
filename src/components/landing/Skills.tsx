import { about } from "@/config/About";
import { getTechnologyByName, getTechnologyIcon } from "@/config/technologies";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Skill from "../common/Skill";

export default function Skills() {
  return (
    <Container className="mt-10">
      <SectionHeading subHeading="Tech" heading="Skills" />
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {about.skills.map((skill) => (
          <Skill
            key={skill}
            name={skill}
            href={getTechnologyByName(skill)?.href ?? ""}
            className="p-2"
          >
            {getTechnologyIcon(skill) ?? null}
          </Skill>
        ))}
      </div>
    </Container>
  );
}
