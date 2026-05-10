import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-brand-outline bg-brand-surface shadow-soft",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

