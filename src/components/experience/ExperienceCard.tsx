import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Globe } from "lucide-react";

import { type Experience } from "@/config/Experience";
import { getTechnologyByName, getTechnologyIcon } from "@/config/technologies";
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
  const companyLinks = [
    {
      href: experience.website,
      label: "Visit Website",
      icon: <Globe className="size-4" />,
    },
    { href: experience.x, label: "Follow on X", icon: <X /> },
    {
      href: experience.linkedin,
      label: "Connect on LinkedIn",
      icon: <LinkedIn />,
    },
    { href: experience.github, label: "View GitHub", icon: <Github /> },
  ];

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
              {companyLinks.map(({ href, label, icon }) =>
                href ? (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="text-muted-foreground hover:text-foreground size-4 transition-colors"
                      >
                        {icon}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>{label}</TooltipContent>
                  </Tooltip>
                ) : null
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
        <div className="flex flex-wrap gap-5">
          {experience.technologies.map((name, techIndex) => {
            const tech = getTechnologyByName(name);
            return (
              <Skill
                key={techIndex}
                name={tech?.name ?? name}
                href={tech?.href ?? ""}
              >
                {getTechnologyIcon(name) ?? null}
              </Skill>
            );
          })}
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
