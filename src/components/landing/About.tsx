import React from "react";

import Image from "next/image";

import { about, mySkills } from "@/config/About";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      {/* About me */}
      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <Image
          src="/assets/logo.png"
          alt="About"
          width={80}
          height={80}
          className="size-60 rounded-md object-cover"
        />
        <div className="mt-4">
          <h3 className="text-2xl font-bold">{about.name}</h3>
          <p className="text-secondary mt-4">{about.description}</p>
          <p className="text-secondary mt-8 font-bold">Skills</p>
          <div className="flex flex-wrap gap-2">
            {mySkills.map((skill) => (
              <Tooltip key={skill.key}>
                <TooltipTrigger asChild>
                  <div className="mt-4 size-6 hover:cursor-pointer">
                    {skill}
                  </div>
                </TooltipTrigger>
                <TooltipContent>{skill.key}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
