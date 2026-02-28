import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/frank-manti";

const metrics = [
  {
    name: "Gross Margin",
    formula: "(Revenue − Cost of Goods Sold) ÷ Revenue × 100",
    benchmark: "50–70% (services), 30–50% (product/retail)",
    why: "Measures the profitability of your core offering before overheads. A declining gross margin signals pricing pressure, cost creep, or an unsustainable delivery model.",
    warnings: ["Margin declining quarter-on-quarter", "Below industry average consistently", "Rising COGS not offset by pricing adjustments"],
    improve: "Review supplier terms, renegotiate contracts, adjust pricing, improve delivery efficiency, and eliminate low-margin product lines.",
    example: "A $2m revenue services firm with $800k direct costs has a 60% gross margin. If direct costs rise to $1m without pricing changes, margin drops to 50% — a $200k annual impact.",
  },
  {
    name: "Net Margin",
    formula: "Net Profit ÷ Revenue × 100",
    benchmark: "10–20% (healthy SME), 5–10% (growth stage)",
    why: "The ultimate profitability measure. Includes all operating costs, taxes, and interest. Tells you what percentage of every dollar earned actually becomes profit.",
    warnings: ["Below 5% for extended periods", "Negative trend despite revenue growth", "Large gap between gross and net margin"],
    improve: "Control overheads, reduce discretionary spend, improve gross margin, and review fixed cost base relative to revenue.",
    example: "A business generating $3m revenue with $2.7m total costs has a 10% net margin — $300k profit. Cutting $150k in overhead lifts it to 15%.",
  },
  {
    name: "Cash Conversion Cycle",
    formula: "Debtor Days + Inventory Days − Creditor Days",
    benchmark: "30–60 days (services), 45–90 days (product)",
    why: "Measures how quickly your business converts sales into actual cash. A long cycle means you're funding customers and suppliers with your own working capital.",
    warnings: ["CCC exceeding 90 days", "Increasing trend over 3+ quarters", "Debtor days growing faster than revenue"],
    improve: "Tighten payment terms, offer early payment discounts, negotiate longer supplier terms, and implement automated invoicing.",
    example: "If debtors pay in 45 days, you hold stock for 30 days, and suppliers give you 30 days — your CCC is 45 days. Reducing debtor days to 30 cuts it to 30 days.",
  },
  {
    name: "Debtor Days",
    formula: "(Accounts Receivable ÷ Revenue) × 365",
    benchmark: "Under 30 days (ideal), 30–45 days (acceptable)",
    why: "Tells you how long it takes to collect payment. Extended debtor days tie up working capital and increase bad debt risk.",
    warnings: ["Exceeding 45 days", "Key clients consistently paying late", "Growing receivables outpacing revenue growth"],
    improve: "Enforce payment terms, implement credit policies, use automated reminders, and consider invoice factoring for persistent issues.",
    example: "A $1.2m business with $150k in receivables has 46 debtor days. Reducing to $100k brings it down to 30 days — freeing $50k in working capital.",
  },
  {
    name: "Creditor Days",
    formula: "(Accounts Payable ÷ Cost of Goods Sold) × 365",
    benchmark: "30–45 days",
    why: "Measures how long you take to pay suppliers. Longer creditor days preserve cash but must be balanced against supplier relationships.",
    warnings: ["Paying faster than collecting", "Losing early payment discounts", "Suppliers threatening credit holds"],
    improve: "Negotiate 30–45 day terms, schedule payments strategically, and align payment cycles with cash receipts.",
    example: "A business with $500k annual COGS and $40k payables has 29 creditor days. Extending to $60k payables gives 44 days — an extra $20k in available cash.",
  },
  {
    name: "Current Ratio",
    formula: "Current Assets ÷ Current Liabilities",
    benchmark: "1.5–2.0 (healthy), below 1.0 (danger)",
    why: "Measures short-term liquidity — your ability to pay obligations due within 12 months. A ratio below 1.0 means liabilities exceed liquid assets.",
    warnings: ["Below 1.2", "Declining trend over 6+ months", "Reliance on overdraft or credit facilities to maintain operations"],
    improve: "Collect receivables faster, reduce short-term debt, build cash reserves, and convert short-term debt to longer terms where possible.",
    example: "With $400k current assets and $300k current liabilities, your ratio is 1.33. If liabilities grow to $400k without asset growth, you're at 1.0 — the danger line.",
  },
  {
    name: "Burn Rate",
    formula: "Monthly Operating Expenses − Monthly Revenue",
    benchmark: "12–18 months runway (pre-revenue), 9–12 months (growth)",
    why: "Critical for startups and capital-intensive SMEs. Tells you how fast you're consuming cash and when you'll run out.",
    warnings: ["Runway below 6 months", "Burn rate increasing without revenue growth", "Ignoring GST and super liabilities in calculations"],
    improve: "Use the CFO Pilot Burn Rate Calculator to model scenarios. Reduce discretionary spend, accelerate revenue, and plan capital raises 6+ months ahead.",
    example: "A startup with $600k cash and $50k net monthly burn has 12 months of runway. A 20% cost reduction extends runway to 15 months.",
  },
  {
    name: "Revenue per Employee",
    formula: "Total Revenue ÷ Number of FTE Employees",
    benchmark: "$150k–$300k (services), $200k–$500k (tech/SaaS)",
    why: "A proxy for operational efficiency. Low revenue per employee suggests overstaffing, under-utilisation, or pricing problems.",
    warnings: ["Below $150k for services businesses", "Declining despite headcount stability", "Revenue per head lower than fully-loaded cost per head"],
    improve: "Improve utilisation rates, automate manual processes, review team structure, and ensure pricing reflects value delivered.",
    example: "A 20-person consultancy generating $4m has $200k revenue per head. Adding 5 staff without proportional revenue growth drops it to $160k.",
  },
  {
    name: "Customer Acquisition Cost (CAC)",
    formula: "Total Sales & Marketing Spend ÷ New Customers Acquired",
    benchmark: "Varies by industry — CAC should be recoverable within 12 months",
    why: "Tells you what it costs to acquire each new customer. If CAC exceeds the first-year value of a customer, you're buying revenue at a loss.",
    warnings: ["CAC exceeding first-year revenue per customer", "Rising CAC without improved conversion", "No measurement system in place"],
    improve: "Improve conversion rates, reduce paid acquisition dependency, invest in referral programs, and track CAC by channel.",
    example: "If you spend $100k on marketing and acquire 50 customers, your CAC is $2,000. If average first-year revenue is $5,000, you recover CAC in under 6 months.",
  },
  {
    name: "Customer Lifetime Value (LTV)",
    formula: "Average Revenue per Customer × Average Customer Lifespan",
    benchmark: "LTV:CAC ratio should be 3:1 or higher",
    why: "Estimates the total revenue a customer will generate over the relationship. The LTV:CAC ratio determines whether your growth model is sustainable.",
    warnings: ["LTV:CAC below 2:1", "High churn reducing average lifespan", "Revenue per customer declining"],
    improve: "Increase retention, upsell existing customers, improve onboarding experience, and build switching costs.",
    example: "A customer paying $10k/year who stays for 4 years has an LTV of $40k. If CAC is $8k, your LTV:CAC ratio is 5:1 — healthy and scalable.",
  },
  {
    name: "Working Capital Ratio",
    formula: "Current Assets − Current Liabilities",
    benchmark: "Positive and sufficient to cover 2–3 months of operating expenses",
    why: "The absolute dollar measure of short-term financial health. Negative working capital means you're relying on future receipts to meet current obligations.",
    warnings: ["Negative working capital", "Working capital declining relative to revenue growth", "Reliance on credit lines to fund operations"],
    improve: "Improve collections, reduce inventory, extend payables strategically, and build a cash buffer equal to 2–3 months of fixed costs.",
    example: "With $500k in current assets and $350k in current liabilities, you have $150k in working capital. If monthly fixed costs are $80k, that's less than 2 months of cover.",
  },
  {
    name: "EBITDA Margin",
    formula: "EBITDA ÷ Revenue × 100",
    benchmark: "15–25% (healthy SME), 10–15% (growth phase)",
    why: "Strips out financing, tax, and depreciation to show operational profitability. Widely used in valuations and lending assessments.",
    warnings: ["Below 10% for established businesses", "Declining despite revenue growth", "Large gap between EBITDA and net profit (debt burden)"],
    improve: "Focus on gross margin improvement, overhead control, and revenue quality. EBITDA improvement has a direct multiplier effect on business valuation.",
    example: "A $5m business with $750k EBITDA has a 15% margin. At a 4x multiple, it's valued at $3m. Improving margin to 20% ($1m EBITDA) lifts valuation to $4m.",
  },
];

