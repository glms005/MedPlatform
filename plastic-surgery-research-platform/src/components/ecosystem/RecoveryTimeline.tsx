"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { recoveryJourneyStages } from "@/lib/home-ecosystem";
import { easeEditorial } from "@/lib/motion";
import { EcosystemSection } from "./EcosystemSection";
import { ProductChrome } from "./ProductChrome";

const metricLabels: Record<keyof (typeof recoveryJourneyStages)[0]["metrics"], string> = {
  swelling: "Swelling",
  bruising: "Bruising",
  pain: "Pain",
  breathing: "Breathing",
  confidence: "Confidence",
  satisfaction: "Satisfaction",
};

export function RecoveryTimeline() {
  const [active, setActive] = useState(0);
  const stage = recoveryJourneyStages[active];
  const reduce = useReducedMotion();

  return (
    <EcosystemSection
      id="recovery"
      eyebrow="Recovery tracker"
      title="Track Real Recovery Journeys"
      description="Example diary entries at each stage—swelling, bruising, pain, breathing, confidence, and satisfaction. Anecdotal only, not clinical guidance."
      className="bg-gradient-to-b from-brand-champagne/50 to-brand-ivory"
      headerAction={
        <Link
          href="/forum"
          className="text-sm font-semibold text-brand-blue hover:underline"
        >
          Recovery threads →
        </Link>
      }
    >
      <ProductChrome title="medplatform.ge/recovery" badge="Prototype">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,11rem)_1fr]">
          <div className="flex gap-2 overflow-x-auto pb-1 snap-x lg:flex-col lg:overflow-visible">
            {recoveryJourneyStages.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={`min-w-[7.5rem] shrink-0 snap-start rounded-lg border px-3 py-2.5 text-left transition-all lg:min-w-0 lg:w-full ${
                  active === i
                    ? "border-brand-teal bg-brand-teal/10 text-brand-ink shadow-sm"
                    : "border-brand-outline/70 bg-white text-brand-muted hover:border-brand-teal/35"
                }`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wide">{s.label}</p>
                <p className="mt-0.5 text-sm font-medium text-brand-ink">{s.title}</p>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!reduce ? (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: easeEditorial }}
                className="rounded-xl border border-brand-outline/70 bg-white p-4 sm:p-6"
              >
                <StageDetail stage={stage} />
              </motion.div>
            ) : (
              <div className="rounded-xl border border-brand-outline/70 bg-white p-4 sm:p-6">
                <StageDetail stage={stage} />
              </div>
            )}
          </AnimatePresence>
        </div>
      </ProductChrome>
    </EcosystemSection>
  );
}

function StageDetail({ stage }: { stage: (typeof recoveryJourneyStages)[number] }) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
        Patient diary (fictional)
      </p>
      <h3 className="mt-2 font-display text-2xl font-medium text-brand-ink">{stage.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-muted">{stage.patientNote}</p>
      <dl className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {(Object.keys(stage.metrics) as (keyof typeof stage.metrics)[]).map((key) => (
          <div
            key={key}
            className="rounded-lg border border-brand-outline/60 bg-brand-ivory/80 px-3 py-2.5"
          >
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
              {metricLabels[key]}
            </dt>
            <dd className="mt-1 text-sm font-medium text-brand-ink">{stage.metrics[key]}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 rounded-lg bg-amber-50/90 px-3 py-2 text-[11px] leading-relaxed text-amber-950 ring-1 ring-amber-100">
        Individual recovery varies widely. Always follow your treating clinician&apos;s guidance.
      </p>
    </>
  );
}
