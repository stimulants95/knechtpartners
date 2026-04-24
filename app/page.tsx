import { HeroSection } from '@/components/sections/HeroSection';
import { ProfileSection } from '@/components/sections/ProfileSection';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Full-page background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute inset-0 bg-noise opacity-[0.04]" />
      </div>

      {/* Ambient glow — fixed so it's always subtly visible */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-glow/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-glow-alt/15 rounded-full blur-[100px] animate-glow-pulse-delayed" />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <ProfileSection />
        <FeatureSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
