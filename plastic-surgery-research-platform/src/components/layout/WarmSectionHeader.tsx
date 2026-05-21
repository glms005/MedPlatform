import type { ReactNode } from "react";

export function WarmSectionHeader({
  eyebrow,
  title,
  description,
  action,
  centered = false,
  as = "h2",
  titleId,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  centered?: boolean;
  as?: "h1" | "h2";
  titleId?: string;
}) {
  const Heading = as;

  return (
    <div
      className={
        centered
          ? "mx-auto max-w-2xl text-center"
          : "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
      }
    >
      <div className={centered ? undefined : "max-w-2xl"}>
        <p className="warm-eyebrow">{eyebrow}</p>
        <Heading id={titleId} className="warm-title mt-3">
          {title}
        </Heading>
        {description ? (
          <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action && !centered ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
