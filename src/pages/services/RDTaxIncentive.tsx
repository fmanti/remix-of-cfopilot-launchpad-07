import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Lightbulb, TrendingUp, FileText, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const RDTaxIncentive = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const benefits = [
    {
      icon: Calculator,
      title: "Up to $500,000 per year",
      description: "Eligible companies can claim significant R&D tax offsets to reduce their tax burden or receive cash refunds."
    },
    {
      icon: FileText,
      title: "Full documentation support",
      description: "We handle the complete R&D Tax Incentive application including AusIndustry registration and ATO claim."
    },
    {
      icon: TrendingUp,
      title: "Maximise your claim",
      description: "Our specialists ensure you capture all eligible activities and expenses for the maximum offset."
    },
    {
      icon: Lightbulb,
      title: "Clear eligibility guidance",
      description: "We help you understand what qualifies as R&D and how to structure your activities for future claims."
    },
  ];

  const process = [
    "Initial consultation to assess eligibility",
    "Review and document eligible R&D activities",
    "Calculate eligible expenditure",
    "Prepare and lodge AusIndustry registration",
    "Prepare R&D schedule for company tax return",
    "Lodge claim with the ATO",
    "Provide ongoing compliance support",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenContact={openContact} />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              R&D Tax Incentive Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Claim back a significant portion of your R&D investment. We handle the complete application process so you can focus on innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={openContact} size="lg" className="bg-primary hover:bg-primary/90">
                Check Your Eligibility
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">Success-Based Pricing</h2>
            <div className="text-5xl font-bold text-primary mb-2">20%</div>
            <p className="text-muted-foreground mb-4">of your total tax offset received</p>
            <p className="text-sm text-muted-foreground">
              No upfront fees. You only pay when you receive your R&D tax offset.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle everything from eligibility assessment to ATO lodgement.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 mb-4"
              >
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  {index + 1}
                </div>
                <span className="text-foreground pt-1">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Could your business claim the R&D Tax Incentive?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Book a free eligibility assessment to find out how much you could claim.
            </p>
            <Button onClick={openContact} size="lg" variant="secondary">
              Check Your Eligibility
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default RDTaxIncentive;
