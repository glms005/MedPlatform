"use client";

import { useState, type FormEvent } from "react";
import { Card } from "@/components/ui/Card";
import { surgeons } from "@/lib/mock-data/surgeons";
import { procedures } from "@/lib/mock-data/procedures";

export function ReviewForm() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("done");
  }

  if (status === "done") {
    return (
      <Card className="border-brand-blue/30 p-8 text-center ring-1 ring-brand-blue/20">
        <p className="text-xl font-semibold tracking-tight text-brand-ink">
          Review submitted for moderation
        </p>
        <p className="mt-2 text-sm text-brand-muted">
          In production, your review would stay <strong>pending</strong> until a
          moderator approves it. Nothing was saved in this MVP demo.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8">
      <form className="space-y-6" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Surgeon</span>
            <select
              required
              name="surgeonId"
              className="w-full rounded-xl border border-brand-outline bg-white px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-2"
            >
              <option value="">Select</option>
              {surgeons.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Procedure</span>
            <select
              required
              name="procedureId"
              className="w-full rounded-xl border border-brand-outline bg-white px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-2"
            >
              <option value="">Select</option>
              {procedures.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Surgery year</span>
          <input
            type="number"
            name="year"
            min={2000}
            max={2030}
            required
            className="w-full max-w-xs rounded-xl border border-brand-outline px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-2"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          {(
            [
              ["satisfactionScore", "Satisfaction (1–5)"],
              ["communicationScore", "Communication (1–5)"],
              ["aftercareScore", "Aftercare (1–5)"],
              ["clinicCleanlinessScore", "Clinic cleanliness (1–5)"],
            ] as const
          ).map(([name, label]) => (
            <label key={name} className="block text-sm">
              <span className="mb-1 block font-medium">{label}</span>
              <input
                type="number"
                name={name}
                min={1}
                max={5}
                required
                className="w-full rounded-xl border border-brand-outline px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-2"
              />
            </label>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="hadComplications" className="rounded" />
          Complications occurred
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Complication details (optional)</span>
          <textarea
            name="complicationDetails"
            rows={2}
            className="w-full rounded-xl border border-brand-outline px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-2"
          />
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="wouldRecommend" className="rounded" />
          Would recommend
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Recovery notes</span>
          <textarea
            name="recoveryNotes"
            rows={3}
            className="w-full rounded-xl border border-brand-outline px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Written review</span>
          <textarea
            name="comment"
            required
            rows={5}
            placeholder="Factual experience only. No harassment or unverified allegations."
            className="w-full rounded-xl border border-brand-outline px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-2"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-lg bg-brand-ink py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-accentDark sm:w-auto sm:px-10"
        >
          Submit (mock)
        </button>
      </form>
    </Card>
  );
}
