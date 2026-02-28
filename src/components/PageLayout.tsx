import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

interface PageLayoutProps {
  children: (props: { openContact: () => void }) => React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenContact={openContact} />
      {children({ openContact })}
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default PageLayout;
