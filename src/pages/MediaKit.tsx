import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const MediaKit = () => (
  <PageLayout>
    {({ openContact }) => (
      <>
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy/90">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Media Kit</h1>
              <p className="text-xl text-white/70">Everything journalists, event organisers, and partners need to feature CFO Pilot.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl space-y-16">
            {/* Company Overview */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Company Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CFO Pilot is an Australian provider of outsourced back-office and financial leadership services. We serve startups, SMEs, and scaling businesses across industries including technology, manufacturing, professional services, health, and consumer goods.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our services include bookkeeping, BAS and tax coordination, fractional CFO leadership, outsourced operations, and R&D Tax Incentive management. We combine senior-level financial expertise with modern cloud technology to deliver clarity, compliance, and confidence.
              </p>
            </motion.div>

            {/* Founder Bio */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Founder</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Frank</strong> — Founder & Principal, CFO Pilot
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Frank brings decades of CFO and senior finance experience across manufacturing, infrastructure, transport, and professional services in Australia. He founded CFO Pilot to make experienced financial leadership accessible to businesses that need it most — without the overhead of a full-time executive hire.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Frank is available for media comment on topics including SME financial health, cash flow management, R&D Tax Incentives, and the evolving role of the CFO in Australian business.
              </p>
            </motion.div>

            {/* Services Summary */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Services Summary</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Bookkeeping & BAS", href: "/services/bookkeeping" },
                  { label: "Tax Planning & Coordination", href: "/services/tax" },
                  { label: "Fractional CFO Services", href: "/services/cfo" },
                  { label: "Outsourced Operations", href: "/services/outsourced-operations" },
                  { label: "R&D Tax Incentive", href: "/services/rd-tax-incentive" },
                ].map((s, i) => (
                  <Link key={i} to={s.href} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors p-3 bg-card border border-border rounded-lg">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    {s.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Brand Assets */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Brand Assets</h2>
              <p className="text-muted-foreground mb-6">
                Logo files, brand guidelines, and approved imagery are available on request. Please contact us for access to our brand asset library.
              </p>
              <Button onClick={openContact} variant="outline">
                <Download className="w-4 h-4 mr-2" /> Request Brand Assets
              </Button>
            </motion.div>

            {/* Media Contact */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Media Contact</h2>
              <p className="text-muted-foreground mb-4">For media enquiries, interviews, or speaking requests:</p>
              <a href="mailto:info@cfopilot.com.au" className="text-primary hover:underline flex items-center gap-2">
                <Mail className="w-4 h-4" /> info@cfopilot.com.au
              </a>
            </motion.div>
          </div>
        </section>
      </>
    )}
  </PageLayout>
);

export default MediaKit;
