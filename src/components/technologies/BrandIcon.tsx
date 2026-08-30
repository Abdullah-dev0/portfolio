import type { SimpleIcon } from "simple-icons";

export default function BrandIcon({ icon }: { icon: SimpleIcon }) {
  const color = icon.hex === "000000" ? "currentColor" : `#${icon.hex}`;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
