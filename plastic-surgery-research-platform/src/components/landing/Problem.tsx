import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    icon: "warning" as const,
    title: "Filters replace facts",
    description:
      "People end up relying on curated Instagram content instead of structured evidence.",
  },
  {
    icon: "shield" as const,
    title: "Fake or unclear reviews",
    description:
      "It’s hard to tell what’s real, what’s sponsored, and what’s missing.",
  },
  {
    icon: "compare" as const,
    title: "No apples-to-apples comparison",
    description:
      "Qualifications, scope, aftercare, and outcomes aren’t presented consistently.",
  },
  {
    icon: "search" as const,
    title: "Complications are under-discussed",
    description:
      "Recovery realities and red flags are rarely captured in an organized way.",
  },
];

export function Problem() {
  return (
    <section className="bg-brand-cream py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="Why this exists"
          title="Surgery decisions deserve better information"
          subtitle="This platform is built to reduce ambiguity—not to market procedures."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <Card key={it.title} className="p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-brand-cream p-2 ring-1 ring-brand-outline">
                  <Icon variant={it.icon} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-ink">
                    {it.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-brand-muted">
                    {it.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

