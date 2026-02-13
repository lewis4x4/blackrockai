import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CopperVein } from '@/components/layout/CopperVein';
import { HeroSection } from '@/components/hero/HeroSection';
import { ServicesSection } from '@/components/services/ServicesSection';
import { BuilderSection } from '@/components/proof/BuilderSection';
import { IndustriesSection } from '@/components/industries/IndustriesSection';
import { TechStackSection } from '@/components/stack/TechStackSection';
import { ContactSection } from '@/components/contact/ContactSection';

export default function App() {
  return (
    <div className="content-layer">
      <CopperVein />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BuilderSection />
        <IndustriesSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
