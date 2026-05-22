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
      ? "bg-brand-sand text-brand-ink ring-brand-outline"
      : tone === "success"
        ? "bg-emerald-50 text-emerald-900 ring-emerald-200"
        : tone === "warning"
          ? "bg-brand-mint text-brand-teal-dark ring-brand-outline"
          : "bg-white text-brand-muted ring-brand-outline";

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-medium leading-snug ring-1",
        toneClass,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
