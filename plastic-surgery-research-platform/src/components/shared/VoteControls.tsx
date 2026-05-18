"use client";

type Props = {
  upvotes: number;
  downvotes: number;
  compact?: boolean;
};

export function VoteControls({ upvotes, downvotes, compact }: Props) {
  const score = upvotes - downvotes;
  return (
    <div
      className={`flex items-center gap-1 ${compact ? "text-xs" : "text-sm"}`}
      aria-label={`Score ${score}, ${upvotes} upvotes, ${downvotes} downvotes`}
    >
      <button
        type="button"
        className="rounded-md px-2 py-1 font-medium text-brand-muted transition-colors hover:bg-brand-sand hover:text-brand-blue"
        aria-label="Upvote"
      >
        ▲
      </button>
      <span className="min-w-[1.5rem] text-center font-semibold text-brand-ink">
        {score}
      </span>
      <button
        type="button"
        className="rounded-md px-2 py-1 font-medium text-brand-muted transition-colors hover:bg-brand-sand hover:text-brand-ink"
        aria-label="Downvote"
      >
        ▼
      </button>
    </div>
  );
}
