import { WhyTrustUs } from "@/components/ecosystem/WhyTrustUs";
import { HomeExploreSection } from "@/components/home/HomeExploreSection";
import { HomeIntroSection } from "@/components/home/HomeIntroSection";
import { EditorialFooter } from "@/components/editorial/EditorialFooter";
import { MedicalDisclaimerSection } from "@/components/editorial/MedicalDisclaimerSection";

export default function Page() {
  return (
    <main id="top" className="relative min-h-screen bg-brand-ivory text-brand-ink">
      <HomeIntroSection />
      <HomeExploreSection />
      <WhyTrustUs />
      <MedicalDisclaimerSection />
      <EditorialFooter />
    </main>
  );
}
