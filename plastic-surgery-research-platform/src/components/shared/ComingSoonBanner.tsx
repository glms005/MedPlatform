"use client";

import { useLocale } from "@/components/providers/LocaleProvider";

export function ComingSoonBanner({ feature }: { feature: string }) {
  const { t } = useLocale();
  return (
    <div className="rounded-2xl border border-brand-aqua/55 bg-gradient-to-r from-brand-mint via-white/90 to-brand-aqua-light/50 px-5 py-4 text-sm text-brand-muted shadow-sm">
      <span className="font-semibold text-brand-ink">{feature}</span>
      {" — "}
      {t.common.comingSoon}. {t.common.mockData}
    </div>
  );
}
