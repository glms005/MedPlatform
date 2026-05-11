import type { ReactNode } from "react";

export function SectionShell({
  id,
  children,
  className = "",
  bleed = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Wider horizontal padding for cinematic sections */
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={[
        bleed ? "px-4 sm:px-8 lg:px-12" : "px-4 sm:px-6 lg:px-10",
        className,
      ].join(" ")}
    >
      <div
        className={
          bleed ? "mx-auto max-w-[1400px]" : "mx-auto max-w-6xl"
        }
      >
        {children}
      </div>
    </section>
  );
}
