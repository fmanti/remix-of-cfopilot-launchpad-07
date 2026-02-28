import { motion } from "framer-motion";
import { TrendingUp, FileText, Calculator } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Senior CFO Leadership",
    tagline: "CFO-level judgement, not outsourced admin.",
    items: [
      "Cashflow & working capital",
      "Budgeting & financial modelling",
      "Board reporting",
      "Strategic decision support",
      "Governance & risk oversight",
    ],
  },
  {
    icon: FileText,
    title: "Reliable Financial Foundations",
    tagline: "Strong leadership depends on clean, dependable numbers.",
    items: [
      "Day-to-day bookkeeping",
      "Monthly reporting",
      "Payroll coordination",
      "Process improvement",
      "Systems alignment",
    ],
  },
  {
    icon: Calculator,
    title: "Practical Tax Planning",
    tagline: "Tax should support the business, not surprise it.",
    items: [
      "Tax planning & forecasting",
      "Structuring considerations",
      "Year-end preparation",
      "Coordination with specialists",
    ],
  },
];

const PillarsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Three Pillars of Financial Clarity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive approach to financial leadership that goes beyond the numbers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {pillar.title}
              </h3>
              
              <p className="text-primary font-medium text-sm mb-6">
                "{pillar.tagline}"
              </p>
              
              <ul className="space-y-3">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
