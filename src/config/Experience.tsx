import AWS from '@/components/technologies/AWS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import Resent from '@/components/technologies/Resent';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';

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
    company: 'Biz Of Dev',
    position: 'Full stack Developer',
    location: 'Islamabad, Pakistan ( Remote )',
    image: '/company/bizofdev.jpeg',
    description: [
      '*Full Stack Developer – LendingStacks*',
      'Architected and developed 80% of LendingStacks, a production B2B loan marketplace connecting borrowers with lenders, digitizing the entire loan lifecycle',
      'Built full-stack application using React.js/Next.js 16, TypeScript, Nest.js/MongoDB, implementing GraphQL APIs',
      'Deployed on Google Cloud Platform with CI pipeline, achieving 99.9% uptime; collaborated in 3-person Agile team with Git workflows and code reviews',
      'Integrated Resend transactional emails and automated workflows, reducing processing time by 85% and improving communication efficiency by 70%',
      '*Full Stack Developer – phonix Recommendation System*',
      'Built rule-based recommendation engine for Shopify stores enabling merchants to display personalized product widgets (frequently bought together, trending items) using Next.js, React, FastAPI, GraphQL',
      'Integrated Shopify APIs via GraphQL to fetch store data (products, orders, customer behavior) and serve precomputed recommendations through FastAPI backend',
      'Developed merchant-facing web app for widget configuration and management, enabling merchants to create and customize recommendation widgets with unique IDs',
      'Contributed to custom Shopify app extension that renders dynamic recommendation widgets on live storefronts, collaborating in 3-person startup team across frontend, backend, and Shopify integration layers',
    ],
    projects: [
      {
        name: 'LendingStacks',
        liveUrl: 'https://lendingstacks.com',
      },
    ],
    startDate: 'January 2025',
    endDate: 'January 2026',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'NestJS',
        href: 'https://nestjs.com/',
        icon: <NestJs />,
      },
      {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Resend',
        href: 'https://resend.com/',
        icon: <Resent />,
      },
    ],
    website: 'https://bizofdev.com',
    linkedin: 'https://www.linkedin.com/company/bizofdev',
  },
  {
    isCurrent: false,
    company: 'DevelopersHub Corporation',
    position: 'Full stack Developer Intern',
    location: 'pakistan ( Remote )',
    image: '/company/developershub.jpeg',
    description: [
      'Developed and deployed full-stack web applications using the MERN stack, ensuring performance, scalability, and maintainability.',
      'Collaborated in Agile sprints, contributing to code reviews, debugging, and optimization to enhance overall reliability.',
      'Implemented responsive UI components and RESTful APIs for improved functionality and user experience.',
      'Utilized Git, GitHub, and CI/CD workflows, adhering to best practices in version control and deployment.',
    ],
    startDate: 'September 2024',
    endDate: 'October 2024',
    technologies: [
      {
        name: 'NestJS',
        href: 'https://nestjs.com/',
        icon: <NestJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org',
        icon: <NextJs />,
      },
    ],
    website: 'https://developershubcorp.com',
    linkedin: 'https://www.linkedin.com/company/developershub-corporation',
  },
];
