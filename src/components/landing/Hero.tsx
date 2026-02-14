import React from "react";

import Image from "next/image";
import Link from "next/link";

import { FileText, Send } from "lucide-react";

import Presence from "@/components/common/liveUpdate";
import { heroConfig, skillComponents, socialLinks } from "@/config/Hero";
import { cn } from "@/lib/utils";

import Container from "../common/Container";
import Skill from "../common/Skill";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const buttonIcons = {
  CV: FileText,
  Chat: Send,
};

export default function Hero() {
  const { name, title, avatar, skills, buttons } = heroConfig;

  return (
    <Container className="mx-auto max-w-5xl">
      {/* Image */}
      <div className="relative inline-block">
        <Image
          src={avatar}
          alt="hero"
          width={100}
          height={100}
          className="relative rounded-full bg-cover"
        />
      </div>
      {/* Text Area */}
      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-4xl font-bold">
          Hey, I&apos;m {name} — <span className="text-secondary">{title}</span>
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2">
          <p className="text-muted-foreground text-base leading-9 whitespace-pre-wrap md:text-lg">
            I build interactive, high-performance web applications using{" "}
            {skills.map((skill, index) => {
              const Icon =
                skillComponents[
                  skill.component as keyof typeof skillComponents
                ];
              const isLast = index === skills.length - 1;

              return (
                <React.Fragment key={skill.name}>
                  {index > 0 && (isLast ? " and " : ", ")}
                  <Skill name={skill.name} href={skill.href}>
                    {Icon ? <Icon /> : null}
                  </Skill>
                </React.Fragment>
              );
            })}{" "}
            With a strong focus on{" "}
            <b className="text-primary">AI-driven product development</b>,
            I&apos;m passionate about exploring{" "}
            <b className="text-primary">Generative AI</b> and creating
            intelligent, user-centric solutions that merge innovation with great
            engineering.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        {buttons.map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
              key={index}
              variant={button.variant as "outline" | "default"}
              className={cn(
                button.variant === "outline" && "inset-shadow-indigo-500",
                button.variant === "default" && "inset-shadow-indigo-500"
              )}
            >
              {IconComponent && <IconComponent />}
              <Link href={button.href}>{button.text}</Link>
            </Button>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="mt-8 flex gap-2">
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                key={link.name}
                target="_blank"
                className="text-secondary flex items-center gap-2"
              >
                <span className="size-6">{link.icon}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      {/* Live Activity Status */}
      <div className="mt-8">
        <Presence />
      </div>
    </Container>
  );
}
