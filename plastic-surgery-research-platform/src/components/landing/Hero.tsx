"use client";

import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/components/providers/LocaleProvider";

export function Hero() {
  const { t, locale } = useLocale();

  return (
    <section className="relative overflow-hidden bg-brand-cream pb-16 pt-6 sm:pb-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-brand-accent/15 blur-2xl sm:h-72 sm:w-72" />
        <div className="absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-brand-accent/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-48 w-48 rounded-full bg-brand-accent/10 blur-2xl" />
      </div>

      <Container>
        <div className="relative py-10 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge tone="brand">{t.hero.badges[0]}</Badge>
              <Badge>{t.hero.badges[1]}</Badge>
              <Badge>{t.hero.badges[2]}</Badge>
            </div>

            <h1
              className={
                locale === "ka"
                  ? "mt-6 text-balance text-4xl font-semibold leading-[1.15] tracking-tight text-brand-ink sm:text-5xl"
                  : "mt-6 text-balance font-display text-4xl font-semibold leading-[1.15] tracking-tight text-brand-ink sm:text-5xl"
              }
            >
              {t.hero.headline}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-brand-muted sm:text-lg">
              {t.hero.subheadline}
            </p>

            <div className="mt-10 flex max-w-xl flex-col gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
              <ButtonLink className="w-full sm:w-auto" href="/surgeons" size="lg" variant="primary">
                {t.hero.ctaPrimary}
              </ButtonLink>
              <ButtonLink className="w-full sm:w-auto" href="/procedures" size="lg" variant="secondary">
                {t.hero.ctaProcedures}
              </ButtonLink>
              <ButtonLink className="w-full sm:w-auto" href="#share" size="lg" variant="secondary">
                {t.hero.ctaSecondary}
              </ButtonLink>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {t.hero.trust.map((item) => (
                <Card
                  key={item.title}
                  interactive={false}
                  className="cursor-default p-5 text-left"
                >
                  <p className="text-sm font-semibold tracking-tight text-brand-ink">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {item.subtitle}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
