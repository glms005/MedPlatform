"use client";

import Link from "next/link";
import { PageWidth } from "@/components/layout/PageWidth";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion";
import { useLocale } from "@/components/providers/LocaleProvider";

const VALUE_ICONS = [
  (
    <svg key="book" viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M6 4h12a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  (
    <svg key="clock" viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
    </svg>
  ),
] as const;

const BODY_ICONS = [
  (
    <svg key="list" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" aria-hidden>
      <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="chat" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" aria-hidden>
      <path
        d="M7 9h10M7 13h6M6 5h12a2 2 0 0 1 2 2v10l-3-2-3 2-3-2-3 2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
] as const;

export function PlasticSurgeryIntroSection() {
  const { t } = useLocale();
  const intro = t.plasticSurgeryPage.intro;

  return (
    <section
      id="about"
      className="home-intro-section relative overflow-hidden border-b border-brand-outline/30 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
      aria-labelledby="plastic-surgery-intro-heading"
    >
      <div className="home-intro-glow home-intro-glow--warm pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full" aria-hidden />
      <div className="home-intro-glow home-intro-glow--soft pointer-events-none absolute -left-24 bottom-8 h-56 w-56 rounded-full" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-12 h-px w-[min(94%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-blue/25 to-transparent"
        aria-hidden
      />

      <PageWidth className="relative">
        <Reveal className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-blue">
            {intro.eyebrow}
          </p>
          <h2
            id="plastic-surgery-intro-heading"
            className="mx-auto mt-4 max-w-[28ch] font-display text-[clamp(1.65rem,5vw,3rem)] font-medium leading-[1.12] tracking-tight text-brand-slate sm:max-w-none"
          >
            {intro.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[40ch] text-sm leading-relaxed text-brand-muted sm:max-w-2xl sm:text-base">
            {intro.subtitle}
          </p>
        </Reveal>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
          {intro.values.map((label, i) => (
            <li key={label} className="max-w-full">
              <span className="home-intro-value-pill inline-flex max-w-full items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-brand-ink sm:px-3.5 sm:text-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80 text-brand-blue shadow-sm">
                  {VALUE_ICONS[i]}
                </span>
                <span className="truncate sm:whitespace-normal">{label}</span>
              </span>
            </li>
          ))}
        </ul>

        <Reveal delay={0.08} className="mt-6 sm:mt-8 lg:mt-10">
          <div className="home-intro-panel relative w-full overflow-hidden rounded-2xl p-4 sm:rounded-[1.75rem] sm:p-6 lg:p-8 xl:p-10">
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-aqua/30 blur-2xl"
              aria-hidden
            />

            <div className="home-intro-lead relative rounded-xl border border-brand-aqua/50 bg-gradient-to-br from-brand-mint via-white/95 to-brand-aqua-light/80 px-4 py-4 sm:rounded-2xl sm:px-6 sm:py-6">
              <span
                className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-brand-aqua via-brand-teal to-brand-teal/40 sm:left-0"
                aria-hidden
              />
              <p className="pl-3 text-[0.95rem] leading-[1.75] text-brand-ink sm:text-base sm:leading-[1.85] lg:text-lg">
                {intro.lead}
              </p>
            </div>

            <StaggerReveal
              className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 lg:grid-cols-2 lg:gap-5"
              stagger={0.07}
            >
              {intro.body.map((paragraph, i) => (
                <StaggerItem key={paragraph.slice(0, 24)}>
                  <div className="flex h-full gap-3 rounded-xl bg-white/55 px-3.5 py-3.5 ring-1 ring-white/70 sm:gap-4 sm:rounded-2xl sm:px-5 sm:py-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-light/90 text-brand-blue">
                      {BODY_ICONS[i]}
                    </span>
                    <p className="min-w-0 flex-1 text-[0.9rem] leading-[1.7] text-brand-muted sm:text-[0.95rem] sm:leading-[1.75] lg:text-base">
                      {paragraph}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>

            <Reveal delay={0.12} className="mt-5 sm:mt-6">
              <aside
                className="home-intro-guidelines rounded-xl px-4 py-4 sm:rounded-2xl sm:px-6 sm:py-6"
                aria-labelledby="plastic-surgery-disclaimer"
              >
                <h3
                  id="plastic-surgery-disclaimer"
                  className="flex flex-wrap items-center gap-2.5 text-sm font-semibold text-brand-teal-dark"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/70 text-base shadow-sm"
                    aria-hidden
                  >
                    ⚕
                  </span>
                  <span className="min-w-0">{intro.disclaimerTitle}</span>
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-brand-ink/85 sm:text-[0.95rem] sm:leading-[1.75]">
                  {intro.disclaimer}
                </p>
              </aside>
            </Reveal>

            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
              <Link href="#guides" className="warm-btn-primary w-full justify-center sm:w-auto">
                {intro.ctaGuides}
              </Link>
              <Link href="/forum" className="warm-btn-secondary w-full justify-center sm:w-auto">
                {intro.ctaForum}
              </Link>
            </div>
          </div>
        </Reveal>
      </PageWidth>
    </section>
  );
}
