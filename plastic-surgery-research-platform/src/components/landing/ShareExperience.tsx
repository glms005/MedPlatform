import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ShareExperience() {
  return (
    <section id="share" className="bg-brand-cream py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="Contribute"
          title="Help others research with more clarity"
          subtitle="Share an experience using structured prompts (consult quality, aftercare, recovery, and outcomes). This is mock UI only—no data is collected yet."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <p className="text-sm font-semibold text-brand-ink">
              What you would share (example fields)
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>Consult clarity</Badge>
              <Badge>Informed consent</Badge>
              <Badge>Aftercare responsiveness</Badge>
              <Badge>Recovery notes</Badge>
              <Badge tone="warning">Complications (if any)</Badge>
              <Badge>Timeframes & context</Badge>
            </div>
            <p className="mt-4 text-sm leading-6 text-brand-muted">
              The goal is to make experiences comparable and responsible—reducing
              hype and increasing transparency.
            </p>
          </Card>

          <Card className="p-6">
            <p className="text-sm font-semibold text-brand-ink">Get involved</p>
            <p className="mt-2 text-sm leading-6 text-brand-muted">
              We’re building an early-access cohort focused on quality
              contributions and verification standards.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <ButtonLink href="#early-access" variant="primary" size="lg">
                Join Early Access
              </ButtonLink>
              <ButtonLink href="#surgeons" variant="secondary">
                Browse Surgeons
              </ButtonLink>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

