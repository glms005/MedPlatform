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
      <div className="mb-6 flex gap-2">
        <button
          type="button"
          onClick={() => setSort("recent")}
          className={
            sort === "recent"
              ? "rounded-md bg-brand-ink px-4 py-2 text-sm font-semibold text-white"
              : "rounded-md border border-brand-outline px-4 py-2 text-sm font-medium text-brand-muted hover:text-brand-ink"
          }
        >
          {t.forum.sortRecent}
        </button>
        <button
          type="button"
          onClick={() => setSort("top")}
          className={
            sort === "top"
              ? "rounded-md bg-brand-ink px-4 py-2 text-sm font-semibold text-white"
              : "rounded-md border border-brand-outline px-4 py-2 text-sm font-medium text-brand-muted hover:text-brand-ink"
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
