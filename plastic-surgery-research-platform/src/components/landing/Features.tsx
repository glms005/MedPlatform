import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/lib/mock-data";

const icons = [
  "profile",
  "compare",
  "gallery",
  "shield",
  "guide",
  "steps",
  "warning",
] as const;

export function Features() {
  return (
    <section className="bg-brand-cream py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Built for evidence-based comparison"
          subtitle="Everything is designed to make information clearer, not prettier."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <Card key={f.title} className="p-6">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-brand-cream p-2 ring-1 ring-brand-outline">
                  <Icon variant={icons[idx % icons.length]} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-ink">
                    {f.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-brand-muted">
                    {f.description}
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

