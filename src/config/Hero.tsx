import { Mail } from "lucide-react";

import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import X from "@/components/svgs/X";

import { profileLinks } from "./Profile";

export const heroConfig = {
  name: "Abdullah",
  title: "A Full Stack Engineer",
  rotatingTitles: ["Engineer", "Developer", "Product Developer"],
  avatar: "/assets/logo.png",
  location: "24, Pakistan",
  bio: "Building scalable web products today, exploring the AI-driven internet of tomorrow.",
};

export const socialLinks = [
  {
    name: "X",
    href: profileLinks.x,
    icon: X,
  },
  {
    name: "LinkedIn",
    href: profileLinks.linkedin,
    icon: LinkedIn,
  },
  {
    name: "Github",
    href: profileLinks.github,
    icon: Github,
  },
  {
    name: "Email",
    label: "Abdullah",
    href: profileLinks.email,
    icon: Mail,
  },
];
