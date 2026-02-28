import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Target, Calendar, BarChart3, Users, ArrowRight, CheckCircle } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/frank-manti";

const sections = [
  {
    icon: Target,
    title: "Strategic Objectives",
    content: "Start with 3–5 clear business objectives for the year. Each objective should be measurable, time-bound, and tied to financial outcomes. Avoid vague goals like 'grow revenue' — instead, specify 'increase recurring revenue from $1.2m to $1.8m by Q4 through expanding the existing client base and launching two new service lines.'",
    items: ["Revenue and margin targets by quarter", "Headcount plan tied to capacity requirements", "Capital expenditure and funding milestones", "Market expansion or product development priorities"],
  },
  {
    icon: Calendar,
    title: "Financial Calendar & Cadence",
    content: "Map every financial event, compliance deadline, and reporting cycle for the year. This includes BAS lodgements, super guarantee deadlines, ASIC annual reviews, and internal reporting dates. Build a rhythm of monthly management reporting, quarterly board reviews, and annual planning sessions.",
    items: ["Monthly P&L, balance sheet, and cashflow reporting", "Quarterly BAS preparation and review", "EOFY tax planning (begin by March)", "Annual budget vs actual review and reforecast"],
  },
  {
    icon: BarChart3,
    title: "Budgeting & Forecasting",
    content: "Build a 12-month budget with monthly granularity. Include revenue by stream, direct costs, overheads, and capital expenditure. Reforecast quarterly against actuals — a budget that isn't reviewed is just a wish list.",
    items: ["Revenue forecast by stream and customer segment", "Fixed vs variable cost modelling", "Cashflow forecast including GST and super timing", "Scenario modelling: base case, upside, and downside"],
  },
  {
    icon: Users,
    title: "People & Capacity Planning",
    content: "Your people plan should tie directly to your revenue forecast. Every hire should have a clear revenue or capacity justification. Model the fully-loaded cost of each role including salary, super, payroll tax, leave provisions, and equipment.",
    items: ["Headcount plan by quarter with role definitions", "Fully-loaded cost per head calculation", "Contractor vs permanent analysis", "Training and development budget allocation"],
  },
];

const AnnualPlanning = () => (
  <PageLayout>
    {() => (
      <>
        {/* Hero */}
        <section className="pt-32 pb-16 gradient-navy">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Planning Guide</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Annual Planning Playbook
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                A structured framework for building your annual financial plan — from strategic objectives through to execution cadence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sections */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl space-y-16">
            {sections.map((section, i) => (
              <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{section.content}</p>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                {i < sections.length - 1 && <div className="border-b border-border mt-12" />}
              </motion.div>
            ))}

            <div className="text-center pt-8 border-t border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Ready to build your annual plan?</h3>
              <p className="text-muted-foreground mb-6">We facilitate structured planning sessions for founders and leadership teams.</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Session <ArrowRight className="w-4 h-4 ml-2" /></a>
              </Button>
            </div>
          </div>
        </section>
      </>
    )}
  </PageLayout>
);

export default AnnualPlanning;
