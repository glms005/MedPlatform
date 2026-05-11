import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import {
  getProcedureBySlug,
  procedures,
} from "@/lib/mock-data/procedures";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return procedures.map((p) => ({ slug: p.slug }));
}

export default async function ProcedureGuidePage({ params }: Props) {
  const { slug } = await params;
  const p = getProcedureBySlug(slug);
  if (!p) notFound();

  return (
    <div className="min-h-screen bg-brand-ivory py-10 sm:py-14">
      <Container>
        <Link
          href="/procedures"
          className="text-sm font-medium text-brand-blue hover:underline"
        >
          ← All procedures
        </Link>
        <article className="prose prose-sm mt-6 max-w-3xl text-brand-ink">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
            Procedure guide
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            {p.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {p.description}
          </p>
        </article>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="font-display text-xl font-semibold">Ideal candidates</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              {p.idealCandidates}
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="font-display text-xl font-semibold">Revision risk</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              {p.revisionRisk}
            </p>
          </Card>
        </div>

        <Card className="mt-6 p-6">
          <h2 className="font-display text-xl font-semibold">Recovery timeline</h2>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted">
            {p.recoveryTimeline.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-brand-blue">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </Card>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="font-display text-xl font-semibold">Risks & complications</h2>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-brand-muted">
              {p.risks.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <h2 className="font-display text-xl font-semibold">Questions to ask</h2>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-brand-muted">
              {p.questionsToAsk.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="mt-8 border-brand-blue/20 p-6 ring-1 ring-brand-blue/20">
          <p className="text-sm font-semibold text-brand-ink">Medical disclaimer</p>
          <p className="mt-2 text-sm leading-relaxed text-brand-muted">
            This guide does not replace professional medical advice, examination, or
            diagnosis. Discuss risks and suitability only with qualified clinicians.
          </p>
        </Card>
      </Container>
    </div>
  );
}
