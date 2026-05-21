import { Container } from "@/components/ui/Container";
import { ProcedureCard } from "@/components/procedures/ProcedureCard";
import { procedures } from "@/lib/mock-data/procedures";

export default function PlasticSurgeryPage() {
  return (
    <div className="min-h-screen bg-brand-ivory py-12 sm:py-16">
      <Container>
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
            Surgical procedures
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
            Plastic Surgery
          </h1>
          <p className="mt-3 max-w-2xl text-brand-muted">
            Educational guides for surgical procedures — risks, recovery timelines, and
            questions to ask. Not medical advice.
          </p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {procedures.map((p) => (
            <ProcedureCard key={p.id} procedure={p} />
          ))}
        </div>
      </Container>
    </div>
  );
}
