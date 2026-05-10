import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  return (
    <section className="bg-brand-cream py-14 sm:py-18">
      <Container>
        <Card className="overflow-hidden">
          <div className="relative p-7 sm:p-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-accent/25 blur-3xl" />
            </div>

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="font-display text-2xl font-semibold tracking-tight text-brand-ink">
                  Choose Your Surgeon With More Confidence
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  A transparency-first research platform for rhinoplasty decisions
                  in Georgia.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#surgeons" variant="primary" size="lg">
                  Browse Surgeons
                </ButtonLink>
                <ButtonLink href="#early-access" variant="secondary" size="lg">
                  Join Early Access
                </ButtonLink>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

