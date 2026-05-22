"use client";

import { Reveal } from "@/components/motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { SectionShell } from "./SectionShell";

export function MedicalDisclaimerSection() {
  const { t } = useLocale();

  return (
    <SectionShell
      id="medical-disclaimer"
      className="warm-section border-t border-brand-outline/40 bg-gradient-to-b from-brand-ivory to-brand-champagne/30 py-12 sm:py-14"
    >
      <Reveal>
        <div className="warm-panel mx-auto w-full max-w-4xl p-6 sm:p-8 lg:p-10">
          <p className="warm-eyebrow">Important</p>
          <h2 className="warm-title mt-4 text-2xl sm:text-[1.75rem]">Medical disclaimer</h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted">{t.common.disclaimer}</p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
