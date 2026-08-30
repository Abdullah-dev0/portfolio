import type { ReactNode } from "react";

import {
  siBetterauth,
  siBun,
  siClerk,
  siDocker,
  siExpress,
  siFastapi,
  siFigma,
  siGooglegemini,
  siJavascript,
  siLangchain,
  siMongodb,
  siNestjs,
  siNetlify,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siResend,
  siShadcnui,
  siStripe,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";

import AuthJs from "@/components/technologies/AuthJs";
import AWS from "@/components/technologies/AWS";
import BrandIcon from "@/components/technologies/BrandIcon";
import Nodemailer from "@/components/technologies/Nodemailer";

export interface TechnologyEntry {
  id: string;
  name: string;
  href: string;
  icon: ReactNode;
  aliases?: string[];
}

export const technologies: TechnologyEntry[] = [
  {
    id: "TypeScript",
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: <BrandIcon icon={siTypescript} />,
  },
  {
    id: "React",
    name: "React",
    href: "https://react.dev/",
    icon: <BrandIcon icon={siReact} />,
    aliases: ["ReactIcon"],
  },
  {
    id: "NextJs",
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: <BrandIcon icon={siNextdotjs} />,
  },
  {
    id: "PostgreSQL",
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: <BrandIcon icon={siPostgresql} />,
  },
  {
    id: "MongoDB",
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: <BrandIcon icon={siMongodb} />,
  },
  {
    id: "NestJS",
    name: "NestJS",
    href: "https://nestjs.com/",
    icon: <BrandIcon icon={siNestjs} />,
  },
  {
    id: "Express",
    name: "Express",
    href: "https://expressjs.com/",
    icon: <BrandIcon icon={siExpress} />,
  },
  {
    id: "FastAPI",
    name: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    icon: <BrandIcon icon={siFastapi} />,
  },
  {
    id: "Bun",
    name: "Bun",
    href: "https://bun.sh/",
    icon: <BrandIcon icon={siBun} />,
  },
  {
    id: "NodeJs",
    name: "Node.js",
    href: "https://nodejs.org/",
    icon: <BrandIcon icon={siNodedotjs} />,
    aliases: ["Node"],
  },
  {
    id: "Prisma",
    name: "Prisma",
    href: "https://www.prisma.io/",
    icon: <BrandIcon icon={siPrisma} />,
  },
  {
    id: "JavaScript",
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <BrandIcon icon={siJavascript} />,
  },
  {
    id: "TailwindCss",
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    icon: <BrandIcon icon={siTailwindcss} />,
  },
  {
    id: "Clerk",
    name: "Clerk",
    href: "https://clerk.com/",
    icon: <BrandIcon icon={siClerk} />,
  },
  {
    id: "Shadcn",
    name: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    icon: <BrandIcon icon={siShadcnui} />,
  },
  {
    id: "Vercel",
    name: "Vercel",
    href: "https://vercel.com/",
    icon: <BrandIcon icon={siVercel} />,
  },
  {
    id: "Supabase",
    name: "Supabase",
    href: "https://supabase.com/",
    icon: <BrandIcon icon={siSupabase} />,
  },
  {
    id: "Stripe",
    name: "Stripe",
    href: "https://stripe.com/",
    icon: <BrandIcon icon={siStripe} />,
  },
  {
    id: "AuthJs",
    name: "Auth.js",
    href: "https://authjs.dev/",
    icon: <AuthJs />,
  },
  {
    id: "LangChain",
    name: "LangChain",
    href: "https://langchain.com/",
    icon: <BrandIcon icon={siLangchain} />,
  },
  {
    id: "Gemini",
    name: "Gemini",
    href: "https://ai.google.dev/",
    icon: <BrandIcon icon={siGooglegemini} />,
  },
  {
    id: "BetterAuth",
    name: "BetterAuth",
    href: "https://better-auth.com/",
    icon: <BrandIcon icon={siBetterauth} />,
  },
  {
    id: "Nodemailer",
    name: "Nodemailer",
    href: "https://nodemailer.com/",
    icon: <Nodemailer />,
  },
  {
    id: "Resend",
    name: "Resend",
    href: "https://resend.com/",
    icon: <BrandIcon icon={siResend} />,
  },
  {
    id: "Netlify",
    name: "Netlify",
    href: "https://www.netlify.com/",
    icon: <BrandIcon icon={siNetlify} />,
  },
  {
    id: "AWS",
    name: "AWS",
    href: "https://aws.amazon.com/",
    icon: <AWS />,
  },
  {
    id: "Figma",
    name: "Figma",
    href: "https://figma.com/",
    icon: <BrandIcon icon={siFigma} />,
  },
  {
    id: "Docker",
    name: "Docker",
    href: "https://www.docker.com/",
    icon: <BrandIcon icon={siDocker} />,
  },
];

const normalizeTechnologyKey = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "");

const technologyByKey = new Map(
  technologies.flatMap((technology) =>
    [technology.id, technology.name, ...(technology.aliases ?? [])].map(
      (key) => [normalizeTechnologyKey(key), technology] as const
    )
  )
);

export function getTechnologyIcon(name: string): ReactNode {
  return getTechnologyByName(name)?.icon ?? null;
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
  "JavaScript",
  "Prisma",
  "Docker",
] as const;

export function getTechnologiesByIds(ids: string[]): TechnologyEntry[] {
  return ids
    .map(getTechnologyByName)
    .filter((technology): technology is TechnologyEntry => Boolean(technology));
}

export function getTechnologyByName(name: string): TechnologyEntry | undefined {
  return technologyByKey.get(normalizeTechnologyKey(name));
}
