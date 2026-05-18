"use client";

import { Reveal } from "@/components/motion";
import { EditorialLink } from "./EditorialLink";
import { SectionShell } from "./SectionShell";
export function CommunitySection() {
  return (
    <SectionShell
      id="community"
      bleed
      className="border-t border-brand-outline/50 bg-brand-ivory py-28 sm:py-36 lg:py-44"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24 xl:gap-32">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-blue">
            Community
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.05rem,3.95vw,3.2rem)] font-medium tracking-tight text-brand-ink">
            Learn from others on the same path
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-muted">
            Ask questions, read recovery stories, and connect with people
            researching similar procedures—always with moderation and clear
            boundaries. This is not a substitute for medical care.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 lg:gap-5">
            <EditorialLink href="/forum" variant="solid">
              Open discussions
            </EditorialLink>
            <EditorialLink href="/reviews/new" variant="outline">
              Contribute a review
            </EditorialLink>
          </div>        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative overflow-hidden rounded-sm border border-brand-outline/80 bg-gradient-to-br from-white to-brand-sand/40 p-10 shadow-soft editorial-grain">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brand-blue-light/30 blur-3xl" />
            <ul className="relative space-y-6 text-sm leading-relaxed text-brand-muted">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                <span>
                  <strong className="text-brand-ink">Recovery threads</strong>{" "}
                  — week-by-week patterns from patient experiences, clearly
                  framed as anecdotal.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                <span>
                  <strong className="text-brand-ink">Question prompts</strong>{" "}
                  — what to ask before consent, without diagnosis or treatment
                  advice.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                <span>
                  <strong className="text-brand-ink">Safety-first rules</strong>{" "}
                  — harassment, defamation, and medical misinformation are not
                  tolerated.
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
