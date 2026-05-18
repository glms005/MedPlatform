"use client";

import { useLocale } from "@/components/providers/LocaleProvider";

export function ComingSoonBanner({ feature }: { feature: string }) {
  const { t } = useLocale();
  return (
    <div className="rounded-sm border border-dashed border-brand-blue/35 bg-brand-blue/5 px-4 py-3 text-sm text-brand-muted">
      <span className="font-semibold text-brand-ink">{feature}</span>
      {" — "}
      {t.common.comingSoon}. {t.common.mockData}
    </div>
  );
}
