import Link from "next/link";
import { whyTrustUs } from "@/lib/home-ecosystem";
import { EcosystemSection } from "./EcosystemSection";
import { StaggerItem, StaggerReveal } from "@/components/motion";

export function WhyTrustUs() {
  return (
    <EcosystemSection
      id="trust"
      eyebrow="Platform principles"
      title="Why Users Trust Us"
      description="Built for informed consent and transparency—not conversion funnels or glam marketing."
      className="bg-brand-navy text-white"
    >
      <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyTrustUs.map((card) => (
          <StaggerItem key={card.title}>
            <Link
              href={card.href}
              className="block h-full rounded-xl border border-white/12 bg-white/5 p-5 transition-all hover:bg-white/10 hover:shadow-lift"
            >
              <h3 className="font-display text-lg font-medium text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/72">{card.body}</p>
              <span className="mt-4 inline-block text-xs font-semibold text-emerald-200/90">
                Learn more →
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </EcosystemSection>
  );
}
