"use client";

import { liveActivity } from "@/lib/home-ecosystem";

const toneDot: Record<(typeof liveActivity)[number]["tone"], string> = {
  forum: "bg-brand-blue",
  review: "bg-emerald-500",
  surgeon: "bg-violet-500",
  moderation: "bg-brand-teal",
};

export function ActivityTicker() {
  const items = [...liveActivity, ...liveActivity];

  return (
    <div
      className="border-y border-brand-outline/60 bg-brand-ink py-2.5 text-white"
      aria-label="Recent platform activity"
    >
      <div className="overflow-hidden">
        <div className="activity-marquee flex w-max gap-10 whitespace-nowrap px-4">
          {items.map((event, i) => (
            <span
              key={`${event.id}-${i}`}
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm"
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${toneDot[event.tone]}`}
                aria-hidden
              />
              <span className="text-white/90">{event.label}</span>
              <span className="text-white/45">· {event.time}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
