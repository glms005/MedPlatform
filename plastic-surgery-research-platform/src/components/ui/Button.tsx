import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream";
  const sizing = size === "lg" ? "h-12 px-5 text-[15px]" : "h-10 px-4 text-sm";
  const styles =
    variant === "primary"
      ? "bg-brand-accent text-white shadow-soft hover:bg-brand-accentDark"
      : "bg-brand-surface text-brand-ink ring-1 ring-brand-outline hover:bg-brand-cream";

  return (
    <Link href={href} className={[base, sizing, styles].join(" ")}>
      {children}
    </Link>
  );
}

