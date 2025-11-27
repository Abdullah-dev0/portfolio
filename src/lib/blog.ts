import { allBlogs } from 'content-collections';
import { BlogPost, BlogPostPreview } from '@/types/blog';

/**
 * Get all blog post slugs
 */
export function getBlogPostSlugs(): string[] {
  return allBlogs.map((post: BlogPost) => post.slug);
}

/**
 * Get blog post by slug with full content
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  return allBlogs.find((post: BlogPost) => post.slug === slug) || null;
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogPosts(): BlogPostPreview[] {
  return allBlogs
    .map((post: BlogPost) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      image: post.image,
      tags: post.tags,
      date: post.date,
      isPublished: post.isPublished,
    }))
    .sort(
      (a: BlogPostPreview, b: BlogPostPreview) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

/**
 * Get all published blog posts
 */
export function getPublishedBlogPosts(): BlogPostPreview[] {
  return getAllBlogPosts().filter((post: BlogPostPreview) => post.isPublished);
}

/**
 * Get blog posts by tag
 */
export function getBlogPostsByTag(tag: string): BlogPostPreview[] {
  return getPublishedBlogPosts().filter((post: BlogPostPreview) =>
    post.tags.some(
      (postTag: string) => postTag.toLowerCase() === tag.toLowerCase(),
    ),
  );
}

/**
 * Get all unique tags from published posts
 */
export function getAllTags(): string[] {
  const tagsSet = new Set<string>();

  getPublishedBlogPosts().forEach((post: BlogPostPreview) => {
    post.tags.forEach((tag: string) => {
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
  maxPosts = 3,
): BlogPostPreview[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost || !currentPost.isPublished) {
    return [];
  }

  const allPosts = getPublishedBlogPosts();
  const currentTags = currentPost.tags.map((tag: string) => tag.toLowerCase());

  const postsWithScore = allPosts
    .filter((post: BlogPostPreview) => post.slug !== currentSlug)
    .map((post: BlogPostPreview) => {
      const sharedTags = post.tags.filter((tag: string) =>
        currentTags.includes(tag.toLowerCase()),
      );
      return { post, score: sharedTags.length };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return postsWithScore.slice(0, maxPosts).map((item) => item.post);
}
