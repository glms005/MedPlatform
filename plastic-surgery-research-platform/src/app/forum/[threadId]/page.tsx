import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { VoteControls } from "@/components/shared/VoteControls";
import { ReportButton } from "@/components/shared/ReportButton";
import { ForumCommentCard } from "@/components/forum/ForumCommentCard";
import { MedicalDisclaimer } from "@/components/shared/MedicalDisclaimer";
import {
  forumThreads,
  getCommentsForThread,
  getForumThreadById,
} from "@/lib/mock-data/forum";
import { getClinicById } from "@/lib/mock-data/clinics";
import { getSurgeonById } from "@/lib/mock-data/surgeons";

type Props = { params: Promise<{ threadId: string }> };

export function generateStaticParams() {
  return forumThreads.map((t) => ({ threadId: t.id }));
}

export default async function ForumThreadPage({ params }: Props) {
  const { threadId } = await params;
  const thread = getForumThreadById(threadId);
  if (!thread) notFound();

  const comments = getCommentsForThread(thread.id);
  const clinic = thread.clinicId ? getClinicById(thread.clinicId) : null;
  const surgeon = thread.surgeonId ? getSurgeonById(thread.surgeonId) : null;

  return (
    <div className="min-h-screen bg-brand-ivory py-10 sm:py-14">
      <Container>
        <Link href="/forum" className="text-sm font-medium text-brand-blue hover:underline">
          ← Forum
        </Link>
        <article className="mt-6 max-w-3xl">
          <div className="flex gap-4">
            <VoteControls upvotes={thread.upvotes} downvotes={thread.downvotes} />
            <div>
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-blue">
                {thread.postType}
              </span>
              <h1 className="mt-4 font-display text-3xl font-semibold text-brand-ink">
                {thread.title}
              </h1>
              <p className="mt-2 text-sm text-brand-muted">
                {thread.author} · {new Date(thread.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <p className="mt-6 whitespace-pre-wrap text-base leading-relaxed text-brand-muted">
            {thread.content}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {thread.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-brand-champagne/80 px-2 py-0.5 text-xs font-medium text-brand-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
          {(clinic || surgeon) && (
            <p className="mt-4 text-sm text-brand-muted">
              {clinic ? (
                <>
                  Clinic:{" "}
                  <Link href={`/clinics/${clinic.id}`} className="text-brand-blue hover:underline">
                    {clinic.name}
                  </Link>
                </>
              ) : null}
              {surgeon ? (
                <>
                  {clinic ? " · " : ""}
                  Surgeon:{" "}
                  <Link href={`/surgeons/${surgeon.id}`} className="text-brand-blue hover:underline">
                    {surgeon.name}
                  </Link>
                </>
              ) : null}
            </p>
          )}
          {thread.media.length > 0 ? (
            <ul className="mt-4 space-y-2 text-sm">
              {thread.media.map((m, i) => (
                <li key={i}>
                  <a href={m.url} className="text-brand-blue hover:underline">
                    {m.label ?? m.type} ({m.type})
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-4">
            <ReportButton targetType="forum_post" targetId={thread.id} />
          </div>
        </article>

        <section className="mt-10 max-w-3xl">
          <h2 className="font-display text-xl font-semibold">Comments</h2>
          <div className="mt-4 space-y-3">
            {comments.map((c) => (
              <ForumCommentCard key={c.id} comment={c} />
            ))}
            {comments.length === 0 ? (
              <p className="text-sm text-brand-muted">No comments in mock data.</p>
            ) : null}
          </div>
        </section>

        <Card className="mt-10 max-w-3xl border-brand-blue/20 p-6 ring-1 ring-brand-blue/15">
          <MedicalDisclaimer />
        </Card>
      </Container>
    </div>
  );
}
