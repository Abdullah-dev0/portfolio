import { heroConfig, skillComponents } from "@/config/Hero";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function Skills() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Tech" heading="Skills" />
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {heroConfig.skills.map((skill) => {
          const IconComponent =
            skillComponents[skill.component as keyof typeof skillComponents];
          return (
            <div
              key={skill.name}
              className="border-border flex items-center justify-center gap-2 rounded-lg border border-dashed px-4 py-3"
            >
              {IconComponent && (
                <span className="flex size-6 shrink-0 items-center justify-center [&_svg]:size-6">
                  <IconComponent />
                </span>
              )}
              <span className="truncate text-sm font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
