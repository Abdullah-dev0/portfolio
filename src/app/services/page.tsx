import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import Container from "@/components/common/Container";
import CTA from "@/components/landing/CTA";
import Work from "@/components/landing/Projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { generateMetadata as getMetadata } from "@/config/Meta";
import { processSteps, services, servicesConfig } from "@/config/Services";

export const metadata = getMetadata("/services");

export default function ServicesPage() {
  return (
    <>
      <Container className="pt-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-6 text-center">
            <Badge variant="outline" className="gap-2 rounded-full px-3 py-1">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {servicesConfig.availability}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              {servicesConfig.title}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {servicesConfig.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Book a free call</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">
                  See my work <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          <Separator />

          {/* What I offer */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">What I can build for you</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map(
                ({ title, description, icon: Icon, highlights }, index) => (
                  <article
                    key={title}
                    className="border-border hover:border-foreground/30 space-y-4 rounded-md border p-5 transition-all duration-300 motion-safe:hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-muted flex items-center justify-center rounded-md border border-black/10 p-2 text-[#736F70] dark:border-white/10">
                          <Icon className="size-4" />
                        </div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                      </div>
                      <span className="text-muted-foreground/60 font-mono text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      {description}
                    </p>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      {highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </article>
                )
              )}
            </div>
          </section>

          {/* How I work */}
          <section className="space-y-8 pt-6">
            <h2 className="text-2xl font-semibold">How I work</h2>
            <ol className="border-border ml-4 space-y-8 border-l">
              {processSteps.map(({ title, description }, index) => (
                <li key={title} className="relative pl-10">
                  <span className="bg-background text-secondary border-border absolute top-0 -left-4 flex size-8 items-center justify-center rounded-md border text-sm">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </Container>

      <Work />
      <div id="contact" className="scroll-mt-24">
        <CTA />
      </div>
    </>
  );
}
