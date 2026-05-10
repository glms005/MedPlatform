"use client";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { useLocale } from "@/components/providers/LocaleProvider";
import { reviews } from "@/lib/mock-data";

const SHOW = 3;

export function ReviewsPreview() {
  const { t } = useLocale();
  const sample = reviews.slice(0, SHOW);

  return (
    <section className="border-t border-brand-outline/30 bg-brand-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.reviewsPreview.eyebrow}
          title={t.reviewsPreview.title}
          subtitle={t.reviewsPreview.subtitle}
        />
        <div className="mt-8 space-y-4">
          {sample.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/reviews/new" variant="primary" size="lg">
            {t.reviewsPreview.shareExperience}
          </ButtonLink>
          <ButtonLink href="/surgeons" variant="secondary" size="lg">
            {t.reviewsPreview.browseSurgeons}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
