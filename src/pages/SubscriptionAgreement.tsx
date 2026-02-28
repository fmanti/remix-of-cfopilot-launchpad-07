import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const SubscriptionAgreement = () => {
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
              Subscription Agreement
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: February 2026
            </p>

            <div className="prose prose-lg max-w-none text-foreground">
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement Overview</h2>
              <p className="text-muted-foreground mb-4">
                This Subscription Agreement ("Agreement") is entered into between CFO Pilot Pty Ltd ("CFO Pilot", "we", "our", or "us") and the client ("Client", "you", or "your") upon subscription to our services. This Agreement governs your use of CFO Pilot's bookkeeping, tax, CFO, and COO services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Services</h2>
              <p className="text-muted-foreground mb-4">
                CFO Pilot agrees to provide the services specified in your selected subscription plan. The specific services included in each plan are detailed on our pricing page and in your onboarding documentation.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Service Scope</h3>
              <p className="text-muted-foreground mb-4">
                Services are provided based on your subscription tier and may include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Bookkeeping and financial record keeping</li>
                <li>BAS, IAS, and TPAR lodgement support</li>
                <li>Tax compliance and lodgement services</li>
                <li>CFO advisory and strategic financial planning</li>
                <li>Operational support and COO services</li>
                <li>Financial reporting and analysis</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Subscription Terms</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Billing</h3>
              <p className="text-muted-foreground mb-4">
                Subscription fees are billed in advance on a monthly or annual basis, depending on your selected billing cycle. All fees are quoted in Australian dollars (AUD) and are exclusive of GST unless otherwise stated.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Payment</h3>
              <p className="text-muted-foreground mb-4">
                Payment is due upon receipt of invoice. We accept payment via direct debit, credit card, or bank transfer. Late payments may incur a late fee of 1.5% per month on the outstanding balance.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Price Changes</h3>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify pricing with 30 days' written notice. Price changes will not affect the current billing period for existing subscriptions.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Client Obligations</h2>
              <p className="text-muted-foreground mb-4">
                To enable CFO Pilot to provide the services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Provide accurate and complete financial information and documentation</li>
                <li>Grant necessary access to banking, accounting, and business systems</li>
                <li>Respond to requests for information within reasonable timeframes</li>
                <li>Inform us promptly of any changes to your business structure or operations</li>
                <li>Review and approve financial reports and tax lodgements as required</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Confidentiality</h2>
              <p className="text-muted-foreground mb-4">
                Both parties agree to maintain the confidentiality of all proprietary and sensitive information shared during the course of the engagement. This obligation survives the termination of this Agreement.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                To the maximum extent permitted by law, CFO Pilot's liability for any claims arising from the services shall be limited to the fees paid by the Client in the 12 months preceding the claim. CFO Pilot shall not be liable for any indirect, incidental, consequential, or punitive damages.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Term and Termination</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">7.1 Term</h3>
              <p className="text-muted-foreground mb-4">
                This Agreement commences on the subscription start date and continues for the duration of the selected billing period (monthly or annual).
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">7.2 Renewal</h3>
              <p className="text-muted-foreground mb-4">
                Subscriptions automatically renew at the end of each billing period unless cancelled in writing at least 30 days before the renewal date.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">7.3 Termination</h3>
              <p className="text-muted-foreground mb-4">
                Either party may terminate this Agreement with 30 days' written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>Outstanding fees become immediately due</li>
                <li>We will provide reasonable assistance in transitioning to a new provider</li>
                <li>Client data will be made available for download for 30 days</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All templates, tools, methodologies, and processes developed by CFO Pilot remain our intellectual property. The Client retains ownership of their financial data and records.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                Any disputes arising from this Agreement shall first be addressed through good faith negotiation. If unresolved, disputes shall be submitted to mediation in Sydney, NSW before any legal proceedings are commenced.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                This Agreement shall be governed by and construed in accordance with the laws of New South Wales, Australia. The parties submit to the exclusive jurisdiction of the courts of New South Wales.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">11. Amendments</h2>
              <p className="text-muted-foreground mb-4">
                CFO Pilot may amend this Agreement by providing 30 days' written notice. Continued use of the services after the amendment effective date constitutes acceptance of the amended terms.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact</h2>
              <p className="text-muted-foreground mb-4">
                For questions about this Agreement, please contact:
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>CFO Pilot Pty Ltd</strong><br />
                Email: legal@cfopilot.com.au<br />
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

export default SubscriptionAgreement;
