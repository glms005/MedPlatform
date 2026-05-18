import { Card } from "@/components/ui/Card";
import { ModerationBadge } from "@/components/reviews/ModerationBadge";
import { ReportButton } from "@/components/shared/ReportButton";
import type { Review } from "@/types/domain";
import { getProcedureById } from "@/lib/mock-data/procedures";

export function ReviewCard({ review }: { review: Review }) {
  const proc = getProcedureById(review.procedureId);
  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm font-semibold text-brand-ink">
          {review.authorDisplay}
        </p>
        <div className="flex items-center gap-2">
          <ModerationBadge status={review.status} />
          <p className="text-xs text-brand-muted">Year: {review.surgeryYear}</p>
        </div>
      </div>
      {proc ? (
        <p className="mt-1 text-xs font-medium text-brand-blue">
          Procedure: {proc.name}
        </p>
      ) : null}
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
        <Score label="Satisfaction" v={review.satisfactionScore} />
        <Score label="Communication" v={review.communicationScore} />
        <Score label="Aftercare" v={review.aftercareScore} />
        <Score label="Clinic" v={review.clinicCleanlinessScore} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-brand-muted">
        {review.comment}
      </p>
      {review.hadComplications && review.complicationDetails ? (
        <p className="mt-2 rounded-xl bg-amber-50/80 p-2 text-xs text-amber-950 ring-1 ring-amber-100">
          Complications mentioned: {review.complicationDetails}
        </p>
      ) : null}
      <p className="mt-3 text-xs text-brand-muted">
        Would recommend:{" "}
        <span className="font-medium text-brand-ink">
          {review.wouldRecommend ? "Yes" : "No"}
        </span>
      </p>
      <div className="mt-3">
        <ReportButton targetType="review" targetId={review.id} />
      </div>
    </Card>
  );
}

function Score({ label, v }: { label: string; v: number }) {
  return (
    <div>
      <p className="text-brand-muted">{label}</p>
      <p className="font-semibold text-brand-ink">{v}/5</p>
    </div>
  );
}
