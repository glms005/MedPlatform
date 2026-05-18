import Link from "next/link";
import type { ForumComment, ForumThread } from "@/types/domain";
import { getThreadScore } from "@/lib/mock-data/forum";

export function MiniThreadPreview({
  thread,
  comments = [],
  compact = false,
}: {
  thread: ForumThread;
  comments?: ForumComment[];
  compact?: boolean;
}) {
  const score = getThreadScore(thread);

  return (
    <article
      className={
        compact
          ? "rounded-lg border border-brand-outline/70 bg-white/80 p-3"
          : "rounded-lg border border-brand-outline/70 bg-white p-3.5 shadow-sm"
      }
    >
      <div className="flex gap-3">
        <div className="flex w-9 shrink-0 flex-col items-center rounded-md bg-brand-sand/80 py-1.5 text-center ring-1 ring-brand-outline/50">
          <span className="text-[10px] font-semibold uppercase text-brand-muted">▲</span>
          <span className="text-sm font-bold text-brand-ink">{score}</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold uppercase text-brand-blue">
              {thread.postType}
            </span>
            <span className="text-[9px] text-brand-muted">{thread.category}</span>
          </div>
          <h3 className="mt-1.5 text-sm font-semibold leading-snug text-brand-ink">
            <Link href={`/forum/${thread.id}`} className="hover:text-brand-blue hover:underline">
              {thread.title}
            </Link>
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-brand-muted">
            {thread.content}
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {thread.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded bg-brand-champagne/90 px-1.5 py-0.5 text-[9px] font-medium text-brand-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
          <p className="mt-2 text-[10px] text-brand-muted">
            {thread.author} · {thread.commentsCount} replies
          </p>
          {comments.length > 0 ? (
            <ul className="mt-3 space-y-2 border-t border-brand-outline/50 pt-2">
              {comments.slice(0, 2).map((c) => (
                <li
                  key={c.id}
                  className="rounded-md bg-brand-ivory/90 px-2.5 py-2 text-[11px] leading-relaxed text-brand-muted"
                >
                  <span className="font-semibold text-brand-ink">{c.author}:</span> {c.content}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}
