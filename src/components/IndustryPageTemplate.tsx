import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Outcome {
  situation: string;
  action: string;
  result: string;
}

interface IndustryPageProps {
  headline: string;
  subheading: string;
  painPoints: string[];
  serviceLinks: { label: string; href: string }[];
  outcomes: Outcome[];
  onOpenContact: () => void;
}

const IndustryPageTemplate = ({
  headline,
  subheading,
  painPoints,
  serviceLinks,
  outcomes,
  onOpenContact,
}: IndustryPageProps) => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy/90">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {headline}
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto">
              {subheading}
            </p>
            <Button
              onClick={onOpenContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              Book a Confidential Conversation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Financial Reality */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Financial Reality
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common financial pressure points we see across this sector in Australia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <AlertTriangle className="w-5 h-5 text-primary mb-3" />
                <p className="text-foreground text-sm font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How CFO Pilot Supports */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How CFO Pilot Supports Your Sector
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't reinvent our services for each industry — we apply deep financial leadership where it matters most.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceLinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.href}
                  className="flex items-center gap-3 bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors group"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Outcomes */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Example Outcomes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Situation</span>
                    <p className="text-foreground mt-1">{outcome.situation}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Action</span>
                    <p className="text-foreground mt-1">{outcome.action}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Result
                    </span>
                    <p className="text-foreground font-medium mt-1">{outcome.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Strengthen your financial foundation.
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              A confidential conversation to understand your situation and explore how CFO Pilot can help.
            </p>
            <Button
              onClick={onOpenContact}
              size="lg"
              variant="secondary"
              className="font-semibold px-8 py-6 text-lg"
            >
              Book a Conversation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IndustryPageTemplate;
