"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FileText } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/config/Meta";
import { navbarConfig } from "@/config/Navbar";

import Container from "./Container";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4 px-6">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Link
            href="/"
            aria-label="Go to home page"
            className={`rounded-full border px-3 py-1 text-sm font-medium tracking-tight transition-colors ${
              pathname === "/"
                ? "border-foreground/20 bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <div className="bg-border h-5 w-px" />
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {navbarConfig.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href + "/"));
              return (
                <Link
                  className={`transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4 ${
                    isActive
                      ? "text-muted-foreground underline decoration-2 underline-offset-4"
                      : ""
                  }`}
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground hidden text-sm sm:inline">
            {siteConfig.name}
          </span>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href="/resume"
                className={`transition-colors ${
                  pathname === "/resume"
                    ? "text-muted-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Resume"
              >
                <FileText className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Resume</p>
            </TooltipContent>
          </Tooltip>
          <ThemeSwitch />
        </div>
      </div>
    </Container>
  );
}
