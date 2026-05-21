"use client";

import Link from "next/link";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion";
import { useLocale } from "@/components/providers/LocaleProvider";

export function HomeIntroSection() {
  const { t } = useLocale();
  const intro = t.home.intro;

  return (
    <section
      id="welcome"
      className="relative overflow-hidden border-b border-brand-outline/35 bg-gradient-to-b from-brand-champagne/80 via-brand-ivory to-brand-ivory px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
      aria-labelledby="welcome-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-brand-teal/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[820px]">
        <Reveal>
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-teal">
            {intro.eyebrow}
          </p>
          <h1
            id="welcome-heading"
            className="mt-4 text-center font-display text-[clamp(1.85rem,4.5vw,2.85rem)] font-medium leading-[1.12] tracking-tight text-brand-ink"
          >
            {intro.title}
          </h1>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 sm:mt-10">
          <div className="home-intro-panel rounded-[1.75rem] border border-brand-outline/50 bg-white/75 p-6 shadow-soft backdrop-blur-sm sm:p-8 lg:p-10">
            <p className="text-base leading-[1.75] text-brand-ink sm:text-lg sm:leading-[1.8]">
              {intro.lead}
            </p>

            <StaggerReveal className="mt-6 space-y-5" stagger={0.06}>
              {intro.body.map((paragraph) => (
                <StaggerItem key={paragraph.slice(0, 24)}>
                  <p className="text-[0.95rem] leading-[1.75] text-brand-muted sm:text-base sm:leading-[1.8]">
                    {paragraph}
                  </p>
                </StaggerItem>
              ))}
            </StaggerReveal>

            <Reveal delay={0.12} className="mt-7">
              <aside
                className="rounded-2xl border border-brand-teal/25 bg-brand-teal/6 px-5 py-5 sm:px-6 sm:py-6"
                aria-labelledby="welcome-guidelines"
              >
                <h2
                  id="welcome-guidelines"
                  className="flex items-center gap-2 text-sm font-semibold text-brand-teal"
                >
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-teal/15 text-xs"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {intro.guidelinesTitle}
                </h2>
                <p className="mt-3 text-sm leading-[1.7] text-brand-ink/90 sm:text-[0.95rem]">
                  {intro.guidelines}
                </p>
              </aside>
            </Reveal>

            <p className="mt-7 text-center font-display text-lg font-medium leading-snug text-brand-ink sm:text-xl">
              {intro.closing}
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/forum"
                className="inline-flex min-h-[3rem] items-center justify-center rounded-xl bg-brand-teal px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-teal-dark hover:shadow-lift"
              >
                {intro.ctaCommunity}
              </Link>
              <Link
                href="/rules"
                className="inline-flex min-h-[3rem] items-center justify-center rounded-xl border border-brand-outline bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition-all hover:bg-brand-sand"
              >
                {intro.ctaRules}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
