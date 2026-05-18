"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Surgeon } from "@/types/domain";
import { getReviewsForSurgeon } from "@/lib/mock-data";
import { procedureLabelFromSlug } from "@/lib/procedure-label";
import { easeEditorial } from "@/lib/motion";

export function SurgeonProfileMockup({ surgeon }: { surgeon: Surgeon }) {
  const reduce = useReducedMotion();
  const reviews = getReviewsForSurgeon(surgeon.id).filter((r) => r.status === "approved");
  const satisfactionPct = Math.round((surgeon.patientRating / 5) * 100);

  const card = (
    <article className="overflow-hidden rounded-xl border border-brand-outline/80 bg-white shadow-soft">
      <div className="grid sm:grid-cols-[7.5rem_1fr]">
        <div className="relative flex min-h-[9rem] flex-col items-center justify-center bg-gradient-to-br from-brand-sand to-brand-blue-light/25 p-4">
          <div
            className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-white text-2xl font-bold text-brand-blue shadow-sm ring-1 ring-brand-outline/60"
            aria-hidden
          >
            {surgeon.name.replace(/Dr\.?\s*/i, "").charAt(0)}
          </div>
          <p className="mt-2 text-[9px] font-medium uppercase tracking-wide text-brand-muted">
            Photo placeholder
          </p>
          {surgeon.verified ? (
            <span className="mt-2 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold uppercase text-emerald-900 ring-1 ring-emerald-200">
              Verified
            </span>
          ) : null}
        </div>

        <div className="p-4 sm:p-5">
          <h3 className="font-display text-xl font-medium text-brand-ink">{surgeon.name}</h3>
          <p className="text-sm text-brand-blue">{surgeon.specialty}</p>
          <p className="mt-1 text-xs text-brand-muted">
            {surgeon.clinic} · {surgeon.city}
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-lg bg-brand-ivory py-2">
              <p className="text-brand-muted">Satisfaction</p>
              <p className="font-bold text-brand-teal">{satisfactionPct}%</p>
            </div>
            <div className="rounded-lg bg-brand-ivory py-2">
              <p className="text-brand-muted">Experience</p>
              <p className="font-bold text-brand-ink">{surgeon.experienceYears} yrs</p>
            </div>
            <div className="rounded-lg bg-brand-ivory py-2">
              <p className="text-brand-muted">Reviews</p>
              <p className="font-bold text-brand-ink">{reviews.length}</p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-1">
            {surgeon.procedures.slice(0, 4).map((slug) => (
              <span
                key={slug}
                className="rounded-md bg-brand-sand/80 px-2 py-0.5 text-[10px] font-medium text-brand-ink"
              >
                {procedureLabelFromSlug(slug)}
              </span>
            ))}
          </div>

          <Link
            href={`/surgeons/${surgeon.id}`}
            className="mt-4 flex min-h-[2.75rem] w-full items-center justify-center rounded-lg border border-brand-outline bg-brand-ivory text-sm font-semibold text-brand-ink transition-colors hover:border-brand-teal/40 hover:bg-white"
          >
            View Profile
          </Link>
        </div>
      </div>
    </article>
  );

  if (reduce) return card;
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4, ease: easeEditorial }}>
      {card}
    </motion.div>
  );
}
