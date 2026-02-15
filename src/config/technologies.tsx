import React from "react";

import AuthJs from "@/components/technologies/AuthJs";
import AWS from "@/components/technologies/AWS";
import BetterAuth from "@/components/technologies/BetterAuth";
import Bun from "@/components/technologies/Bun";
import Clerk from "@/components/technologies/Clerk";
import ExpressJs from "@/components/technologies/ExpressJs";
import Figma from "@/components/technologies/Figma";
import Gemini from "@/components/technologies/Gemini";
import JavaScript from "@/components/technologies/JavaScript";
import LangChain from "@/components/technologies/LangChain";
import MongoDB from "@/components/technologies/MongoDB";
import NestJs from "@/components/technologies/NestJs";
import Netlify from "@/components/technologies/Netlify";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import Nodemailer from "@/components/technologies/Nodemailer";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
import Resend from "@/components/technologies/Resent";
import Shadcn from "@/components/technologies/Shadcn";
import Stripe from "@/components/technologies/Stripe";
import Supabase from "@/components/technologies/Supabase";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import Vercel from "@/components/technologies/Vercel";

export interface TechnologyEntry {
  id: string;
  name: string;
  href: string;
}

export const technologies: TechnologyEntry[] = [
  {
    id: "TypeScript",
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  { id: "React", name: "React", href: "https://react.dev/" },
  { id: "NextJs", name: "Next.js", href: "https://nextjs.org/" },
  { id: "PostgreSQL", name: "PostgreSQL", href: "https://www.postgresql.org/" },
  { id: "MongoDB", name: "MongoDB", href: "https://www.mongodb.com/" },
  { id: "NestJS", name: "NestJS", href: "https://nestjs.com/" },
  { id: "Express", name: "Express", href: "https://expressjs.com/" },
  { id: "Bun", name: "Bun", href: "https://bun.sh/" },
  { id: "NodeJs", name: "Node.js", href: "https://nodejs.org/" },
  { id: "Prisma", name: "Prisma", href: "https://www.prisma.io/" },
  {
    id: "JavaScript",
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { id: "TailwindCss", name: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { id: "Clerk", name: "Clerk", href: "https://clerk.com/" },
  { id: "Shadcn", name: "shadcn/ui", href: "https://ui.shadcn.com/" },
  { id: "Vercel", name: "Vercel", href: "https://vercel.com/" },
  { id: "Supabase", name: "Supabase", href: "https://supabase.com/" },
  { id: "Stripe", name: "Stripe", href: "https://stripe.com/" },
  { id: "AuthJs", name: "Auth.js", href: "https://authjs.dev/" },
  { id: "LangChain", name: "LangChain", href: "https://langchain.com/" },
  { id: "Gemini", name: "Gemini", href: "https://ai.google.dev/" },
  { id: "BetterAuth", name: "BetterAuth", href: "https://better-auth.com/" },
  { id: "Nodemailer", name: "Nodemailer", href: "https://nodemailer.com/" },
  { id: "Resend", name: "Resend", href: "https://resend.com/" },
  { id: "Netlify", name: "Netlify", href: "https://www.netlify.com/" },
  { id: "AWS", name: "AWS", href: "https://aws.amazon.com/" },
  { id: "Figma", name: "Figma", href: "https://figma.com/" },
];

/** Lookup by id (e.g. "TypeScript") or display name (e.g. "Next.js"). */
const iconByKey: Record<string, React.ReactNode> = {
  TypeScript: <TypeScript />,
  React: <ReactIcon />,
  ReactIcon: <ReactIcon />,
  "Next.js": <NextJs />,
  NextJs: <NextJs />,
  PostgreSQL: <PostgreSQL />,
  MongoDB: <MongoDB />,
  NestJS: <NestJs />,
  NestJs: <NestJs />,
  Express: <ExpressJs />,
  Bun: <Bun />,
  "Node.js": <NodeJs />,
  NodeJs: <NodeJs />,
  Prisma: <Prisma />,
  JavaScript: <JavaScript />,
  "Tailwind CSS": <TailwindCss />,
  TailwindCss: <TailwindCss />,
  Clerk: <Clerk />,
  "shadcn/ui": <Shadcn />,
  Shadcn: <Shadcn />,
  Vercel: <Vercel />,
  Supabase: <Supabase />,
  Stripe: <Stripe />,
  AuthJs: <AuthJs />,
  LangChain: <LangChain className="w-7" />,
  Gemini: <Gemini />,
  BetterAuth: <BetterAuth />,
  Nodemailer: <Nodemailer />,
  Resend: <Resend />,
  Netlify: <Netlify />,
  AWS: <AWS />,
  Figma: <Figma />,
};

/** Normalize common variants to a key that exists in iconByKey. */
function normalizeTechnologyKey(name: string): string | null {
  const lower = name.toLowerCase();
  if (lower === "typescript" || name === "Typescript") return "TypeScript";
  if (lower === "nextjs" || lower === "next.js") return "Next.js";
  if (lower === "react") return "React";
  if (lower === "nodejs" || lower === "node.js" || lower === "node")
    return "Node.js";
  if (lower === "mongodb") return "MongoDB";
  if (lower === "postgresql") return "PostgreSQL";
  if (lower === "nestjs") return "NestJS";
  if (lower === "prisma") return "Prisma";
  if (lower === "javascript") return "JavaScript";
  if (lower === "bun") return "Bun";
  if (lower === "express") return "Express";
  if (lower === "tailwind css" || lower === "tailwindcss")
    return "Tailwind CSS";
  return name;
}

export function getTechnologyIcon(name: string): React.ReactNode {
  const key = normalizeTechnologyKey(name) ?? name;
  return iconByKey[key] ?? iconByKey[name] ?? null;
}

export const SKILLS = [
  "TypeScript",
  "React",
  "NextJs",
  "PostgreSQL",
  "MongoDB",
  "NestJS",
  "Express",
  "Tailwind CSS",
  "Supabase",
  "AWS",
  "Figma",
] as const;

export function getTechnologiesByIds(ids: string[]): TechnologyEntry[] {
  const byId = new Map(technologies.map((t) => [t.id, t]));
  return ids.map((id) => byId.get(id)).filter(Boolean) as TechnologyEntry[];
}

export function getTechnologyByName(name: string): TechnologyEntry | undefined {
  const key = normalizeTechnologyKey(name) ?? name;
  return technologies.find((t) => t.name === key || t.id === key);
}
