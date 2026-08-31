import { allBlogs } from "content-collections";

import type { BlogPost, BlogPostPreview } from "@/types/blog";

import { getRelatedItems } from "./relatedItems";

/**
 * Get all blog post slugs
 */
export function getBlogPostSlugs(): string[] {
  return allBlogs.map((post) => post.slug);
}

/**
 * Get blog post by slug with full content
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  return allBlogs.find((post) => post.slug === slug) ?? null;
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogPosts(): BlogPostPreview[] {
  return allBlogs
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      image: post.image,
      tags: post.tags,
      date: post.date,
      isPublished: post.isPublished,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get all published blog posts
 */
export function getPublishedBlogPosts(): BlogPostPreview[] {
  return getAllBlogPosts().filter((post) => post.isPublished);
}

/**
 * Get all unique tags from published posts
 */
export function getAllTags(): string[] {
  const tagsSet = new Set<string>();

  getPublishedBlogPosts().forEach((post) => {
    post.tags.forEach((tag) => {
      tagsSet.add(tag.toLowerCase());
    });
  });

  return Array.from(tagsSet).sort();
}

/**
 * Get related posts based on shared tags (excluding the current post)
 */
export function getRelatedPosts(
  currentSlug: string,
  maxPosts = 3
): BlogPostPreview[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost || !currentPost.isPublished) {
    return [];
  }

  const allPosts = getPublishedBlogPosts();
  return getRelatedItems(
    allPosts,
    currentSlug,
    currentPost.tags,
    (post) => post.tags,
    maxPosts
  );
}
