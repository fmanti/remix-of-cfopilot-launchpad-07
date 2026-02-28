import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { DollarSign, Download, Users } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/frank-manti";

const salaryByStage = [
  { stage: "Pre-Revenue", min: 0, max: 90, avg: 45 },
  { stage: "Seed", min: 80, max: 150, avg: 115 },
  { stage: "Series A+", min: 130, max: 220, avg: 175 },
  { stage: "Established SME", min: 180, max: 350, avg: 265 },
];

const industryVariations = [
  { industry: "Technology", avg: 145, color: "hsl(145, 80%, 40%)" },
  { industry: "Manufacturing", avg: 165, color: "hsl(218, 54%, 30%)" },
  { industry: "Professional Services", avg: 180, color: "hsl(215, 14%, 45%)" },
  { industry: "Consumer & Retail", avg: 130, color: "hsl(145, 60%, 50%)" },
];

const taxImplications = [
  { title: "Division 7A", description: "Director loans from the company must be structured as compliant Division 7A loans with minimum interest and repayment terms, or they'll be treated as unfranked dividends." },
  { title: "Salary vs Dividends", description: "Salary is deductible to the company and subject to PAYG. Dividends come from after-tax profits and carry franking credits. The optimal mix depends on personal marginal tax rate versus corporate rate." },
  { title: "Corporate Tax Rate", description: "Base rate entities (aggregated turnover under $50m and passive income ≤80%) pay 25%. All others pay 30%. This affects the franking credit calculation." },
  { title: "Superannuation", description: "11% super guarantee is mandatory on salary payments. Strategic additional contributions can reduce personal taxable income via concessional contributions (capped at $30,000 p.a.)." },
  { title: "Personal Tax Brackets", description: "At $180k salary, your marginal rate is 45% plus 2% Medicare levy. This is where dividend and salary mix optimisation becomes critical." },
];

function generateBenchmarkBlob(): Blob {
  const content = `
FOUNDER SALARY BENCHMARK REPORT
================================
CFO Pilot – Everco Pty Ltd ABN 48 650 061

EXECUTIVE SUMMARY

This report provides benchmark data on founder compensation for Australian 
Pty Ltd entities, covering salary ranges by business stage, tax optimisation 
strategies, and structuring recommendations.

────────────────────────────────────

SALARY BENCHMARKS BY STAGE

Pre-Revenue ($0–$90k)
• Median: $45,000
• Most founders at this stage take minimal or no salary
• Super guarantee still applies on any salary drawn
• Consider: personal living costs vs runway preservation

Seed Stage ($80k–$150k)
• Median: $115,000
• Typically funded from seed capital or early revenue
• Common structure: $100k salary + 11% super = $111k total cost
• Board or investor approval often required

Series A+ ($130k–$220k)
• Median: $175,000
• Market-rate expectations increase with institutional capital
• Salary benchmarking against comparable roles becomes important
• Consider franking credit utilisation through dividend mix

Established SME ($180k–$350k+)
• Median: $265,000
• Full market-rate compensation expected
• Comprehensive tax planning critical at this level
• Super, dividend, and salary mix optimisation essential

────────────────────────────────────

INDUSTRY VARIATIONS

Technology: Average $145k
• Typically lower base salary in early stages
• Equity compensation supplements cash

Manufacturing: Average $165k
• Reflects hands-on operational requirements
• Award rate considerations for directors who perform operational work

Professional Services: Average $180k
• Highest base salaries reflect billable rate expectations
• Partner distribution models add complexity

Consumer & Retail: Average $130k
• Lower averages reflect seasonal revenue patterns
• Working capital requirements may limit cash available for salary

────────────────────────────────────

TAX OPTIMISATION FRAMEWORK

1. SALARY COMPONENT
• Pay sufficient salary to cover personal expenses
• Ensure salary reaches the $30,000 concessional super cap
• Salary is tax-deductible to the company
• Subject to PAYG withholding

2. SUPERANNUATION COMPONENT
• 11% SG mandatory on salary
• Salary sacrifice up to $30,000 total concessional cap
• Carry-forward unused amounts from prior 5 years (if balance <$500k)
• Tax rate: 15% inside super vs up to 47% personal rate

3. DIVIDEND COMPONENT
• Fully franked dividends carry company tax credit
• For 25% tax rate entities: $1 dividend = $0.333 franking credit
• Net tax on franked dividends for high-income founders ≈ 22%
• Timing: declare and pay at EOFY for tax planning

4. RETAINED EARNINGS
• Retain surplus in company at 25% tax rate (base rate entity)
• Useful when personal rate exceeds company rate
• Division 7A applies if drawings exceed salary/dividends
• Board resolution required for profit retention

────────────────────────────────────

DIVISION 7A — KEY RULES

• Applies to private company loans to shareholders/associates
• Minimum interest rate: ATO benchmark rate (currently ~8.27%)
• Maximum loan term: 7 years (unsecured), 25 years (secured)
• Annual minimum repayments required
• Non-compliant loans treated as unfranked dividends
• No franking credit offset = full tax at marginal rate

────────────────────────────────────

PERSONAL SERVICES INCOME (PSI) CONSIDERATIONS

If >80% of company income from a single client:
• PSI rules may attribute income directly to the individual
• Company deductions limited to those available to individuals
• Cannot retain income in the company
• Does not affect super guarantee obligations

Tests to determine PSI status:
1. Results test (most common exemption)
2. Unrelated clients test
3. Employment test
4. Business premises test

────────────────────────────────────

ANNUAL REVIEW CHECKLIST

☐ Review salary level against current stage benchmarks
☐ Calculate optimal concessional super contribution
☐ Check carry-forward unused super cap availability
☐ Model salary vs dividend vs retained earnings tax outcomes
☐ Review Division 7A loan compliance
☐ Assess PSI status and implications
☐ Update PAYG withholding variations if required
☐ Confirm BAS reporting matches planned structure

Optimal review window: March – May (before EOFY)

────────────────────────────────────

DISCLAIMER

This report is for general information purposes only and does not constitute 
financial, tax, or legal advice. CFO Pilot is not a registered tax agent 
or public accounting firm. The data presented is indicative and based on 
aggregated client observations. Always consult qualified professionals 
for advice specific to your circumstances.

© Everco Pty Ltd ABN 48 650 061. All rights reserved.
`;
  return new Blob([content], { type: "text/plain" });
}

