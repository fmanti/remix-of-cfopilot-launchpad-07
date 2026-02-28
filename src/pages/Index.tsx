import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import PillarsSection from "@/components/PillarsSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen">
      <Navigation onOpenContact={openContact} />
      <HeroSection onOpenContact={openContact} />
      <LogoCarousel />
      <PillarsSection />
      <ProblemSection />
      <HowItWorksSection />
      <ServicesSection onOpenContact={openContact} />
      <TestimonialsSection />
      <AboutSection />
      <FinalCTASection onOpenContact={openContact} />
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default Index;
