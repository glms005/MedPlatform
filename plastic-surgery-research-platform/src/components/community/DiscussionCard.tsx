import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { DiscussionThread } from "@/types/domain";

export function DiscussionCard({ thread }: { thread: DiscussionThread }) {
  const date = new Date(thread.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <span className="inline-block rounded-full bg-brand-blue/15 px-2 py-0.5 text-xs font-medium text-brand-blue">
            {thread.category}
          </span>
          <h2 className="mt-2 font-display text-lg font-semibold text-brand-ink">
            <Link
              href={`/community/${thread.id}`}
              className="hover:text-brand-blue hover:underline"
            >
              {thread.title}
            </Link>
          </h2>
        </div>
        <p className="text-xs text-brand-muted">{date}</p>
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-brand-muted">
        {thread.content}
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-brand-muted">
        <span>{thread.author}</span>
        <span>{thread.replyCount} replies</span>
      </div>
    </Card>
  );
}
