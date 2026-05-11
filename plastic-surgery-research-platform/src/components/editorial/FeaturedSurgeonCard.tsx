"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeEditorial } from "@/lib/motion";
import type { Surgeon } from "@/types/domain";
import { procedureLabelFromSlug } from "@/lib/procedure-label";

export function FeaturedSurgeonCard({ surgeon }: { surgeon: Surgeon }) {
  const reduce = useReducedMotion();

  const inner = (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-brand-outline/80 bg-brand-surface shadow-soft transition-[box-shadow] duration-[480ms] hover:shadow-lift">
      {/* Image placeholder — editorial block */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-brand-sand via-brand-ivory to-brand-blue-light/25">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[radial-gradient(circle_at_30%_20%,rgba(44,79,76,0.12),transparent_50%)]" />
        <div className="absolute inset-x-8 bottom-8 top-auto h-px bg-brand-outline/60" />
        <p className="absolute bottom-6 left-6 right-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-muted">
          Profile preview · fictional data
        </p>
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={
              surgeon.verified
                ? "rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-900 ring-1 ring-emerald-200/80"
                : "rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-700 ring-1 ring-slate-200"
            }
          >
            {surgeon.verified ? "Verified" : "Unverified"}
          </span>
          <span className="text-xs text-brand-muted">
            {surgeon.patientRating.toFixed(1)} / 5 · structured reviews
          </span>
        </div>

        <h3 className="mt-4 font-display text-[1.4rem] font-medium tracking-tight text-brand-ink sm:text-[1.5rem]">
          {surgeon.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-brand-blue">
          {surgeon.specialty}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {surgeon.procedures.slice(0, 4).map((slug) => (
            <span
              key={slug}
              className="rounded-md bg-brand-sand/80 px-2 py-1 text-xs text-brand-ink ring-1 ring-brand-outline/50"
            >
              {procedureLabelFromSlug(slug)}
            </span>
          ))}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-muted line-clamp-3">
          {surgeon.reviewSummary}
        </p>

        <Link
          href={`/surgeons/${surgeon.id}`}
          className="mt-6 inline-flex w-full items-center justify-center border border-brand-outline bg-white py-[0.7rem] text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink transition-colors duration-300 hover:border-brand-accent/52 hover:bg-brand-ivory"
        >
          View Profile
        </Link>
      </div>
    </article>
  );

  if (reduce) return inner;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, ease: easeEditorial }}
    >
      {inner}
    </motion.div>
  );
}
