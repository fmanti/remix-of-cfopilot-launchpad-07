import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, TrendingDown, Minus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";

const CALENDLY_URL = "https://calendly.com/frank-manti";

const insights = [
  {
    title: "Cash Reserves Under Pressure",
    trend: "down" as const,
    commentary: "SME cash reserves have declined for the third consecutive quarter. Rising input costs, delayed receivables, and persistent wage inflation are compressing operating margins across sectors. Businesses without rolling cash flow forecasts are particularly exposed.",
    deepDive: {
      headline: "SME Cash Reserves: A Structural Decline",
      sections: [
        { heading: "The Data", content: "Across our client base and broader ABS data, average SME cash reserves have fallen from 4.2 months of operating expenses in Q1 2025 to 2.8 months by Q4 2025. For businesses with turnover under $2m, the figure drops to 1.9 months — dangerously close to the threshold where a single debtor default or unexpected cost can trigger a liquidity crisis." },
        { heading: "Root Causes", content: "Three structural forces are converging. First, input cost inflation has not abated — materials, freight, and energy costs remain 12–18% above 2023 levels for most sectors. Second, debtor days have extended by an average of 7 days across professional services and construction. Third, many businesses drew down reserves during 2024 to cover BAS shortfalls and superannuation catch-up payments, and have not rebuilt those buffers." },
        { heading: "Sector Impact", content: "Construction and professional services are most exposed. Construction firms face the compounding effect of long project cycles and progress claim delays, while professional services firms are absorbing wage inflation without corresponding fee increases. Retail and hospitality show more resilience due to cash-at-sale business models, but face margin compression from supplier cost pass-throughs." },
        { heading: "What Leading Businesses Are Doing", content: "Businesses maintaining cash discipline share common practices: weekly cash position reporting, 13-week rolling forecasts updated fortnightly, BAS provisioning accounts funded weekly rather than quarterly, and formal debtor management processes triggered at 14 days overdue rather than 30. The gap between disciplined and undisciplined cash management has widened materially in this cycle." },
        { heading: "Strategic Implication", content: "If your cash reserves have dropped below 3 months of operating expenses, this should be treated as a board-level agenda item. The appropriate response is not simply to cut costs — it is to build forward visibility. A structured cashflow forecast, combined with scenario modelling for revenue downside and cost escalation, provides the foundation for informed decision-making." },
      ],
    },
  },
  {
    title: "Interest Rates & Borrowing Costs",
    trend: "up" as const,
    commentary: "The RBA's sustained rate environment continues to increase the cost of working capital facilities and term debt. Businesses relying on overdraft facilities are seeing material increases in finance costs — many for the first time in a decade.",
    deepDive: {
      headline: "The True Cost of Rate Persistence for SMEs",
      sections: [
        { heading: "Rate Environment", content: "The RBA cash rate has remained at elevated levels through 2025, with market expectations for meaningful cuts pushed into late 2026. For SMEs with variable-rate facilities, this translates to an average 3.5 percentage point increase in borrowing costs compared to 2022 levels. On a $500k overdraft facility, that's an additional $17,500 per annum in finance costs." },
        { heading: "Working Capital Facility Impact", content: "Overdraft and working capital facilities are typically priced at cash rate plus 4–6%. At current rates, effective borrowing costs sit between 8.5% and 10.5% for well-secured facilities, and 12–15% for unsecured or lightly-secured SME lending. Many businesses established their cost models and pricing structures when rates were 2–4% lower." },
        { heading: "Capital Expenditure Deferral", content: "Our data shows 45% of SME clients have deferred or cancelled planned capital expenditure in the past 12 months, citing borrowing costs as the primary factor. This is creating a deferred maintenance and investment problem that will compound over time — particularly in manufacturing, logistics, and technology-dependent businesses." },
        { heading: "Refinancing Risk", content: "Businesses approaching facility renewal are facing significantly tighter credit conditions. Banks are requiring more comprehensive financial reporting, stronger covenant compliance, and in many cases, additional security. Businesses without structured management reporting — monthly P&L, balance sheet, and cashflow — are finding it increasingly difficult to secure competitive terms." },
        { heading: "What To Do", content: "Review your weighted average cost of debt quarterly. Model the impact of rate scenarios on your P&L and cashflow. If your interest cover ratio has dropped below 3x, this requires immediate attention. Consider whether current facility structures remain fit for purpose, and ensure your management reporting is bank-ready before approaching renewal." },
      ],
    },
  },
  {
    title: "Working Capital Tightening",
    trend: "down" as const,
    commentary: "Debtor days are extending across professional services and manufacturing. At the same time, supplier payment terms are shortening. The net effect: working capital gaps are widening, and businesses without structured cash management are feeling the squeeze.",
    deepDive: {
      headline: "The Working Capital Squeeze: Both Sides of the Ledger",
      sections: [
        { heading: "Debtor Days Trending Up", content: "Average debtor days across our SME client base have increased from 34 to 41 days over the past three quarters. The deterioration is most pronounced in B2B services (averaging 48 days) and construction (averaging 52 days). This represents a significant increase in working capital locked in receivables — for a business billing $500k per month, 7 additional debtor days equates to $116k in additional working capital requirement." },
        { heading: "Creditor Pressure Increasing", content: "Simultaneously, suppliers are tightening payment terms. Where 30-day terms were standard, we're seeing an increasing number of suppliers moving to 14-day or even 7-day terms, particularly for smaller accounts. Some key suppliers are requiring prepayment for orders above threshold amounts. This squeezes cash from both sides." },
        { heading: "The Cash Conversion Cycle", content: "The net effect is a material widening of the cash conversion cycle. Businesses that previously operated with a 15-day positive cycle are now seeing 25–35 day cycles — meaning they need to fund an additional 10–20 days of operating costs from reserves or facilities. For labour-intensive businesses, this translates directly into payroll funding pressure." },
        { heading: "Industry-Specific Patterns", content: "Manufacturing businesses face the compounding effect of inventory holding periods extending as supply chains remain unpredictable. Professional services firms see the fastest debtor deterioration, driven by clients facing their own cash pressures. Technology businesses with recurring revenue models are relatively insulated but face pressure from annual prepayment contracts shifting to monthly billing." },
        { heading: "Recommended Actions", content: "Implement aged receivables review at weekly cadence (not monthly). Set follow-up triggers at 7 and 14 days, not 30. Negotiate extended supplier terms proactively — before the cash gap becomes critical. Model your cash conversion cycle monthly and track it as a board-level KPI. Consider invoice finance facilities as a structural solution rather than a last resort." },
      ],
    },
  },
  {
    title: "Wage Inflation & Labour Costs",
    trend: "up" as const,
    commentary: "Award rate increases, superannuation guarantee rises, and competitive hiring markets are driving labour costs up 4–7% year-on-year for most SMEs. Few businesses have adjusted their pricing or capacity models to absorb this.",
    deepDive: {
      headline: "Wage Growth Outpacing Revenue: The Margin Compression Problem",
      sections: [
        { heading: "The Numbers", content: "Average wage growth across our SME client base reached 4.8% in the 12 months to Q4 2025, outpacing average revenue growth of 3.1%. For professional services firms — where labour represents 55–70% of costs — this gap directly compresses EBITDA margins. We've seen average margin compression of 3.7 percentage points across this sector." },
        { heading: "Superannuation Escalation", content: "The superannuation guarantee rate increased to 11% from 1 July 2023 and continues its legislated path to 12% by 2025. Each 0.5% increment adds approximately $500 per year per employee earning $100k. For a 20-person team, that's $10k in additional annual cost — on top of salary increases." },
        { heading: "Award Rate Increases", content: "The Fair Work Commission's annual wage review delivered a 3.75% increase to minimum and award rates in 2025. For businesses with award-covered employees, this is a non-negotiable cost increase. Even for businesses paying above award, the increase creates upward pressure as employees reference the benchmark." },
        { heading: "The Pricing Response Gap", content: "Only 35% of our SME clients adjusted their pricing within 90 days of material cost increases. The remaining 65% either delayed pricing reviews or absorbed the costs, hoping for volume increases to compensate. The data shows that businesses which adjusted pricing promptly maintained margins within 1% of target, while those that delayed saw average margin compression of 4.2 percentage points." },
        { heading: "Strategic Response", content: "Labour cost management is not about cutting headcount. It's about pricing discipline, capacity utilisation, and automation investment. Review your revenue per employee quarterly. Model the margin impact of a 5% labour cost increase before it happens. And build annual price reviews into your client engagement terms — not as an afterthought, but as a structural feature of your commercial model." },
      ],
    },
  },
  {
    title: "R&D Tax Incentive Activity",
    trend: "neutral" as const,
    commentary: "R&D Tax Incentive claim volumes remain steady, but AusIndustry compliance reviews are increasing. Businesses with poor contemporaneous documentation or unclear eligible activity boundaries face higher audit risk.",
    deepDive: {
      headline: "R&D Claims: Steady Volume, Rising Scrutiny",
      sections: [
        { heading: "Claim Landscape", content: "R&D Tax Incentive registrations remained broadly stable in FY2025, with a slight increase in technology and manufacturing sectors. However, the composition of claims is shifting — we're seeing fewer speculative or borderline claims as awareness of AusIndustry compliance reviews increases. This is a positive trend for the program's integrity, but it means businesses need to be more rigorous in claim preparation." },
        { heading: "Compliance Review Trends", content: "AusIndustry has increased its compliance review activity by an estimated 20% year-on-year. Reviews are targeting three areas in particular: software development claims where the 'new knowledge' criterion is unclear, claims where eligible and ineligible activities are insufficiently separated, and claims where time allocation methodology lacks contemporaneous evidence." },
        { heading: "Documentation Standards", content: "The standard of documentation expected by AusIndustry has risen materially. Contemporaneous records — experiment logs, hypothesis records, technical decision documents, and time tracking — are now the minimum expectation. Retrospectively assembled documentation is being specifically flagged in compliance reviews. Businesses that maintain real-time R&D documentation throughout the year are in a significantly stronger position." },
        { heading: "Financial Impact", content: "For eligible companies with turnover under $20 million, the R&D Tax Incentive provides a 43.5% refundable tax offset. On $500k of eligible R&D expenditure, this returns $217,500 in cash — a material contribution to runway and working capital. The risk of losing or reducing this benefit due to poor documentation is a governance failure, not a technical one." },
        { heading: "Our Recommendation", content: "Treat R&D Tax Incentive compliance as a year-round discipline, not an annual filing exercise. Establish documentation protocols at project inception. Maintain clear time tracking at the task level. Engage specialist R&D tax advisers for claim preparation — general accountants rarely have the technical knowledge to maximise eligible claims while maintaining defensible positions." },
      ],
    },
  },
  {
    title: "BAS Compliance & ATO Scrutiny",
    trend: "up" as const,
    commentary: "The ATO is increasing its use of data matching and real-time reporting to identify BAS discrepancies. Businesses with manual or delayed bookkeeping processes are more likely to trigger compliance reviews.",
    deepDive: {
      headline: "ATO Data Matching: The End of 'Close Enough' BAS",
      sections: [
        { heading: "Technology-Driven Enforcement", content: "The ATO's investment in data matching and real-time analytics has fundamentally changed the compliance landscape. Single Touch Payroll (STP) data is now cross-referenced with BAS PAYG withholding figures in near real-time. Discrepancies between the two — even small ones — are automatically flagged. The era of 'close enough' BAS lodgement is effectively over." },
        { heading: "Common Triggers", content: "The most common BAS compliance triggers we're observing are: PAYG withholding figures that don't match STP data, GST claimed on capital purchases without adequate documentation, irregular lodgement patterns (e.g., quarterly lodgement followed by late or missed periods), and significant period-to-period variations without explanation." },
        { heading: "Penalty Framework", content: "The ATO's penalty framework for BAS non-compliance is significant and often underestimated. Failure to Lodge penalties accrue at $313 per 28-day period per statement. Incorrect reporting can attract penalties of 25–75% of the tax shortfall, depending on the degree of culpability. Director penalty notices (DPNs) can be issued for unpaid PAYG withholding and superannuation, creating personal liability for directors." },
        { heading: "Process Deficiencies", content: "The businesses most at risk are those with manual bookkeeping processes, delayed reconciliations, and no systematic review of BAS before lodgement. A BAS prepared from unreconciled books is almost guaranteed to contain errors. Monthly reconciliation — not quarterly — is the minimum standard for any business lodging quarterly BAS." },
        { heading: "Building Compliance Resilience", content: "Reconcile monthly, not quarterly. Maintain a separate BAS provisioning account funded weekly. Cross-check PAYG withholding against payroll reports before lodgement. Implement a formal BAS review process with sign-off before submission. And build BAS payment obligations into your 13-week cashflow forecast as a fixed, non-discretionary outflow." },
      ],
    },
  },
];

