import { Mail } from "lucide-react";

import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/LinkedIn";
import X from "@/components/svgs/X";

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
    href: "https://x.com/Abdul_ah14",
    icon: X,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abdullah-a-razzaq/",
    icon: LinkedIn,
  },
  {
    name: "Github",
    href: "https://github.com/Abdullah-dev0",
    icon: Github,
  },
  {
    name: "Email",
    label: "Abdullah",
    href: "mailto:abdullah@abdullahtech.me",
    icon: Mail,
  },
];
