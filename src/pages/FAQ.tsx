import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const faqs = [
    {
      question: "What accounting software do you work with?",
      answer: "We primarily work with Xero and MYOB, Australia's leading cloud accounting platforms. We can also work with QuickBooks and other platforms upon request. Our team will help set up and integrate your chosen software with your banking and other business systems."
    },
    {
      question: "How long does onboarding take?",
      answer: "Typical onboarding takes 2-4 weeks depending on the complexity of your business. This includes connecting your bank feeds, setting up your chart of accounts, and training your team on our processes. We aim to have your first month's books completed within 6 weeks of starting."
    },
    {
      question: "What's included in the bookkeeping service?",
      answer: "Our bookkeeping service includes transaction categorisation, bank reconciliation, accounts payable and receivable management, payroll processing, BAS preparation and lodgement, and monthly financial reports. The exact scope depends on your chosen plan."
    },
    {
      question: "Do you handle BAS and GST lodgements?",
      answer: "Yes! All our bookkeeping plans include BAS preparation. Our Core and Custom plans include full BAS lodgement support. We ensure your BAS is prepared accurately and lodged on time to avoid any ATO penalties."
    },
    {
      question: "What's the difference between CFO and bookkeeping services?",
      answer: "Bookkeeping focuses on recording transactions and maintaining accurate financial records. CFO services go beyond the numbers to provide strategic financial guidance, including budgeting, forecasting, cash flow planning, fundraising support, and board reporting. Think of bookkeeping as looking backward at what happened, while CFO services help you plan forward."
    },
    {
      question: "Can you help with R&D Tax Incentive claims?",
      answer: "Absolutely. We have extensive experience preparing R&D Tax Incentive applications for Australian businesses. We work with specialist R&D consultants to maximise your claim while ensuring full ATO compliance. Our fee is typically 20% of the offset received."
    },
    {
      question: "Do I need to purchase bookkeeping to get tax services?",
      answer: "Yes, our tax services are designed to work seamlessly with our bookkeeping services. This ensures the highest quality and accuracy in your tax lodgements, as we have complete visibility of your financial records throughout the year."
    },
    {
      question: "What industries do you specialise in?",
      answer: "We work across many industries including technology startups, professional services, healthcare, manufacturing, retail, and creative agencies. Our team has deep experience in these sectors and understands the unique financial challenges each faces."
    },
    {
      question: "How do you handle sensitive financial information?",
      answer: "We take data security extremely seriously. We use bank-level encryption, secure cloud storage, and strict access controls. Our team is bound by confidentiality agreements, and we're fully compliant with Australian privacy laws."
    },
    {
      question: "Can I keep my existing accounting software?",
      answer: "In most cases, yes. Our Custom plans allow you to keep your existing Xero or MYOB account along with all your historical data. We'll work within your existing setup to minimise disruption to your business."
    },
    {
      question: "What happens if I want to cancel?",
      answer: "You can cancel with 30 days' written notice. We'll ensure a smooth transition by providing all your financial records and assisting with handover to your new provider. There are no cancellation fees, but outstanding invoices must be paid."
    },
    {
      question: "Do you offer a startup discount?",
      answer: "Yes! Pre-revenue startups may be eligible for discounts on our Core bookkeeping plan. Contact our sales team to discuss your situation."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenContact={openContact} />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services. Can't find what you're looking for? Get in touch with our team.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-border"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-medium text-foreground pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pb-6"
                  >
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get in touch for a personalised consultation.
            </p>
            <Button onClick={openContact} size="lg" className="bg-primary hover:bg-primary/90">
              Book a Conversation
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default FAQ;
