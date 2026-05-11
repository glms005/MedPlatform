"use client";

import { problemPoints } from "@/lib/editorial-landing";
import { Reveal } from "@/components/motion";
import { SectionShell } from "./SectionShell";

export function ProblemSection() {
  return (
    <SectionShell
      id="the-problem"
      bleed
      className="border-t border-brand-outline/55 bg-brand-ivory py-28 sm:py-36 lg:py-44"
    >
      <Reveal>
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-blue">
          The research gap
        </p>
        <h2 className="mt-6 max-w-[18ch] font-display text-[clamp(2rem,4.1vw,3.55rem)] font-medium tracking-tight text-brand-ink lg:max-w-4xl">
          High-stakes decisions deserve better information
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted">
          People often rely on Instagram photos, incomplete reviews, unclear
          qualifications, and unrealistic expectations when choosing a plastic
          surgeon. This platform exists to make serious research calmer and more
          structured.
        </p>
      </Reveal>

      <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:gap-14">
        {problemPoints.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="border-t border-brand-outline pt-8">
              <h3 className="font-display text-[1.2rem] font-medium tracking-tight text-brand-ink">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-brand-muted">
                {p.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
