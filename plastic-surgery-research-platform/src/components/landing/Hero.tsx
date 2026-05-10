import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-brand-accent/25 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />
      </div>

      <Container>
        <div className="relative py-14 sm:py-18 lg:py-22">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge tone="brand">Evidence-focused</Badge>
              <Badge>Not a clinic</Badge>
              <Badge>Transparency-first</Badge>
            </div>

            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
              Research Your Plastic Surgeon Before Surgery
            </h1>

            <p className="mt-5 text-base leading-7 text-brand-muted sm:text-lg">
              Find structured, transparent, and evidence-based information about
              rhinoplasty surgeons in Georgia.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="#surgeons" size="lg" variant="primary">
                Explore Surgeons
              </ButtonLink>
              <ButtonLink href="#share" size="lg" variant="secondary">
                Share Your Experience
              </ButtonLink>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { k: "Structured data", v: "Compare like-for-like" },
                { k: "Real-world recovery", v: "Expectations & red flags" },
                { k: "Verification signals", v: "Evidence when available" },
              ].map((t) => (
                <Card key={t.k} className="p-4 text-left">
                  <p className="text-sm font-medium text-slate-900">{t.k}</p>
                  <p className="mt-1 text-sm text-slate-600">{t.v}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

