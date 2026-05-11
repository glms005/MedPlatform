import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Surgeon } from "@/types/domain";
import { procedureLabelFromSlug } from "@/lib/procedure-label";
import { VerificationBadge } from "./VerificationBadge";

export function SurgeonCard({ surgeon }: { surgeon: Surgeon }) {
  return (
    <Card className="flex flex-col p-6">
      <div className="flex gap-4">
        <div className="h-16 w-16 shrink-0 rounded-xl bg-slate-100 ring-1 ring-brand-outline" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="truncate text-base font-semibold tracking-tight text-brand-ink">
              {surgeon.name}
            </p>
            <VerificationBadge verified={surgeon.verified} />
          </div>
          <p className="mt-1 text-sm text-brand-muted">{surgeon.specialty}</p>
        </div>
      </div>
      <dl className="mt-4 grid gap-2 text-sm">
        <div className="flex justify-between gap-2">
          <dt className="text-brand-muted">City</dt>
          <dd className="font-medium text-brand-ink">{surgeon.city}</dd>
        </div>
        <div className="flex justify-between gap-2">
          <dt className="text-brand-muted">Clinic</dt>
          <dd className="text-right font-medium text-brand-ink">{surgeon.clinic}</dd>
        </div>
        <div className="flex justify-between gap-2">
          <dt className="text-brand-muted">Experience</dt>
          <dd className="font-medium text-brand-ink">
            {surgeon.experienceYears} yrs
          </dd>
        </div>
        <div className="flex justify-between gap-2">
          <dt className="text-brand-muted">Patient rating</dt>
          <dd className="font-medium text-brand-blue">
            {surgeon.patientRating.toFixed(1)} / 5
          </dd>
        </div>
      </dl>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {surgeon.procedures.slice(0, 4).map((slug) => (
          <Badge key={slug} tone="brand">
            {procedureLabelFromSlug(slug)}
          </Badge>
        ))}
        {surgeon.procedures.length > 4 ? (
          <span className="text-xs text-brand-muted">
            +{surgeon.procedures.length - 4} more
          </span>
        ) : null}
      </div>
      <div className="mt-4 pt-2">
        <Link
          href={`/surgeons/${surgeon.id}`}
          className="text-sm font-semibold text-brand-blue underline-offset-4 hover:underline"
        >
          View profile
        </Link>
      </div>
    </Card>
  );
}
