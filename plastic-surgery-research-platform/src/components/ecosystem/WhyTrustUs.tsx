import Link from "next/link";
import { StaggerItem, StaggerReveal } from "@/components/motion";
import { WarmSectionHeader } from "@/components/layout/WarmSectionHeader";
import { whyTrustUs } from "@/lib/home-ecosystem";

const TRUST_ICONS = ["★", "🛡", "📍", "💬", "📖", "🤝"] as const;

export function WhyTrustUs() {
  return (
    <section
      id="trust"
      className="warm-section warm-section--trust border-t-0 px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-brand-aqua/25 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-[1400px]">
        <WarmSectionHeader
          eyebrow="Platform principles"
          title="Why Users Trust Us"
          description="Built for informed consent and transparency—not conversion funnels or glam marketing."
        />

        <StaggerReveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {whyTrustUs.map((card, i) => (
            <StaggerItem key={card.title}>
              <Link href={card.href} className="warm-trust-card group">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-teal-light/90 text-lg shadow-sm"
                  aria-hidden
                >
                  {TRUST_ICONS[i]}
                </span>
                <h3 className="mt-4 font-display text-lg font-medium text-brand-slate">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{card.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-teal transition-colors group-hover:text-brand-teal-dark">
                  Learn more
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
