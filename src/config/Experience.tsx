import AWS from "@/components/technologies/AWS";
import ExpressJs from "@/components/technologies/ExpressJs";
import Figma from "@/components/technologies/Figma";
import MongoDB from "@/components/technologies/MongoDB";
import NestJs from "@/components/technologies/NestJs";
import NextJs from "@/components/technologies/NextJs";
import ReactIcon from "@/components/technologies/ReactIcon";
import Resent from "@/components/technologies/Resent";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Project {
  name: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  projects?: Project[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    isBlur: false,
    company: "Biz Of Dev",
    position: "Full stack Developer",
    location: "Islamabad, Pakistan ( Remote )",
    image: "/company/bizofdev.jpeg",
    description: [
      "Built and shipped *LendingStacks*, a production B2B loan marketplace using Next.js 16, TypeScript, Nest.js, MongoDB, and GraphQL; designed Prisma schema powering loan workflows with real-time status tracking",
      "Developed JWT authentication with role-based access control for borrowers, lenders, and admins; integrated Resend for automated transactional emails across the loan lifecycle",
      "Engineered *Phoenix*, a rule-based product recommendation engine for Shopify stores using Next.js, React, FastAPI, and GraphQL; integrated Shopify APIs to analyze purchase patterns and browsing behavior",
      "Built merchant-facing dashboard for widget configuration and contributed to a Shopify app extension rendering dynamic recommendation widgets on live storefronts",
      "Collaborated in 3-person Agile teams with Git workflows; deployed on Google Cloud Platform achieving 99.9% uptime",
    ],
    projects: [
      {
        name: "LendingStacks",
        liveUrl: "https://lendingstacks.com",
      },
    ],
    startDate: "January 2025",
    endDate: "January 2026",
    technologies: [
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: <NextJs />,
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <TailwindCss />,
      },
      {
        name: "TypeScript",
        href: "https://typescriptlang.org/",
        icon: <TypeScript />,
      },
      {
        name: "React",
        href: "https://react.dev/",
        icon: <ReactIcon />,
      },
      {
        name: "Figma",
        href: "https://figma.com/",
        icon: <Figma />,
      },
      {
        name: "AWS",
        href: "https://aws.amazon.com/",
        icon: <AWS />,
      },
      {
        name: "NestJS",
        href: "https://nestjs.com/",
        icon: <NestJs />,
      },
      {
        name: "MongoDB",
        href: "https://www.mongodb.com/",
        icon: <MongoDB />,
      },
      {
        name: "Resend",
        href: "https://resend.com/",
        icon: <Resent />,
      },
    ],
    website: "https://bizofdev.com",
    linkedin: "https://www.linkedin.com/company/bizofdev",
  },
  {
    isCurrent: false,
    company: "DevelopersHub Corporation",
    position: "Full stack Developer Intern",
    location: "pakistan ( Remote )",
    image: "/company/developershub.jpeg",
    description: [
      "Developed and deployed full-stack web applications using the MERN stack, ensuring performance, scalability, and maintainability.",
      "Collaborated in Agile sprints, contributing to code reviews, debugging, and optimization to enhance overall reliability.",
      "Implemented responsive UI components and RESTful APIs for improved functionality and user experience.",
      "Utilized Git, GitHub, and CI/CD workflows, adhering to best practices in version control and deployment.",
    ],
    startDate: "September 2024",
    endDate: "October 2024",
    technologies: [
      {
        name: "NestJS",
        href: "https://nestjs.com/",
        icon: <NestJs />,
      },
      {
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
        icon: <TypeScript />,
      },
      {
        name: "Express",
        href: "https://expressjs.com/",
        icon: <ExpressJs />,
      },
      {
        name: "React",
        href: "https://react.dev/",
        icon: <ReactIcon />,
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <TailwindCss />,
      },
      {
        name: "Next.js",
        href: "https://nextjs.org",
        icon: <NextJs />,
      },
    ],
    website: "https://developershubcorp.com",
    linkedin: "https://www.linkedin.com/company/developershub-corporation",
  },
];
