"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeEditorial } from "@/lib/motion";
import { FadeIn } from "@/components/motion";
import { EditorialLink } from "./EditorialLink";

const enter = {
  hidden: { opacity: 1, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.88, ease: easeEditorial } },
};

export function CinematicHero() {
  const reduce = useReducedMotion();

  const panel = (
    <div className="editorial-visual-panel editorial-grain relative min-h-[18rem] w-full overflow-hidden rounded-sm lg:min-h-[min(72vh,44rem)]">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-light/85 via-brand-sand/90 to-brand-ivory opacity-95" aria-hidden />
      <div className="absolute inset-[12%_8%_9%_8%] border border-brand-outline/45" aria-hidden />
      <div
        className="absolute left-10 top-[18%] h-28 w-px bg-gradient-to-b from-brand-accent/65 to-transparent lg:left-[14%]"
        aria-hidden
      />
      <p className="absolute bottom-14 left-9 max-w-[12rem] text-[11px] font-semibold uppercase leading-relaxed tracking-[0.26em] text-brand-ink/60 lg:left-14">
        Surgeon directory · Procedures · Verified signals
      </p>
      <p
        className="pointer-events-none absolute right-[-2.85rem] top-1/2 hidden -translate-y-1/2 rotate-90 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.38em] text-brand-muted/62 lg:right-[-7.75rem] lg:block"
        aria-hidden
      >
        plastic surgery · research corpus
      </p>
    </div>
  );

  const copy = (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
        Where evidence meets intention
      </p>
      <h1 className="mt-7 max-w-[18ch] font-display text-hero-display text-brand-ink">
        Research Plastic Surgery With Confidence
      </h1>
      <p className="mt-8 max-w-xl text-[1.05rem] leading-[1.7] text-brand-muted sm:text-xl sm:leading-[1.62]">
        Explore surgeons, procedures, patient experiences, and transparent information before making a
        serious medical decision.
      </p>
      <div className="mt-11 flex flex-wrap gap-4 lg:gap-5">
        <EditorialLink href="/surgeons" variant="solid">
          Explore Surgeons
        </EditorialLink>
        <EditorialLink href="/reviews/new" variant="outline">
          Share Your Experience
        </EditorialLink>
      </div>
    </>
  );

  return (
    <header
      id="introduction"
      className="relative min-h-ed-hero overflow-hidden border-b border-brand-outline/50 bg-gradient-to-b from-brand-champagne via-brand-ivory to-brand-sand"
    >
      <div
        className="pointer-events-none absolute inset-x-[-12%] top-[-32%] h-[92%] bg-[radial-gradient(ellipse_68%_70%_at_60%_-8%,rgba(74,124,158,0.13),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09] shadow-[inset_0_-120px_100px_-50px_rgb(243_239_230)]"
        aria-hidden
      />

      <div className="relative mx-auto grid min-h-ed-hero max-w-[1500px] items-center gap-12 px-4 pb-24 pt-11 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:px-12 lg:pb-36 lg:pt-16 xl:gap-10">
        <div className="lg:col-span-5 xl:col-span-5 xl:col-start-1">
          {reduce ? (
            <div className="max-w-xl">{copy}</div>
          ) : (
            <motion.div className="max-w-xl" variants={enter} initial="hidden" animate="visible">
              {copy}
            </motion.div>
          )}
        </div>

        {reduce ? (
          <div className="lg:col-span-6 lg:col-start-7 xl:col-span-6 xl:col-start-8">{panel}</div>
        ) : (
          <motion.div
            className="lg:col-span-6 lg:col-start-7 xl:col-span-6 xl:col-start-8"
            initial={{ opacity: 1, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeEditorial, delay: 0.2 }}
          >
            {panel}
          </motion.div>
        )}
      </div>

      <FadeIn delay={0.92} className="pointer-events-none absolute bottom-9 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.4em] text-brand-muted/75">
          <span>Explore</span>
          <span className="block h-[2.875rem] w-px bg-gradient-to-b from-brand-outline via-brand-accent/42 to-transparent" />
        </div>
      </FadeIn>
    </header>
  );
}
