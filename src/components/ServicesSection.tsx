import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Clock,
  BookOpen,
  DollarSign,
  BarChart3,
  LineChart,
  Presentation,
  Settings,
  RefreshCw,
  Calculator,
  GraduationCap,
  LucideIcon,
  ArrowRight,
} from "lucide-react";
import ServiceDetailModal from "./ServiceDetailModal";

interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  outcomes: string[];
}

const services: ServiceDetail[] = [
  {
    icon: Users,
    title: "Fractional CFO Leadership",
    tagline: "Senior financial leadership, without the full-time cost",
    description: "Access experienced CFO-level strategic guidance on a flexible basis. Ideal for growing businesses that need senior financial leadership but aren't ready for a full-time hire. You get the expertise of a seasoned CFO working alongside your leadership team.",
    includes: [
      "Regular strategic planning sessions with leadership",
      "Financial strategy development and execution oversight",
      "Board and investor meeting preparation and attendance",
      "Cash flow and working capital optimisation",
      "Risk assessment and governance framework development",
      "M&A advisory and due diligence support",
    ],
    outcomes: [
      "Clearer financial strategy aligned with business goals",
      "More confident decision-making at board and executive level",
      "Stronger relationships with banks, investors, and stakeholders",
      "Improved financial controls and governance",
    ],
  },
  {
    icon: Clock,
    title: "Interim CFO Support",
    tagline: "Experienced leadership during transitions",
    description: "When your business faces a leadership gap, restructuring, or critical transition period, Interim CFO support provides immediate, experienced financial leadership. Whether it's covering a departure, supporting a major transaction, or navigating a crisis, you get steady hands on the financial helm.",
    includes: [
      "Immediate onboarding and situation assessment",
      "Day-to-day financial leadership and team management",
      "Stakeholder communication and management",
      "Process stabilisation and improvement",
      "Transition planning and knowledge transfer",
      "Crisis management and turnaround support",
    ],
    outcomes: [
      "Seamless continuity during leadership transitions",
      "Stabilised financial operations and team morale",
      "Clear handover when permanent leadership is appointed",
      "Reduced risk during critical business periods",
    ],
  },
  {
    icon: BookOpen,
    title: "Bookkeeping & Reconciliations",
    tagline: "Clean, reliable numbers you can trust",
    description: "Strong financial leadership depends on accurate, up-to-date books. Our bookkeeping service ensures your transactions are properly recorded, reconciled, and ready for reporting. No surprises at month-end or year-end — just dependable financial data.",
    includes: [
      "Day-to-day transaction processing and coding",
      "Bank and credit card reconciliations",
      "Accounts payable and receivable management",
      "GST and BAS preparation",
      "Month-end close procedures",
      "Integration with cloud accounting platforms (Xero, MYOB, QuickBooks)",
    ],
    outcomes: [
      "Accurate, timely financial records",
      "Reduced month-end stress and faster close cycles",
      "Clean data foundation for reporting and decision-making",
      "Compliance confidence for BAS and audit requirements",
    ],
  },
  {
    icon: DollarSign,
    title: "Cashflow & Working Capital Management",
    tagline: "Keep cash flowing and the business moving",
    description: "Cash is the lifeblood of every business. We help you understand your cash position, optimise working capital, and plan ahead so you're never caught short. From 13-week cash forecasts to debtor/creditor management, we keep liquidity front of mind.",
    includes: [
      "Rolling 13-week cash flow forecasting",
      "Working capital analysis and optimisation",
      "Debtor and creditor management strategies",
      "Banking relationship support and covenant monitoring",
      "Capital expenditure planning",
      "Cash runway analysis for growth-stage businesses",
    ],
    outcomes: [
      "Clear visibility of cash position and runway",
      "Improved collection cycles and supplier terms",
      "Confidence in meeting financial obligations",
      "Proactive planning rather than reactive scrambling",
    ],
  },
  {
    icon: BarChart3,
    title: "Budgeting & Forecasting",
    tagline: "Plan with confidence, adapt with agility",
    description: "Move beyond static spreadsheets to dynamic, driver-based budgets and forecasts. We help you build financial plans that connect to your business strategy, track performance against targets, and adapt as conditions change.",
    includes: [
      "Annual budget development and approval processes",
      "Rolling forecasts and reforecast cycles",
      "Driver-based modelling tailored to your business",
      "Variance analysis and management reporting",
      "Departmental budget coordination",
      "Board and investor budget presentations",
    ],
    outcomes: [
      "Clear financial targets aligned to strategic goals",
      "Early warning of variances and course correction",
      "Improved accountability across the business",
      "Credible forecasts for stakeholder communication",
    ],
  },
  {
    icon: LineChart,
    title: "Financial Modelling & Scenario Planning",
    tagline: "See the future before you commit",
    description: "Make major decisions with confidence using robust financial models and scenario analysis. Whether you're evaluating an acquisition, planning a capital raise, or stress-testing your business, we build the models that reveal what's really at stake.",
    includes: [
      "Custom financial model development",
      "Scenario and sensitivity analysis",
      "Valuation modelling for M&A and fundraising",
      "Capital structure and financing analysis",
      "Investment appraisal and business case development",
      "Model audit and quality assurance",
    ],
    outcomes: [
      "Clear understanding of financial outcomes under different scenarios",
      "Confidence in major investment and strategic decisions",
      "Professional models for investor and board presentations",
      "Reduced risk of costly surprises",
    ],
  },
  {
    icon: Presentation,
    title: "Board & Investor Reporting",
    tagline: "Tell your financial story with clarity",
    description: "Boards and investors need more than spreadsheets — they need insight. We help you prepare professional, insightful reporting packs that communicate performance, risks, and opportunities clearly. Look like the well-run business you are.",
    includes: [
      "Monthly/quarterly board reporting pack design",
      "Investor update preparation",
      "KPI dashboard development",
      "Management commentary and narrative",
      "Presentation coaching and support",
      "Due diligence data room preparation",
    ],
    outcomes: [
      "Professional, consistent reporting that builds confidence",
      "Board meetings focused on strategy, not data clarification",
      "Stronger investor relationships and transparency",
      "Reduced time spent preparing for board cycles",
    ],
  },
  {
    icon: Settings,
    title: "ERP & Systems Advisory",
    tagline: "The right systems for your stage of growth",
    description: "Outgrowing your spreadsheets? Implementing a new ERP? We help you evaluate, select, and implement financial systems that match your business needs — without the vendor bias. From Xero to NetSuite, we've seen what works and what doesn't.",
    includes: [
      "Current state assessment and gap analysis",
      "Requirements definition and vendor evaluation",
      "Implementation project oversight",
      "Chart of accounts and reporting structure design",
      "Process re-engineering and automation",
      "Post-implementation support and optimisation",
    ],
    outcomes: [
      "Systems that scale with your business",
      "Reduced manual work and error rates",
      "Better data for faster, smarter decisions",
      "Successful implementations without scope creep",
    ],
  },
  {
    icon: RefreshCw,
    title: "Business Transformation Support",
    tagline: "Navigate change with financial clarity",
    description: "Major business changes — restructures, integrations, turnarounds — require strong financial leadership. We provide hands-on support to navigate transformation, ensuring the numbers add up and the business stays on track.",
    includes: [
      "Restructuring and cost-out initiatives",
      "Post-acquisition integration support",
      "Turnaround planning and execution",
      "Change management from a finance perspective",
      "Stakeholder communication during transitions",
      "Performance improvement program support",
    ],
    outcomes: [
      "Successful navigation of critical transitions",
      "Clear financial framework for transformation decisions",
      "Maintained stakeholder confidence during change",
      "Measurable improvement in financial performance",
    ],
  },
  {
    icon: Calculator,
    title: "Tax Planning & Coordination",
    tagline: "Tax should support the business, not surprise it",
    description: "We coordinate with your tax advisers to ensure tax is integrated into your financial planning — not an afterthought. From year-end planning to structuring advice, we make sure you're prepared and positioned for the best outcomes.",
    includes: [
      "Tax forecasting and liability estimation",
      "Year-end planning and preparation",
      "Coordination with external tax advisers and accountants",
      "R&D tax incentive preparation support",
      "Structuring considerations for transactions",
      "GST and indirect tax compliance oversight",
    ],
    outcomes: [
      "No tax surprises at year-end",
      "Optimised tax position within legal frameworks",
      "Seamless coordination between finance and tax teams",
      "Strategic tax planning integrated with business decisions",
    ],
  },
  {
    icon: GraduationCap,
    title: "Leadership Coaching for Finance Teams",
    tagline: "Develop your finance function from within",
    description: "Your finance team is a strategic asset. We provide coaching and mentoring to develop your finance professionals — from technical skills to leadership capabilities. Build internal capacity so your team can deliver at a higher level.",
    includes: [
      "One-on-one coaching for finance leaders",
      "Technical skills development programs",
      "Finance team performance assessment",
      "Career development planning",
      "Interview and hiring support",
      "Best-practice process and culture development",
    ],
    outcomes: [
      "Stronger, more capable finance function",
      "Improved retention of finance talent",
      "Succession planning for key finance roles",
      "Higher quality financial output and insights",
    ],
  },
];

interface ServicesSectionProps {
  onOpenContact: () => void;
}

const ServicesSection = ({ onOpenContact }: ServicesSectionProps) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <>
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial leadership tailored to your business needs. Click any service to learn more.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => setSelectedService(service)}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer group"
              >
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{service.tagline}</p>
                <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceDetailModal
        service={selectedService}
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        onOpenContact={onOpenContact}
      />
    </>
  );
};

export default ServicesSection;