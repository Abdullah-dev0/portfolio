"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navbarConfig } from "@/config/Navbar";

import Container from "./Container";
import ThemeSwitch from "./ThemeSwitch";
import VisitorStats from "./visitorStats";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="grid grid-cols-[1fr_auto] items-center gap-3 px-3 sm:flex sm:justify-between sm:gap-4 sm:px-6">
        <div className="contents sm:flex sm:flex-wrap sm:items-center sm:gap-4">
          <Link
            href="/"
            aria-label="Go to home page"
            className={`w-fit rounded-full border px-3 py-1 text-sm font-medium tracking-tight transition-colors ${
              pathname === "/"
                ? "border-foreground/20 bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <div className="bg-border hidden h-5 w-px sm:block" />
          <div className="col-span-2 row-start-2 flex flex-wrap items-center gap-3 sm:gap-4">
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
        <div className="col-start-2 row-start-1 flex shrink-0 items-center gap-2 sm:gap-4">
          <ThemeSwitch />
          <VisitorStats />
        </div>
      </div>
    </Container>
  );
}
