import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ParticleBackground } from '@/components/hero/ParticleBackground';
import { HeroSection } from '@/components/hero/HeroSection';
import { ServicesSection } from '@/components/services/ServicesSection';
import { HowWeWorkSection } from '@/components/process/HowWeWorkSection';
import { IndustriesSection } from '@/components/industries/IndustriesSection';
import { TechStackSection } from '@/components/stack/TechStackSection';
import { ByTheNumbersSection } from '@/components/proof/ByTheNumbersSection';
import { ContactSection } from '@/components/contact/ContactSection';

export default function App() {
  return (
    <>
      <ParticleBackground />
      <div className="content-layer">
        <Header />
        <main>
          <HeroSection />
          <div className="section-divider" />
          <ServicesSection />
          <div className="section-divider" />
          <HowWeWorkSection />
          <div className="section-divider" />
          <IndustriesSection />
          <div className="section-divider" />
          <TechStackSection />
          <div className="section-divider" />
          <ByTheNumbersSection />
          <div className="section-divider" />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
