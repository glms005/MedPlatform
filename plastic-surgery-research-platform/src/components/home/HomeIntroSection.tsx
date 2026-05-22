"use client";

import Link from "next/link";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion";
import { useLocale } from "@/components/providers/LocaleProvider";

const VALUE_ICONS = [
  (
    <svg key="heart" viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M12 21s-6.5-4.2-9-8.2C1.2 9.4 3.4 5 7.5 5c2.1 0 3.6 1.1 4.5 2.3C12.9 6.1 14.4 5 16.5 5 20.6 5 22.8 9.4 21 12.8 18.5 16.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  (
    <svg key="shield" viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M12 3 4 7v6c0 4.2 3.2 7.4 8 9 4.8-1.6 8-4.8 8-9V7l-8-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.5 11 14l3.5-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  (
    <svg key="person" viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
] as const;

const BODY_ICONS = [
  (
    <svg key="people" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" aria-hidden>
      <path
        d="M8 10a4 4 0 1 1 8 0M6 18c0-2.2 2.7-4 6-4s6 1.8 6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M4 10h16M12 6v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="stories" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" aria-hidden>
      <path
        d="M7 8h10M7 12h7M6 4h12a2 2 0 0 1 2 2v12l-3-2-3 2-3-2-3 2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
] as const;

export function HomeIntroSection() {
  const { t } = useLocale();
  const intro = t.home.intro;

  return (
    <section
      id="welcome"
      className="home-intro-section relative overflow-hidden border-b border-brand-outline/30 px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
      aria-labelledby="welcome-heading"
    >
      <div className="home-intro-glow home-intro-glow--warm pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full" aria-hidden />
      <div className="home-intro-glow home-intro-glow--soft pointer-events-none absolute -left-24 bottom-8 h-56 w-56 rounded-full" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-12 h-px w-[min(90%,36rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-sage/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[860px]">
        <Reveal className="text-center">
          <p className="text-sm font-medium tracking-wide text-brand-muted sm:text-base">
            {t.home.tagline}
          </p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-teal">
            {intro.eyebrow}
          </p>
          <h1
            id="welcome-heading"
            className="mt-4 font-display text-[clamp(1.9rem,4.8vw,3rem)] font-medium leading-[1.1] tracking-tight text-brand-ink"
          >
            {intro.title}
          </h1>
        </Reveal>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {intro.values.map((label, i) => (
            <li key={label}>
              <span className="home-intro-value-pill inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold text-brand-ink sm:text-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-brand-teal shadow-sm">
                  {VALUE_ICONS[i]}
                </span>
                {label}
              </span>
            </li>
          ))}
        </ul>

        <Reveal delay={0.08} className="mt-8 sm:mt-10">
          <div className="home-intro-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-sage/25 blur-2xl"
              aria-hidden
            />

            <div className="home-intro-lead relative rounded-2xl border border-brand-outline bg-gradient-to-br from-brand-cream via-white to-brand-sand/80 px-5 py-5 sm:px-6 sm:py-6">
              <span
                className="absolute -left-1 top-5 bottom-5 w-1 rounded-full bg-gradient-to-b from-brand-sage via-brand-teal to-brand-blue/70"
                aria-hidden
              />
              <p className="pl-3 text-base leading-[1.8] text-brand-ink sm:text-lg sm:leading-[1.85]">
                {intro.lead}
              </p>
            </div>

            <StaggerReveal className="mt-6 space-y-4" stagger={0.07}>
              {intro.body.map((paragraph, i) => (
                <StaggerItem key={paragraph.slice(0, 24)}>
                  <div className="flex gap-3.5 rounded-2xl bg-white/55 px-4 py-4 ring-1 ring-white/70 sm:gap-4 sm:px-5 sm:py-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-teal-light/80 text-brand-teal">
                      {BODY_ICONS[i]}
                    </span>
                    <p className="text-[0.95rem] leading-[1.75] text-brand-muted sm:text-base sm:leading-[1.8]">
                      {paragraph}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>

            <Reveal delay={0.12} className="mt-6">
              <aside
                className="home-intro-guidelines rounded-2xl px-5 py-5 sm:px-6 sm:py-6"
                aria-labelledby="welcome-guidelines"
              >
                <h2
                  id="welcome-guidelines"
                  className="flex items-center gap-2.5 text-sm font-semibold text-brand-teal-dark"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-base shadow-sm"
                    aria-hidden
                  >
                    🤝
                  </span>
                  {intro.guidelinesTitle}
                </h2>
                <p className="mt-3 text-sm leading-[1.75] text-brand-ink/85 sm:text-[0.95rem]">
                  {intro.guidelines}
                </p>
              </aside>
            </Reveal>

            <div className="home-intro-closing relative mt-8 overflow-hidden rounded-2xl px-5 py-6 text-center sm:px-8 sm:py-7">
              <span
                className="pointer-events-none absolute left-4 top-2 font-display text-5xl leading-none text-brand-teal/15 sm:left-6"
                aria-hidden
              >
                “
              </span>
              <p className="relative font-display text-lg font-medium leading-snug text-brand-ink sm:text-xl">
                {intro.closing}
              </p>
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link href="/forum" className="warm-btn-primary gap-2">
                <span aria-hidden>💬</span>
                {intro.ctaCommunity}
              </Link>
              <Link href="/rules" className="warm-btn-secondary">
                {intro.ctaRules}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
