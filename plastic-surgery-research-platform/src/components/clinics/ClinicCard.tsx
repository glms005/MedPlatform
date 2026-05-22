import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Clinic } from "@/types/domain";

export function ClinicCard({ clinic }: { clinic: Clinic }) {
  return (
    <Card className="flex h-full flex-col p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
        {clinic.city}
      </p>
      <h2 className="mt-2 font-display text-xl font-semibold text-brand-ink">
        <Link href={`/clinics/${clinic.id}`} className="hover:text-brand-blue hover:underline">
          {clinic.name}
        </Link>
      </h2>
      <p className="mt-2 line-clamp-2 text-sm text-brand-muted">{clinic.description}</p>
      <p className="mt-3 text-xs text-brand-muted">{clinic.address}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        <Link
          href={`/clinics/${clinic.id}`}
          className="warm-btn-primary rounded-md px-3 py-2 text-xs"
        >
          View clinic
        </Link>
        <a
          href={clinic.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-brand-outline px-3 py-2 text-xs font-semibold text-brand-ink hover:border-brand-blue/40"
        >
          Google Maps
        </a>
      </div>
    </Card>
  );
}
