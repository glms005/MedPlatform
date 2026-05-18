"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  forumThreads,
  surgeons,
  getApprovedReviews,
  getCommentsForThread,
} from "@/lib/mock-data";
import { easeEditorial } from "@/lib/motion";
import { EcosystemSection } from "./EcosystemSection";
import { MiniThreadPreview } from "./MiniThreadPreview";
import { ReviewPreviewCard } from "./ReviewPreviewCard";
import { SurgeonProfileMockup } from "./SurgeonProfileMockup";

const tabs = [
  { id: "forum", label: "Forum" },
  { id: "surgeons", label: "Surgeons" },
  { id: "reviews", label: "Reviews" },
  { id: "messages", label: "Messages" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ProductShowcase() {
  const [tab, setTab] = useState<TabId>("forum");
  const reduce = useReducedMotion();
  const reviews = getApprovedReviews().slice(0, 4);

  return (
    <EcosystemSection
      id="product"
      eyebrow="Inside the product"
      title="Explore the platform surface"
      description="Tab through core experiences—each panel uses fictional seed data from the same mock backend as the live routes."
      className="bg-white"
    >
      <div className="flex flex-wrap gap-2 border-b border-brand-outline/60 pb-4">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              tab === t.id
                ? "bg-brand-accent text-white"
                : "bg-brand-sand/60 text-brand-muted hover:text-brand-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!reduce ? (
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: easeEditorial }}
            className="mt-6"
          >
            <Panel tab={tab} reviews={reviews} />
          </motion.div>
        ) : (
          <div className="mt-6">
            <Panel tab={tab} reviews={reviews} />
          </div>
        )}
      </AnimatePresence>
    </EcosystemSection>
  );
}

function Panel({
  tab,
  reviews,
}: {
  tab: TabId;
  reviews: ReturnType<typeof getApprovedReviews>;
}) {
  if (tab === "forum") {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {forumThreads.slice(0, 4).map((thread) => (
          <MiniThreadPreview
            key={thread.id}
            thread={thread}
            comments={getCommentsForThread(thread.id).slice(0, 1)}
          />
        ))}
        <Link href="/forum" className="md:col-span-2 text-center text-sm font-semibold text-brand-blue hover:underline">
          Open full forum →
        </Link>
      </div>
    );
  }

  if (tab === "surgeons") {
    return (
      <div className="grid gap-5 lg:grid-cols-2">
        {surgeons.slice(0, 2).map((s) => (
          <SurgeonProfileMockup key={s.id} surgeon={s} />
        ))}
        <Link href="/surgeons" className="lg:col-span-2 text-center text-sm font-semibold text-brand-blue hover:underline">
          Browse all surgeons →
        </Link>
      </div>
    );
  }

  if (tab === "reviews") {
    return (
      <>
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
          {reviews.map((r) => (
            <div key={r.id} className="snap-start">
              <ReviewPreviewCard review={r} />
            </div>
          ))}
        </div>
        <Link href="/reviews/new" className="mt-4 block text-center text-sm font-semibold text-brand-blue hover:underline">
          Submit your experience →
        </Link>
      </>
    );
  }

  return (
    <div className="rounded-xl border border-dashed border-brand-outline bg-brand-ivory p-8 text-center">
      <p className="font-display text-xl text-brand-ink">Direct messages</p>
      <p className="mt-2 text-sm text-brand-muted">
        Group chats for recovery cohorts and surgeon Q&A placeholders—shipping after auth backend.
      </p>
      <Link href="/messages" className="mt-4 inline-block text-sm font-semibold text-brand-blue hover:underline">
        Preview messages UI →
      </Link>
    </div>
  );
}
