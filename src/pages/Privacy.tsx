import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: February 2026
            </p>

            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                CFO Pilot Pty Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We may collect information about you in a variety of ways:
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Personal Data</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Name and contact details (email address, phone number, address)</li>
                <li>Business information (company name, ABN, industry)</li>
                <li>Financial information necessary to provide our services</li>
                <li>Communications you send to us</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Data</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Device information (browser type, operating system)</li>
                <li>IP address and location data</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Monitor and analyse trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Sharing of Information</h2>
              <p className="text-muted-foreground mb-4">
                We may share information about you as follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>With service providers who perform services on our behalf</li>
                <li>With professional advisers (lawyers, accountants, auditors)</li>
                <li>In response to a request for information if required by law</li>
                <li>If we believe disclosure is necessary to protect our rights or the rights of others</li>
                <li>In connection with a merger, sale, or acquisition</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organisational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain personal information for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. The retention period may vary depending on the context of the services we provide and our legal obligations.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Under the Australian Privacy Act 1988, you have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information (subject to legal requirements)</li>
                <li>The right to opt out of marketing communications</li>
                <li>The right to complain to the Office of the Australian Information Commissioner (OAIC)</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Third-Party Links</h2>
              <p className="text-muted-foreground mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to read the privacy policies of any third-party websites you visit.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>CFO Pilot Pty Ltd</strong><br />
                Email: privacy@cfopilot.com.au<br />
                Address: Sydney, NSW, Australia
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

export default Privacy;
