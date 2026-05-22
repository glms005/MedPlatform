import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ComingSoonBanner } from "@/components/shared/ComingSoonBanner";
import { Card } from "@/components/ui/Card";

const procedures = [
  {
    name: "Chemical peel",
    note: "Depth, downtime, and skin-type matching matter.",
  },
  {
    name: "Microneedling",
    note: "Healing timeline and hygiene protocols vary by clinic.",
  },
  {
    name: "Laser resurfacing",
    note: "Understand pigment risks and sun protection after treatment.",
  },
  {
    name: "Injectable fillers (education)",
    note: "Product-neutral guides — not brand endorsements.",
  },
  {
    name: "Botulinum toxin (education)",
    note: "Expectation setting and follow-up access.",
  },
  {
    name: "Hydrafacial / hydradermabrasion",
    note: "Often low downtime; still document any irritation.",
  },
];

export default function AestheticProceduresPage() {
  return (
    <div className="min-h-screen warm-page py-12 sm:py-16">
      <Container>
        <PageHeader
          title="Aesthetic Procedures"
          description="Non-surgical and med-spa style treatments — educational overviews only."
        />
        <ComingSoonBanner feature="Detailed Aesthetic procedure guides" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {procedures.map((p) => (
            <Card key={p.name} className="p-5">
              <h2 className="font-semibold text-brand-ink">{p.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{p.note}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-brand-muted">
          <Link href="/plastic-surgery" className="text-brand-blue hover:underline">
            Plastic surgery procedures
          </Link>{" "}
          ·{" "}
          <Link href="/forum" className="text-brand-blue hover:underline">
            Community forum
          </Link>
        </p>
      </Container>
    </div>
  );
}
