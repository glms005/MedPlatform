"use client";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcedureCard } from "@/components/procedures/ProcedureCard";
import { useLocale } from "@/components/providers/LocaleProvider";
import { procedures } from "@/lib/mock-data";

const SHOW = 8;

export function ProcedureCategories() {
  const { t } = useLocale();

  return (
    <section
      id="procedures"
      className="scroll-mt-24 border-t border-brand-outline/30 bg-brand-cream py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={t.procedureCategories.eyebrow}
          title={t.procedureCategories.title}
          subtitle={t.procedureCategories.subtitle}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {procedures.slice(0, SHOW).map((p) => (
            <ProcedureCard key={p.id} procedure={p} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/procedures" variant="secondary" size="lg">
            {t.procedureCategories.viewAll}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
