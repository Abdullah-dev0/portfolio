import { Mail } from "lucide-react";

import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import X from "@/components/svgs/X";
import Bun from "@/components/technologies/Bun";
import ExpressJs from "@/components/technologies/ExpressJs";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import NestJs from "@/components/technologies/NestJs";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
// Technology Components
import TypeScript from "@/components/technologies/TypeScript";

export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  NestJs: NestJs,
  Express: ExpressJs,
};

export const heroConfig = {
  name: "Abdullah",
  title: "A Full Stack Engineer",
  rotatingTitles: ["Engineer", "Developer", "Product Developer"],
  avatar: "/assets/logo.png",
  location: "24, Pakistan",
  bio: "Building scalable web products today, exploring the AI-driven internet of tomorrow.",

  skills: [
    {
      name: "Typescript",
      href: "https://www.typescriptlang.org/",
      component: "TypeScript",
    },
    {
      name: "React",
      href: "https://react.dev/",
      component: "ReactIcon",
    },
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      component: "NextJs",
    },
    {
      name: "PostgreSQL",
      href: "https://www.postgresql.org/",
      component: "PostgreSQL",
    },
    {
      name: "MongoDB",
      href: "https://www.mongodb.com/",
      component: "MongoDB",
    },
    {
      name: "Nestjs",
      href: "https://nestjs.com/",
      component: "NestJs",
    },
    {
      name: "Express",
      href: "https://expressjs.com/",
      component: "Express",
    },
  ],
  // Description Configuration
  description: {
    template:
      "I build interactive web apps using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. With a focus on <b>UI</b> design. Enthusiastic about <b>Three.js</b>, driven by a keen eye for design.",
  },

  // Buttons Configuration
  buttons: [
    {
      variant: "outline",
      text: "Resume / CV",
      href: "/resume",
      icon: "CV",
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: "X",
    href: "https://x.com/Abdul_ah14",
    icon: X,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/Abdullah-dev0/",
    icon: LinkedIn,
  },
  {
    name: "Github",
    href: "https://github.com/Abdullah-dev0",
    icon: Github,
  },
  {
    name: "Email",
    label: "Abdullah",
    href: "mailto:abdullah@abdullahtech.me",
    icon: Mail,
  },
];
