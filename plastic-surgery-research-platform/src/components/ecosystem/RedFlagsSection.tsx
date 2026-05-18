import { redFlags } from "@/lib/home-ecosystem";
import { EcosystemSection } from "./EcosystemSection";
import { StaggerItem, StaggerReveal } from "@/components/motion";

export function RedFlagsSection() {
  return (
    <EcosystemSection
      id="red-flags"
      eyebrow="Research responsibly"
      title="Red Flags to Watch For"
      description="Neutral, educational reminders—not accusations about any provider. Use these prompts during consults and when reading online content."
      className="bg-brand-sand/35"
    >
      <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {redFlags.map((flag) => (
          <StaggerItem key={flag.title}>
            <article className="h-full rounded-xl border border-amber-200/60 bg-white p-5 shadow-sm">
              <span className="text-lg" aria-hidden>
                ⚠
              </span>
              <h3 className="mt-2 font-display text-lg font-medium text-brand-ink">
                {flag.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{flag.body}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </EcosystemSection>
  );
}
