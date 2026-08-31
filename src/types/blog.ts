import type { allBlogs } from "content-collections";

export type BlogPost = (typeof allBlogs)[number];

export type BlogPostPreview = Pick<
  BlogPost,
  "slug" | "title" | "description" | "image" | "tags" | "date" | "isPublished"
>;
