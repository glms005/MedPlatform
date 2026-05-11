"use client";

import { researchJourneySteps } from "@/lib/editorial-landing";
import { Reveal } from "@/components/motion";
import { SectionShell } from "./SectionShell";

export function ResearchJourneySection() {
  return (
    <SectionShell bleed className="bg-brand-ivory py-28 sm:py-36 lg:py-40">
      <Reveal className="max-w-editorial-wide">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-blue">
          A disciplined path through noise
        </p>
        <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.1rem,4.2vw,3.25rem)] font-medium tracking-tight text-brand-ink">
          Where disciplined research meets human decisions
        </h2>
        <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-brand-muted">
          Move from unstructured browsing to clinician-ready questions—with structure at every stage.
          This is informational research only; it does not replace medical assessment.
        </p>
      </Reveal>

      <div className="mt-14 grid divide-y divide-brand-outline/65 border border-brand-outline/65 bg-white/40 backdrop-blur-[2px] sm:mt-20 lg:mt-24 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
        {researchJourneySteps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.05} className="p-8 sm:p-10">
            <span className="font-mono text-[13px] tabular-nums text-brand-accent">
              /{String(i + 1).padStart(2, "0")}
            </span>
            <div className="mt-7 h-px w-9 bg-brand-blue/35" aria-hidden />
            <h3 className="mt-8 font-display text-xl font-medium tracking-tight text-brand-ink lg:text-[1.15rem]">
              {step.title}
            </h3>
            <p className="mt-4 text-[0.928rem] leading-relaxed text-brand-muted">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
