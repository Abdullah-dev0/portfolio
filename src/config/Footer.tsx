export const footerConfig = {
  developer: "Abdullah",
  copyright: "All rights reserved.",
  location: "Pakistan",
};

export interface FooterNavItem {
  label: string;
  href: string;
}

export const footerNavLinks: FooterNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work-experience" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Gears", href: "/gears" },
];
