import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { RolesConnectionSection } from "@/components/sections/roles-connection-section";
import { BusTrackingSection } from "@/components/sections/bus-tracking-section";
import { MonitoringSection } from "@/components/sections/monitoring-section";
import { TrackingSection } from "@/components/sections/tracking-section";
import { AIFeaturesSection } from "@/components/sections/ai-features-section";
import { SocialSection } from "@/components/sections/social-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";
import { TeamSection } from "@/components/sections/team-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <RolesConnectionSection />
        <BusTrackingSection />
        <MonitoringSection />
        <TrackingSection />
        <AIFeaturesSection />
        <SocialSection />
        <TechnologiesSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
