import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, TrendingUp, Users, BarChart3, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const CFOServices = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const services = [
    {
      icon: BarChart3,
      title: "Financial Modelling & Forecasting",
      description: "Custom financial models that help you understand your business trajectory and make data-driven decisions."
    },
    {
      icon: TrendingUp,
      title: "Cash Flow Management",
      description: "Optimise your cash position with 13-week cash flow forecasting and runway analysis."
    },
    {
      icon: Users,
      title: "Board & Investor Reporting",
      description: "Professional financial reports and presentations that keep stakeholders informed and confident."
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Set and achieve financial goals with scenario planning, KPI dashboards, and OKR frameworks."
    },
  ];

  const included = [
    "Dedicated CFO with Australian business experience",
    "Custom budget and forecast model",
    "Monthly or fortnightly CFO calls",
    "Board and investor presentation support",
    "Cash flow and runway optimisation",
    "Fundraising and M&A advisory",
    "KPI dashboard and performance tracking",
    "Ad-hoc strategic financial guidance",
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
              CFO Services for Growing Businesses
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get the strategic financial leadership you need without the six-figure salary. Our experienced CFOs help you make better decisions and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={openContact} size="lg" className="bg-primary hover:bg-primary/90">
                Talk to a CFO
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

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Strategic Financial Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our CFOs bring decades of experience helping businesses navigate growth, fundraising, and strategic challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
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
              What's Included
            </h2>
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

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for strategic financial guidance?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our CFO services can help you make better decisions and achieve your growth goals.
            </p>
            <Button onClick={openContact} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Book a CFO Consultation
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

export default CFOServices;
