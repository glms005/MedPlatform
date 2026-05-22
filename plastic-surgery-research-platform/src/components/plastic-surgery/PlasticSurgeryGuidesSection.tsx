"use client";

import { PortalImageCard } from "@/components/shared/PortalImageCard";
import { WarmSectionHeader } from "@/components/layout/WarmSectionHeader";
import { Reveal } from "@/components/motion";
import { useLocale } from "@/components/providers/LocaleProvider";
import { procedures } from "@/lib/mock-data/procedures";
import { getProcedureVisual } from "@/lib/plastic-surgery-guides";

export function PlasticSurgeryGuidesSection() {
  const { t } = useLocale();
  const guides = t.plasticSurgeryPage.guides;

  return (
    <section
      id="guides"
      className="warm-section warm-section--explore px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
      aria-labelledby="guides-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-8 flex justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-aqua-light via-white to-brand-blue-light text-xl text-brand-blue shadow-soft ring-1 ring-brand-outline/60">
              ✦
            </span>
          </div>
          <WarmSectionHeader
            eyebrow={guides.eyebrow}
            title={guides.title}
            description={guides.description}
            centered
            as="h2"
            titleId="guides-heading"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {procedures.map((procedure, index) => {
            const visual = getProcedureVisual(procedure.slug);
            if (!visual) return null;

            return (
              <PortalImageCard
                key={procedure.id}
                href={`/procedures/${procedure.slug}`}
                image={visual.image}
                imageAlt={visual.imageAlt}
                overlay={visual.overlay}
                eyebrow={guides.cardEyebrow}
                title={procedure.name}
                description={procedure.description}
                exploreLabel={guides.readGuide}
                index={index}
                priority={index < 4}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
