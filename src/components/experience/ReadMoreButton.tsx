"use client";

import { useRouter } from "next/navigation";

import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";

export function ReadMoreButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="text-muted-foreground hover:text-foreground group mt-2 gap-1 px-0"
      onClick={() => router.push("/work-experience")}
    >
      See full experience
      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
    </Button>
  );
}
