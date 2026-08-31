import { Calendar } from "lucide-react";

import { getPublishedBlogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

import { FeaturedListSection } from "./FeaturedListSection";

export default function Blog() {
  const items = getPublishedBlogPosts()
    .slice(0, 3)
    .map((post) => ({
      slug: post.slug,
      href: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      meta: (
        <time
          dateTime={post.date}
          className="text-secondary mt-1 flex items-center gap-2 text-xs"
        >
          <Calendar className="size-3.5" />
          {formatDate(post.date)}
        </time>
      ),
      actionLabel: "Read more",
    }));

  return (
    <FeaturedListSection
      title="Blog"
      items={items}
      allHref="/blog"
      allLabel="Show all blogs"
    />
  );
}
