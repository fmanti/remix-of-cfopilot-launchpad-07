import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "CFO Pilot has been an invaluable member of our team, guiding us through a number of transactions worth $100+ million. Frank is an incredibly thoughtful and thorough financial professional who effortlessly balances both 'CFO' and 'business advisor' roles.",
    author: "Silvio Lenvoy",
    role: "Managing Director",
    company: "Encore Vision",
  },
  {
    quote: "Frank is a calm, measured professional with a high level of technical proficiency. His ability to absorb and adapt during periods of high stress is outstanding.",
    author: "Sarah Fastery",
    role: "CEO",
    company: "Fastery Trading",
  },
  {
    quote: "I've had the pleasure of working with Frank on several major restructuring projects, some during periods of massive financial pressure. Frank possesses that calm perspective that's hard to find.",
    author: "John",
    role: "Former CEO",
    company: "OFE Group",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-light-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Working alongside business leaders through complexity and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border pt-6">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
