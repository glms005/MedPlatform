import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { surgeons } from "@/lib/mock-data";

function ScorePill({ score }: { score: number }) {
  const tone = score >= 4.5 ? "success" : score >= 4.0 ? "brand" : "warning";
  return <Badge tone={tone}>Patient satisfaction: {score.toFixed(1)}/5</Badge>;
}

export function SurgeonPreview() {
  return (
    <section id="surgeons" className="bg-brand-surface py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="Preview"
          title="Surgeon cards (mock)"
          subtitle="A structured snapshot designed for comparison. Data shown here is placeholder only."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {surgeons.map((s) => (
            <Card key={s.id} className="p-6">
              <div className="flex gap-4">
                <div className="h-16 w-16 shrink-0 rounded-3xl bg-gradient-to-br from-white to-brand-cream ring-1 ring-brand-outline" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="truncate font-display text-base font-semibold text-brand-ink">
                      {s.name}
                    </p>
                    {s.verified ? (
                      <Badge tone="success">Verified badge</Badge>
                    ) : (
                      <Badge tone="neutral">Verification pending</Badge>
                    )}
                  </div>

                  <p className="mt-1 text-sm text-brand-muted">{s.specialty}</p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium text-brand-muted">
                        Clinic
                      </p>
                      <p className="mt-1 text-sm text-brand-ink">{s.clinic}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-brand-muted">
                        Experience
                      </p>
                      <p className="mt-1 text-sm text-brand-ink">
                        {s.yearsExperience} years
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-xs font-medium text-brand-muted">
                        Procedures
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {s.procedures.map((p) => (
                          <Badge key={p}>{p}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <ScorePill score={s.satisfactionScore} />
                    <ButtonLink href="#" variant="secondary">
                      View Profile
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

