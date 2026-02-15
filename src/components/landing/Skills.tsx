import { heroConfig, skillComponents } from "@/config/Hero";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Skill from "../common/Skill";

export default function Skills() {
  return (
    <Container className="mt-10">
      <SectionHeading subHeading="Tech" heading="Skills" />
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {heroConfig.skills.map((skill) => {
          const IconComponent =
            skillComponents[skill.component as keyof typeof skillComponents];
          return (
            <Skill
              key={skill.name}
              name={skill.name}
              href={skill.href}
              className="p-2"
            >
              {IconComponent ? <IconComponent /> : null}
            </Skill>
          );
        })}
      </div>
    </Container>
  );
}
