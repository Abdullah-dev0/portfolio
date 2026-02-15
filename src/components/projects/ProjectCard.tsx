"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Globe, PlayCircle } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getTechnologyIcon } from "@/lib/technology-map";
import { type Project } from "@/types/project";

import Github from "../svgs/Github";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <Card className="group hover:shadow-primary/5 border-border/50 bg-card/50 h-full w-full overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="group relative aspect-video overflow-hidden rounded-t-lg">
          {project.image ? (
            <Image
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={project.image}
              alt={project.title}
              width={1920}
              height={1080}
            />
          ) : (
            <div className="from-primary/10 via-primary/5 to-background flex h-full w-full items-center justify-center bg-linear-to-br">
              <div className="space-y-4 p-8 text-center">
                <div className="flex flex-wrap justify-center gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <div key={index} className="size-12 opacity-40">
                      {getTechnologyIcon(tech)}
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  {project.title}
                </p>
              </div>
            </div>
          )}
          {project.video && (
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                  <button className="flex size-16 items-center justify-center rounded-full border border-white/20 bg-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-white/30">
                    <PlayCircle className="size-8" />
                  </button>
                </div>
              </DialogTrigger>
              <DialogContent className="w-full max-w-4xl border-0 p-0">
                <div className="aspect-video w-full">
                  <video
                    className="h-full w-full rounded-lg object-cover"
                    src={project.video}
                    autoPlay
                    loop
                    controls
                  />
                </div>
                <DialogTitle className="sr-only">{project.title}</DialogTitle>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4 p-5">
        {/* Project Header - Title and Icons */}
        <div className="flex items-start justify-between gap-4">
          <Link href={`/projects/${project.slug}`} className="flex-1">
            <h3 className="group-hover:text-primary text-lg leading-tight font-semibold underline transition-colors">
              {project.title}
            </h3>
          </Link>
          <div className="flex shrink-0 items-center gap-1.5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="hover:bg-accent text-muted-foreground hover:text-primary flex size-8 items-center justify-center rounded-md transition-colors"
                  href={project.link}
                  target="_blank"
                >
                  <Globe className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>View Website</p>
              </TooltipContent>
            </Tooltip>
            {project.github && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    className="hover:bg-accent text-muted-foreground hover:text-primary flex size-8 items-center justify-center rounded-md transition-colors"
                    href={project.github}
                    target="_blank"
                  >
                    <Github />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View GitHub</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="space-y-2.5">
          <h4 className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="size-7 cursor-pointer transition-transform duration-200 hover:scale-110">
                    {getTechnologyIcon(technology)}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{technology}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </CardContent>

      {
        <CardFooter className="mt-auto flex items-center justify-between gap-3 px-5 pb-5">
          <div
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium${
              project.isWorking
                ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                : "border border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400"
            }`}
          >
            <div
              className={`size-1.5 rounded-full ${
                project.isWorking
                  ? "bg-emerald-500 dark:bg-emerald-400"
                  : "bg-amber-500 dark:bg-amber-400"
              } animate-pulse`}
            />
            {project.isWorking ? "All Systems Operational" : "Building"}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="text-muted-foreground hover:text-primary group/link flex items-center gap-1.5 text-xs font-medium transition-colors"
          >
            View Details
            <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        </CardFooter>
      }
    </Card>
  );
}
