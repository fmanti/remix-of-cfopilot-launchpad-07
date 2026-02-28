import { motion } from "framer-motion";

const problems = [
  "Revenue is growing, but cash feels tighter",
  "The numbers don't fully line up",
  "Decisions feel risky without clear impact",
  "Accounting tells you what happened — not what to do next",
];

const ProblemSection = () => {
  return (
    <section className="py-24 gradient-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop reacting. <span className="text-primary">Start deciding.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Sound familiar?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <span className="text-primary text-2xl">×</span>
                <p className="text-white/80 text-lg">{problem}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-6 py-3">
            <span className="text-primary">→</span>
            <p className="text-white font-medium">
              CFO Pilot closes the gap between information and judgement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
