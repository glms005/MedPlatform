import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ClinicCard } from "@/components/clinics/ClinicCard";
import { clinics } from "@/lib/mock-data/clinics";

export default function ClinicsPage() {
  return (
    <div className="min-h-screen warm-page py-12 sm:py-16">
      <Container>
        <PageHeader
          eyebrow="Georgia · Mock directory"
          title="Clinics"
          description="Fictional clinic profiles with addresses, contact details, and Google Maps links for layout testing."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clinics.map((c) => (
            <ClinicCard key={c.id} clinic={c} />
          ))}
        </div>
      </Container>
    </div>
  );
}
