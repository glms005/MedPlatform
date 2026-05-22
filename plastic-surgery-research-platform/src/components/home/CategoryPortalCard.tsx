"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { HomeCategoryConfig } from "@/lib/home-categories";
import { easeEditorial } from "@/lib/motion";

type CategoryPortalCardProps = {
  config: HomeCategoryConfig;
  eyebrow: string;
  title: string;
  description: string;
  exploreLabel: string;
  index: number;
};

export function CategoryPortalCard({
  config,
  eyebrow,
  title,
  description,
  exploreLabel,
  index,
}: CategoryPortalCardProps) {
  const reduce = useReducedMotion();

  const card = (
    <Link
      href={config.href}
      className="portal-card group relative flex aspect-[3/4] min-h-[280px] w-full flex-col overflow-hidden rounded-[1.75rem] sm:min-h-[300px] sm:rounded-[2rem] lg:aspect-[4/5] lg:min-h-[340px]"
      aria-label={`${exploreLabel}: ${title}`}
    >
      <div className="portal-card-media absolute inset-0" aria-hidden>
        <Image
          src={config.image}
          alt={config.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="portal-card-image object-cover"
          priority={index < 2}
        />
      </div>

      <div
        className={`portal-card-overlay pointer-events-none absolute inset-0 bg-gradient-to-t ${config.overlay}`}
        aria-hidden
      />
      <div
        className="portal-card-overlay portal-card-overlay-sheen pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue-light/20 via-transparent to-brand-ink/20"
        aria-hidden
      />

      <span
        className="portal-card-plus absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full text-lg font-light backdrop-blur-md transition-all duration-300 group-hover:scale-110 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
        aria-hidden
      >
        +
      </span>

      <div className="portal-card-glass relative z-10 mt-auto p-3 sm:p-4">
        <div className="flex items-start gap-2.5">
          <span
            className="mt-1.5 h-2 w-2 shrink-0 rounded-full border border-white/70"
            aria-hidden
          />
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-[11px]">
              {eyebrow}
            </p>
            <h2 className="mt-1 font-display text-lg font-medium leading-tight tracking-tight text-white sm:text-xl lg:text-[1.35rem]">
              {title}
            </h2>
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/72 sm:text-sm">
              {description}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-white/90 transition-colors group-hover:text-white sm:text-xs">
              {exploreLabel}
              <span
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              >
                →
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );

  if (reduce) return card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: easeEditorial }}
    >
      {card}
    </motion.div>
  );
}
