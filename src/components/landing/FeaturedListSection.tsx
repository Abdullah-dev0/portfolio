import type { ReactNode } from "react";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";

interface FeaturedListItem {
  slug: string;
  href: string;
  title: string;
  description: string;
  meta?: ReactNode;
  actionLabel: string;
}

interface FeaturedListSectionProps {
  title: string;
  items: FeaturedListItem[];
  allHref: string;
  allLabel: string;
}

export function FeaturedListSection({
  title,
  items,
  allHref,
  allLabel,
}: FeaturedListSectionProps) {
  return (
    <Container className="mt-20">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-7 space-y-8">
        {items.map((item) => (
          <article
            key={item.slug}
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
          >
            <div className="min-w-0">
              <Link href={item.href}>
                <h3 className="text-lg font-semibold hover:underline">
                  {item.title}
                </h3>
              </Link>
              <p className="text-secondary line-clamp-2 text-sm leading-relaxed sm:max-w-xl">
                {item.description}
              </p>
              {item.meta}
            </div>
            <Link
              href={item.href}
              className="text-secondary hover:text-foreground flex shrink-0 items-center gap-2 text-sm transition-colors"
            >
              {item.actionLabel} <ArrowRight className="size-4" />
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline" asChild>
          <Link href={allHref}>{allLabel}</Link>
        </Button>
      </div>
    </Container>
  );
}
