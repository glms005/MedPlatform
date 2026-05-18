import { ActivityTicker } from "@/components/ecosystem/ActivityTicker";
import { InsideThePlatform } from "@/components/ecosystem/InsideThePlatform";
import { OnboardingStrip } from "@/components/ecosystem/OnboardingStrip";
import { ProcedureQuickGrid } from "@/components/ecosystem/ProcedureQuickGrid";
import { ProductHero } from "@/components/ecosystem/ProductHero";
import { RecentDiscussions } from "@/components/ecosystem/RecentDiscussions";
import { RecoveryTimeline } from "@/components/ecosystem/RecoveryTimeline";
import { RedFlagsSection } from "@/components/ecosystem/RedFlagsSection";
import { ReviewsShowcase } from "@/components/ecosystem/ReviewsShowcase";
import { SurgeonShowcase } from "@/components/ecosystem/SurgeonShowcase";
import { WhyTrustUs } from "@/components/ecosystem/WhyTrustUs";
import { EditorialFooter } from "@/components/editorial/EditorialFooter";
import { MedicalDisclaimerSection } from "@/components/editorial/MedicalDisclaimerSection";

export default function Page() {
  return (
    <main id="top" className="relative min-h-screen bg-brand-ivory text-brand-ink">
      <ProductHero />
      <ActivityTicker />
      <OnboardingStrip />
      <InsideThePlatform />
      <RecentDiscussions />
      <RecoveryTimeline />
      <SurgeonShowcase />
      <ReviewsShowcase />
      <RedFlagsSection />
      <WhyTrustUs />
      <ProcedureQuickGrid />
      <MedicalDisclaimerSection />
      <EditorialFooter />
    </main>
  );
}
