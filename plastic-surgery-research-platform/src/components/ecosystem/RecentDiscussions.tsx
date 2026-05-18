"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { recentDiscussions } from "@/lib/home-ecosystem";
import { easeEditorial } from "@/lib/motion";
import { EcosystemSection } from "./EcosystemSection";
import { StaggerItem, StaggerReveal } from "@/components/motion";

export function RecentDiscussions() {
  return (
    <EcosystemSection
      id="discussions"
      eyebrow="Community pulse"
      title="Recent Discussions"
      description="Fictional seeded posts show how recovery updates, consent questions, and procedure threads appear—with tags, votes, and reply counts."
      className="bg-brand-ivory"
      headerAction={
        <Link
          href="/forum"
          className="inline-flex min-h-[2.75rem] items-center rounded-lg border border-brand-outline bg-white px-4 py-2.5 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand-sand"
        >
          View all
        </Link>
      }
    >
      <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {recentDiscussions.map((post) => (
          <StaggerItem key={post.id}>
            <DiscussionCard post={post} />
          </StaggerItem>
        ))}
      </StaggerReveal>
    </EcosystemSection>
  );
}

function DiscussionCard({ post }: { post: (typeof recentDiscussions)[number] }) {
  const reduce = useReducedMotion();

  const inner = (
    <article className="flex h-full flex-col rounded-xl border border-brand-outline/75 bg-white p-4 shadow-soft transition-shadow hover:shadow-lift sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <span className="rounded-md bg-brand-teal/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-brand-teal">
          {post.procedure}
        </span>
        <span className="flex items-center gap-2 text-[10px] font-semibold text-brand-muted">
          <span>▲ {post.upvotes}</span>
          <span>{post.commentsCount} comments</span>
        </span>
      </div>
      <h3 className="mt-3 text-base font-semibold leading-snug text-brand-ink">
        <Link href={post.href} className="hover:text-brand-blue hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted line-clamp-3">
        {post.excerpt}
      </p>
      <div className="mt-3 flex flex-wrap gap-1">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-brand-champagne/90 px-2 py-0.5 text-[10px] font-medium text-brand-muted"
          >
            #{tag}
          </span>
        ))}
      </div>
      <p className="mt-4 border-t border-brand-outline/50 pt-3 text-xs text-brand-muted">
        {post.author}
      </p>
    </article>
  );

  if (reduce) return inner;
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4, ease: easeEditorial }}>
      {inner}
    </motion.div>
  );
}
