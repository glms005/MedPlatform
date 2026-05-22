import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";

export function EcosystemSection({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  headerAction,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  headerAction?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`border-t border-brand-outline/50 px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 ${className}`}
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="warm-eyebrow">
              {eyebrow}
            </p>
            <h2 className="warm-title mt-3 text-[clamp(1.75rem,3.5vw,2.65rem)]">
              {title}
            </h2>
            {description ? (
              <p className="mt-3 text-base leading-relaxed text-brand-muted sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
          {headerAction ? <div className="shrink-0">{headerAction}</div> : null}
        </Reveal>
        <div className="mt-10 lg:mt-12">{children}</div>
      </div>
    </section>
  );
}
