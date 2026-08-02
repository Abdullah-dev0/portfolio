import type { GiscusProps } from "@giscus/react";

/**
 * Read as full static `process.env.NEXT_PUBLIC_*` member expressions -
 * Next.js only inlines them in exactly this form, never when destructured
 * or accessed via a dynamic key.
 */
const repo = process.env.NEXT_PUBLIC_GISCUS_REPO;
const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

/** Comments render only when all four values are set and non-empty. */
export const isGiscusConfigured: boolean = Boolean(
  repo && repoId && category && categoryId
);

export const giscusConfig = {
  // giscus types `repo` as the template literal `${string}/${string}`; env
  // vars are plain `string | undefined`, so assert the shape here. This is
  // only ever read after `isGiscusConfigured` has gated the call site.
  repo: (repo ?? "") as GiscusProps["repo"],
  repoId: repoId ?? "",
  category: category ?? "",
  categoryId: categoryId ?? "",
  mapping: "pathname",
  strict: "1",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "bottom",
  lang: "en",
  loading: "lazy",
} satisfies Pick<
  GiscusProps,
  | "repo"
  | "repoId"
  | "category"
  | "categoryId"
  | "mapping"
  | "strict"
  | "reactionsEnabled"
  | "emitMetadata"
  | "inputPosition"
  | "lang"
  | "loading"
>;
