"use client";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DiscussionCard } from "@/components/community/DiscussionCard";
import { useLocale } from "@/components/providers/LocaleProvider";
import { discussionThreads } from "@/lib/mock-data";

const SHOW = 3;

export function CommunityPreview() {
  const { t } = useLocale();
  const threads = discussionThreads.slice(0, SHOW);

  return (
    <section className="border-t border-brand-outline/30 bg-brand-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.communityPreview.eyebrow}
          title={t.communityPreview.title}
          subtitle={t.communityPreview.subtitle}
        />
        <div className="mt-8 space-y-4">
          {threads.map((thread) => (
            <DiscussionCard key={thread.id} thread={thread} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/community" variant="primary" size="lg">
            {t.communityPreview.cta}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
