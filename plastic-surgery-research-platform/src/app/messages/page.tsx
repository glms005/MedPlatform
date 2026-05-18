import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card } from "@/components/ui/Card";
import { ComingSoonBanner } from "@/components/shared/ComingSoonBanner";
import { getConversations } from "@/lib/mock-data/messages";

export default function MessagesPage() {
  const convos = getConversations();

  return (
    <div className="min-h-screen bg-brand-ivory py-12 sm:py-16">
      <Container>
        <PageHeader
          title="Messages"
          description="Private messages and group chats are planned with Supabase Realtime. Below is fictional preview data."
        />
        <ComingSoonBanner feature="Private messaging & group chats" />
        <div className="mt-8 space-y-3">
          {convos.map((c) => (
            <Card key={c.id} className="p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase text-brand-blue">{c.type}</p>
                  <h2 className="mt-1 font-semibold text-brand-ink">
                    {c.title ?? "Direct message"}
                  </h2>
                  <p className="mt-1 text-xs text-brand-muted">
                    {c.participantIds.length} participants · mock
                  </p>
                </div>
                <span className="rounded-md bg-brand-sand px-3 py-1.5 text-xs font-medium text-brand-muted">
                  UI only
                </span>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-brand-muted">
          <Link href="/rules" className="text-brand-blue hover:underline">
            Community rules
          </Link>{" "}
          apply to all messages when this feature launches.
        </p>
      </Container>
    </div>
  );
}
