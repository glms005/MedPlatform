"use client";

import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { SurgeonCard } from "@/components/surgeons/SurgeonCard";
import {
  SearchFiltersBar,
  useSurgeonFilter,
} from "@/components/surgeons/SearchFilters";
import { surgeons } from "@/lib/mock-data";

export function SurgeonsPageClient() {
  const filter = useSurgeonFilter(surgeons);

  return (
    <Container>
      <PageHeader
        eyebrow="Directory"
        title="Surgeons"
        description="Browse and compare fictional profiles for UX testing only. Not an endorsement or ranking. Always verify credentials independently."
      />
      <SearchFiltersBar {...filter} />
      <p className="mt-6 text-sm text-brand-muted">
        Showing {filter.filtered.length} of {surgeons.length} profiles
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filter.filtered.map((s) => (
          <SurgeonCard key={s.id} surgeon={s} />
        ))}
      </div>
      {filter.filtered.length === 0 ? (
        <p className="warm-panel mt-8 px-4 py-8 text-center text-brand-muted">
          No surgeons match your filters. Try clearing procedure or city.
        </p>
      ) : null}
    </Container>
  );
}
