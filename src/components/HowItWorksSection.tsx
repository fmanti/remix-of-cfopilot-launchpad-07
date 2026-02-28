import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Get Clear",
    description: "Stabilise bookkeeping, reporting, and cashflow so everyone works from the same truth.",
  },
  {
    number: "02",
    title: "Take Control",
    description: "Introduce CFO-level oversight: forecasts, scenarios, priorities, and discipline.",
  },
  {
    number: "03",
    title: "Move Forward",
    description: "Make calmer, more deliberate decisions — even when conditions change.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-light-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How CFO Pilot Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach to bringing clarity and control to your finances.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-5xl font-bold text-primary/20 mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex w-12 h-12 bg-primary rounded-full items-center justify-center text-primary-foreground font-bold shadow-lg flex-shrink-0">
                {index + 1}
              </div>

              {/* Spacer */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
