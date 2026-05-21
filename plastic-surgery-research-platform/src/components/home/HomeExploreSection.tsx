"use client";

import { CategoryPortalCard } from "@/components/home/CategoryPortalCard";
import { Reveal } from "@/components/motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { HOME_CATEGORIES } from "@/lib/home-categories";

export function HomeExploreSection() {
  const { t } = useLocale();

  return (
    <section
      id="explore"
      className="border-b border-brand-outline/40 bg-gradient-to-b from-brand-ivory via-brand-champagne/40 to-brand-ivory px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
      aria-labelledby="explore-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-teal">
            {t.home.eyebrow}
          </p>
          <h2
            id="explore-heading"
            className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-tight tracking-tight text-brand-ink"
          >
            {t.home.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
            {t.home.subtitle}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {HOME_CATEGORIES.map((config, index) => {
            const copy = t.home.categories[config.id];
            return (
              <CategoryPortalCard
                key={config.id}
                config={config}
                eyebrow={copy.eyebrow}
                title={t.nav[config.id]}
                description={copy.description}
                exploreLabel={t.home.explore}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
