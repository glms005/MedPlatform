import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { VoteControls } from "@/components/shared/VoteControls";
import type { ForumThread } from "@/types/domain";
import { getClinicById } from "@/lib/mock-data/clinics";
import { getSurgeonById } from "@/lib/mock-data/surgeons";

export function ForumThreadCard({ thread }: { thread: ForumThread }) {
  const date = new Date(thread.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const clinic = thread.clinicId ? getClinicById(thread.clinicId) : null;
  const surgeon = thread.surgeonId ? getSurgeonById(thread.surgeonId) : null;

  return (
    <Card className="p-5">
      <div className="flex gap-4">
        <VoteControls upvotes={thread.upvotes} downvotes={thread.downvotes} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-brand-teal-light/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-teal">
              {thread.postType}
            </span>
            <span className="text-[10px] font-medium uppercase text-brand-muted">
              {thread.category}
            </span>
          </div>
          <h2 className="mt-2 text-lg font-semibold tracking-tight text-brand-ink">
            <Link
              href={`/forum/${thread.id}`}
              className="hover:text-brand-blue hover:underline"
            >
              {thread.title}
            </Link>
          </h2>
          <p className="mt-2 line-clamp-2 text-sm text-brand-muted">{thread.content}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {thread.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-brand-champagne/80 px-2 py-0.5 text-[10px] font-medium text-brand-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
          {(clinic || surgeon) && (
            <p className="mt-2 text-xs text-brand-muted">
              {clinic ? (
                <Link href={`/clinics/${clinic.id}`} className="text-brand-blue hover:underline">
                  {clinic.name}
                </Link>
              ) : null}
              {clinic && surgeon ? " · " : null}
              {surgeon ? (
                <Link href={`/surgeons/${surgeon.id}`} className="text-brand-blue hover:underline">
                  {surgeon.name}
                </Link>
              ) : null}
            </p>
          )}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-brand-muted">
            <span>{thread.author}</span>
            <span>
              {date} · {thread.commentsCount} replies
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
