import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import PageLayout from "@/components/PageLayout";

const CALENDLY_URL = "https://calendly.com/frank-manti";

// === DATA FROM SPREADSHEET ===

const revenueTiers = [
  { min: 0, max: 50000, tier: "Starter CFO", monthly: 990, cadence: "Monthly" },
  { min: 50001, max: 100000, tier: "Basic CFO", monthly: 1750, cadence: "Monthly" },
  { min: 100001, max: 200000, tier: "Growth CFO", monthly: 2500, cadence: "Fortnightly" },
  { min: 200001, max: 500000, tier: "Scale CFO", monthly: 3150, cadence: "Weekly", bundledCOO: true },
  { min: 500001, max: 1000000, tier: "Established CFO", monthly: 5250, cadence: "Weekly", bundledCOO: true },
  { min: 1000001, max: 999999999, tier: "Custom CFO", monthly: 6250, cadence: "Weekly", bundledCOO: true },
];

const transactionBands = [
  { min: 0, max: 25, band: "Micro", monthly: 150 },
  { min: 26, max: 100, band: "Small", monthly: 400 },
  { min: 101, max: 300, band: "Medium", monthly: 1100 },
  { min: 301, max: 500, band: "Growth", monthly: 1700 },
  { min: 501, max: 800, band: "High Volume", monthly: 2700 },
  { min: 801, max: 999999, band: "Enterprise", monthly: 4000 },
];

const payrollBands = [
  { min: 0, max: 0, band: "None", monthly: 0 },
  { min: 1, max: 5, band: "Light", monthly: 150 },
  { min: 6, max: 15, band: "Medium", monthly: 300 },
  { min: 16, max: 999, band: "Large", monthly: 500 },
];

const cooLevels = [
  { level: "None", monthly: 0 },
  { level: "Light", monthly: 750 },
  { level: "Growth", monthly: 1750 },
  { level: "Embedded", monthly: 4000 },
];

const ANNUAL_DISCOUNT = 0.10;

const revenueLabels = ["$0–$50k", "$50k–$100k", "$100k–$200k", "$200k–$500k", "$500k–$1m", "$1m+"];
const txLabels = ["0–25", "26–100", "101–300", "301–500", "501–800", "800+"];
const payrollLabels = ["0", "1–5", "6–15", "16+"];
const cooLabels = ["None", "Light", "Growth", "Embedded"];

const tierComparison = [
  { tier: "Starter", idealFor: "Early-stage founders needing structured financial visibility.", cadence: "Monthly", includes: "Financial model, budget vs actuals, KPI dashboard" },
  { tier: "Basic", idealFor: "Growing businesses seeking reporting discipline and forecasting clarity.", cadence: "Monthly", includes: "Everything in Starter + scenario planning, industry benchmarks" },
  { tier: "Growth", idealFor: "Scaling businesses requiring runway modelling and strategic planning.", cadence: "Fortnightly", includes: "Everything in Basic + cash optimisation, investor reporting" },
  { tier: "Scale", idealFor: "Operationally active businesses needing embedded advisory oversight.", cadence: "Weekly", includes: "Everything in Growth + Light COO bundled, board presentations" },
  { tier: "Established", idealFor: "Businesses preparing for capital events, expansion or acquisition.", cadence: "Weekly", includes: "Everything in Scale + fundraising support, M&A advisory" },
  { tier: "Custom", idealFor: "Complex or multi-entity businesses requiring tailored support.", cadence: "Weekly", includes: "Fully bespoke engagement, multi-entity, custom reporting" },
];

