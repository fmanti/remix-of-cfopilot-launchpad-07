import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, FileText, Calculator, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Tax = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const services = [
    {
      icon: FileText,
      title: "Company Tax Returns",
      description: "Complete preparation and lodgement of company income tax returns with the ATO."
    },
    {
      icon: Calculator,
      title: "BAS & IAS Lodgement",
      description: "Monthly or quarterly BAS preparation and lodgement to keep you compliant with GST requirements."
    },
    {
      icon: Shield,
      title: "TPAR Reporting",
      description: "Taxable Payments Annual Report preparation for businesses in relevant industries."
    },
  ];

  const included = [
    "Company income tax return preparation and lodgement",
    "BAS and IAS preparation and lodgement",
    "ASIC annual statement lodgement",
    "TPAR filing for contractors",
    "FBT return preparation (where applicable)",
    "R&D Tax Incentive support",
    "State payroll tax compliance",
    "Year-round tax planning advice",
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
              Business Tax Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay compliant and minimise your tax burden with expert tax preparation and lodgement services tailored for Australian businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={openContact} size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
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

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Tax Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our tax services are designed to work seamlessly with our bookkeeping services for maximum accuracy and efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {included.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Note:</strong> Our tax services must be purchased together with CFO Pilot Bookkeeping to ensure accuracy and seamless integration of your financial data.
            </p>
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
              Stay compliant without the stress
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let our tax experts handle your compliance so you can focus on what matters most—your business.
            </p>
            <Button onClick={openContact} size="lg" variant="secondary">
              Talk to Our Tax Team
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

export default Tax;
