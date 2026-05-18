"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { onboardingSteps } from "@/lib/home-ecosystem";
import { easeEditorial } from "@/lib/motion";
import { StaggerItem, StaggerReveal } from "@/components/motion";

export function OnboardingStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-brand-outline/50 bg-white px-4 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-blue">
          How the platform works
        </p>
        <StaggerReveal className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
          {onboardingSteps.map((step) => (
            <StaggerItem key={step.step}>
              <StepCard step={step} reduce={!!reduce} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

function StepCard({
  step,
  reduce,
}: {
  step: (typeof onboardingSteps)[number];
  reduce: boolean;
}) {
  const inner = (
    <div className="group flex h-full flex-col rounded-xl border border-brand-outline/70 bg-gradient-to-br from-brand-ivory to-brand-sand/40 p-5 transition-shadow hover:shadow-lift sm:p-6">
      <span className="font-mono text-xs font-semibold text-brand-blue">{step.step}</span>
      <h3 className="mt-3 font-display text-xl font-medium text-brand-ink">{step.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">{step.body}</p>
      <Link
        href={step.href}
        className="mt-5 inline-flex items-center text-sm font-semibold text-brand-blue underline-offset-4 hover:underline"
      >
        {step.cta} →
      </Link>
    </div>
  );

  if (reduce) return inner;
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4, ease: easeEditorial }}>
      {inner}
    </motion.div>
  );
}
