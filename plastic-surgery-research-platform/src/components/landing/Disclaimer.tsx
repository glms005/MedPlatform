import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function Disclaimer() {
  return (
    <section className="bg-brand-surface py-12">
      <Container>
        <Card className="p-6">
          <p className="text-sm font-semibold text-brand-ink">
            Medical disclaimer
          </p>
          <p className="mt-2 text-sm leading-6 text-brand-muted">
            This platform is for informational and research purposes only. It
            does not provide medical diagnosis, treatment, or medical advice.
            Always consult a qualified healthcare professional for guidance
            specific to your situation.
          </p>
        </Card>
      </Container>
    </section>
  );
}

