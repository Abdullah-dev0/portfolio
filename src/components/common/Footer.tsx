import { Separator } from "@/components/ui/separator";
import { footerConfig } from "@/config/Footer";

import Container from "./Container";
import FooterRight from "./FooterRight";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container className="py-16">
      <footer className="flex flex-col gap-8">
        <Separator className="bg-muted-foreground/30" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-muted-foreground text-left text-sm">
            <p>
              Designed & Developed by{" "}
              <strong className="text-foreground">
                {footerConfig.developer}
              </strong>
            </p>
            <p>
              © {year} {footerConfig.copyright}
            </p>
          </div>
          <FooterRight />
        </div>
      </footer>
    </Container>
  );
}
