import Link from "next/link";
import type { Review } from "@/types/domain";
import { getProcedureById } from "@/lib/mock-data/procedures";
import { getSurgeonById } from "@/lib/mock-data/surgeons";

export function ReviewPreviewCard({ review }: { review: Review }) {
  const proc = getProcedureById(review.procedureId);
  const surgeon = getSurgeonById(review.surgeonId);
  const avg =
    (review.satisfactionScore +
      review.communicationScore +
      review.aftercareScore +
      review.clinicCleanlinessScore) /
    4;

  return (
    <article className="flex h-full min-w-[17rem] max-w-[20rem] flex-col rounded-xl border border-brand-outline/75 bg-white p-4 shadow-soft sm:min-w-[18.5rem]">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-brand-ink">{review.authorDisplay}</p>
          <p className="text-[10px] text-brand-muted">
            {proc?.name ?? "Procedure"} · {review.surgeryYear}
          </p>
        </div>
        <span className="rounded-lg bg-brand-blue/10 px-2 py-1 text-xs font-bold text-brand-blue">
          {avg.toFixed(1)}
        </span>
      </div>
      {surgeon ? (
        <Link
          href={`/surgeons/${surgeon.id}`}
          className="mt-2 text-xs font-medium text-brand-blue hover:underline"
        >
          {surgeon.name}
        </Link>
      ) : null}
      <div className="mt-3 grid grid-cols-2 gap-1.5 text-[10px]">
        <Metric label="Satisfaction" value={review.satisfactionScore} />
        <Metric label="Communication" value={review.communicationScore} />
        <Metric label="Aftercare" value={review.aftercareScore} />
        <Metric label="Clinic" value={review.clinicCleanlinessScore} />
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted line-clamp-4">
        {review.comment}
      </p>
      {review.hadComplications && review.complicationDetails ? (
        <p className="sw-notice mt-2 px-2 py-1.5 text-[10px]">
          Note: {review.complicationDetails}
        </p>
      ) : null}
      <p className="mt-3 text-[10px] font-medium text-emerald-800">
        {review.status === "approved" ? "✓ Moderation approved" : `Status: ${review.status}`}
      </p>
    </article>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md bg-brand-sand/60 px-2 py-1">
      <p className="text-brand-muted">{label}</p>
      <p className="font-semibold text-brand-ink">{value}/5</p>
    </div>
  );
}
