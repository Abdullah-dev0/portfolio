import React from "react";

import { Link } from "next-view-transitions";
import Image from "next/image";

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

const LiveBadge = ({ url }: { url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/20 dark:text-emerald-400"
  >
    <div className="size-1.5 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
    Live
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        fillRule="evenodd"
        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
        clipRule="evenodd"
      />
    </svg>
  </a>
);

const ProjectHeader = ({
  headerText,
  projects,
}: {
  headerText: string;
  projects?: { name: string; liveUrl?: string }[];
}) => {
  // Extract project name from header (e.g., "Full Stack Developer – LendingStacks")
  const projectNameMatch = headerText.match(/–\s*(.+?)(?:\s*\(|$)/);
  const projectName = projectNameMatch ? projectNameMatch[1].trim() : null;
  const project = projectName
    ? projects?.find((p) => p.name === projectName)
    : null;

  return (
    <div className="mt-4 mb-2 flex flex-wrap items-center gap-2">
      <h5
        className="text-foreground font-semibold"
        dangerouslySetInnerHTML={{
          __html: parseDescription(headerText),
        }}
      />
      {project?.liveUrl && <LiveBadge url={project.liveUrl} />}
    </div>
  );
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
          (description: string, descIndex: number) => {
            const isHeader =
              description.startsWith("*") && description.endsWith("*");

            if (isHeader) {
              const headerText = description.replace(/^\*|\*$/g, "");
              return (
                <ProjectHeader
                  key={descIndex}
                  headerText={headerText}
                  projects={experience.projects}
                />
              );
            }

            return (
              <p
                key={descIndex}
                dangerouslySetInnerHTML={{
                  __html: `• ${parseDescription(description)}`,
                }}
                className="ml-2"
              />
            );
          }
        )}
      </div>
    </div>
  );
}
