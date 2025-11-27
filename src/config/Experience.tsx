import AWS from '@/components/technologies/AWS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
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
    isCurrent: true,
    isBlur: false,
    company: 'Biz Of Dev',
    position: 'Full stack Developer',
    location: 'Islamabad, Pakistan ( Remote )',
    image: '/company/bizofdev.jpeg',
    description: [
      'Architected and developed scalable web applications using Next.js, React, Node.js, and Python, ensuring high performance and responsiveness across all modules.',
      'Integrated Shopify GraphQL APIs to enhance e-commerce functionalities, improving data retrieval efficiency and overall user experience.',
      'Collaborated with cross-functional teams, including designers and product managers, to deliver responsive and accessible user interfaces.',
      'Implemented optimized database solutions using MongoDB and PostgreSQL, improving data integrity and query performance.',
      'Enhanced frontend performance and accessibility through consistent design systems, reusable components, and best practices in UI/UX development.',
    ],
    startDate: 'January 2025',
    endDate: 'Present',
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
