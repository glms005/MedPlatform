"use client";

import { useLocale } from "@/components/providers/LocaleProvider";

export function ComingSoonBanner({ feature }: { feature: string }) {
  const { t } = useLocale();
  return (
    <div className="rounded-2xl border border-amber-200/55 bg-gradient-to-r from-amber-50/90 via-white/80 to-brand-teal-light/40 px-5 py-4 text-sm text-brand-muted shadow-sm">
      <span className="font-semibold text-brand-ink">{feature}</span>
      {" — "}
      {t.common.comingSoon}. {t.common.mockData}
    </div>
  );
}
