import React from "react";

export default function Container({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`container mx-auto px-4 ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
}
