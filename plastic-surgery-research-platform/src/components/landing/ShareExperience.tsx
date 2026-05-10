"use client";

import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/providers/LocaleProvider";

export function ShareExperience() {
  const { t } = useLocale();

  return (
    <section
      id="share"
      className="scroll-mt-24 bg-brand-cream py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={t.share.eyebrow}
          title={t.share.title}
          subtitle={t.share.subtitle}
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <p className="text-sm font-semibold text-brand-ink">
              {t.share.fieldsTitle}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.share.fieldBadges.map((label, i) => (
                <Badge key={i} tone={i === 4 ? "warning" : undefined}>
                  {label}
                </Badge>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-brand-muted">
              {t.share.fieldsNote}
            </p>
          </Card>

          <Card className="p-6">
            <p className="text-sm font-semibold text-brand-ink">
              {t.share.asideTitle}
            </p>
            <p className="mt-2 text-sm leading-6 text-brand-muted">
              {t.share.asideBody}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <ButtonLink href="#early-access" variant="primary" size="lg">
                {t.share.ctaPrimary}
              </ButtonLink>
              <ButtonLink href="/surgeons" variant="secondary">
                {t.share.ctaSecondary}
              </ButtonLink>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
