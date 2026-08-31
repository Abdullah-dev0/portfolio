import { Separator } from "@/components/ui/separator";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {title}
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          {description}
        </p>
      </div>
      <Separator />
    </>
  );
}
