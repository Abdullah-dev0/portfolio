# Repository Agent Guide

This file applies to the entire repository. Follow it when reading, changing,
testing, committing, or opening pull requests for this project.

## Core principles

- Keep solutions simple, focused, and easy to maintain.
- Do not overengineer. Prefer the smallest change that fully solves the request.
- Do not introduce abstractions for one-off behavior. Extract a helper or shared
  component when logic or UI is repeated, or when reuse is clearly imminent.
- Keep one source of truth. Do not duplicate configuration, formatting logic,
  lookup maps, constants, metadata, or UI behavior.
- Reuse existing components, helpers, design tokens, and dependencies before
  creating new ones.
- Do not add a dependency when a small existing utility or platform API is
  sufficient. If a dependency is justified, prefer a focused, maintained,
  typed package and import only what is used.
- Match the existing design and code style. Avoid unrelated cleanup or broad
  rewrites while implementing a focused request.
- Preserve unrelated user changes. Never discard, overwrite, stage, or commit
  work that is outside the current task.

## Project conventions

- Use Bun for package management and scripts.
- Use the `@/` alias for imports from `src/`.
- Follow the import ordering and formatting defined in `.prettierrc.json`.
- Use two-space indentation, double quotes, semicolons, and trailing commas
  where Prettier applies them.
- Use existing Tailwind utilities and theme tokens such as `text-secondary`,
  `text-muted-foreground`, `bg-background`, and `border-border`.
- Use `cn` from `@/lib/utils` for conditional or composed class names.
- Keep Server Components as the default. Add `"use client"` only when browser
  APIs, state, effects, event handlers, or a client-only library require it.
- Keep content and metadata in their existing configuration or content files;
  do not hardcode copies inside UI components.

## TypeScript rules

- Keep TypeScript strict. Do not weaken `tsconfig.json` or suppress errors to
  make code compile.
- Do not use `any`. Use a precise type, a generic, `unknown` with narrowing, or
  an existing generated type.
- Prefer `interface` for public object shapes and component props. Use `type`
  for unions, intersections, aliases, and derived types.
- Use `import type` when an import is used only as a type.
- Let TypeScript infer local implementation details when the inferred type is
  clear. Add explicit return types to exported helpers when they improve the
  public contract.
- Reuse types from `src/types`, generated content collections, or the owning
  module. Do not recreate equivalent interfaces in multiple files.
- Model finite states with unions or enums instead of loose strings.
- Avoid non-null assertions and unsafe type casts. Narrow values or handle the
  missing case explicitly.
- Prefer immutable transformations such as `map`, `filter`, and spread syntax
  when they keep the code clearer.
- Use stable semantic keys for rendered lists. Do not use an array index when a
  slug, ID, name, or other unique value is available.
- Validate untrusted runtime data at system boundaries with the existing Zod
  patterns rather than assuming a TypeScript type makes runtime data safe.

## Shared logic and components

- Search the repository before adding a helper, hook, component, icon, type, or
  constant. Extend the existing implementation when it has the same purpose.
- Put broadly reusable, framework-independent helpers in `src/lib`.
- Keep feature-specific helpers near their owning feature when they are not
  useful elsewhere.
- Reuse shared formatting helpers such as `formatDate`; do not repeat equivalent
  `Intl`, `toLocaleDateString`, parsing, or normalization logic in components.
- Keep registries as the single source of truth for display names, URLs, icons,
  and aliases. Derive lookup behavior from registry data instead of maintaining
  parallel maps or condition chains.
- Keep components small and readable, but do not split components solely to
  reduce line count.
- Prefer composition over large components with many boolean behavior flags.

## Link rules

- Use `next/link` for internal application navigation, including paths such as
  `/blog`, `/projects`, and dynamic application routes.
- Use a normal anchor or `Link` consistently with the surrounding code for
  external `http:`, `https:`, `mailto:`, and similar destinations.
- External links that open a new tab must use `target="_blank"` and
  `rel="noopener noreferrer"`.
- Do not open internal links in a new tab unless the user explicitly requests
  that behavior.
- Use descriptive visible link text or an accessible label. Icon-only links
  must have an `aria-label` or another reliable accessible name.
- Never use an empty string as a fallback destination. If a destination is not
  available, omit or disable the link instead of rendering `href=""`.
- Do not nest interactive elements. When a link must look like a button, use
  `<Button asChild><Link ... /></Button>` rather than placing a link inside a
  real button.
- Preserve standard browser behavior. Do not add click handlers for navigation
  that can be expressed with a link.
- Keep external URLs centralized in the relevant configuration when they are
  reused or represent site metadata.

## UI and accessibility

- Build mobile-first and verify both mobile and desktop layouts.
- Preserve light and dark theme readability. Use theme-aware colors for
  monochrome icons and text.
- Maintain visible keyboard focus states and semantic HTML.
- Use headings in a logical hierarchy and use `article`, `nav`, `time`, and
  other semantic elements where appropriate.
- Images must have meaningful `alt` text unless they are purely decorative.
- Interactive controls must have an accessible name and an appropriate native
  element.
- Avoid fixed widths that break responsive layouts. Prefer `minmax`, `max-w-*`,
  flex/grid gaps, and responsive utilities.
- Keep animation subtle and respect the existing reduced-motion utilities.

## Agent workflow

- Read the relevant files and inspect existing patterns before editing.
- Make reasonable, low-risk assumptions and proceed without unnecessary
  questions. Ask only when a missing decision would materially change the
  outcome.
- Keep the task scope narrow. Do not fix unrelated warnings or refactor nearby
  code unless required for the requested change.
- If unrelated local changes exist, leave them untouched and exclude them from
  commits.
- Use `apply_patch` for manual file edits.
- Do not create duplicate helpers or components. Search with `rg` first.
- Explain meaningful tradeoffs briefly. Do not add complexity based on
  hypothetical future requirements.
- Do not create a new branch or pull request unless the user asks for one.
- When creating a branch or pull request, do not include `codex` in the branch
  name or PR title unless the user explicitly requests it.
- Stage only files that belong to the current task.
- Do not amend, force-push, reset, or rewrite history unless explicitly asked.

## Verification

Run checks proportional to the change. Before handing off a normal code change,
prefer the following:

```bash
bun run type:check
bun run lint
bun run format:check
```

- Run `bun run build` for dependency changes, configuration changes, shared
  infrastructure changes, or changes that affect rendering across routes.
- For visual changes, inspect the affected UI at desktop and mobile widths and
  verify both light and dark themes when colors or icons are involved.
- Check browser console errors when testing interactive or rendered UI.
- Do not claim a check passed unless it was actually run successfully.
- Report pre-existing or unrelated failures separately; do not hide them or
  silently expand the task to fix them.

## Completion standard

A task is complete when the requested behavior is implemented, duplicated logic
has not been introduced, relevant checks pass, visual behavior is verified when
needed, unrelated work remains untouched, and the commit or PR contains only the
intended changes.
