import React from "react";

import Link from "next/link";

import { ArrowRight, Calendar } from "lucide-react";

import { getPublishedBlogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

import Container from "../common/Container";
import { Button } from "../ui/button";

export default function Blog() {
  const posts = getPublishedBlogPosts();

  return (
    <Container className="mt-20">
      <h2 className="text-2xl font-bold">Blog</h2>
      <div className="mt-7 space-y-8">
        {posts.slice(0, 3).map((post) => {
          const formattedDate = formatDate(post.date);

          return (
            <article
              key={post.slug}
              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-semibold hover:underline">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-secondary line-clamp-2">
                  {post.description}
                </p>
                <time
                  dateTime={post.date}
                  className="text-secondary mt-1 flex items-center gap-2 text-xs"
                >
                  <Calendar className="size-3.5" />
                  {formattedDate}
                </time>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-secondary hover:text-foreground flex shrink-0 items-center gap-2 text-sm transition-colors"
              >
                Read more <ArrowRight className="size-4" />
              </Link>
            </article>
          );
        })}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/blog">Show all blogs</Link>
        </Button>
      </div>
    </Container>
  );
}
