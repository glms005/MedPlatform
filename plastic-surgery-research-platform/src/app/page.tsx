import { Disclaimer } from "@/components/landing/Disclaimer";
import { Features } from "@/components/landing/Features";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Problem } from "@/components/landing/Problem";
import { ProcedureGuidePreview } from "@/components/landing/ProcedureGuidePreview";
import { ShareExperience } from "@/components/landing/ShareExperience";
import { SurgeonPreview } from "@/components/landing/SurgeonPreview";
import { EarlyAccess } from "@/components/landing/EarlyAccess";

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-cream text-brand-ink">
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <SurgeonPreview />
      <ShareExperience />
      <ProcedureGuidePreview />
      <EarlyAccess />
      <Disclaimer />
      <FinalCta />
      <Footer />
    </main>
  );
}

