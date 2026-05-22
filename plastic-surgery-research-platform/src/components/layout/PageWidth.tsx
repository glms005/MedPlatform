import type { ReactNode } from "react";

/** Shared max width aligned with homepage sections (1400px). */
export function PageWidth({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] ${className}`}>{children}</div>
  );
}
