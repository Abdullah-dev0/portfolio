import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import { ArrowUpRight, Cpu, Monitor, Puzzle } from "lucide-react";

import Container from "@/components/common/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { devices, software, webExtensions } from "@/config/Gears";
import { generateMetadata as getMetadata } from "@/config/Meta";

export const metadata: Metadata = getMetadata("/gears");

interface GearLink {
  name: string;
  href: string;
}

interface GearLinkSectionProps {
  title: string;
  icon: React.ReactNode;
  items: GearLink[];
}

function GearLinkSection({ title, icon, items }: GearLinkSectionProps) {
  return (
    <div className="space-y-4 pt-10">
      <div className="flex items-center gap-4">
        <div className="bg-muted flex items-center justify-center rounded-md border border-black/10 p-2 text-[#736F70] dark:border-white/10">
          {icon}
        </div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="mt-8 flex flex-col flex-wrap gap-4">
        {items.map((item, index) => (
          <div key={item.name} className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-muted flex items-center justify-center rounded-md border border-black/10 px-2 py-1 text-[#736F70] dark:border-white/10">
                <span className="text-secondary text-sm">{index + 1}</span>
              </div>
              <h3 className="text-secondary ml-4 flex items-center gap-1 text-sm">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.href}
                >
                  {item.name}
                </Link>
                <ArrowUpRight className="size-4" />
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GearsPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <PageHeader
          title="Gears"
          description="My gears and tools i use to get my work done."
        />

        {/* Devices Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="bg-muted flex items-center justify-center rounded-md border border-black/10 p-2 text-[#736F70] dark:border-white/10">
              <Cpu className="size-4" />
            </div>
            <h2 className="text-2xl font-semibold">Devices</h2>
          </div>
          <div className="flex flex-col flex-wrap gap-4">
            {devices.map((device) => (
              <div key={device.name} className="flex items-center gap-4">
                <div className="bg-muted flex items-center justify-center rounded-md border border-black/10 p-2 text-[#736F70] dark:border-white/10">
                  {device.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-secondary text-sm">{device.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <GearLinkSection
          title="Web Extensions"
          icon={<Puzzle className="size-4" />}
          items={webExtensions}
        />

        <GearLinkSection
          title="Software"
          icon={<Monitor className="size-4" />}
          items={software}
        />
      </div>
    </Container>
  );
}
