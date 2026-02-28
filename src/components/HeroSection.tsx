import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardMockup from "./DashboardMockup";

interface HeroSectionProps {
  onOpenContact: () => void;
}

const HeroSection = ({ onOpenContact }: HeroSectionProps) => {
  const scrollToHowItWorks = () => {
    const element = document.querySelector("#how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen gradient-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              When the business gets complex, who's actually{" "}
              <span className="text-primary">flying the financials?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-xl">
              CFO Pilot provides senior CFO leadership, bookkeeping, and tax planning for Australian businesses that need clarity, control, and confident decision-making — without hiring a full-time CFO.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={onOpenContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
              >
                Book a Confidential Conversation
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                onClick={scrollToHowItWorks}
                className="text-white hover:text-primary hover:bg-white/10 font-medium group"
              >
                How CFO Pilot works
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Context */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-white/50 text-sm max-w-md"
            >
              Supporting founder-led and board-led Australian businesses across manufacturing, infrastructure, transport, services, and complex operating environments.
            </motion.p>
          </motion.div>

          {/* Right Content - Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
