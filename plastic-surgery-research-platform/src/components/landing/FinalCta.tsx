"use client";

import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/components/providers/LocaleProvider";

export function FinalCta() {
  const { t, locale } = useLocale();

  return (
    <section className="bg-gradient-to-b from-brand-cream to-brand-surface/40 py-16 sm:py-20 lg:py-24">
      <Container>
        <Card
          interactive={false}
          className="overflow-hidden ring-1 ring-brand-accent/25 shadow-lift"
        >
          <div className="relative p-7 sm:p-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-accent/25 blur-3xl" />
            </div>

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p
                  className={
                    locale === "ka"
                      ? "text-2xl font-semibold tracking-tight text-brand-ink"
                      : "font-display text-2xl font-semibold tracking-tight text-brand-ink"
                  }
                >
                  {t.finalCta.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  {t.finalCta.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/surgeons" variant="primary" size="lg">
                  {t.finalCta.browse}
                </ButtonLink>
                <ButtonLink href="#early-access" variant="secondary" size="lg">
                  {t.finalCta.join}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
