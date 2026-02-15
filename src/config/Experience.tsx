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
  technologies: string[];
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
      "Built and shipped a production B2B loan marketplace using Next.js 16, TypeScript, Nest.js, MongoDB, and GraphQL; designed Prisma schema powering loan workflows with real-time status tracking",
      "Developed JWT authentication with role-based access control for borrowers, lenders, and admins; integrated Resend for automated transactional emails across the loan lifecycle",
      "Engineered *Phoenix*, a rule-based product recommendation engine for Shopify stores using Next.js, React, FastAPI, and GraphQL; integrated Shopify APIs to analyze purchase patterns and browsing behavior",
      "Built merchant-facing dashboard for widget configuration and contributed to a Shopify app extension rendering dynamic recommendation widgets on live storefronts",
      "Collaborated in 3-person Agile teams with Git workflows; deployed on Google Cloud Platform achieving 99.9% uptime",
    ],
    projects: [],
    startDate: "January 2025",
    endDate: "January 2026",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "React",
      "Figma",
      "AWS",
      "NestJS",
      "MongoDB",
      "Resend",
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
      "NestJS",
      "TypeScript",
      "Express",
      "React",
      "Tailwind CSS",
      "Next.js",
    ],
    website: "https://developershubcorp.com",
    linkedin: "https://www.linkedin.com/company/developershub-corporation",
  },
];
