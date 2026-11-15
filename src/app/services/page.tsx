import Link from "next/link";

import { ArrowRight, Check, ChevronDown } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import CTA from "@/components/landing/CTA";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/config/Hero";
import { generateMetadata as getMetadata, siteConfig } from "@/config/Meta";
import {
  caseStudies,
  engagementModels,
  faqs,
  getServiceStats,
  processSteps,
  services,
  servicesConfig,
} from "@/config/Services";
import { getTechnologyIcon } from "@/config/technologies";

export const metadata = getMetadata("/services");

const pageUrl = `${siteConfig.url}/services`;
const personId = `${siteConfig.url}/#person`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.author.name,
      url: siteConfig.url,
      jobTitle: "Freelance Full-Stack Developer",
      sameAs: socialLinks
        .filter(({ href }) => href.startsWith("https://"))
        .map(({ href }) => href),
    },
    ...services.map(({ title, description }) => ({
      "@type": "Service",
      name: title,
      description,
      serviceType: title,
      url: pageUrl,
      areaServed: "Worldwide",
      provider: { "@id": personId },
    })),
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((name) => {
        const icon = getTechnologyIcon(name);

        return (
          <li
            key={name}
            className="border-border text-secondary inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs"
          >
            {icon && (
              <span className="size-3 shrink-0" aria-hidden="true">
                {icon}
              </span>
            )}
            {name}
          </li>
        );
      })}
    </ul>
  );
}

export default function ServicesPage() {
  const stats = getServiceStats();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Container className="pt-16">
        <div className="space-y-16">
          {/* Header */}
          <header className="space-y-6 text-center">
            <Badge variant="outline" className="gap-2 rounded-full px-3 py-1">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {servicesConfig.availability}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {servicesConfig.title}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
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
          </header>

          {/* Quick facts */}
          <dl className="border-border bg-border grid grid-cols-2 gap-px overflow-hidden rounded-md border sm:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-background flex flex-col-reverse justify-end gap-1 px-4 py-5 text-center"
              >
                <dt className="text-muted-foreground text-xs">{label}</dt>
                <dd className="text-2xl font-semibold tracking-tight">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          {/* What I offer */}
          <section className="space-y-6">
            <SectionHeading
              subHeading={servicesConfig.eyebrow}
              heading="What I can build for you"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map(
                (
                  {
                    title,
                    description,
                    icon: Icon,
                    bestFor,
                    deliverables,
                    stack,
                  },
                  index
                ) => (
                  <article
                    key={title}
                    className="border-border hover:border-foreground/30 flex flex-col gap-4 rounded-md border p-5 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-muted text-muted-foreground flex items-center justify-center rounded-md border border-black/10 p-2 dark:border-white/10">
                          <Icon className="size-4" aria-hidden="true" />
                        </div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                      </div>
                      <span
                        className="text-muted-foreground/60 font-mono text-sm"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      {description}
                    </p>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      {deliverables.map((deliverable) => (
                        <li
                          key={deliverable}
                          className="flex items-start gap-2"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-emerald-500"
                            aria-hidden="true"
                          />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                    <p className="text-secondary text-sm leading-relaxed">
                      <span className="text-foreground font-medium">
                        Best for:
                      </span>{" "}
                      {bestFor}
                    </p>
                    <div className="border-border mt-auto border-t pt-4">
                      <TechList items={stack} />
                    </div>
                  </article>
                )
              )}
            </div>
          </section>

          {/* Selected work */}
          <section className="space-y-6">
            <div className="space-y-2">
              <SectionHeading
                subHeading="Selected work"
                heading="Products I've helped ship"
              />
              <p className="text-secondary text-sm leading-relaxed">
                Production work I built as a full-stack developer on company
                engineering teams.
              </p>
            </div>
            <div className="space-y-4">
              {caseStudies.map(
                ({ title, company, summary, outcomes, stack }) => (
                  <article
                    key={title}
                    className="border-border space-y-4 rounded-md border p-5"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="text-muted-foreground text-xs">
                        Built at {company}
                      </p>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      {summary}
                    </p>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      {outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-3">
                          <span
                            className="bg-muted-foreground/50 mt-2 size-1 shrink-0 rounded-full"
                            aria-hidden="true"
                          />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                    <TechList items={stack} />
                  </article>
                )
              )}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline">
                <Link href="/work-experience">
                  See full work experience <ArrowRight />
                </Link>
              </Button>
            </div>
          </section>

          {/* Ways to work together */}
          <section className="space-y-6">
            <SectionHeading
              subHeading="Engagement"
              heading="Ways to work together"
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {engagementModels.map(({ title, description, bestFor }) => (
                <article
                  key={title}
                  className="border-border flex flex-col gap-3 rounded-md border p-5"
                >
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {description}
                  </p>
                  <p className="text-muted-foreground border-border mt-auto border-t pt-3 text-xs leading-relaxed">
                    <span className="text-foreground font-medium">
                      Best for:
                    </span>{" "}
                    {bestFor}
                  </p>
                </article>
              ))}
            </div>
            <p className="bg-muted/50 text-secondary rounded-md px-4 py-3 text-center text-sm">
              {servicesConfig.pricingNote}
            </p>
          </section>

          {/* How I work */}
          <section className="space-y-8">
            <SectionHeading subHeading="Process" heading="How I work" />
            <ol className="border-border ml-4 space-y-8 border-l">
              {processSteps.map(({ title, description }, index) => (
                <li key={title} className="relative pl-10">
                  <span
                    className="bg-background text-secondary border-border absolute top-0 -left-4 flex size-8 items-center justify-center rounded-md border text-sm"
                    aria-hidden="true"
                  >
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

          {/* FAQ */}
          <section className="space-y-6">
            <SectionHeading subHeading="FAQ" heading="Common questions" />
            <div className="border-border divide-border divide-y rounded-md border">
              {faqs.map(({ question, answer }) => (
                <details key={question} className="group">
                  <summary className="focus-visible:ring-ring/50 flex cursor-pointer list-none items-center justify-between gap-4 rounded-md px-5 py-4 text-sm font-medium outline-none focus-visible:ring-[3px] [&::-webkit-details-marker]:hidden">
                    {question}
                    <ChevronDown
                      className="text-muted-foreground size-4 shrink-0 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="text-secondary px-5 pb-4 text-sm leading-relaxed">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </Container>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 pt-20 pb-16">
        <Container className="space-y-2 text-center">
          <h2 className="text-2xl font-bold">{servicesConfig.contactTitle}</h2>
          <p className="text-secondary mx-auto max-w-xl text-sm leading-relaxed">
            {servicesConfig.contactDescription}
          </p>
        </Container>
        <CTA className="mt-8 mb-0" preText="Pick a time that works for you." />
      </section>
    </>
  );
}
