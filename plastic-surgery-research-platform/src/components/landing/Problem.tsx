"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/providers/LocaleProvider";

const iconByKey = {
  filters: "warning",
  reviews: "shield",
  compare: "compare",
  complications: "search",
} as const;

export function Problem() {
  const { t } = useLocale();

  return (
    <section className="bg-gradient-to-b from-brand-cream to-brand-surface/30 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.problem.eyebrow}
          title={t.problem.title}
          subtitle={t.problem.subtitle}
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.problem.cards.map((it) => (
            <Card key={it.key} className="p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-brand-cream p-2 ring-1 ring-brand-outline">
                  <Icon variant={iconByKey[it.key as keyof typeof iconByKey]} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-ink">{it.title}</p>
                  <p className="mt-1 text-sm leading-6 text-brand-muted">
                    {it.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
