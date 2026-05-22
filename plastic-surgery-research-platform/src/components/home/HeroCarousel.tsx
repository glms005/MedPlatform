"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { HERO_SLIDES } from "@/lib/home-hero-slides";
import { easeEditorial } from "@/lib/motion";

const INTERVAL_MS = 6500;

export function HeroCarousel() {
  const { t } = useLocale();
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActive((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const next = useCallback(() => {
    goTo(active + 1);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo(active - 1);
  }, [active, goTo]);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(next, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [next, paused, reduceMotion]);

  const slide = HERO_SLIDES[active];
  const copy = t.home.hero.slides[slide.id];

  return (
    <section
      className="hero-carousel relative w-full overflow-hidden border-b border-brand-outline/40"
      aria-roledescription="carousel"
      aria-label={t.home.hero.label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="hero-carousel-stage relative h-[min(72vh,520px)] w-full sm:h-[min(76vh,600px)] lg:h-[min(80vh,680px)]">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.85,
              ease: easeEditorial,
            }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                initial={{ scale: reduceMotion ? 1 : 1.06 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: reduceMotion ? 0.01 : INTERVAL_MS / 1000,
                  ease: easeEditorial,
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </motion.div>
            </div>

            <div
              className={`hero-carousel-overlay pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r ${slide.overlay}`}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-brand-ivory/40 via-transparent to-white/5"
              aria-hidden
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] items-end px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 lg:px-8 lg:pb-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={`copy-${slide.id}`}
              className="max-w-xl sm:max-w-2xl lg:max-w-3xl"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: easeEditorial }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-teal-dark/90 sm:text-[11px]">
                {copy.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,5.5vw,3.25rem)] font-medium leading-[1.08] tracking-tight text-brand-slate">
                {copy.headline}
              </h2>
              <p className="mt-4 max-w-prose text-sm leading-relaxed text-brand-slate/85 sm:text-base sm:leading-relaxed lg:text-lg">
                {copy.supporting}
              </p>
              <Link
                href={slide.href}
                className="warm-btn-primary mt-6 inline-flex min-h-[2.75rem] w-full justify-center sm:mt-8 sm:w-auto"
              >
                {copy.cta}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-24 bg-gradient-to-b from-white/40 to-transparent sm:h-28" aria-hidden />
      </div>

      <div className="hero-carousel-controls absolute bottom-4 left-0 right-0 z-20 mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 sm:bottom-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="hero-carousel-arrow pointer-events-auto"
            aria-label={t.home.hero.prev}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="hero-carousel-arrow pointer-events-auto"
            aria-label={t.home.hero.next}
          >
            ›
          </button>
        </div>

        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label={t.home.hero.label}
        >
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`${t.home.hero.slides[s.id].headline} — slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`hero-carousel-dot pointer-events-auto ${i === active ? "hero-carousel-dot--active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
