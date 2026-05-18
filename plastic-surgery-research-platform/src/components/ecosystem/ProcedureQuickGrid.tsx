import Link from "next/link";
import { procedures } from "@/lib/mock-data";
import { EcosystemSection } from "./EcosystemSection";

const featured = procedures.slice(0, 8);

export function ProcedureQuickGrid() {
  return (
    <EcosystemSection
      id="procedures"
      eyebrow="Procedure library"
      title="Research by procedure type"
      description="Risks, recovery ranges, and realistic expectations—linked to surgeons and community threads."
      className="bg-brand-ivory"
      headerAction={
        <Link href="/procedures" className="text-sm font-semibold text-brand-blue hover:underline">
          All procedures →
        </Link>
      }
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {featured.map((proc) => (
          <Link
            key={proc.id}
            href={`/procedures/${proc.slug}`}
            className="group rounded-xl border border-brand-outline/70 bg-white p-4 transition-all hover:border-brand-blue/40 hover:shadow-soft"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-blue">
              {proc.category ?? "Procedure"}
            </p>
            <p className="mt-2 font-medium text-brand-ink group-hover:text-brand-blue">
              {proc.name}
            </p>
            <p className="mt-1 text-xs text-brand-muted line-clamp-2">
              {proc.description}
            </p>
          </Link>
        ))}
      </div>
    </EcosystemSection>
  );
}
