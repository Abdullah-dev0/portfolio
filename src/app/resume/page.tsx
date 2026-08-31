import React from "react";

import { Metadata } from "next";

import Container from "@/components/common/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { generateMetadata as getMetadata } from "@/config/Meta";
import { resumeConfig } from "@/config/Resume";

export const metadata: Metadata = getMetadata("/resume");

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <PageHeader title="Resume" description="My resume." />
        <div className="mx-auto max-w-2xl">
          <iframe
            src={resumeConfig.url}
            className="min-h-screen w-full"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
