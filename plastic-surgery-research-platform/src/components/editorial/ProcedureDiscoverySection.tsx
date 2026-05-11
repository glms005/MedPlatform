"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeEditorial } from "@/lib/motion";
import { procedureSpotlights } from "@/lib/editorial-landing";
import { Reveal } from "@/components/motion";
import { SectionShell } from "./SectionShell";

export function ProcedureDiscoverySection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell
      id="procedures"
      className="border-t border-brand-outline/60 bg-gradient-to-b from-brand-sand/20 to-brand-ivory py-24 sm:py-32 lg:py-40"
    >
      <Reveal className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-blue">
          Procedure library
        </p>
        <h2 className="mt-6 font-display text-[clamp(2.05rem,3.85vw,3.1rem)] font-medium tracking-tight text-brand-ink">
          Explore by procedure
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-brand-muted">
          Educational guides only—not medical advice. Use them to prepare
          questions for qualified clinicians.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {procedureSpotlights.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            {reduce ? (
              <Link
                href={`/procedures/${p.slug}`}
                className="group flex items-center justify-between rounded-sm border border-brand-outline/80 bg-white px-6 py-[1.125rem] shadow-sm transition hover:border-brand-blue/30 hover:shadow-soft"
              >
                <span className="font-display text-[1.12rem] font-medium text-brand-ink">
                  {p.label}
                </span>
                <span className="text-sm text-brand-blue transition group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            ) : (
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.35, ease: easeEditorial }}
              >
                <Link
                  href={`/procedures/${p.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-brand-outline/80 bg-white px-6 py-5 shadow-sm transition-colors duration-300 hover:border-brand-blue/30 hover:shadow-soft"
                >
                  <span className="font-display text-[1.12rem] font-medium text-brand-ink">
                    {p.label}
                  </span>
                  <span className="text-sm text-brand-blue transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-12 text-center">
        <Link
          href="/procedures"
          className="text-sm font-semibold text-brand-blue underline-offset-4 transition hover:underline"
        >
          View all procedures
        </Link>
      </Reveal>
    </SectionShell>
  );
}
