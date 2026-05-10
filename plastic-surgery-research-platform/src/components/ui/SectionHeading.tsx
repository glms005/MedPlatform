import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  right,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-wide text-brand-accentDark">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-brand-ink sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 text-sm leading-6 text-brand-muted sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}

