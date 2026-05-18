"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  clinics,
  forumThreads,
  getApprovedReviews,
  getCommentsForThread,
  procedures,
  surgeons,
} from "@/lib/mock-data";
import { easeEditorial } from "@/lib/motion";
import { EcosystemSection } from "./EcosystemSection";
import { ProductChrome } from "./ProductChrome";
import { MiniThreadPreview } from "./MiniThreadPreview";
import { ReviewPreviewCard } from "./ReviewPreviewCard";
import { SurgeonProfileMockup } from "./SurgeonProfileMockup";
import { StaggerItem, StaggerReveal } from "@/components/motion";
import { recoveryJourneyStages } from "@/lib/home-ecosystem";

const clinic = clinics[0];
const surgeon = surgeons[0];
const procedure = procedures[0];
const thread = forumThreads[0];
const stage = recoveryJourneyStages[2];
const review = getApprovedReviews()[0];

export function InsideThePlatform() {
  const reduce = !!useReducedMotion();

  return (
    <EcosystemSection
      id="inside-platform"
      eyebrow="Product preview"
      title="Inside the Platform"
      description="Real interface patterns—not marketing copy. Every panel below mirrors an actual route in the app."
      className="bg-white"
    >
      <StaggerReveal className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <StaggerItem>
          <PreviewWrap reduce={reduce}>
            <ProductChrome title="Surgeon profile" badge="Directory">
              {surgeon ? <SurgeonProfileMockup surgeon={surgeon} /> : null}
            </ProductChrome>
          </PreviewWrap>
        </StaggerItem>

        <StaggerItem>
          <PreviewWrap reduce={reduce}>
            <ProductChrome title="Clinic profile" badge="Maps linked">
              <div className="space-y-3">
                <p className="font-display text-lg font-medium text-brand-ink">{clinic.name}</p>
                <p className="text-sm text-brand-muted">{clinic.city} · {clinic.address}</p>
                <p className="text-sm leading-relaxed text-brand-muted line-clamp-3">
                  {clinic.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {clinic.procedures.slice(0, 4).map((p) => (
                    <span
                      key={p}
                      className="rounded-md bg-brand-sand px-2 py-0.5 text-[10px] font-medium"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/clinics/${clinic.id}`}
                  className="inline-block text-sm font-semibold text-brand-blue hover:underline"
                >
                  View clinic →
                </Link>
              </div>
            </ProductChrome>
          </PreviewWrap>
        </StaggerItem>

        <StaggerItem>
          <PreviewWrap reduce={reduce}>
            <ProductChrome title="Structured reviews" badge="Moderated">
              {review ? <ReviewPreviewCard review={review} /> : null}
            </ProductChrome>
          </PreviewWrap>
        </StaggerItem>

        <StaggerItem>
          <PreviewWrap reduce={reduce}>
            <ProductChrome title="Community forum" badge="Voting">
              <MiniThreadPreview
                thread={thread}
                comments={getCommentsForThread(thread.id).slice(0, 1)}
                compact
              />
              <Link
                href="/forum"
                className="mt-3 block text-center text-xs font-semibold text-brand-blue hover:underline"
              >
                Browse discussions →
              </Link>
            </ProductChrome>
          </PreviewWrap>
        </StaggerItem>

        <StaggerItem>
          <PreviewWrap reduce={reduce}>
            <ProductChrome title="Recovery timeline" badge="Diary">
              <p className="text-xs font-semibold uppercase text-brand-teal">{stage.label}</p>
              <p className="mt-1 font-medium text-brand-ink">{stage.title}</p>
              <p className="mt-2 text-sm text-brand-muted line-clamp-2">{stage.patientNote}</p>
              <dl className="mt-3 grid grid-cols-2 gap-1.5 text-[10px]">
                {Object.entries(stage.metrics).slice(0, 4).map(([k, v]) => (
                  <div key={k} className="rounded-md bg-brand-ivory px-2 py-1">
                    <dt className="capitalize text-brand-muted">{k}</dt>
                    <dd className="font-medium text-brand-ink">{v}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/#recovery"
                className="mt-3 inline-block text-xs font-semibold text-brand-blue hover:underline"
              >
                Full timeline →
              </Link>
            </ProductChrome>
          </PreviewWrap>
        </StaggerItem>

        <StaggerItem>
          <PreviewWrap reduce={reduce}>
            <ProductChrome title="Procedure guide" badge="Education">
              <p className="font-display text-lg font-medium text-brand-ink">{procedure.name}</p>
              <p className="mt-2 text-sm text-brand-muted line-clamp-3">{procedure.description}</p>
              <ul className="mt-3 space-y-1 text-xs text-brand-muted">
                {procedure.recoveryTimeline.slice(0, 2).map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-brand-teal">·</span>
                    {line}
                  </li>
                ))}
              </ul>
              <Link
                href={`/procedures/${procedure.slug}`}
                className="mt-3 inline-block text-sm font-semibold text-brand-blue hover:underline"
              >
                Read guide →
              </Link>
            </ProductChrome>
          </PreviewWrap>
        </StaggerItem>
      </StaggerReveal>
    </EcosystemSection>
  );
}

function PreviewWrap({
  children,
  reduce,
}: {
  children: React.ReactNode;
  reduce: boolean;
}) {
  if (reduce) return <div>{children}</div>;
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.45, ease: easeEditorial }}
    >
      {children}
    </motion.div>
  );
}