const FounderSalaryReport = () => {
  const { toast } = useToast();
  const [showDownload, setShowDownload] = useState(false);
  const [email, setEmail] = useState("");

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("Founder salary download request:", email, "Notify: info@cfopilot.com.au");
    toast({ title: "Benchmark report ready", description: "Click the download button below." });
    setShowDownload(true);
  };

  const triggerDownload = () => {
    const blob = generateBenchmarkBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CFO_Pilot_Founder_Salary_Benchmark.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <PageLayout>
      {() => (
        <>
          <section className="pt-32 pb-16 gradient-navy">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">Benchmark Report</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What Should Founders Pay Themselves in Australia?
                </h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                  Benchmark data, tax considerations, and structuring strategies for founders operating through Pty Ltd entities.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Salary by Stage */}
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-foreground mb-8">Founder Salary by Stage</h2>
                <div className="h-80 mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salaryByStage} barCategoryGap="20%">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                      <XAxis dataKey="stage" tick={{ fontSize: 12 }} />
                      <YAxis tickFormatter={(v) => `$${v}k`} tick={{ fontSize: 12 }} />
                      <Tooltip formatter={(v: number) => [`$${v}k`, ""]} />
                      <Bar dataKey="min" fill="hsl(145, 80%, 40%)" opacity={0.3} radius={[4, 4, 0, 0]} name="Min" />
                      <Bar dataKey="avg" fill="hsl(145, 80%, 40%)" radius={[4, 4, 0, 0]} name="Average" />
                      <Bar dataKey="max" fill="hsl(218, 54%, 20%)" radius={[4, 4, 0, 0]} name="Max" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid sm:grid-cols-4 gap-4">
                  {salaryByStage.map((s) => (
                    <div key={s.stage} className="bg-muted/30 rounded-xl p-4 text-center">
                      <p className="text-sm font-medium text-muted-foreground">{s.stage}</p>
                      <p className="text-lg font-bold text-foreground">${s.min}k – ${s.max}k</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Super & Dividends */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6 max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-foreground mb-8">Superannuation & Dividends</h2>
                <div className="space-y-6">
                  {[
                    { t: "11% Superannuation Guarantee", d: "Mandatory on all salary payments. Strategic additional contributions up to the $30,000 concessional cap reduce personal taxable income and are taxed at only 15% inside super." },
                    { t: "Salary vs Dividend Mix", d: "At $180k salary, your marginal rate is 47%. If the company pays 25% tax, franked dividends carry a credit. The optimal split depends on company profitability, your personal deductions, and super strategy." },
                    { t: "Franking Credits", d: "Fully franked dividends carry a tax credit equal to the company tax already paid. For base rate entities at 25%, this means $1 of dividend carries $0.333 in franking credits." },
                    { t: "Retained Earnings", d: "Retaining earnings in the company can defer personal tax, but Division 7A applies if you draw on those funds without a compliant loan agreement." },
                  ].map((item) => (
                    <div key={item.t} className="bg-card border border-border rounded-xl p-6">
                      <h3 className="font-semibold text-foreground mb-2">{item.t}</h3>
                      <p className="text-muted-foreground text-sm">{item.d}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Industry Variations */}
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-foreground mb-8">Industry Variations</h2>
                <div className="h-64 mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={industryVariations} layout="vertical" barCategoryGap="30%">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                      <XAxis type="number" tickFormatter={(v) => `$${v}k`} tick={{ fontSize: 12 }} />
                      <YAxis type="category" dataKey="industry" tick={{ fontSize: 12 }} width={140} />
                      <Tooltip formatter={(v: number) => [`$${v}k average`, ""]} />
                      <Bar dataKey="avg" radius={[0, 4, 4, 0]} name="Average Salary">
                        {industryVariations.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Tax Implications */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6 max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-foreground mb-8">Tax Implications</h2>
                <div className="space-y-6">
                  {taxImplications.map((t) => (
                    <div key={t.title} className="border-l-2 border-primary pl-6">
                      <h3 className="font-semibold text-foreground mb-2">{t.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{t.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Gated Download */}
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-4">Download the Full Benchmark Report</h2>
                <p className="text-muted-foreground mb-8">Includes detailed salary brackets, tax optimisation models, and structuring strategies.</p>
                {!showDownload ? (
                  <form onSubmit={handleDownload} className="flex gap-3">
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="flex-1" required />
                    <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      <Download className="w-4 h-4 mr-2" /> Download
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <Button size="lg" onClick={triggerDownload} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      <Download className="w-4 h-4 mr-2" /> Download Report
                    </Button>
                    <div>
                      <Button size="lg" variant="outline" asChild>
                        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Confidential Conversation</a>
                      </Button>
                    </div>
                  </div>
                )}
                <p className="text-xs text-muted-foreground mt-4">Everco Pty Ltd ABN 48 650 061</p>
              </motion.div>
            </div>
          </section>
        </>
      )}
    </PageLayout>
  );
};

export default FounderSalaryReport;
