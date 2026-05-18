import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card } from "@/components/ui/Card";
import { ComingSoonBanner } from "@/components/shared/ComingSoonBanner";
import { subscriptionPlans } from "@/lib/mock-data/subscriptions";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-brand-ivory py-12 sm:py-16">
      <Container>
        <PageHeader
          title="Subscription plans"
          description="Future premium research features. Payments are not implemented in this MVP."
        />
        <ComingSoonBanner feature="Stripe billing" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {subscriptionPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col p-6 ${plan.id === "plan-plus" ? "ring-2 ring-brand-blue/30" : ""}`}
            >
              <h2 className="font-display text-xl font-semibold text-brand-ink">{plan.name}</h2>
              <p className="mt-2 font-display text-3xl text-brand-ink">
                {plan.priceMonthly === 0 ? "Free" : `$${plan.priceMonthly}`}
                {plan.priceMonthly > 0 ? (
                  <span className="text-sm font-normal text-brand-muted">/mo</span>
                ) : null}
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-brand-muted">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-brand-blue">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                disabled
                className="mt-6 w-full cursor-not-allowed rounded-md border border-brand-outline py-2.5 text-sm font-semibold text-brand-muted"
              >
                Not available in MVP
              </button>
            </Card>
          ))}
        </div>
        <Card className="mt-10 p-6">
          <h2 className="font-display text-lg font-semibold">Sponsored listings (future)</h2>
          <p className="mt-2 text-sm text-brand-muted">
            Paid surgeon and clinic placements will always be labeled &quot;Sponsored&quot; and will
            never affect organic review scores or trust metrics.
          </p>
        </Card>
      </Container>
    </div>
  );
}
