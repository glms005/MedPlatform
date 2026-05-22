import { WhyTrustUs } from "@/components/ecosystem/WhyTrustUs";
import { EditorialFooter } from "@/components/editorial/EditorialFooter";
import { MedicalDisclaimerSection } from "@/components/editorial/MedicalDisclaimerSection";
import { PlasticSurgeryGuidesSection } from "@/components/plastic-surgery/PlasticSurgeryGuidesSection";
import { PlasticSurgeryHero } from "@/components/plastic-surgery/PlasticSurgeryHero";
import { PlasticSurgeryIntroSection } from "@/components/plastic-surgery/PlasticSurgeryIntroSection";

export default function PlasticSurgeryPage() {
  return (
    <main className="warm-page relative min-h-screen text-brand-ink">
      <PlasticSurgeryHero />
      <PlasticSurgeryIntroSection />
      <PlasticSurgeryGuidesSection />
      <WhyTrustUs />
      <MedicalDisclaimerSection />
      <EditorialFooter />
    </main>
  );
}
