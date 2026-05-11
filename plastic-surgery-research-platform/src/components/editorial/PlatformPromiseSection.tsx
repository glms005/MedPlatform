"use client";

import { platformPromises } from "@/lib/editorial-landing";
import { Reveal } from "@/components/motion";
import { SectionShell } from "./SectionShell";

export function PlatformPromiseSection() {
  return (
    <SectionShell
      id="platform"
      bleed
      className="border-t border-brand-outline/60 bg-brand-sand/35 py-28 sm:py-36 lg:py-44"
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-blue">
            Platform promise
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.05rem,3.85vw,3.05rem)] font-medium tracking-tight text-brand-ink">
            Built for clarity—not hype
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-muted">
            Everything here is oriented toward transparency, comparison, and
            informed conversations with qualified clinicians—not sales funnels.
          </p>
        </Reveal>

        <div className="grid gap-x-14 gap-y-14 sm:grid-cols-2 lg:col-span-7 lg:gap-y-16">
          {platformPromises.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="border-t border-brand-outline/85 pt-6">
                <p className="font-mono text-[12px] tabular-nums text-brand-accent/92">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-lg font-medium tracking-tight text-brand-ink lg:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.925rem] leading-relaxed text-brand-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
