import React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Skill({ name, href, children, className }: SkillProps) {
  return (
    <Link
      href={href ?? ""}
      target="_blank"
      className={cn(
        "skill-inner-shadow inline-flex items-center self-end rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black dark:border-white/30 dark:bg-white/15 dark:text-white",
        className
      )}
    >
      <span className="size-4 shrink-0">{children}</span>
      <span className="ml-1 text-sm font-bold">{name}</span>
    </Link>
  );
}
