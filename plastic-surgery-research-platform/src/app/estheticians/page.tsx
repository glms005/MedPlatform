import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ComingSoonBanner } from "@/components/shared/ComingSoonBanner";
import { Card } from "@/components/ui/Card";

const preview = [
  {
    name: "Nino Aesthetics, LE",
    city: "Tbilisi",
    focus: "Skin health · injectables · laser (fictional)",
  },
  {
    name: "Black Sea Beauty Studio",
    city: "Batumi",
    focus: "Med-spa consultations · peels (fictional)",
  },
  {
    name: "Vake Wellness Lounge",
    city: "Tbilisi",
    focus: "Non-surgical facial treatments (fictional)",
  },
];

export default function EstheticiansPage() {
  return (
    <div className="min-h-screen bg-brand-ivory py-12 sm:py-16">
      <Container>
        <PageHeader
          title="Estheticians"
          description="Licensed estheticians and med-spa providers for non-surgical care. Directory expands in a future release."
        />
        <ComingSoonBanner feature="Full esthetician profiles & booking" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((e) => (
            <Card key={e.name} className="p-5">
              <p className="text-xs font-semibold uppercase text-brand-teal">Preview</p>
              <h2 className="mt-2 font-semibold text-brand-ink">{e.name}</h2>
              <p className="mt-1 text-sm text-brand-muted">{e.city}</p>
              <p className="mt-2 text-sm text-brand-muted">{e.focus}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-brand-muted">
          <Link href="/surgeons" className="text-brand-blue hover:underline">
            Plastic surgeons directory
          </Link>{" "}
          ·{" "}
          <Link href="/esthetic-procedures" className="text-brand-blue hover:underline">
            Esthetic procedures
          </Link>
        </p>
      </Container>
    </div>
  );
}
