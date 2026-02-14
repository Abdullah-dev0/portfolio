import Link from "next/link";

import { ArrowRight, Settings } from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { Card } from "../ui/card";

const setup = [
  {
    name: "Gears Used",
    description: "Productivity Tools, Gears i use to get my work done.",
    icon: <Settings className="size-4" />,
    href: "/gears",
  },
];

export default function Setup() {
  return (
    <Container className="mt-10">
      <SectionHeading subHeading="Development" heading="Setup" />
      <div className="mt-8 flex flex-col gap-4">
        {setup.map((item) => (
          <Link className="group" href={item.href} key={item.name}>
            <Card className="flex flex-row items-center justify-between gap-4 px-4 py-2">
              <div className="bg-muted flex items-center justify-center rounded-md p-2">
                {item.icon}
              </div>
              <div className="flex w-full flex-col">
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
              <ArrowRight className="hidden size-4 transition-all duration-300 group-hover:block" />
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
