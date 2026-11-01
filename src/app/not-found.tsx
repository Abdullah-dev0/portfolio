import Link from "next/link";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="py-32">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center">
          <h1 className="border-border mr-5 border-r pr-5 text-2xl font-semibold">
            404
          </h1>
          <p className="text-sm">This page could not be found.</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </Container>
  );
}
