import { Bot, Globe, type LucideIcon, Plug, Rocket } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export const servicesConfig = {
  title: "Services",
  description:
    "I help founders and teams ship reliable web products, from first idea to production.",
  availability: "Available for new projects",
};

export const services: Service[] = [
  {
    title: "Full-Stack Web Apps",
    description:
      "Production-ready web applications with a fast, accessible frontend and a solid backend.",
    icon: Globe,
    highlights: [
      "Next.js, React, and TypeScript",
      "Node.js, PostgreSQL, and MongoDB",
      "Authentication and role-based access",
    ],
  },
  {
    title: "MVPs & SaaS Products",
    description:
      "Turn an idea into a working product quickly, with a codebase that can grow with your users.",
    icon: Rocket,
    highlights: [
      "Scoped to what matters first",
      "Dashboards, billing, and email flows",
      "Deployed and ready for real users",
    ],
  },
  {
    title: "AI Features & Agents",
    description:
      "Add AI to your product in a way that is useful, secure, and easy to maintain.",
    icon: Bot,
    highlights: [
      "Chatbots and LLM-powered features",
      "Agent workflows with LangGraph and MCP",
      "Secure server-side tool access",
    ],
  },
  {
    title: "APIs & Integrations",
    description:
      "Connect your product to the tools your business already uses.",
    icon: Plug,
    highlights: [
      "REST and GraphQL APIs",
      "OAuth 2.0 and third-party APIs",
      "Shopify and QuickBooks integrations",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discovery call",
    description: "We talk through your goals, users, and timeline.",
  },
  {
    title: "Scope & plan",
    description: "You get a clear scope, milestones, and an estimate.",
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
