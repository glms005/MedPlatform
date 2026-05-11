"use client";

import { Reveal } from "@/components/motion";
import { EditorialLink } from "./EditorialLink";
import { SectionShell } from "./SectionShell";

export function FinalCtaSection() {
  return (
    <SectionShell
      id="early-access"
      bleed
      className="scroll-mt-20 border-t border-brand-outline/55 bg-gradient-to-b from-brand-ivory via-white to-brand-champagne py-28 sm:py-36 lg:py-44"
    >
      <Reveal className="text-center">
        <h2
          id="waitlist"
          className="mx-auto max-w-editorial-wide scroll-mt-24 font-display text-[clamp(2.35rem,4.6vw,3.95rem)] font-medium leading-[1.12] tracking-tight text-brand-ink"
        >
          Make Your Decision With More Clarity
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-brand-muted">
          Start with structured research. Build better questions. Move forward with transparency.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <EditorialLink href="/surgeons" variant="solid" className="min-w-[11.5rem]">
            Browse Surgeons
          </EditorialLink>
          <EditorialLink href="#waitlist" variant="outline">
            Join Early Access
          </EditorialLink>
        </div>
        <p className="mx-auto mt-8 max-w-md text-xs text-brand-muted">
          Early access is invitation-based in a future release. For now, explore the public directory
          and guides.
        </p>
      </Reveal>
    </SectionShell>
  );
}
