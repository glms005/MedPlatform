import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "brand" | "success" | "warning";
}) {
  const toneClass =
    tone === "brand"
      ? "bg-brand-cream text-brand-ink ring-brand-outline"
      : tone === "success"
        ? "bg-emerald-50 text-emerald-800 ring-emerald-100"
        : tone === "warning"
          ? "bg-amber-50 text-amber-900 ring-amber-100"
          : "bg-brand-surface text-brand-muted ring-brand-outline";

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 transition-colors duration-200",
        toneClass,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

