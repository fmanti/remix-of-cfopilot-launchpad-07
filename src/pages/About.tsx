import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const About = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenContact={openContact} />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              About CFO Pilot
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground text-center mb-12">
                We're on a mission to give every Australian business access to world-class financial leadership.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
                  <p className="text-muted-foreground mb-4">
                    CFO Pilot was founded with a simple belief: every business deserves access to the kind of financial expertise that was once reserved for large corporations.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    With decades of experience across manufacturing, infrastructure, transport, and technology, our team has seen firsthand how proper financial leadership can transform a business.
                  </p>
                  <p className="text-muted-foreground">
                    We bring that experience to businesses of all sizes, delivered in plain English without the corporate jargon.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Approach</h2>
                  <p className="text-muted-foreground mb-4">
                    We believe in calm judgement over knee-jerk reactions. Good financial decisions come from understanding your numbers deeply and having the experience to know what they mean.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our team combines traditional financial expertise with modern technology to give you real-time visibility into your business performance.
                  </p>
                  <p className="text-muted-foreground">
                    Whether you need basic bookkeeping or strategic CFO advisory, we meet you where you are and grow with you.
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-8 mb-16">
                <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Plain English</h3>
                    <p className="text-muted-foreground text-sm">
                      We explain complex financial concepts in language everyone can understand.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Calm Judgement</h3>
                    <p className="text-muted-foreground text-sm">
                      We bring experience and perspective to every decision, avoiding panic and drama.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Your Success</h3>
                    <p className="text-muted-foreground text-sm">
                      We measure our success by the success of the businesses we serve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default About;
