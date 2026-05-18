"use client";

import Link from "next/link";
import {
  forumThreads,
  getCommentsForThread,
  sortThreadsByRecent,
} from "@/lib/mock-data";
import { EcosystemSection } from "./EcosystemSection";
import { MiniThreadPreview } from "./MiniThreadPreview";
import { StaggerItem, StaggerReveal } from "@/components/motion";

const feedThreads = sortThreadsByRecent(forumThreads).slice(0, 6);

export function CommunityFeedPreview() {
  return (
    <EcosystemSection
      id="community-feed"
      eyebrow="Community pulse"
      title="Discussions happening right now"
      description="Fictional threads illustrate how patients share recovery patterns, consent questions, and logistics—always moderated, never medical advice."
      className="bg-brand-ivory"
      headerAction={
        <Link
          href="/forum"
          className="inline-flex rounded-lg border border-brand-outline bg-white px-4 py-2.5 text-sm font-semibold text-brand-ink hover:bg-brand-sand"
        >
          View all threads
        </Link>
      }
    >
      <StaggerReveal className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0 xl:grid-cols-3">
        {feedThreads.map((thread) => (
          <StaggerItem
            key={thread.id}
            className="w-[min(88vw,22rem)] shrink-0 snap-start lg:w-auto"
          >
            <MiniThreadPreview
              thread={thread}
              comments={getCommentsForThread(thread.id)}
            />
          </StaggerItem>
        ))}
      </StaggerReveal>
    </EcosystemSection>
  );
}