const TrendIcon = ({ trend }: { trend: "up" | "down" | "neutral" }) => {
  if (trend === "up") return <TrendingUp className="w-5 h-5 text-red-500" />;
  if (trend === "down") return <TrendingDown className="w-5 h-5 text-amber-500" />;
  return <Minus className="w-5 h-5 text-muted-foreground" />;
};

const DataInsights = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const selected = selectedIdx !== null ? insights[selectedIdx] : null;

  return (
    <PageLayout>
      {({ openContact }) => (
        <>
          <section className="pt-32 pb-20 gradient-navy">
            <div className="container mx-auto px-6 text-center max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Data Insights</h1>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  CFO-level perspective on operating conditions for Australian SMEs. Quarterly commentary on the trends that shape financial decision-making.
                </p>
                <p className="text-sm text-white/40 mt-4">Last updated: Q4 2025</p>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-6 max-w-5xl space-y-8">
              {insights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-2xl p-8 cursor-pointer hover:border-primary transition-colors"
                  onClick={() => setSelectedIdx(i)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <TrendIcon trend={item.trend} />
                    <h2 className="text-xl font-bold text-foreground">{item.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.commentary}</p>
                  <p className="text-xs text-primary mt-3 font-medium">Click to read full analysis →</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Need context specific to your business?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">These trends affect every business differently. A conversation with our team can help you understand what they mean for yours.</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold px-8 py-6 text-lg" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Conversation <ArrowRight className="w-5 h-5 ml-2" /></a>
              </Button>
            </div>
          </section>

          {/* Deep Dive Modal */}
          <AnimatePresence>
            {selected && (
              <>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedIdx(null)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[85vh] bg-card border border-border rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
                >
                  <div className="flex items-start justify-between p-6 border-b border-border flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <TrendIcon trend={selected.trend} />
                      <h2 className="text-2xl font-bold text-foreground">{selected.deepDive.headline}</h2>
                    </div>
                    <button onClick={() => setSelectedIdx(null)} className="p-2 rounded-lg hover:bg-muted transition-colors flex-shrink-0">
                      <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>

                  <div className="overflow-y-auto p-6 flex-1">
                    <div className="max-w-[760px] mx-auto space-y-8">
                      {selected.deepDive.sections.map((s, i) => (
                        <div key={i}>
                          <h3 className="text-lg font-bold text-foreground mb-3">{s.heading}</h3>
                          <p className="text-muted-foreground leading-relaxed">{s.content}</p>
                        </div>
                      ))}

                      <div className="bg-muted/30 border border-border rounded-xl p-8 text-center mt-10">
                        <p className="text-foreground font-semibold mb-2">Apply these insights to your business</p>
                        <p className="text-sm text-muted-foreground mb-4">A structured financial review can identify exactly where these trends are affecting your operations.</p>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
                          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Confidential Conversation</a>
                        </Button>
                        <p className="text-xs text-muted-foreground mt-3">CFO Pilot – Everco Pty Ltd ABN 48 650 061</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </PageLayout>
  );
};

export default DataInsights;
