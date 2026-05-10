"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/components/providers/LocaleProvider";

export function Disclaimer() {
  const { t } = useLocale();

  return (
    <section
      id="disclaimer"
      className="scroll-mt-24 border-t border-brand-outline/30 bg-brand-surface py-14 sm:py-16"
    >
      <Container>
        <Card className="p-6">
          <p className="text-sm font-semibold text-brand-ink">{t.disclaimer.title}</p>
          <p className="mt-2 text-sm leading-6 text-brand-muted">{t.disclaimer.body}</p>
        </Card>
      </Container>
    </section>
  );
}