const BusinessMetrics = () => {
  return (
    <PageLayout>
      {() => (
        <>
          {/* Hero */}
          <section className="pt-32 pb-16 gradient-navy">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">Financial Metrics</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Small Business Metrics That Actually Matter
                </h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                  12 essential financial metrics every Australian SME should track — with definitions, benchmarks, and practical improvement strategies.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Metrics */}
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-3xl">
              <div className="space-y-16">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="scroll-mt-32"
                    id={metric.name.toLowerCase().replace(/\s+/g, "-")}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <h2 className="text-2xl font-bold text-foreground">{metric.name}</h2>
                    </div>

                    <div className="bg-navy/5 border border-border rounded-lg p-4 mb-6 font-mono text-sm text-foreground">
                      {metric.formula}
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">Benchmark:</span>
                      <span className="text-sm text-muted-foreground">{metric.benchmark}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">{metric.why}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500" /> Warning Signs
                      </h4>
                      <ul className="space-y-2">
                        {metric.warnings.map((w) => (
                          <li key={w} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" /> How to Improve
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{metric.improve}</p>
                    </div>

                    <div className="bg-light-bg rounded-xl p-5 border border-border">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Example</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{metric.example}</p>
                    </div>

                    {index < metrics.length - 1 && <div className="border-b border-border mt-12" />}
                  </motion.div>
                ))}
              </div>

              <div className="text-center pt-16 mt-16 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">Need help improving your numbers?</h2>
                <p className="text-muted-foreground mb-8">A structured financial review identifies exactly which metrics need attention — and what to do about them.</p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Book a Confidential Conversation <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </>
      )}
    </PageLayout>
  );
};

export default BusinessMetrics;
