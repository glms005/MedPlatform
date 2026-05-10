import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { VerificationBadge } from "@/components/surgeons/VerificationBadge";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { getReviewsForSurgeon, getSurgeonById, surgeons } from "@/lib/mock-data";
import { procedureLabelFromSlug } from "@/lib/procedure-label";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return surgeons.map((s) => ({ id: s.id }));
}

export default async function SurgeonProfilePage({ params }: Props) {
  const { id } = await params;
  const surgeon = getSurgeonById(id);
  if (!surgeon) notFound();

  const reviewList = getReviewsForSurgeon(surgeon.id);

  return (
    <div className="min-h-screen bg-brand-cream py-10 sm:py-14">
      <Container>
        <Link
          href="/surgeons"
          className="text-sm font-medium text-brand-blue hover:underline"
        >
          ← Back to surgeons
        </Link>

        <header className="mt-6 flex flex-col gap-6 border-b border-brand-outline/40 pb-10 sm:flex-row sm:items-start">
          <div className="h-28 w-28 shrink-0 rounded-3xl bg-gradient-to-br from-brand-blue/25 to-brand-cream ring-1 ring-brand-outline" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
                {surgeon.name}
              </h1>
              <VerificationBadge verified={surgeon.verified} />
            </div>
            <p className="mt-2 text-lg text-brand-muted">{surgeon.specialty}</p>
            <p className="mt-1 text-sm text-brand-muted">
              {surgeon.city} · {surgeon.clinic}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {surgeon.procedures.map((slug) => (
                <Badge key={slug} tone="brand">
                  {procedureLabelFromSlug(slug)}
                </Badge>
              ))}
            </div>
            {typeof surgeon.consultationPrice === "number" ? (
              <p className="mt-3 text-sm text-brand-muted">
                Consultation (illustrative): {surgeon.consultationPrice} USD — verify
                directly with clinic.
              </p>
            ) : null}
          </div>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <section className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="font-display text-xl font-semibold">About</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {surgeon.bio}
              </p>
            </Card>
            <Card className="p-6">
              <h2 className="font-display text-xl font-semibold">
                Education & certifications
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-brand-muted">
                {surgeon.education.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-brand-muted">
                {surgeon.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <h2 className="font-display text-xl font-semibold">
                Patient review summary (aggregated, not medical fact)
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {surgeon.reviewSummary}
              </p>
            </Card>
            <Card className="p-6">
              <h2 className="font-display text-xl font-semibold">
                Transparency notes
              </h2>
              <p className="mt-3 text-sm text-brand-muted">
                Before/after examples:{" "}
                {surgeon.beforeAfterAvailable ? "Listed as available" : "Not listed"}
              </p>
              {surgeon.redFlags.length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {surgeon.redFlags.map((r) => (
                    <li
                      key={r}
                      className="rounded-xl bg-amber-50/90 p-3 text-sm text-amber-950 ring-1 ring-amber-100"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-brand-muted">
                  No structured red-flag patterns recorded in mock data.
                </p>
              )}
            </Card>
          </section>
          <aside className="space-y-6">
            <Card className="p-6">
              <h2 className="font-display text-lg font-semibold">Quick facts</h2>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-2">
                  <dt className="text-brand-muted">Experience</dt>
                  <dd className="font-medium">{surgeon.experienceYears} years</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-brand-muted">Patient rating (mock)</dt>
                  <dd className="font-medium text-brand-blue">
                    {surgeon.patientRating.toFixed(1)} / 5
                  </dd>
                </div>
              </dl>
              {surgeon.sourceLinks.length > 0 ? (
                <div className="mt-4 border-t border-brand-outline pt-4">
                  <p className="text-xs font-semibold text-brand-ink">Links</p>
                  <ul className="mt-2 space-y-1">
                    {surgeon.sourceLinks.map((l) => (
                      <li key={l.url}>
                        <a
                          href={l.url}
                          className="text-sm text-brand-blue hover:underline"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Card>
            <Card className="border-brand-blue/20 p-6 ring-1 ring-brand-blue/15">
              <h2 className="text-sm font-semibold text-brand-ink">Disclaimer</h2>
              <p className="mt-2 text-xs leading-relaxed text-brand-muted">
                This profile is informational only. It does not diagnose, recommend
                treatment, or guarantee outcomes. Independent verification is essential.
              </p>
            </Card>
          </aside>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-brand-ink">
            Structured reviews (sample)
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-muted">
            Moderation and verification are not active in this MVP. Content is fictional
            for UI validation.
          </p>
          <div className="mt-6 space-y-4">
            {reviewList.length > 0 ? (
              reviewList.map((r) => <ReviewCard key={r.id} review={r} />)
            ) : (
              <p className="text-sm text-brand-muted">No sample reviews for this profile.</p>
            )}
          </div>
        </section>
      </Container>
    </div>
  );
}
