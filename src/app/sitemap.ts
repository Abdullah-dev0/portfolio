import type { MetadataRoute } from "next";

import { allProjects } from "content-collections";

import { footerNavLinks } from "@/config/Footer";
import { siteConfig } from "@/config/Meta";
import { getPublishedBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = footerNavLinks.map(({ href }) => ({
    url: `${siteConfig.url}${href === "/" ? "" : href}`,
  }));

  const posts = getPublishedBlogPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const projects = allProjects
    .filter((project) => project.isPublished)
    .map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
    }));

  return [...pages, ...posts, ...projects];
}
