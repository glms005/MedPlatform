import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Research surgeons",
    description:
      "Review structured profiles that emphasize qualifications, scope, and transparency signals.",
  },
  {
    n: "02",
    title: "Compare real patient experiences",
    description:
      "Look beyond star ratings with standardized fields for consult clarity, aftercare, and recovery.",
  },
  {
    n: "03",
    title: "Make a more informed decision",
    description:
      "Use evidence and patterns to ask better questions before committing to surgery.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-brand-surface py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="Method"
          title="A calm, structured workflow"
          subtitle="Designed for research, not hype."
          right={
            <div className="hidden items-center gap-2 rounded-full bg-brand-cream px-4 py-2 text-sm text-brand-muted ring-1 ring-brand-outline sm:flex">
              <Icon variant="steps" />
              Three-step research flow
            </div>
          }
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.n} className="p-6">
              <p className="text-xs font-semibold tracking-wide text-brand-accentDark">
                Step {s.n}
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-brand-ink">
                {s.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                {s.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

