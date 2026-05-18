import { Container } from "@/components/ui/Container";
import { ForumPageClient } from "./ForumPageClient";
import { forumThreads } from "@/lib/mock-data/forum";

export default function ForumPage() {
  return (
    <div className="min-h-screen bg-brand-ivory py-12 sm:py-16">
      <Container>
        <ForumPageClient initialThreads={forumThreads} />
      </Container>
    </div>
  );
}
