"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/providers/LocaleProvider";

const icons = [
  "profile",
  "compare",
  "gallery",
  "shield",
  "guide",
  "steps",
  "warning",
] as const;

export function Features() {
  const { t } = useLocale();

  return (
    <section className="bg-brand-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.features.eyebrow}
          title={t.features.title}
          subtitle={t.features.subtitle}
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((f, idx) => (
            <Card key={f.title} className="p-6">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-brand-cream p-2 ring-1 ring-brand-outline">
                  <Icon variant={icons[idx % icons.length]} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-ink">{f.title}</p>
                  <p className="mt-1 text-sm leading-6 text-brand-muted">
                    {f.description}
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
