"use client";

import { surgeons } from "@/lib/mock-data";
import { Reveal } from "@/components/motion";
import { SectionShell } from "./SectionShell";
import { FeaturedSurgeonCard } from "./FeaturedSurgeonCard";

const featured = surgeons.slice(0, 3);

export function FeaturedSurgeonsSection() {
  return (
    <SectionShell
      id="surgeons"
      bleed
      className="scroll-mt-20 border-t border-brand-outline/55 bg-brand-champagne/55 py-28 sm:py-36 lg:py-44"
    >
      <Reveal className="max-w-4xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-blue">
          Directory preview
        </p>
        <h2 className="mt-6 font-display text-[clamp(2.05rem,3.9vw,3.2rem)] font-medium tracking-tight text-brand-ink">
          Featured surgeon profiles
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-brand-muted">
          Fictional profiles demonstrate how structured data supports comparison.
          Always verify credentials independently.
        </p>
      </Reveal>

      <div className="mt-20 grid gap-10 lg:grid-cols-3 lg:gap-8">
        {featured.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.1}>
            <FeaturedSurgeonCard surgeon={s} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
