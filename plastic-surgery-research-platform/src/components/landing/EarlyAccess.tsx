"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/components/providers/LocaleProvider";

export function EarlyAccess() {
  const { t } = useLocale();

  return (
    <section
      id="early-access"
      className="scroll-mt-24 bg-brand-surface py-14 sm:py-16"
    >
      <Container>
        <Card className="p-6">
          <p className="text-sm font-semibold text-brand-ink">{t.earlyAccess.title}</p>
          <p className="mt-2 text-sm leading-6 text-brand-muted">{t.earlyAccess.body}</p>
        </Card>
      </Container>
    </section>
  );
}
