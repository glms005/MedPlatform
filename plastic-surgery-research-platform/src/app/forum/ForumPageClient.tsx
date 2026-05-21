"use client";

import { useMemo, useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ForumThreadCard } from "@/components/forum/ForumThreadCard";
import { useLocale } from "@/components/providers/LocaleProvider";
import type { ForumThread } from "@/types/domain";
import { sortThreadsByRecent, sortThreadsByTop } from "@/lib/mock-data/forum";

type Sort = "recent" | "top";

export function ForumPageClient({ initialThreads }: { initialThreads: ForumThread[] }) {
  const { t } = useLocale();
  const [sort, setSort] = useState<Sort>("recent");

  const threads = useMemo(
    () => (sort === "top" ? sortThreadsByTop(initialThreads) : sortThreadsByRecent(initialThreads)),
    [initialThreads, sort],
  );

  return (
    <>
      <PageHeader
        eyebrow={t.common.mockData}
        title={t.forum.title}
        description={t.forum.subtitle}
      />
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSort("recent")}
          className={
            sort === "recent"
              ? "warm-nav-pill warm-nav-pill--active px-4 py-2 text-sm"
              : "warm-nav-pill border border-brand-outline/60 bg-white/80 px-4 py-2 text-sm font-medium text-brand-muted"
          }
        >
          {t.forum.sortRecent}
        </button>
        <button
          type="button"
          onClick={() => setSort("top")}
          className={
            sort === "top"
              ? "warm-nav-pill warm-nav-pill--active px-4 py-2 text-sm"
              : "warm-nav-pill border border-brand-outline/60 bg-white/80 px-4 py-2 text-sm font-medium text-brand-muted"
          }
        >
          {t.forum.sortTop}
        </button>
      </div>
      <div className="space-y-4">
        {threads.map((thread) => (
          <ForumThreadCard key={thread.id} thread={thread} />
        ))}
      </div>
    </>
  );
}
