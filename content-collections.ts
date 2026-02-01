import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    video: z.string().optional(),
    link: z.string(),
    technologies: z.array(z.string()),
    github: z.string().optional(),
    live: z.string(),
    timeline: z.string().optional(),
    role: z.string().optional(),
    team: z.string().optional(),
    status: z
      .enum(["completed", "in-progress", "archived"])
      .default("completed"),
    featured: z.boolean().default(false),
    challenges: z.array(z.string()).optional(),
    learnings: z.array(z.string()).optional(),
    isPublished: z.boolean().default(true),
    isWorking: z.boolean().default(true),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
      slug: document._meta.path,
    };
  },
});

const blogs = defineCollection({
  name: "blogs",
  directory: "content/blogs",
  include: "*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    date: z.string(),
    isPublished: z.boolean().default(true),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
      slug: document._meta.path,
    };
  },
});

export default defineConfig({
  collections: [projects, blogs],
});
