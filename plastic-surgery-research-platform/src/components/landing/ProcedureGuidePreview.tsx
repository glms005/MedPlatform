"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/providers/LocaleProvider";

export function ProcedureGuidePreview() {
  const { t } = useLocale();

  return (
    <section className="bg-brand-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.guide.eyebrow}
          title={t.guide.title}
          subtitle={t.guide.subtitle}
        />

        <Card className="mt-8 p-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-sm font-semibold text-brand-ink">
                {t.guide.timelineTitle}
              </p>
              <div className="mt-3 space-y-2 text-sm text-brand-muted">
                {t.guide.timeline.map((row) => (
                  <p key={row.label}>
                    <span className="font-medium text-brand-ink">{row.label}</span>{" "}
                    {row.text}
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-brand-ink">
                    {t.guide.risksTitle}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {t.guide.risks.map((risk) => (
                      <Badge key={risk} tone="warning">
                        {risk}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-ink">
                    {t.guide.questionsTitle}
                  </p>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-brand-muted">
                    {t.guide.questions.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm font-semibold text-brand-ink">
                    {t.guide.expectationsTitle}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">
                    {t.guide.expectations}
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
