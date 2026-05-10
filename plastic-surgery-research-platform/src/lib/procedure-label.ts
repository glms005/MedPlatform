import { procedures } from "@/lib/mock-data/procedures";

export function procedureLabelFromSlug(slug: string): string {
  const p = procedures.find((x) => x.slug === slug);
  return p?.name ?? slug;
}