const Pricing = () => {
  const [revenueIdx, setRevenueIdx] = useState(1);
  const [txIdx, setTxIdx] = useState(1);
  const [payrollIdx, setPayrollIdx] = useState(0);
  const [cooIdx, setCooIdx] = useState(0);
  const [isAnnual, setIsAnnual] = useState(false);

  const pricing = useMemo(() => {
    const rev = revenueTiers[revenueIdx];
    const tx = transactionBands[txIdx];
    const pr = payrollBands[payrollIdx];
    const coo = cooLevels[cooIdx];

    // COO hybrid logic: bundled tiers get reduced COO pricing
    let cooPrice = coo.monthly;
    if (rev.bundledCOO && cooIdx > 0) {
      if (cooIdx === 1) cooPrice = 0; // Light bundled free
      else if (cooIdx === 2) cooPrice = 1000; // Growth reduced
      else if (cooIdx === 3) cooPrice = 3250; // Embedded reduced
    }

    const monthlyTotal = rev.monthly + tx.monthly + pr.monthly + cooPrice;
    const annualTotal = Math.round(monthlyTotal * 12 * (1 - ANNUAL_DISCOUNT));

    return {
      cfoTier: rev.tier,
      cfoPrice: rev.monthly,
      cadence: rev.cadence,
      bundledCOO: !!rev.bundledCOO,
      txBand: tx.band,
      txPrice: tx.monthly,
      payrollBand: pr.band,
      payrollPrice: pr.monthly,
      cooLevel: coo.level,
      cooPrice,
      monthlyTotal,
      annualTotal,
    };
  }, [revenueIdx, txIdx, payrollIdx, cooIdx]);

  const displayTotal = isAnnual
    ? `$${Math.round(pricing.annualTotal / 12).toLocaleString()}`
    : `$${pricing.monthlyTotal.toLocaleString()}`;

  return (
    <PageLayout>
      {({ openContact }) => (
        <>
          {/* Hero */}
          <section className="pt-32 pb-16 gradient-navy">
            <div className="container mx-auto px-6 text-center max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Clarity. Structure. Scalable Financial Leadership.
                </h1>
                <p className="text-xl text-white/70 mb-8">
                  Transparent, structured pricing aligned to revenue, transaction volume and operational complexity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg" onClick={() => document.getElementById("pricing-builder")?.scrollIntoView({ behavior: "smooth" })}>
                    Build My Plan
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg" asChild>
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* How Pricing Works */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-6 max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">How Pricing Works</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our pricing aligns to four key drivers: annual revenue, monthly transaction volume, payroll complexity, and operational support requirements. This ensures financial leadership scales with your business.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Annual Revenue", "Transactions", "Payroll", "Operations"].map((d) => (
                  <div key={d} className="bg-card border border-border rounded-xl p-4 text-center">
                    <p className="text-sm font-semibold text-foreground">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Pricing Builder */}
          <section id="pricing-builder" className="py-20">
            <div className="container mx-auto px-6 max-w-5xl">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Build Your Plan</h2>

              <div className="grid lg:grid-cols-5 gap-12">
                {/* Sliders Column */}
                <div className="lg:col-span-3 space-y-10">
                  {/* Revenue */}
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <label className="text-sm font-semibold text-foreground">1. Annual Revenue</label>
                      <span className="text-sm font-bold text-primary">{revenueLabels[revenueIdx]}</span>
                    </div>
                    <Slider value={[revenueIdx]} onValueChange={(v) => setRevenueIdx(v[0])} max={revenueTiers.length - 1} step={1} />
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-muted-foreground">{revenueTiers[revenueIdx].tier}</span>
                      <span className="text-xs text-muted-foreground">${revenueTiers[revenueIdx].monthly.toLocaleString()}/mo</span>
                    </div>
                  </div>

                  {/* Transactions */}
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <label className="text-sm font-semibold text-foreground">2. Monthly Transactions</label>
                      <span className="text-sm font-bold text-primary">{txLabels[txIdx]}</span>
                    </div>
                    <Slider value={[txIdx]} onValueChange={(v) => setTxIdx(v[0])} max={transactionBands.length - 1} step={1} />
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-muted-foreground">Bookkeeping & Financial Control</span>
                      <span className="text-xs text-muted-foreground">${transactionBands[txIdx].monthly.toLocaleString()}/mo</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 italic">Fixed monthly bands provide pricing certainty regardless of transaction spikes.</p>
                  </div>

                  {/* Payroll */}
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <label className="text-sm font-semibold text-foreground">3. Employees (Payroll)</label>
                      <span className="text-sm font-bold text-primary">{payrollLabels[payrollIdx]}</span>
                    </div>
                    <Slider value={[payrollIdx]} onValueChange={(v) => setPayrollIdx(v[0])} max={payrollBands.length - 1} step={1} />
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-muted-foreground">Payroll & Compliance Support</span>
                      <span className="text-xs text-muted-foreground">${payrollBands[payrollIdx].monthly.toLocaleString()}/mo</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 italic">Based on a monthly payroll run.</p>
                  </div>

                  {/* COO */}
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <label className="text-sm font-semibold text-foreground">4. Operational Support (COO)</label>
                      <span className="text-sm font-bold text-primary">{cooLabels[cooIdx]}</span>
                    </div>
                    <Slider value={[cooIdx]} onValueChange={(v) => setCooIdx(v[0])} max={cooLevels.length - 1} step={1} />
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-muted-foreground">{pricing.bundledCOO && cooIdx === 1 ? "Light COO bundled with tier" : cooLabels[cooIdx]}</span>
                      <span className="text-xs text-muted-foreground">${pricing.cooPrice.toLocaleString()}/mo</span>
                    </div>
                    {pricing.bundledCOO && cooIdx > 0 && (
                      <p className="text-xs text-primary mt-1">Scale+ tiers include Light COO. Reduced rates applied.</p>
                    )}
                  </div>

                  {/* Billing Toggle */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <span className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
                    <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-primary" />
                    <span className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Annual (Save 10%)</span>
                  </div>
                </div>

                {/* Output Card */}
                <div className="lg:col-span-2">
                  <div className="bg-card border-2 border-primary rounded-2xl p-8 sticky top-32">
                    <h3 className="text-lg font-bold text-foreground mb-6">Your Plan Summary</h3>

                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">CFO Tier</span>
                        <span className="font-semibold text-foreground">{pricing.cfoTier}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Meeting Cadence</span>
                        <span className="font-semibold text-foreground">{pricing.cadence}</span>
                      </div>
                      <div className="flex justify-between text-sm border-t border-border pt-3">
                        <span className="text-muted-foreground">CFO Advisory</span>
                        <span className="text-foreground">${pricing.cfoPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Bookkeeping ({pricing.txBand})</span>
                        <span className="text-foreground">${pricing.txPrice.toLocaleString()}</span>
                      </div>
                      {pricing.payrollPrice > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Payroll ({pricing.payrollBand})</span>
                          <span className="text-foreground">${pricing.payrollPrice.toLocaleString()}</span>
                        </div>
                      )}
                      {pricing.cooPrice > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">COO ({pricing.cooLevel})</span>
                          <span className="text-foreground">${pricing.cooPrice.toLocaleString()}</span>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-border pt-6">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-sm text-muted-foreground">Monthly Total</span>
                        <span className="text-3xl font-bold text-foreground">{displayTotal}</span>
                      </div>
                      {isAnnual && (
                        <>
                          <p className="text-xs text-primary text-right mb-1">10% annual discount applied</p>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Annual Total</span>
                            <span className="font-bold text-foreground">${pricing.annualTotal.toLocaleString()}</span>
                          </div>
                        </>
                      )}
                      {!isAnnual && (
                        <div className="flex justify-between text-sm mt-1">
                          <span className="text-muted-foreground">Annual Estimate</span>
                          <span className="text-foreground">${(pricing.monthlyTotal * 12).toLocaleString()}</span>
                        </div>
                      )}
                    </div>

                    <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6" asChild>
                      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Call <ArrowRight className="w-4 h-4 ml-2" /></a>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-3">Everco Pty Ltd ABN 48 650 061</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CFO Tier Comparison */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl font-bold text-foreground mb-10 text-center">CFO Tier Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 font-semibold text-foreground">Tier</th>
                      <th className="text-left py-4 px-4 font-semibold text-foreground">Ideal For</th>
                      <th className="text-left py-4 px-4 font-semibold text-foreground">Cadence</th>
                      <th className="text-left py-4 px-4 font-semibold text-foreground">Includes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tierComparison.map((t) => (
                      <tr key={t.tier} className="border-b border-border">
                        <td className="py-4 px-4 font-semibold text-foreground whitespace-nowrap">{t.tier}</td>
                        <td className="py-4 px-4 text-muted-foreground">{t.idealFor}</td>
                        <td className="py-4 px-4 text-muted-foreground whitespace-nowrap">{t.cadence}</td>
                        <td className="py-4 px-4 text-muted-foreground">{t.includes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Strategic Positioning */}
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-3xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-foreground mb-6">More Than Accounting. Structured Financial Leadership.</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CFO Pilot delivers forward-looking financial clarity — from structured reporting and forecasting through to operational oversight and strategic execution.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Designed for founders who want insight before decisions, not hindsight after.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg" asChild>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Confidential Conversation <ArrowRight className="w-4 h-4 ml-2" /></a>
                </Button>
              </motion.div>
            </div>
          </section>
        </>
      )}
    </PageLayout>
  );
};

export default Pricing;
