export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: "/assets/logo.png",
    alt: "logo",
  },
  navItems: [
    {
      label: "Work",
      href: "/work-experience",
    },
    {
      label: "Blogs",
      href: "/blog",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ] as NavItem[],
};
