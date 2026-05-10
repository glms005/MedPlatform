"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/providers/LocaleProvider";

export function HowItWorks() {
  const { t, locale } = useLocale();

  return (
    <section className="border-y border-brand-outline/40 bg-brand-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.howItWorks.eyebrow}
          title={t.howItWorks.title}
          subtitle={t.howItWorks.subtitle}
          right={
            <div className="hidden items-center gap-2 rounded-full bg-brand-cream px-4 py-2 text-sm text-brand-muted ring-1 ring-brand-outline sm:flex">
              <Icon variant="steps" />
              {t.howItWorks.pill}
            </div>
          }
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {t.howItWorks.steps.map((s) => (
            <Card key={s.n} className="p-6">
              <p className="text-xs font-semibold tracking-wide text-brand-accentDark">
                {t.howItWorks.stepLabel} {s.n}
              </p>
              <p
                className={
                  locale === "ka"
                    ? "mt-2 text-lg font-semibold text-brand-ink"
                    : "mt-2 font-display text-lg font-semibold text-brand-ink"
                }
              >
                {s.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                {s.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
