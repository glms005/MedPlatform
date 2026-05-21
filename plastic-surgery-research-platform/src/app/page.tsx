import { WhyTrustUs } from "@/components/ecosystem/WhyTrustUs";
import { HomeExploreSection } from "@/components/home/HomeExploreSection";
import { EditorialFooter } from "@/components/editorial/EditorialFooter";
import { MedicalDisclaimerSection } from "@/components/editorial/MedicalDisclaimerSection";

export default function Page() {
  return (
    <main id="top" className="relative min-h-screen bg-brand-ivory text-brand-ink">
      <HomeExploreSection />
      <WhyTrustUs />
      <MedicalDisclaimerSection />
      <EditorialFooter />
    </main>
  );
}
