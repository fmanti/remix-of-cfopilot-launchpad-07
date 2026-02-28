import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp, PieChart, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const features = [
  { icon: BarChart3, title: "Real-Time Dashboard", description: "See your revenue, expenses, cash position, and key metrics updated automatically from your Xero or MYOB data." },
  { icon: TrendingUp, title: "Cash Flow Forecasting", description: "13-week rolling forecast that shows you exactly when cash will be tight — and what levers you can pull." },
  { icon: PieChart, title: "Expense Breakdown", description: "Understand where your money goes with clear, categorised expense reporting that highlights trends and anomalies." },
  { icon: Activity, title: "Financial Health Score", description: "A simple, composite metric that tells you how your business is tracking across liquidity, profitability, and efficiency." },
];

const Demo = () => (
  <PageLayout>
    {({ openContact }) => (
      <>
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy/90">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">CFO Pilot Demo</h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                See how CFO Pilot gives you real-time visibility into your financial position — without the complexity of enterprise tools.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">What You'll See</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-8">
                  <f.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">Want a personalised walkthrough?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Book a 15-minute call and we'll show you exactly how CFO Pilot would work with your business data.
              </p>
              <Button onClick={openContact} size="lg" variant="secondary" className="font-semibold px-8 py-6 text-lg">
                Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </>
    )}
  </PageLayout>
);

export default Demo;
