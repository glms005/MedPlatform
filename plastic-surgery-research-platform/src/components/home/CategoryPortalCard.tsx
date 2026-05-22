"use client";

import { PortalImageCard } from "@/components/shared/PortalImageCard";
import type { HomeCategoryConfig } from "@/lib/home-categories";

type CategoryPortalCardProps = {
  config: HomeCategoryConfig;
  eyebrow: string;
  title: string;
  description: string;
  exploreLabel: string;
  index: number;
};

export function CategoryPortalCard({
  config,
  eyebrow,
  title,
  description,
  exploreLabel,
  index,
}: CategoryPortalCardProps) {
  return (
    <PortalImageCard
      href={config.href}
      image={config.image}
      imageAlt={config.imageAlt}
      overlay={config.overlay}
      eyebrow={eyebrow}
      title={title}
      description={description}
      exploreLabel={exploreLabel}
      index={index}
      priority={index < 2}
    />
  );
}
