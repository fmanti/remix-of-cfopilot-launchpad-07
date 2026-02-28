import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Terms = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Website Terms of Use
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: February 2026
            </p>

            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using the CFO Pilot website ("Website"), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Website.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Website</h2>
              <p className="text-muted-foreground mb-4">
                You may use our Website only for lawful purposes and in accordance with these Terms. You agree not to use the Website:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>In any way that violates any applicable federal, state, local or international law or regulation</li>
                <li>To transmit any advertising or promotional material, including any "junk mail", "chain letter", "spam" or similar solicitation</li>
                <li>To impersonate or attempt to impersonate CFO Pilot, a CFO Pilot employee, another user, or any other person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property Rights</h2>
              <p className="text-muted-foreground mb-4">
                The Website and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof) are owned by CFO Pilot Pty Ltd, its licensors or other providers of such material and are protected by Australian and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground mb-4">
                The Website is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. Neither CFO Pilot nor any person associated with CFO Pilot makes any warranty or representation with respect to the completeness, security, reliability, quality, accuracy or availability of the Website.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                To the fullest extent provided by law, in no event will CFO Pilot, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Website.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Links to Third-Party Websites</h2>
              <p className="text-muted-foreground mb-4">
                The Website may contain links to third-party websites or services that are not owned or controlled by CFO Pilot. CFO Pilot has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the Website following the posting of revised Terms means that you accept and agree to the changes.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms and any dispute or claim arising out of, or related to them, their subject matter or their formation (in each case, including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the State of New South Wales, Australia.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For any questions about these Terms, please contact us at:
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>CFO Pilot Pty Ltd</strong><br />
                Email: info@cfopilot.com.au
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default Terms;
