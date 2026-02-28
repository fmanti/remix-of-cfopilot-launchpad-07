import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/frank-manti";

const BurnRateCalculator = () => {
  const [cashBalance, setCashBalance] = useState<number>(500000);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(80000);
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(30000);
  const [revenueGrowth, setRevenueGrowth] = useState<number>(0);
  const [capitalRaise, setCapitalRaise] = useState<number>(0);
  const [majorExpense, setMajorExpense] = useState<number>(0);

  const results = useMemo(() => {
    const effectiveCash = cashBalance + capitalRaise - majorExpense;
    const netBurn = monthlyExpenses - monthlyRevenue;
    const runwayMonths = netBurn > 0 ? effectiveCash / netBurn : Infinity;

    // Project forward with revenue growth
    const projectedMonths: { month: number; cash: number; burn: number; revenue: number }[] = [];
    let remainingCash = effectiveCash;
    let currentRevenue = monthlyRevenue;
    for (let m = 1; m <= 24; m++) {
      currentRevenue = currentRevenue * (1 + revenueGrowth / 100);
      const currentBurn = monthlyExpenses - currentRevenue;
      remainingCash -= currentBurn;
      projectedMonths.push({ month: m, cash: remainingCash, burn: currentBurn, revenue: currentRevenue });
      if (remainingCash <= 0) break;
    }

    const projectedRunway = projectedMonths.findIndex((m) => m.cash <= 0) + 1 || (projectedMonths.length >= 24 ? 24 : projectedMonths.length);

    return { effectiveCash, netBurn, runwayMonths, projectedRunway, projectedMonths };
  }, [cashBalance, monthlyExpenses, monthlyRevenue, revenueGrowth, capitalRaise, majorExpense]);

  const getRunwayColor = (months: number) => {
    if (months >= 12) return "bg-primary";
    if (months >= 6) return "bg-amber-500";
    return "bg-destructive";
  };

  const getRunwayLabel = (months: number) => {
    if (months === Infinity) return "Cash flow positive";
    if (months >= 18) return "Healthy";
    if (months >= 12) return "Adequate";
    if (months >= 6) return "Caution";
    return "Critical";
  };

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(n);

  const displayRunway = results.runwayMonths === Infinity ? "∞" : Math.round(results.runwayMonths);

  return (
    <PageLayout>
      {() => (
        <>
          {/* Hero */}
          <section className="pt-32 pb-16 gradient-navy">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                  <Calculator className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">Interactive Tool</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Understand Your Runway Before It Understands You.
                </h1>
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  A practical burn rate and cash runway calculator designed for Australian founders and SME operators.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}>
                    Calculate Your Runway
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Confidential Conversation</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Calculator */}
          <section id="calculator" className="py-20 bg-light-bg">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Inputs */}
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Your Inputs</h2>

                  <div className="space-y-2">
                    <Label>Current Cash Balance (AUD)</Label>
                    <Input type="number" value={cashBalance} onChange={(e) => setCashBalance(Number(e.target.value))} className="bg-card" />
                  </div>

                  <div className="space-y-2">
                    <Label>Monthly Operating Expenses (AUD)</Label>
                    <Input type="number" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(Number(e.target.value))} className="bg-card" />
                  </div>

                  <div className="space-y-2">
                    <Label>Monthly Revenue (AUD)</Label>
                    <Input type="number" value={monthlyRevenue} onChange={(e) => setMonthlyRevenue(Number(e.target.value))} className="bg-card" />
                  </div>

                  <div className="space-y-2">
                    <Label>Expected Monthly Revenue Growth (%)</Label>
                    <Input type="number" value={revenueGrowth} onChange={(e) => setRevenueGrowth(Number(e.target.value))} className="bg-card" placeholder="Optional" />
                  </div>

                  <div className="space-y-2">
                    <Label>Planned Capital Raise (AUD)</Label>
                    <Input type="number" value={capitalRaise} onChange={(e) => setCapitalRaise(Number(e.target.value))} className="bg-card" placeholder="Optional" />
                  </div>

                  <div className="space-y-2">
                    <Label>Planned Major Expense (AUD)</Label>
                    <Input type="number" value={majorExpense} onChange={(e) => setMajorExpense(Number(e.target.value))} className="bg-card" placeholder="Optional" />
                  </div>
                </motion.div>

                {/* Results */}
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Your Runway</h2>

                  {/* Net Burn */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingDown className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">Monthly Net Burn</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">
                      {results.netBurn <= 0 ? "Cash flow positive" : formatCurrency(results.netBurn)}
                    </p>
                  </div>

                  {/* Runway Months */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-muted-foreground">Cash Runway</span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${getRunwayColor(results.runwayMonths)}`}>
                        {getRunwayLabel(results.runwayMonths)}
                      </span>
                    </div>
                    <p className="text-5xl font-bold text-foreground mb-2">
                      {displayRunway} <span className="text-lg font-normal text-muted-foreground">months</span>
                    </p>
                    {/* Visual bar */}
                    <div className="w-full bg-muted rounded-full h-4 mt-4">
                      <div
                        className={`h-4 rounded-full transition-all duration-700 ${getRunwayColor(results.runwayMonths)}`}
                        style={{ width: `${Math.min((results.runwayMonths / 24) * 100, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0</span>
                      <span>6m</span>
                      <span>12m</span>
                      <span>18m</span>
                      <span>24m</span>
                    </div>
                  </div>

                  {/* Projected Runway */}
                  {revenueGrowth > 0 && (
                    <div className="bg-card border border-border rounded-xl p-6">
                      <span className="text-sm font-medium text-muted-foreground">Projected Runway (with growth)</span>
                      <p className="text-3xl font-bold text-foreground mt-2">
                        {results.projectedRunway >= 24 ? "24+" : results.projectedRunway} <span className="text-lg font-normal text-muted-foreground">months</span>
                      </p>
                    </div>
                  )}

                  {/* Effective Cash */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <span className="text-sm font-medium text-muted-foreground">Effective Cash Position</span>
                    <p className="text-2xl font-bold text-foreground mt-2">{formatCurrency(results.effectiveCash)}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Benchmarks & Mistakes */}
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Healthy Runway Benchmarks</h2>
                  <div className="space-y-4">
                    {[
                      { stage: "Pre-revenue", range: "12–18 months", icon: AlertTriangle },
                      { stage: "Growth stage", range: "9–12 months", icon: TrendingDown },
                      { stage: "Established SME", range: "Positive operating cashflow", icon: CheckCircle },
                    ].map((b) => (
                      <div key={b.stage} className="flex items-center gap-4 p-4 bg-light-bg rounded-xl">
                        <b.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-foreground">{b.stage}</span>
                          <span className="text-muted-foreground ml-2">— {b.range}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Common Mistakes</h2>
                  <ul className="space-y-3">
                    {[
                      "Ignoring GST timing and the impact of BAS payment cycles on cash",
                      "Failing to provision for superannuation guarantee liabilities",
                      "Not modelling BAS payments as a recurring cash outflow",
                      "Excluding director drawings from operating expense calculations",
                      "Treating burn rate as static instead of modelling multiple scenarios",
                      "Waiting until cash is critically low before checking runway",
                    ].map((m, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="text-center pt-8 border-t border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Need help interpreting your numbers?</h3>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Confidential Conversation</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}
    </PageLayout>
  );
};

export default BurnRateCalculator;
