import Link from "next/link";
import { platformStats } from "@/lib/home-ecosystem";
import { EcosystemSection } from "./EcosystemSection";
import { StaggerItem, StaggerReveal } from "@/components/motion";

const trustPoints = [
  {
    title: "Moderation-first reviews",
    body: "New submissions enter pending review. Approved content is labeled; flagged items are hidden from public lists.",
    href: "/reviews/new",
  },
  {
    title: "Community rules enforced",
    body: "No harassment, outcome guarantees, or medical misinformation. Report flows are built into threads and reviews.",
    href: "/rules",
  },
  {
    title: "Clinic transparency",
    body: "Clinic profiles link to maps, procedures offered, and associated surgeons—compare logistics, not hype.",
    href: "/clinics",
  },
  {
    title: "Independent verification",
    body: "Surgeon credentials include source links; “verified” badges reflect platform checks, not endorsements.",
    href: "/surgeons",
  },
];

export function TrustLayer() {
  return (
    <EcosystemSection
      id="trust"
      eyebrow="Why researchers stay"
      title="Trust is the product"
      description="ShareWell is designed for informed consent—not conversion funnels."
      className="bg-brand-ink text-white"
    >
      <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point) => (
          <StaggerItem key={point.title}>
            <Link
              href={point.href}
              className="block h-full rounded-xl border border-white/15 bg-white/5 p-5 transition-colors hover:bg-white/10"
            >
              <h3 className="font-display text-lg font-medium text-white">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{point.body}</p>
            </Link>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-4">
        <TrustStat label="Pending moderation" value={platformStats.pendingModeration} />
        <TrustStat label="Active today" value={platformStats.activeToday} />
        <TrustStat label="Forum threads" value={platformStats.forumThreads} />
        <TrustStat label="Structured reviews" value={platformStats.reviews} />
      </dl>
    </EcosystemSection>
  );
}

function TrustStat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold uppercase tracking-wide text-white/50">
        {label}
      </dt>
      <dd className="mt-1 text-2xl font-bold text-white">{value}</dd>
    </div>
  );
}
