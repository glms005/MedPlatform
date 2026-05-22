"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroTrustIndicators, platformStats } from "@/lib/home-ecosystem";
import {
  forumThreads,
  getCommentsForThread,
  getSurgeonById,
  getApprovedReviews,
} from "@/lib/mock-data";
import { easeEditorial } from "@/lib/motion";
import { FadeIn } from "@/components/motion";
import { ProductChrome } from "./ProductChrome";
import { MiniThreadPreview } from "./MiniThreadPreview";

const heroThread = forumThreads[0];
const heroSurgeon = getSurgeonById("s1");
const latestReview = getApprovedReviews()[0];

export function ProductHero() {
  const reduce = useReducedMotion();
  const threadComments = getCommentsForThread(heroThread.id);

  return (
    <header
      id="introduction"
      className="relative overflow-hidden border-b border-brand-outline/50 bg-gradient-to-b from-brand-mint via-brand-ivory to-brand-aqua-light pt-[3.25rem] sm:pt-14"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_75%_-5%,rgba(61,107,102,0.12),transparent_58%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-4 pb-12 pt-8 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            {reduce ? (
              <HeroCopy />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, ease: easeEditorial }}
              >
                <HeroCopy />
              </motion.div>
            )}
          </div>

          <div className="relative lg:col-span-7">
            {!reduce ? (
              <motion.div
                className="relative space-y-4"
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.05, ease: easeEditorial, delay: 0.18 }}
              >
                <ProductChrome
                  title="sharewell.app/community"
                  badge="Live preview"
                  className="relative z-20"
                >
                  <MiniThreadPreview thread={heroThread} comments={threadComments} />
                </ProductChrome>

                <div className="grid gap-4 sm:grid-cols-2 sm:pl-6 lg:pl-10">
                  {heroSurgeon ? (
                    <ProductChrome
                      title="sharewell.app/surgeons/profile"
                      className="sm:-mt-6"
                    >
                      <SurgeonSnippet surgeon={heroSurgeon} />
                    </ProductChrome>
                  ) : null}
                  {latestReview ? (
                    <ProductChrome title="sharewell.app/reviews" badge="Moderated">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-brand-ink">
                          {latestReview.authorDisplay}
                        </p>
                        <p className="line-clamp-3 text-xs leading-relaxed text-brand-muted">
                          {latestReview.comment}
                        </p>
                        <p className="text-[10px] font-medium text-brand-teal">
                          Approved · {latestReview.satisfactionScore}/5 satisfaction
                        </p>
                      </div>
                    </ProductChrome>
                  ) : null}
                </div>
              </motion.div>
            ) : (
              <ProductChrome title="sharewell.app" badge="Preview">
                <MiniThreadPreview thread={heroThread} comments={threadComments} />
              </ProductChrome>
            )}

            <FadeIn
              delay={0.55}
              className="absolute -right-1 top-6 hidden rounded-xl border border-brand-outline/80 bg-white px-3 py-2.5 shadow-lift lg:block"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
                Active now
              </p>
              <p className="text-lg font-bold text-brand-ink">{platformStats.activeToday}</p>
              <p className="text-[10px] text-brand-muted">researchers (mock)</p>
            </FadeIn>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroCopy() {
  return (
    <>
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-teal">
        Trust-first · Georgia · fictional demo
      </p>
      <h1 className="mt-4 font-display text-[clamp(2.15rem,5.2vw,3.65rem)] font-medium leading-[1.04] tracking-tight text-brand-ink">
        Research Plastic Surgery Before You Decide
      </h1>
      <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-muted sm:text-lg">
        Explore surgeons, clinics, recovery stories, reviews, and real patient experiences — all
        in one transparent platform.
      </p>

      <ul className="mt-7 grid grid-cols-2 gap-2 sm:gap-2.5">
        {heroTrustIndicators.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="flex min-h-[2.75rem] items-center gap-2 rounded-lg border border-brand-outline/70 bg-white/85 px-3 py-2.5 text-xs font-semibold text-brand-ink transition-all hover:border-brand-teal/40 hover:shadow-soft sm:text-sm"
            >
              <span className="text-brand-teal" aria-hidden>
                ✓
              </span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <dl className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <Stat label="Surgeons" value={platformStats.surgeons} />
        <Stat label="Reviews" value={platformStats.reviews} />
        <Stat label="Threads" value={platformStats.forumThreads} />
        <Stat label="Clinics" value={platformStats.clinics} />
      </dl>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href="/surgeons"
          className="inline-flex min-h-[3rem] items-center justify-center rounded-lg bg-brand-teal px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-teal-dark hover:shadow-lift"
        >
          Explore surgeons
        </Link>
        <Link
          href="/forum"
          className="inline-flex min-h-[3rem] items-center justify-center rounded-lg border border-brand-outline bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition-all hover:bg-brand-sand"
        >
          Join community
        </Link>
      </div>
    </>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-brand-outline/60 bg-white/75 px-3 py-2 backdrop-blur-sm">
      <dt className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
        {label}
      </dt>
      <dd className="mt-0.5 text-lg font-bold text-brand-ink sm:text-xl">{value}+</dd>
    </div>
  );
}

function SurgeonSnippet({
  surgeon,
}: {
  surgeon: NonNullable<ReturnType<typeof getSurgeonById>>;
}) {
  const satisfactionPct = Math.round((surgeon.patientRating / 5) * 100);

  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-light text-sm font-bold text-brand-blue ring-1 ring-brand-outline/50">
          {surgeon.name.replace(/Dr\.?\s*/i, "").charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-ink">{surgeon.name}</p>
          <p className="text-xs text-brand-muted">{surgeon.specialty}</p>
        </div>
      </div>
      <p className="mt-2 text-[10px] font-medium text-brand-teal">
        {satisfactionPct}% satisfaction · {surgeon.experienceYears} yrs
      </p>
      <Link
        href={`/surgeons/${surgeon.id}`}
        className="mt-2 inline-block text-xs font-semibold text-brand-blue hover:underline"
      >
        View profile →
      </Link>
    </div>
  );
}
