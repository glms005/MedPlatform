import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function EarlyAccess() {
  return (
    <section id="early-access" className="bg-brand-surface py-12">
      <Container>
        <Card className="p-6">
          <p className="text-sm font-semibold text-brand-ink">
            Early access (mock)
          </p>
          <p className="mt-2 text-sm leading-6 text-brand-muted">
            This is a landing-page MVP only. In the next phase, early access
            will support invite-based onboarding, contribution guidelines, and a
            verification policy.
          </p>
        </Card>
      </Container>
    </section>
  );
}

