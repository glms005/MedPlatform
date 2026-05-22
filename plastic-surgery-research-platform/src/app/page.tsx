import { WhyTrustUs } from "@/components/ecosystem/WhyTrustUs";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HomeExploreSection } from "@/components/home/HomeExploreSection";
import { HomeIntroSection } from "@/components/home/HomeIntroSection";
import { EditorialFooter } from "@/components/editorial/EditorialFooter";
import { MedicalDisclaimerSection } from "@/components/editorial/MedicalDisclaimerSection";

export default function Page() {
  return (
    <main id="top" className="warm-page relative min-h-screen text-brand-ink">
      <HeroCarousel />
      <HomeIntroSection />
      <HomeExploreSection />
      <WhyTrustUs />
      <MedicalDisclaimerSection />
      <EditorialFooter />
    </main>
  );
}
