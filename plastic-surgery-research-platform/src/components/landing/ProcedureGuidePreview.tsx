import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcedureGuidePreview() {
  return (
    <section className="bg-brand-cream py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="Guide preview"
          title="Rhinoplasty: decision & recovery guide (mock)"
          subtitle="A calm, evidence-focused reference for expectations, risks, and questions."
        />

        <Card className="mt-8 p-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-sm font-semibold text-brand-ink">
                Recovery timeline
              </p>
              <div className="mt-3 space-y-2 text-sm text-brand-muted">
                <p>
                  <span className="font-medium text-brand-ink">Days 1–3:</span>{" "}
                  swelling, congestion, rest-focused
                </p>
                <p>
                  <span className="font-medium text-brand-ink">Week 1:</span>{" "}
                  splint care, early bruising changes
                </p>
                <p>
                  <span className="font-medium text-brand-ink">
                    Weeks 2–6:
                  </span>{" "}
                  gradual comfort + visible swelling reduction
                </p>
                <p>
                  <span className="font-medium text-brand-ink">
                    Months 3–12:
                  </span>{" "}
                  refinement phase, final shape evolves
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-brand-ink">
                    Common risks (non-exhaustive)
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      "Asymmetry",
                      "Breathing changes",
                      "Infection",
                      "Scarring",
                      "Revision possibility",
                      "Prolonged swelling",
                    ].map((t) => (
                      <Badge key={t} tone="warning">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-ink">
                    Questions to ask
                  </p>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-brand-muted">
                    <li>How do you handle revision cases, and how often?</li>
                    <li>What’s your aftercare plan and follow-up cadence?</li>
                    <li>What outcomes are realistic for my anatomy?</li>
                    <li>How are complications documented and managed?</li>
                  </ul>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm font-semibold text-brand-ink">
                    Realistic expectations
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">
                    The goal is informed consent: understand tradeoffs, timelines,
                    and what “normal” recovery can look like—before you commit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

