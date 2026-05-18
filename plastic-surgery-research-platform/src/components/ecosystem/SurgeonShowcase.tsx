import Link from "next/link";
import { surgeons } from "@/lib/mock-data";
import { EcosystemSection } from "./EcosystemSection";
import { SurgeonProfileMockup } from "./SurgeonProfileMockup";
import { StaggerItem, StaggerReveal } from "@/components/motion";

const featured = surgeons.slice(0, 3);

export function SurgeonShowcase() {
  return (
    <EcosystemSection
      id="surgeons"
      eyebrow="Directory"
      title="Surgeon profiles you can actually compare"
      description="Credentials, patient ratings, procedure focus, and community-flagged patterns—fictional data for UX demonstration."
      className="bg-white"
      headerAction={
        <Link
          href="/surgeons"
          className="inline-flex rounded-lg border border-brand-outline px-4 py-2.5 text-sm font-semibold text-brand-ink hover:bg-brand-sand"
        >
          Full directory
        </Link>
      }
    >
      <StaggerReveal className="grid gap-5 lg:grid-cols-3">
        {featured.map((surgeon) => (
          <StaggerItem key={surgeon.id}>
            <SurgeonProfileMockup surgeon={surgeon} />
          </StaggerItem>
        ))}
      </StaggerReveal>
    </EcosystemSection>
  );
}
