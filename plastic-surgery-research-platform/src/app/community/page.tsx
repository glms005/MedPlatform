import { Container } from "@/components/ui/Container";
import { DiscussionCard } from "@/components/community/DiscussionCard";
import { discussionThreads } from "@/lib/mock-data/threads";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-brand-cream py-12 sm:py-16">
      <Container>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
            Community (preview)
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
            Discussions
          </h1>
          <p className="mt-3 max-w-2xl text-brand-muted">
            Mock threads for layout testing. Future builds will add moderation,
            reporting, and authenticated posting.
          </p>
        </header>
        <div className="space-y-4">
          {discussionThreads.map((t) => (
            <DiscussionCard key={t.id} thread={t} />
          ))}
        </div>
      </Container>
    </div>
  );
}
