"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const solid =
  "inline-flex min-h-[2.75rem] min-w-[10.5rem] items-center justify-center border border-transparent bg-brand-accent px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-soft transition-colors hover:bg-brand-accentDark sm:px-10";
const outline =
  "inline-flex min-h-[2.75rem] items-center justify-center border border-brand-outline bg-white/85 px-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink backdrop-blur-sm transition-colors hover:border-brand-blue/35 hover:bg-white sm:px-10";

export function EditorialLink({
  href,
  variant,
  children,
  className = "",
}: {
  href: string;
  variant: "solid" | "outline";
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const cn = `${variant === "solid" ? solid : outline} ${className}`.trim();
  const link = (
    <Link href={href} className={cn}>
      {children}
    </Link>
  );
  if (reduce) return link;
  return (
    <motion.div className="inline-flex" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {link}
    </motion.div>
  );
}
