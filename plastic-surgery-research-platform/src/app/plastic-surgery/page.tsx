import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProcedureCard } from "@/components/procedures/ProcedureCard";
import { procedures } from "@/lib/mock-data/procedures";

export default function PlasticSurgeryPage() {
  return (
    <div className="min-h-screen warm-page py-12 sm:py-16">
      <Container>
        <PageHeader
          eyebrow="Surgical procedures"
          title="Plastic Surgery"
          description="Educational guides for surgical procedures — risks, recovery timelines, and questions to ask. Not medical advice."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {procedures.map((p) => (
            <ProcedureCard key={p.id} procedure={p} />
          ))}
        </div>
      </Container>
    </div>
  );
}
