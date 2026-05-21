import { WhyTrustUs } from "@/components/ecosystem/WhyTrustUs";
import { EditorialFooter } from "@/components/editorial/EditorialFooter";
import { MedicalDisclaimerSection } from "@/components/editorial/MedicalDisclaimerSection";

export default function Page() {
  return (
    <main id="top" className="relative min-h-screen bg-brand-ivory text-brand-ink">
      <WhyTrustUs />
      <MedicalDisclaimerSection />
      <EditorialFooter />
    </main>
  );
}
