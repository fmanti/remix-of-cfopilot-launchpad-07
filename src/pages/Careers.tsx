import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";

const values = [
  { icon: Target, title: "Precision Over Speed", description: "We'd rather get it right than get it done fast. Our clients depend on accuracy, and we don't cut corners." },
  { icon: Users, title: "Client-First Thinking", description: "Every decision starts with the client's outcome. We're advisors, not processors." },
  { icon: Heart, title: "Calm Under Pressure", description: "Financial leadership means staying steady when things get complicated. We bring composure, not chaos." },
  { icon: Zap, title: "Continuous Improvement", description: "We invest in our people, our processes, and our technology. Standing still isn't an option." },
];

const Careers = () => (
  <PageLayout>
    {({ openContact }) => (
      <>
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy/90">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Careers at CFO Pilot</h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We're building a team of experienced finance professionals who want to do meaningful work for Australian businesses — without the politics of corporate life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                CFO Pilot exists to bring senior-level financial leadership to Australian businesses that need it but can't justify a full-time hire. We handle the back office — bookkeeping, tax coordination, CFO services, and operations — so founders and business owners can focus on what they do best.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not a volume practice. We work with a focused client base, deliver consistent quality, and build long-term relationships.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Hire */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Who We Hire</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We look for experienced professionals who combine technical skill with commercial judgement. People who've worked in-house, in practice, or both — and who understand that finance is about enabling decisions, not just producing reports.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>Senior bookkeepers with Xero/MYOB expertise and BAS agent experience</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>Management accountants and controllers with SME experience</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>CFOs and finance directors seeking portfolio or fractional work</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span>Operations professionals with finance-adjacent experience</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Culture */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-8">
                  <v.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Open Positions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't always have open positions listed, but we're always interested in hearing from exceptional people. If you think you'd be a strong fit, reach out for a confidential conversation.
              </p>
              <Button onClick={openContact} size="lg" className="bg-primary hover:bg-primary/90 font-semibold px-8 py-6 text-lg">
                Get in Touch <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </>
    )}
  </PageLayout>
);

export default Careers;
