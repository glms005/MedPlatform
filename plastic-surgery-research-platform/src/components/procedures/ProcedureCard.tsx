import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Procedure } from "@/types/domain";

export function ProcedureCard({ procedure }: { procedure: Procedure }) {
  return (
    <Card className="flex h-full flex-col p-6">
      <h2 className="font-display text-lg font-semibold text-brand-ink">
        {procedure.name}
      </h2>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-brand-muted">
        {procedure.description}
      </p>
      <ul className="mt-4 flex-1 space-y-1.5 text-xs text-brand-muted">
        {procedure.risks.slice(0, 3).map((r) => (
          <li key={r} className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-blue/70" />
            <span>{r}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/procedures/${procedure.slug}`}
        className="mt-5 inline-flex text-sm font-semibold text-brand-blue underline-offset-4 hover:underline"
      >
        Read guide
      </Link>
    </Card>
  );
}
