import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onOpenContact: () => void;
}

const FinalCTASection = ({ onOpenContact }: FinalCTASectionProps) => {
  return (
    <section className="py-24 gradient-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            If you need steady financial leadership — not more noise — let's talk.
          </h2>
          
          <p className="text-white/80 text-lg mb-10">
            A confidential conversation to understand your situation and explore how CFO Pilot might help.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={onOpenContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-6 text-lg shadow-xl"
            >
              Book a Confidential Conversation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
