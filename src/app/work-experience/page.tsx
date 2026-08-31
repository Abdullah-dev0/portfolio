import { Metadata } from "next";

import Container from "@/components/common/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { ExperienceList } from "@/components/experience/ExperienceList";
import { experiences } from "@/config/Experience";
import { generateMetadata as getMetadata } from "@/config/Meta";

export const metadata: Metadata = getMetadata("/work-experience");

export default function WorkExperiencePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <PageHeader
          title="Work Experience"
          description="My work experiences across different companies and roles."
        />

        {/* Work Experiences */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              All Experiences
              {experiences.length > 0 && (
                <span className="text-muted-foreground ml-2 text-sm font-normal">
                  ({experiences.length}{" "}
                  {experiences.length === 1 ? "experience" : "experiences"})
                </span>
              )}
            </h2>
          </div>

          <ExperienceList experiences={experiences} />
        </div>
      </div>
    </Container>
  );
}
