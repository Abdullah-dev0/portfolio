import Image from "next/image";
import Link from "next/link";

import { MDXContent } from "@content-collections/mdx/react";
import { allProjects } from "content-collections";

import SectionHeading from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import Github from "../svgs/Github";
import Website from "../svgs/Website";
import { ProjectComponents } from "./ProjectComponents";

type Project = (typeof allProjects)[number];

interface ProjectContentProps {
  project: Project;
  mdxCode: string;
}

interface InsightColumnProps {
  title: string;
  items: string[];
  dotClassName: string;
}

function InsightColumn({ title, items, dotClassName }: InsightColumnProps) {
  return (
    <div className="bg-background">
      <div className="border-border flex items-center justify-between border-b px-5 py-3">
        <h3 className="text-muted-foreground flex items-center gap-2 text-xs font-medium tracking-widest uppercase">
          <span
            className={cn("size-1.5 shrink-0 rounded-full", dotClassName)}
            aria-hidden="true"
          />
          {title}
        </h3>
        <span
          className="text-muted-foreground/60 font-mono text-xs"
          aria-hidden="true"
        >
          {String(items.length).padStart(2, "0")}
        </span>
      </div>
      <ol className="divide-border divide-y">
        {items.map((item, index) => (
          <li key={item} className="flex gap-4 px-5 py-4">
            <span
              className="text-muted-foreground/60 pt-0.5 font-mono text-xs"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-secondary text-sm leading-relaxed text-pretty">
              {item}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ProjectContent({ project, mdxCode }: ProjectContentProps) {
  const {
    title,
    description,
    image,
    technologies,
    github,
    live,
    timeline,
    role,
    team,
    status,
    challenges,
    learnings,
  } = project;

  const statusVariant =
    status === "completed"
      ? "default"
      : status === "in-progress"
        ? "secondary"
        : "outline";

  return (
    <article className="mx-auto max-w-4xl">
      {/* Hero Section */}
      <header className="mb-8 space-y-6">
        {image ? (
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              fill
              className="h-full w-full"
              priority
            />
          </div>
        ) : (
          <div className="from-primary/10 via-primary/5 to-background flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-linear-to-br">
            <div className="space-y-4 p-8 text-center">
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground text-sm font-medium">
                {title}
              </p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {/* Project Status and Technologies */}
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={statusVariant} className="text-sm">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
            {technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{technologies.length - 3} more
              </Badge>
            )}
          </div>

          <h1 className="text-4xl leading-tight font-bold lg:text-5xl">
            {title}
          </h1>

          <p className="text-muted-foreground text-xl">{description}</p>

          {/* Project Meta Information */}
          <div className="bg-muted/20 grid gap-4 rounded-lg border p-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h5 className="text-muted-foreground text-sm font-semibold">
                Timeline
              </h5>
              <p className="text-sm">{timeline ?? "Not specified"}</p>
            </div>
            <div>
              <h5 className="text-muted-foreground text-sm font-semibold">
                Role
              </h5>
              <p className="text-sm">{role ?? "Not specified"}</p>
            </div>
            {team && (
              <div>
                <h5 className="text-muted-foreground text-sm font-semibold">
                  Team
                </h5>
                <p className="text-sm">{team}</p>
              </div>
            )}
            <div>
              <h5 className="text-muted-foreground text-sm font-semibold">
                Status
              </h5>
              <Badge variant={statusVariant} className="text-xs">
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {live && (
              <Button asChild>
                <Link
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Website className="size-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {github && (
              <Button variant="outline" asChild>
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="size-4" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>
        </div>

        <Separator />
      </header>

      {/* Technology Stack */}
      <div className="mb-8">
        <div className="bg-muted/20 rounded-lg border p-4">
          <h3 className="mb-3 text-lg font-semibold">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="bg-muted/50 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium"
              >
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges and Learnings */}
      {(challenges?.length ?? 0) + (learnings?.length ?? 0) > 0 && (
        <section className="mb-12 space-y-6">
          <SectionHeading
            subHeading="Retrospective"
            heading="Challenges & learnings"
          />
          <div
            className={cn(
              "border-border bg-border grid gap-px overflow-hidden rounded-md border",
              challenges?.length && learnings?.length && "md:grid-cols-2"
            )}
          >
            {challenges && challenges.length > 0 && (
              <InsightColumn
                title="Challenges"
                items={challenges}
                dotClassName="bg-amber-500"
              />
            )}
            {learnings && learnings.length > 0 && (
              <InsightColumn
                title="Learnings"
                items={learnings}
                dotClassName="bg-emerald-500"
              />
            )}
          </div>
        </section>
      )}

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXContent code={mdxCode} components={ProjectComponents} />
      </div>
    </article>
  );
}
