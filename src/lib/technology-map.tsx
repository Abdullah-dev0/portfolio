import AuthJs from "@/components/technologies/AuthJs";
import BetterAuth from "@/components/technologies/BetterAuth";
import Clerk from "@/components/technologies/Clerk";
import Gemini from "@/components/technologies/Gemini";
import LangChain from "@/components/technologies/LangChain";
import MongoDB from "@/components/technologies/MongoDB";
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

export const technologyIconMap: Record<string, React.ReactNode> = {
  "Next.js": <NextJs />,
  TypeScript: <TypeScript />,
  "Tailwind CSS": <TailwindCss />,
  Clerk: <Clerk />,
  "shadcn/ui": <Shadcn />,
  Vercel: <Vercel />,
  React: <ReactIcon />,
  Supabase: <Supabase />,
  "Node.js": <NodeJs />,
  MongoDB: <MongoDB />,
  Stripe: <Stripe />,
  "Auth.js": <AuthJs />,
  Prisma: <Prisma />,
  LangChain: <LangChain className="w-7" />,
  Gemini: <Gemini />,
  BetterAuth: <BetterAuth />,
  Nodemailer: <Nodemailer />,
  Resend: <Resend />,
  Netlify: <Netlify />,
  PostgreSQL: <PostgreSQL />,
};

export function getTechnologyIcon(name: string): React.ReactNode {
  return technologyIconMap[name] || null;
}
