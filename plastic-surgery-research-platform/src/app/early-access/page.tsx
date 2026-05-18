"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { easeEditorial } from "@/lib/motion";

const benefits = [
  "Full surgeon & clinic directory during beta",
  "Structured reviews with moderation",
  "Community forum & recovery discussions",
  "Procedure guides and research tools",
  "Help shape premium features before launch",
];

export default function EarlyAccessPage() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen bg-brand-ivory py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl">
          {reduce ? (
            <Content />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: easeEditorial }}
            >
              <Content />
            </motion.div>
          )}
        </div>
      </Container>
    </div>
  );
}

function Content() {
  return (
    <>
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-teal">
        Beta program
      </p>
      <h1 className="mt-3 font-display text-[clamp(2rem,4vw,2.75rem)] font-medium tracking-tight text-brand-ink">
        Early Access
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-brand-muted">
        We&apos;re building a transparent research community—not a paywall-first product.
        Join early to explore the platform and help us prioritize what matters most to
        patients.
      </p>

      <Card className="mt-8 border-brand-teal/25 bg-white p-6 sm:p-8">
        <p className="font-display text-3xl font-medium text-brand-ink">Free during beta</p>
        <p className="mt-2 text-sm text-brand-muted">
          Premium research tools—advanced comparisons, saved journeys, and clinician-neutral
          analytics—will arrive later. No payments are collected in this MVP.
        </p>
        <ul className="mt-6 space-y-3">
          {benefits.map((b) => (
            <li key={b} className="flex gap-3 text-sm text-brand-muted">
              <span className="font-bold text-brand-teal" aria-hidden>
                ✓
              </span>
              {b}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="mt-8 flex min-h-[3rem] w-full items-center justify-center rounded-lg bg-brand-teal text-sm font-semibold text-white transition-colors hover:bg-brand-teal-dark"
        >
          Join early access (coming soon)
        </button>
        <p className="mt-3 text-center text-xs text-brand-muted">
          Account creation ships with the auth backend. For now, explore freely with mock data.
        </p>
      </Card>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/surgeons"
          className="inline-flex min-h-[2.75rem] flex-1 items-center justify-center rounded-lg border border-brand-outline bg-white px-4 py-2.5 text-sm font-semibold text-brand-ink hover:bg-brand-sand"
        >
          Explore surgeons
        </Link>
        <Link
          href="/forum"
          className="inline-flex min-h-[2.75rem] flex-1 items-center justify-center rounded-lg border border-brand-outline bg-white px-4 py-2.5 text-sm font-semibold text-brand-ink hover:bg-brand-sand"
        >
          Browse community
        </Link>
      </div>
    </>
  );
}
