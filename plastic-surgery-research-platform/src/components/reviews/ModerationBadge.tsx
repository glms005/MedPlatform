import type { ReviewStatus } from "@/types/domain";

const styles: Record<ReviewStatus, string> = {
  pending: "bg-brand-mint text-brand-teal-dark ring-brand-outline",
  approved: "bg-emerald-50 text-emerald-900 ring-emerald-100",
  rejected: "bg-slate-100 text-slate-700 ring-slate-200",
  flagged: "bg-red-50 text-red-900 ring-red-100",
};

export function ModerationBadge({ status }: { status: ReviewStatus }) {
  return (
    <span
      className={`inline-flex rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ${styles[status]}`}
    >
      {status}
    </span>
  );
}
