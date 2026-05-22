import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MedicalDisclaimer } from "@/components/shared/MedicalDisclaimer";
import { clinics, getClinicById } from "@/lib/mock-data/clinics";
import { surgeons } from "@/lib/mock-data/surgeons";
import { procedureLabelFromSlug } from "@/lib/procedure-label";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return clinics.map((c) => ({ id: c.id }));
}

export default async function ClinicProfilePage({ params }: Props) {
  const { id } = await params;
  const clinic = getClinicById(id);
  if (!clinic) notFound();

  const clinicSurgeons = surgeons.filter((s) => clinic.surgeonIds.includes(s.id));

  return (
    <div className="min-h-screen warm-page py-10 sm:py-14">
      <Container>
        <Link href="/clinics" className="text-sm font-medium text-brand-blue hover:underline">
          ← Clinics
        </Link>

        <header className="mt-6 border-b border-brand-outline/40 pb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
            {clinic.city}
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
            {clinic.name}
          </h1>
          <p className="mt-3 max-w-2xl text-brand-muted">{clinic.description}</p>
          <p className="mt-2 text-sm text-brand-muted">{clinic.address}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {clinic.phone ? (
              <a
                href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                className="rounded-md border border-brand-outline px-4 py-2 text-sm font-semibold hover:border-brand-blue/40"
              >
                {clinic.phone}
              </a>
            ) : null}
            {clinic.website ? (
              <a
                href={clinic.website}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-brand-outline px-4 py-2 text-sm font-semibold hover:border-brand-blue/40"
              >
                Website
              </a>
            ) : null}
            <a
              href={clinic.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="warm-btn-primary rounded-md px-4 py-2 text-sm"
            >
              Open in Google Maps
            </a>
          </div>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <section className="space-y-6 lg:col-span-2">
            <Card className="overflow-hidden p-0">
              <div className="flex aspect-[16/9] items-center justify-center bg-brand-champagne/50 text-sm text-brand-muted">
                Map embed placeholder — link to Google Maps above
              </div>
            </Card>
            <Card className="p-6">
              <h2 className="font-display text-xl font-semibold">Procedures offered</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {clinic.procedures.map((slug) => (
                  <Badge key={slug} tone="brand">
                    {procedureLabelFromSlug(slug)}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <h2 className="font-display text-xl font-semibold">Associated surgeons</h2>
              <ul className="mt-4 space-y-3">
                {clinicSurgeons.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/surgeons/${s.id}`}
                      className="font-medium text-brand-blue hover:underline"
                    >
                      {s.name}
                    </Link>
                    <p className="text-sm text-brand-muted">{s.specialty}</p>
                  </li>
                ))}
                {clinicSurgeons.length === 0 ? (
                  <li className="text-sm text-brand-muted">No linked surgeons in mock data.</li>
                ) : null}
              </ul>
            </Card>
          </section>
          <aside>
            <Card className="border-brand-blue/20 p-6 ring-1 ring-brand-blue/15">
              <MedicalDisclaimer compact />
            </Card>
          </aside>
        </div>
      </Container>
    </div>
  );
}
