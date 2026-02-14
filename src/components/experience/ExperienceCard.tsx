import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Globe } from "lucide-react";

import { type Experience } from "@/config/Experience";
import { cn } from "@/lib/utils";

import Skill from "../common/Skill";
import Github from "../svgs/Github";
import LinkedIn from "../svgs/LinkedIn";
import X from "../svgs/X";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ExperienceCardProps {
  experience: Experience;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, "<b>$1</b>");
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Company Header */}
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <Image
            src={experience.image}
            alt={experience.company}
            width={100}
            height={100}
            className="size-12 rounded-md"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h3
                className={cn(
                  "text-lg font-bold",
                  experience.isBlur ? "blur-[5px]" : "blur-none"
                )}
              >
                {experience.company}
              </h3>
              {experience.website && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.website}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground size-4 transition-colors"
                    >
                      <Globe className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Visit Website</TooltipContent>
                </Tooltip>
              )}
              {experience.x && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.x}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground size-4 transition-colors"
                    >
                      <X />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Follow on X</TooltipContent>
                </Tooltip>
              )}
              {experience.linkedin && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.linkedin}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground size-4 transition-colors"
                    >
                      <LinkedIn />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Connect on LinkedIn</TooltipContent>
                </Tooltip>
              )}
              {experience.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={experience.github}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground size-4 transition-colors"
                    >
                      <Github />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>View GitHub</TooltipContent>
                </Tooltip>
              )}
              {experience.isCurrent && (
                <div className="flex items-center gap-1 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-700 dark:text-emerald-400">
                  <div className="size-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
                  Working
                </div>
              )}
            </div>
            <p>{experience.position}</p>
          </div>
        </div>
        {/* Right Side */}
        <div className="text-secondary flex flex-col md:text-right">
          <p>
            {experience.startDate} -{" "}
            {experience.isCurrent ? "Present" : experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-md mt-4 mb-2 font-semibold">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((technology, techIndex: number) => (
            <Skill
              key={techIndex}
              name={technology.name}
              href={technology.href}
            >
              {technology.icon}
            </Skill>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="text-secondary flex flex-col">
        {experience.description.map(
          (description: string, descIndex: number) => (
            <p
              key={descIndex}
              dangerouslySetInnerHTML={{
                __html: `• ${parseDescription(description)}`,
              }}
              className="ml-2"
            />
          )
        )}
      </div>
    </div>
  );
}
