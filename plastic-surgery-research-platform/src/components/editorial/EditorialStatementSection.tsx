"use client";

import { Reveal } from "@/components/motion";

export function EditorialStatementSection() {
  return (
    <section className="border-y border-brand-outline/60 bg-brand-champagne/90">
      <div className="mx-auto max-w-editorial-wide px-4 py-[4.75rem] text-center sm:px-8 sm:py-28 lg:px-10">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-muted">
            The point of departure
          </p>
          <blockquote className="mt-10 font-display text-[1.95rem] font-medium italic leading-snug tracking-tight text-brand-ink sm:text-[clamp(2rem,3.8vw,2.85rem)]">
            Confidence is quieter than advertising—and it begins with comparing the right details the
            same way, every time.
          </blockquote>
          <div className="mx-auto mt-10 h-px w-24 bg-brand-accent/35" aria-hidden />
          <p className="mx-auto mt-10 max-w-editorial font-sans text-sm font-medium uppercase tracking-[0.2em] text-brand-muted">
            Evidence • transparency • pacing
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-[1.05rem]">
            This platform treats plastic surgery choices as longitudinal research—not a carousel of
            before-and-after thumbnails. Structured data and moderated discussion exist so you can
            think clearly before you schedule.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
