"use client";

import { useLocale } from "@/components/providers/LocaleProvider";

export function ComingSoonBanner({ feature }: { feature: string }) {
  const { t } = useLocale();
  return (
    <div className="sw-notice px-5 py-4 text-sm">
      <span className="font-semibold text-brand-slate">{feature}</span>
      {" — "}
      {t.common.comingSoon}. {t.common.mockData}
    </div>
  );
}
