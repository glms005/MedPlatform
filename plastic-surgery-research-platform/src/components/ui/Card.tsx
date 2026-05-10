import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  /** Lift & shadow on hover (disable for static informational blocks). */
  interactive?: boolean;
}) {
  const hoverStyles = interactive
    ? "motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lift motion-reduce:hover:translate-y-0"
    : "";

  return (
    <div
      className={[
        "group rounded-3xl border border-brand-outline bg-brand-surface shadow-soft",
        "transition-all duration-300 ease-out",
        hoverStyles,
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}

