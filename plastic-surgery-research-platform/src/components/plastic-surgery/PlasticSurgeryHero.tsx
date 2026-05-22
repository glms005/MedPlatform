"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { easeEditorial } from "@/lib/motion";

export function PlasticSurgeryHero() {
  const { t } = useLocale();
  const hero = t.plasticSurgeryPage.hero;
  const reduce = useReducedMotion();

  return (
    <section
      className="hero-carousel relative w-full overflow-hidden border-b border-brand-outline/40"
      aria-labelledby="plastic-surgery-hero-heading"
    >
      <div className="hero-carousel-stage relative h-[min(58vh,480px)] w-full sm:h-[min(64vh,540px)] lg:h-[min(68vh,600px)]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/home/plastic-surgery.png"
            alt="Professional clinical consultation for surgical planning in calm neutral tones"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="hero-carousel-overlay pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-brand-champagne/70 via-brand-teal/18 to-brand-slate/48"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-brand-ivory/45 via-transparent to-white/8"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] items-end px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 lg:px-8 lg:pb-14">
          {reduce ? (
            <HeroCopy hero={hero} />
          ) : (
            <motion.div
              className="max-w-xl sm:max-w-2xl lg:max-w-3xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: easeEditorial }}
            >
              <HeroCopy hero={hero} />
            </motion.div>
          )}
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-24 bg-gradient-to-b from-white/40 to-transparent sm:h-28"
          aria-hidden
        />
      </div>
    </section>
  );
}

function HeroCopy({
  hero,
}: {
  hero: {
    eyebrow: string;
    headline: string;
    supporting: string;
    cta: string;
    ctaSecondary: string;
  };
}) {
  return (
    <>
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-teal-dark/90 sm:text-[11px]">
        {hero.eyebrow}
      </p>
      <h1
        id="plastic-surgery-hero-heading"
        className="mt-3 font-display text-[clamp(1.75rem,5.5vw,3.25rem)] font-medium leading-[1.08] tracking-tight text-brand-slate"
      >
        {hero.headline}
      </h1>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-brand-slate/85 sm:text-base sm:leading-relaxed lg:text-lg">
        {hero.supporting}
      </p>
      <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
        <Link href="#guides" className="warm-btn-primary w-full justify-center sm:w-auto">
          {hero.cta}
        </Link>
        <Link href="/surgeons" className="warm-btn-secondary w-full justify-center sm:w-auto">
          {hero.ctaSecondary}
        </Link>
      </div>
    </>
  );
}
