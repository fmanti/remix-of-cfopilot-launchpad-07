import { motion } from "framer-motion";
import { ArrowRight, Check, Shield, TrendingUp, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const differentiators = [
  { icon: Shield, title: "Senior-Level From Day One", description: "You work with experienced finance professionals — not graduates learning on your books. Every engagement is led by someone who's been a CFO, controller, or senior accountant." },
  { icon: TrendingUp, title: "Strategic, Not Just Transactional", description: "We don't just process transactions. We interpret your numbers, identify risks, and provide the financial context you need to make better decisions." },
  { icon: Clock, title: "Consistent & Reliable", description: "Monthly close on time. BAS lodged before the deadline. Reports delivered when promised. Reliability isn't a feature — it's the baseline." },
  { icon: Users, title: "Australian Focus", description: "We understand the ATO, BAS, superannuation, STP, and the regulatory environment Australian businesses operate in. No offshore call centres. No US-centric advice." },
];

const WhyCFOPilot = () => (
  <PageLayout>
    {({ openContact }) => (
      <>
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy/90">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Why CFO Pilot?</h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Because your business deserves financial leadership that's experienced, reliable, and genuinely invested in your success.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              {differentiators.map((d, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-8">
                  <d.icon className="w-6 h-6 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{d.title}</h3>
                  <p className="text-muted-foreground">{d.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">What We're Not</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We're not a public accounting firm. We don't provide audit, assurance, or services that require a public practice licence. We're not a tax agent — we coordinate with your existing tax adviser or help you find one.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What we are is a team of experienced finance professionals who handle the back office, provide strategic financial guidance, and give you the clarity and confidence to run your business.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Services</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {[
                  { label: "Bookkeeping & BAS", href: "/services/bookkeeping" },
                  { label: "Tax Coordination", href: "/services/tax" },
                  { label: "CFO Services", href: "/services/cfo" },
                  { label: "Outsourced Operations", href: "/services/outsourced-operations" },
                  { label: "R&D Tax Incentive", href: "/services/rd-tax-incentive" },
                  { label: "Pricing", href: "/pricing" },
                ].map((s, i) => (
                  <Link key={i} to={s.href} className="flex items-center gap-2 bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-foreground text-sm font-medium">{s.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">Ready to talk?</h2>
              <Button onClick={openContact} size="lg" variant="secondary" className="font-semibold px-8 py-6 text-lg">
                Book a Confidential Conversation <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </>
    )}
  </PageLayout>
);

export default WhyCFOPilot;
