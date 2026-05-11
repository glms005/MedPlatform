import { CinematicHero } from "@/components/editorial/CinematicHero";
import { CommunitySection } from "@/components/editorial/CommunitySection";
import { EditorialStatementSection } from "@/components/editorial/EditorialStatementSection";
import { EditorialFooter } from "@/components/editorial/EditorialFooter";
import { FeaturedSurgeonsSection } from "@/components/editorial/FeaturedSurgeonsSection";
import { FinalCtaSection } from "@/components/editorial/FinalCtaSection";
import { MedicalDisclaimerSection } from "@/components/editorial/MedicalDisclaimerSection";
import { PlatformPromiseSection } from "@/components/editorial/PlatformPromiseSection";
import { ProblemSection } from "@/components/editorial/ProblemSection";
import { ProcedureDiscoverySection } from "@/components/editorial/ProcedureDiscoverySection";
import { ResearchJourneySection } from "@/components/editorial/ResearchJourneySection";

export default function Page() {
  return (
    <main id="top" className="relative min-h-screen bg-brand-ivory text-brand-ink">
      <CinematicHero />
      <EditorialStatementSection />
      <ProblemSection />
      <ResearchJourneySection />
      <PlatformPromiseSection />
      <FeaturedSurgeonsSection />
      <ProcedureDiscoverySection />
      <CommunitySection />
      <MedicalDisclaimerSection />
      <FinalCtaSection />
      <EditorialFooter />
    </main>
  );
}
