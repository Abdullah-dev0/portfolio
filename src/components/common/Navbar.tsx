import React from "react";

import Image from "next/image";
import Link from "next/link";

import { navbarConfig } from "@/config/Navbar";

import Container from "./Container";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-baseline gap-4">
          <Link href="/">
            <Image
              className="rounded-md object-cover transition-all duration-300 ease-in-out hover:scale-90"
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={40}
              height={40}
            />
          </Link>
          <div className="flex items-center justify-center gap-4">
            {navbarConfig.navItems.map((item) => (
              <Link
                className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitch />
        </div>
      </div>
    </Container>
  );
}
