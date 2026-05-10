"use client";

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
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
          Directory
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-brand-ink sm:text-4xl">
          Surgeons
        </h1>
        <p className="mt-3 max-w-2xl text-brand-muted">
          Browse and compare fictional profiles for UX testing only. Not an endorsement
          or ranking. Always verify credentials independently.
        </p>
      </header>
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
        <p className="mt-8 rounded-2xl border border-dashed border-brand-outline bg-brand-surface px-4 py-8 text-center text-brand-muted">
          No surgeons match your filters. Try clearing procedure or city.
        </p>
      ) : null}
    </Container>
  );
}
