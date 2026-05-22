"use client";

import { CategoryPortalCard } from "@/components/home/CategoryPortalCard";
import { WarmSectionHeader } from "@/components/layout/WarmSectionHeader";
import { Reveal } from "@/components/motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { HOME_CATEGORIES } from "@/lib/home-categories";

export function HomeExploreSection() {
  const { t } = useLocale();

  return (
    <section
      id="explore"
      className="warm-section warm-section--explore px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
      aria-labelledby="explore-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-8 flex justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-aqua-light via-white to-brand-teal-light text-xl text-brand-teal shadow-soft ring-1 ring-brand-aqua/40">
              ✦
            </span>
          </div>
          <WarmSectionHeader
            eyebrow={t.home.eyebrow}
            title={t.home.title}
            description={t.home.subtitle}
            centered
            as="h2"
            titleId="explore-heading"
          />
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
