import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  const hoverStyles = interactive
    ? "motion-safe:hover:-translate-y-px motion-safe:hover:border-slate-300 motion-safe:hover:shadow-soft motion-reduce:hover:translate-y-0"
    : "";

  return (
    <div
      className={[
        "group rounded-2xl border border-brand-outline bg-brand-surface shadow-sm",
        "transition-colors duration-200",
        hoverStyles,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
