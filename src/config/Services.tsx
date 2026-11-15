import { allProjects } from "content-collections";
import { Bot, Globe, type LucideIcon, Plug, Rocket } from "lucide-react";

import { getTimelineYear } from "@/lib/projects";

import { experiences } from "./Experience";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  bestFor: string;
  deliverables: string[];
  stack: string[];
}

export interface CaseStudy {
  title: string;
  company: string;
  summary: string;
  outcomes: string[];
  stack: string[];
}

export interface EngagementModel {
  title: string;
  description: string;
  bestFor: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export const servicesConfig = {
  eyebrow: "Services",
  title: "Freelance Full-Stack Developer for Web Apps, MVPs & AI Features",
  description:
    "I help founders and teams design, build, and ship reliable web products. Available remotely for fixed-scope projects and hourly contracts.",
  availability: "Available for freelance & contract work",
  pricingNote:
    "Pricing depends on scope. The first call is free, and you get a written quote before any work starts.",
  contactTitle: "Let's talk about your project",
  contactDescription:
    "Tell me what you're building. The first call is free, and you'll leave with a clear next step and a quote.",
};

export const services: Service[] = [
  {
    title: "Full-Stack Web Apps",
    description:
      "A production-ready web application with a fast, accessible frontend and a backend you can rely on.",
    icon: Globe,
    bestFor: "Businesses turning a manual workflow into a real product.",
    deliverables: [
      "Responsive, accessible interface",
      "Authentication and role-based access",
      "Database design and admin dashboards",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "MVPs & SaaS Products",
    description:
      "Turn an idea into a working product quickly, on a codebase that can grow with your users.",
    icon: Rocket,
    bestFor: "Founders validating an idea or preparing a first launch.",
    deliverables: [
      "Scoped to what matters first",
      "Dashboards, billing, and email flows",
      "Deployed and ready for real users",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Stripe", "Resend"],
  },
  {
    title: "AI Features & Agents",
    description:
      "Add AI to your product in a way that is useful, secure, and easy to maintain.",
    icon: Bot,
    bestFor: "Teams adding an assistant or automation to an existing product.",
    deliverables: [
      "Chatbots and LLM-powered features",
      "Agent workflows with tool access",
      "Credentials kept on the server",
    ],
    stack: ["LangGraph", "MCP", "FastAPI"],
  },
  {
    title: "APIs & Integrations",
    description:
      "Connect your product to the tools your business already uses.",
    icon: Plug,
    bestFor: "Products that need to talk to accounting, store, or email tools.",
    deliverables: [
      "REST and GraphQL APIs",
      "OAuth 2.0 and third-party APIs",
      "Shopify and QuickBooks integrations",
    ],
    stack: ["NestJS", "GraphQL", "OAuth 2.0"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "OneClickBooks",
    company: "Axiom World",
    summary:
      "An AI accounting assistant that works with QuickBooks Online and Gmail on the user's behalf.",
    outcomes: [
      "Connected a LangGraph and FastAPI agent to a production Next.js app through MCP",
      "Built a Next.js proxy layer that keeps credentials on the server",
      "Shipped QuickBooks OAuth 2.0, a real-time financial dashboard, and role-based access",
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "LangGraph", "MCP"],
  },
  {
    title: "B2B Loan Marketplace",
    company: "Biz Of Dev",
    summary:
      "A production marketplace that takes borrowers and lenders through the full loan lifecycle.",
    outcomes: [
      "Designed the data model behind loan workflows with real-time status tracking",
      "Built JWT authentication with separate roles for borrowers, lenders, and admins",
      "Automated transactional emails across the loan lifecycle",
    ],
    stack: ["Next.js", "TypeScript", "NestJS", "MongoDB", "GraphQL", "Prisma"],
  },
  {
    title: "Phoenix",
    company: "Biz Of Dev",
    summary: "A rule-based product recommendation engine for Shopify stores.",
    outcomes: [
      "Used Shopify APIs to analyze purchase patterns and browsing behavior",
      "Built the merchant dashboard for configuring recommendation widgets",
      "Contributed to the app extension that renders widgets on live storefronts",
    ],
    stack: ["Next.js", "React", "FastAPI", "GraphQL"],
  },
];

export const engagementModels: EngagementModel[] = [
  {
    title: "Fixed-scope project",
    description:
      "A defined build with clear milestones and one agreed price for the whole project.",
    bestFor: "MVPs, new products, and well-defined features",
  },
  {
    title: "Hourly contract",
    description:
      "Flexible hours billed as they are used, with regular updates on progress.",
    bestFor: "Ongoing work, extra capacity for a team, or evolving scope",
  },
  {
    title: "Ongoing support",
    description:
      "Fixes, small improvements, and upgrades for a product that is already live.",
    bestFor: "Keeping a launched product healthy",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Free discovery call",
    description: "We talk through your goals, users, and timeline.",
  },
  {
    title: "Scope & quote",
    description: "You get a clear scope, milestones, and a written quote.",
  },
  {
    title: "Build in iterations",
    description: "Regular updates and demos, so there are no surprises.",
  },
  {
    title: "Launch & support",
    description: "I deploy it, hand it over, and stay available after launch.",
  },
];

export const faqs: Faq[] = [
  {
    question: "How much does a project cost?",
    answer:
      "It depends on the scope, so I don't publish fixed prices. After a free call you get a written quote: one price for a well-defined project, or an hourly rate for ongoing work.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A focused MVP or feature usually takes a few weeks, and larger applications take longer. You get a timeline with milestones before any work starts.",
  },
  {
    question: "Do you work on contract or hourly?",
    answer:
      "Yes. I take fixed-scope projects, hourly contracts, and ongoing support work. We agree on the terms in writing before starting.",
  },
  {
    question: "Can you work with my existing team or codebase?",
    answer:
      "Yes. I have worked in small agile teams on existing Next.js, NestJS, and FastAPI codebases, with code reviews and Git workflows as part of the routine.",
  },
  {
    question: "Where are you based?",
    answer:
      "I'm based in Pakistan (UTC+5) and work remotely. We agree on overlap hours for calls and updates before the project starts.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. Once the work is paid for, the code, repository, and deployment are yours.",
  },
  {
    question: "What happens after launch?",
    answer:
      "I stay available for fixes and improvements, either hourly or as ongoing support.",
  },
];

export function getServiceStats(): ServiceStat[] {
  const firstYear = Math.min(
    ...experiences.map(({ startDate }) => getTimelineYear(startDate))
  );
  const yearsOfExperience = new Date().getFullYear() - firstYear;
  const shippedProjects =
    allProjects.filter((project) => project.isPublished).length +
    caseStudies.length;

  return [
    { value: `${yearsOfExperience}+`, label: "Years building for the web" },
    { value: String(shippedProjects), label: "Projects built and shipped" },
    { value: "UTC+5", label: "Remote, based in Pakistan" },
    { value: "Free", label: "First call and quote" },
  ];
}
