import type { SubscriptionPlan } from "@/types/domain";

/** Placeholder plans — payments not implemented in MVP. */
export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "plan-free",
    name: "Research",
    priceMonthly: 0,
    currency: "USD",
    features: [
      "Surgeon & clinic directory browsing",
      "Approved public reviews",
      "Forum read access",
      "Procedure education guides",
    ],
  },
  {
    id: "plan-plus",
    name: "Insight",
    priceMonthly: 12,
    currency: "USD",
    features: [
      "Advanced surgeon comparison (planned)",
      "Recovery experience database filters",
      "Saved surgeon lists",
      "Complication pattern summaries (aggregated, non-diagnostic)",
    ],
  },
  {
    id: "plan-pro",
    name: "Community Plus",
    priceMonthly: 24,
    currency: "USD",
    features: [
      "Private community channels (planned)",
      "Expert-written procedure deep dives",
      "Priority moderation for your reports",
      "Early access to market transparency reports",
    ],
  },
];
