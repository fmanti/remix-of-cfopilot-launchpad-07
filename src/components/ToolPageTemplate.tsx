import { motion } from "framer-motion";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

interface ToolPageProps {
  title: string;
  subtitle: string;
  whatItDoes: string;
  whyItMatters: string;
  mistakes: string[];
  serviceLinks: { label: string; href: string }[];
}

const ToolPageTemplate = ({ title, subtitle, whatItDoes, whyItMatters, mistakes, serviceLinks }: ToolPageProps) => (
  <PageLayout>
    {({ openContact }) => (
      <>
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy/90">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
              <p className="text-xl text-white/70">{subtitle}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">What It Does</h2>
              <p className="text-muted-foreground leading-relaxed">{whatItDoes}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">Why It Matters</h2>
              <p className="text-muted-foreground leading-relaxed">{whyItMatters}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-8">Common Mistakes</h2>
            <div className="space-y-4">
              {mistakes.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm">{m}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {serviceLinks.map((s, i) => (
                <Link key={i} to={s.href} className="flex items-center gap-2 bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-foreground text-sm font-medium">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">Need help applying this to your business?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Our team can walk you through it — no obligation, no pressure.
              </p>
              <Button onClick={openContact} size="lg" variant="secondary" className="font-semibold px-8 py-6 text-lg">
                Book a Conversation <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </>
    )}
  </PageLayout>
);

export default ToolPageTemplate;
