"use client";

import { useLocale } from "@/components/providers/LocaleProvider";

export function MedicalDisclaimer({ compact }: { compact?: boolean }) {
  const { t } = useLocale();
  return (
    <p
      className={
        compact
          ? "text-xs leading-relaxed text-brand-muted"
          : "text-sm leading-relaxed text-brand-muted"
      }
    >
      {t.common.disclaimer}
    </p>
  );
}
