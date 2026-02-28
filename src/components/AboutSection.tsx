import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import frankPhoto from "@/assets/frank-photo.jpg";

const values = [
  "Calm judgement under pressure",
  "Plain-English finance",
  "Clear priorities",
  "Accountability to outcomes",
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo with Parallax */}
          <motion.div
            style={{ y }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={frankPhoto} 
                  alt="Frank - CFO Pilot Founder" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built by an experienced CFO who understands{" "}
              <span className="text-primary">real-world decisions</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                CFO Pilot is led by Frank, an experienced Australian CFO who has spent decades working alongside business owners, executives, and boards in complex operating environments.
              </p>
              <p>
                Frank's experience spans infrastructure, manufacturing, transport, services, and growth-stage businesses — helping organisations navigate financial pressure, system change, and strategic inflection points.
              </p>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-foreground mb-4">Clients value:</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {values.map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
