import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { footerConfig, footerNavLinks } from "@/config/Footer";
import { socialLinks } from "@/config/Hero";

import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container className="py-10">
      <footer className="flex flex-col gap-8">
        <Separator className="bg-muted-foreground/30" />

        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <h3 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              Navigate
            </h3>
            <nav className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {footerNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              Connect
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.name}
                    className="border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 flex size-10 items-center justify-center rounded-md border transition-colors"
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="bg-muted-foreground/30" />

        <p className="text-muted-foreground text-sm">
          © {year} {footerConfig.developer}. {footerConfig.copyright}
        </p>
      </footer>
    </Container>
  );
}
