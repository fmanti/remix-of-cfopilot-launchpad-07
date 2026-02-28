import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Calculator, FileText, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const sections = [
  {
    icon: BookOpen,
    title: "CFO Insights",
    description: "Strategic financial commentary for Australian business leaders. From cashflow management to board governance, our insights are drawn from decades of hands-on CFO experience — not textbook theory.",
    links: [
      { label: "Read the Blog", href: "/blog" },
      { label: "Data Insights", href: "/data-insights" },
    ],
  },
  {
    icon: Calculator,
    title: "Planning Tools",
    description: "Interactive calculators and frameworks to help you model scenarios, stress-test assumptions, and make better financial decisions — before you need to.",
    links: [
      { label: "Burn Rate Calculator", href: "/tools/burn-rate-calculator" },
      { label: "Small Business Metrics", href: "/resources/business-metrics" },
    ],
  },
  {
    icon: Shield,
    title: "Compliance Guides",
    description: "Stay ahead of ATO deadlines, BAS obligations, and regulatory changes with practical guides written in plain English for business owners — not accountants.",
    links: [
      { label: "Tax Compliance Calendar", href: "/resources/tax-calendar" },
      { label: "Back Office Guide", href: "/resources/back-office-guide" },
    ],
  },
  {
    icon: FileText,
    title: "Financial Templates",
    description: "Board report templates, cash flow forecasting frameworks, and annual planning playbooks used by CFO Pilot clients across industries.",
    links: [
      { label: "Annual Planning Playbook", href: "/resources/annual-planning" },
      { label: "Founder Salary Report", href: "/resources/founder-salary-report" },
    ],
  },
  {
    icon: BarChart3,
    title: "Industry Reports",
    description: "Quarterly analysis of SME financial trends in Australia — interest rate impacts, wage inflation, working capital pressures, and sector-specific benchmarks.",
    links: [
      { label: "Data Insights", href: "/data-insights" },
    ],
  },
];

const Resources = () => (
  <PageLayout>
    {({ openContact }) => (
      <>
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy/90">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Resource Hub</h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Practical financial insights, tools, and guides for Australian business leaders. No fluff — just the knowledge you need to make better decisions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl space-y-16">
            {sections.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-4">
                  <s.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h2 className="text-2xl font-bold text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6 ml-10">{s.description}</p>
                <div className="flex flex-wrap gap-3 ml-10">
                  {s.links.map((l, j) => (
                    <Link key={j} to={l.href}>
                      <Button variant="outline" size="sm">
                        {l.label} <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Need tailored guidance?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Our resources are a starting point. For advice specific to your business, book a confidential conversation.
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

export default Resources;
