"use client";

import { useMemo, useState } from "react";
import type { Surgeon } from "@/types/domain";
import { procedures } from "@/lib/mock-data/procedures";

const cities = ["Tbilisi", "Batumi", "Kutaisi"] as const;

export function useSurgeonFilter(all: Surgeon[]) {
  const [q, setQ] = useState("");
  const [procedureSlug, setProcedureSlug] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [clinic, setClinic] = useState("");
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const filtered = useMemo(() => {
    return all.filter((s) => {
      if (verifiedOnly && !s.verified) return false;
      if (city && s.city !== city) return false;
      if (
        procedureSlug &&
        !s.procedures.includes(procedureSlug)
      ) {
        return false;
      }
      if (
        clinic &&
        !s.clinic.toLowerCase().includes(clinic.trim().toLowerCase())
      ) {
        return false;
      }
      if (q.trim()) {
        const n = `${s.name} ${s.specialty} ${s.clinic}`.toLowerCase();
        if (!n.includes(q.trim().toLowerCase())) return false;
      }
      return true;
    });
  }, [all, q, procedureSlug, city, clinic, verifiedOnly]);

  return {
    q,
    setQ,
    procedureSlug,
    setProcedureSlug,
    city,
    setCity,
    clinic,
    setClinic,
    verifiedOnly,
    setVerifiedOnly,
    filtered,
  };
}

export function SearchFiltersBar({
  q,
  setQ,
  procedureSlug,
  setProcedureSlug,
  city,
  setCity,
  clinic,
  setClinic,
  verifiedOnly,
  setVerifiedOnly,
}: ReturnType<typeof useSurgeonFilter>) {
  return (
    <div className="space-y-4 rounded-2xl border border-brand-outline bg-white p-4 shadow-sm sm:p-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-brand-ink">Search</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Name, specialty, or clinic"
            className="w-full rounded-xl border border-brand-outline bg-white px-3 py-2 text-sm text-brand-ink outline-none ring-brand-blue/30 transition-shadow placeholder:text-brand-muted/80 focus:border-brand-blue focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-brand-ink">
            Procedure
          </span>
          <select
            value={procedureSlug}
            onChange={(e) => setProcedureSlug(e.target.value)}
            className="w-full rounded-xl border border-brand-outline bg-white px-3 py-2 text-sm text-brand-ink outline-none focus:border-brand-blue focus:ring-2"
          >
            <option value="">Any procedure</option>
            {procedures.map((p) => (
              <option key={p.id} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-brand-ink">City</span>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full rounded-xl border border-brand-outline bg-white px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-2"
          >
            <option value="">Any city</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-brand-ink">Clinic</span>
          <input
            value={clinic}
            onChange={(e) => setClinic(e.target.value)}
            placeholder="Filter by clinic name"
            className="w-full rounded-xl border border-brand-outline bg-white px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-2"
          />
        </label>
      </div>
      <label className="flex cursor-pointer items-center gap-2 text-sm text-brand-ink">
        <input
          type="checkbox"
          checked={verifiedOnly}
          onChange={(e) => setVerifiedOnly(e.target.checked)}
          className="h-4 w-4 rounded border-brand-outline text-brand-blue focus:ring-brand-blue"
        />
        Verified profiles only
      </label>
    </div>
  );
}
