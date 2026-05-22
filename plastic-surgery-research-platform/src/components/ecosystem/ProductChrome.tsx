import type { ReactNode } from "react";

export function ProductChrome({
  title,
  badge,
  children,
  className = "",
}: {
  title: string;
  badge?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="product-chrome overflow-hidden rounded-xl bg-white ring-1 ring-brand-outline/80">
        <div className="flex items-center gap-2 border-b border-brand-outline/70 bg-brand-sand/50 px-3 py-2.5 sm:px-4">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-aqua-bright/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90" />
          </span>
          <p className="min-w-0 flex-1 truncate text-center text-[10px] font-medium text-brand-muted sm:text-xs">
            {title}
          </p>
          {badge ? (
            <span className="shrink-0 rounded-md bg-brand-blue/12 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-brand-blue">
              {badge}
            </span>
          ) : null}
        </div>
        <div className="ecosystem-panel p-3 sm:p-4">{children}</div>
      </div>
    </div>
  );
}
