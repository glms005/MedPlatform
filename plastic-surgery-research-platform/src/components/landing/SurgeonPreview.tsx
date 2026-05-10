"use client";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SurgeonCard } from "@/components/surgeons/SurgeonCard";
import { useLocale } from "@/components/providers/LocaleProvider";
import { surgeons } from "@/lib/mock-data";

const PREVIEW_COUNT = 4;

export function SurgeonPreview() {
  const { t } = useLocale();
  const preview = surgeons.slice(0, PREVIEW_COUNT);

  return (
    <section
      id="surgeons"
      className="scroll-mt-24 border-t border-brand-outline/30 bg-brand-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={t.surgeons.eyebrow}
          title={t.surgeons.title}
          subtitle={t.surgeons.subtitle}
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {preview.map((s) => (
            <SurgeonCard key={s.id} surgeon={s} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/surgeons" variant="secondary" size="lg">
            {t.surgeons.viewAll}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
