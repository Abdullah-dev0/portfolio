"use client";

import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { BlogList } from "@/components/blog/BlogList";
import Container from "@/components/common/Container";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BlogPostPreview } from "@/types/blog";

interface BlogPageClientProps {
  initialPosts: BlogPostPreview[];
  initialTags: string[];
}

/**
 * Filter posts by tag (case-insensitive)
 */
const filterPostsByTag = (
  posts: BlogPostPreview[],
  tag: string
): BlogPostPreview[] => {
  return posts.filter((post) =>
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  );
};

/**
 * Get count of posts with a specific tag
 */
const getTagPostCount = (posts: BlogPostPreview[], tag: string): number => {
  return filterPostsByTag(posts, tag).length;
};

export function BlogPageClient({
  initialPosts,
  initialTags,
}: BlogPageClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);

  // Get tag from URL params on mount
  useEffect(() => {
    const tagParam = searchParams.get("tag");
    if (tagParam) {
      setSelectedTag(tagParam);
      setFilteredPosts(filterPostsByTag(initialPosts, tagParam));
    } else {
      setSelectedTag(null);
      setFilteredPosts(initialPosts);
    }
  }, [searchParams, initialPosts]);

  // Handle tag click
  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
      setFilteredPosts(initialPosts);
      router.replace("/blog");
    } else {
      setSelectedTag(tag);
      setFilteredPosts(filterPostsByTag(initialPosts, tag));
      router.replace(`/blog?tag=${encodeURIComponent(tag)}`);
    }
  };

  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Blogs
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Ideas, guides, and deep dives into the world of software engineering
          </p>
        </div>

        <Separator />

        {/* Tags */}
        {initialTags.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Popular Tags</h2>
              {selectedTag && (
                <button
                  onClick={() => handleTagClick(selectedTag)}
                  className="text-muted-foreground hover:text-foreground text-sm underline"
                >
                  Clear filter
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {initialTags.map((tag) => {
                const postCount = getTagPostCount(initialPosts, tag);
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className="transition-colors"
                  >
                    <Badge
                      variant={isSelected ? "default" : "outline"}
                      className="hover:bg-accent hover:text-accent-foreground tag-inner-shadow cursor-pointer p-2 capitalize"
                    >
                      {tag} ({postCount})
                    </Badge>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Blog Posts */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              {selectedTag ? `Posts tagged "${selectedTag}"` : "Latest Posts"}
              {filteredPosts.length > 0 && (
                <span className="text-muted-foreground ml-2 text-sm font-normal">
                  ({filteredPosts.length}{" "}
                  {filteredPosts.length === 1 ? "post" : "posts"})
                </span>
              )}
            </h2>
          </div>

          <BlogList posts={filteredPosts} />
        </div>
      </div>
    </Container>
  );
}
