"use client";

import { Reveal } from "@/components/motion";
import { SectionShell } from "./SectionShell";

export function MedicalDisclaimerSection() {
  return (
    <SectionShell
      id="medical-disclaimer"
      className="border-t border-brand-outline/60 bg-brand-sand/25 py-20 sm:py-24"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-sm border border-brand-outline/80 bg-white/90 p-8 shadow-sm backdrop-blur-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
            Important
          </p>
          <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-brand-ink sm:text-[1.75rem]">
            Medical disclaimer
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted">
            This platform is for informational purposes only and does not
            provide medical advice, diagnosis, or treatment recommendations.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
