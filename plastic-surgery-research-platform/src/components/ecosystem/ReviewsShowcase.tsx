"use client";

import Link from "next/link";
import { getApprovedReviews } from "@/lib/mock-data";
import { EcosystemSection } from "./EcosystemSection";
import { ReviewPreviewCard } from "./ReviewPreviewCard";

export function ReviewsShowcase() {
  const reviews = getApprovedReviews().slice(0, 8);

  return (
    <EcosystemSection
      id="reviews"
      eyebrow="Patient voices"
      title="Structured reviews with moderation"
      description="Scores for communication, aftercare, and clinic environment—approved before publication. Complications noted transparently when reported."
      className="bg-brand-champagne/40"
      headerAction={
        <Link
          href="/reviews/new"
          className="inline-flex rounded-lg bg-brand-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-accentDark"
        >
          Write a review
        </Link>
      }
    >
      <div className="-mx-1 flex gap-4 overflow-x-auto px-1 pb-3 snap-x snap-mandatory">
        {reviews.map((review) => (
          <div key={review.id} className="snap-start">
            <ReviewPreviewCard review={review} />
          </div>
        ))}
      </div>
    </EcosystemSection>
  );
}
