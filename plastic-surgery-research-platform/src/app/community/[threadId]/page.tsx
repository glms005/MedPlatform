import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import {
  discussionThreads,
  getRepliesForThread,
  getThreadById,
} from "@/lib/mock-data/threads";

type Props = { params: Promise<{ threadId: string }> };

export function generateStaticParams() {
  return discussionThreads.map((t) => ({ threadId: t.id }));
}

export default async function ThreadPage({ params }: Props) {
  const { threadId } = await params;
  const thread = getThreadById(threadId);
  if (!thread) notFound();

  const replies = getRepliesForThread(thread.id);
  const created = new Date(thread.createdAt).toLocaleString();

  return (
    <div className="min-h-screen bg-brand-ivory py-10 sm:py-14">
      <Container>
        <Link
          href="/community"
          className="text-sm font-medium text-brand-blue hover:underline"
        >
          ← All discussions
        </Link>
        <article className="mt-6 max-w-3xl">
          <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-blue">
            {thread.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold text-brand-ink">
            {thread.title}
          </h1>
          <p className="mt-2 text-sm text-brand-muted">
            {thread.author} · {created}
          </p>
          <p className="mt-6 whitespace-pre-wrap text-base leading-relaxed text-brand-muted">
            {thread.content}
          </p>
        </article>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold">Replies</h2>
          <div className="mt-4 space-y-3">
            {replies.map((r) => (
              <Card key={r.id} className="p-4">
                <p className="text-xs font-semibold text-brand-ink">
                  {r.author}{" "}
                  <span className="font-normal text-brand-muted">
                    · {new Date(r.createdAt).toLocaleString()}
                  </span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {r.content}
                </p>
              </Card>
            ))}
            {replies.length === 0 ? (
              <p className="text-sm text-brand-muted">No replies in mock data.</p>
            ) : null}
          </div>
        </section>

        <Card className="mt-10 border-brand-blue/20 p-6 ring-1 ring-brand-blue/15">
          <p className="text-sm font-semibold">Safety note</p>
          <p className="mt-2 text-sm text-brand-muted">
            Do not use threads for diagnosis or emergencies. Harassment and defamation
            are not allowed; moderation tools ship in a later phase.
          </p>
        </Card>
      </Container>
    </div>
  );
}
