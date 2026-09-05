import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

import { Calendar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/Meta";
import { formatDate } from "@/lib/utils";
import { BlogPost } from "@/types/blog";

import { BlogComponents } from "./BlogComponents";
import ShareButton from "./ShareButton";

interface BlogContentProps {
  post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
  const { slug, title, description, image, tags, date, content } = post;

  const formattedDate = formatDate(date);

  const shareUrl = `${siteConfig.url.replace(/\/+$/, "")}/blog/${slug}`;

  return (
    <article className="mx-auto max-w-4xl">
      {/* Hero Section */}
      <header className="mb-8 space-y-6">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 896px) 896px, calc(100vw - 2rem)"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl leading-tight font-bold lg:text-5xl">
            {title}
          </h1>

          <p className="text-muted-foreground text-xl">{description}</p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <Calendar className="size-6" />
              <time dateTime={date}>{formattedDate}</time>
            </div>
            <ShareButton url={shareUrl} title={title} />
          </div>
        </div>

        <Separator />
      </header>

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={content} components={BlogComponents} />
      </div>
    </article>
  );
}
