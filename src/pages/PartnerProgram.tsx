import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Handshake, Users, BarChart3, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/PageLayout";

const CALENDLY_URL = "https://calendly.com/frank-manti";
const NOTIFY_EMAIL = "info@cfopilot.com.au";

const partnerTypes = [
  { icon: Shield, title: "Law Firms", description: "Your clients need financial clarity during transactions, restructures, and disputes. We provide the CFO-level support that complements your legal advice." },
  { icon: BarChart3, title: "Management Consultants", description: "Strategy recommendations need financial modelling and implementation support. We handle the numbers so your recommendations land." },
  { icon: Users, title: "Tax Specialists & Accountants", description: "Focus on tax strategy while we handle bookkeeping, BAS, payroll, and management reporting for your mutual clients." },
  { icon: Handshake, title: "Venture Capital & Private Equity", description: "Your portfolio companies need financial discipline. We provide fractional CFO and back-office support that scales with their growth." },
];

const PartnerProgram = () => {
  const { toast } = useToast();
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", partnerType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company || !form.partnerType || !form.message) {
      toast({ title: "Please complete all required fields", variant: "destructive" });
      return;
    }
    console.log("Partner application submitted:", form, "Notify:", NOTIFY_EMAIL);
    toast({ title: "Application received", description: "We'll be in touch within 2 business days." });
    setSubmitted(true);
  };

  return (
    <PageLayout>
      {() => (
        <>
          <section className="pt-32 pb-20 gradient-navy">
            <div className="container mx-auto px-6 text-center max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Partner Program</h1>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  A structured collaboration for professional firms and advisors who want to offer their clients access to senior financial leadership — without building it in-house.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-6 max-w-5xl">
              <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Who Should Partner With Us</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {partnerTypes.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-8">
                    <p.icon className="w-6 h-6 text-primary mb-3" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-muted-foreground">{p.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">How It Works</h2>
              <div className="space-y-6">
                {[
                  { n: "1. Referral", d: "Introduce us to clients who need back-office, bookkeeping, or CFO support. We handle the engagement directly." },
                  { n: "2. Collaboration", d: "We work alongside your team — sharing financial insights, coordinating on tax, and ensuring your client's financial operations are running smoothly." },
                  { n: "3. Mutual Growth", d: "Referral partners receive a structured referral arrangement. We build long-term relationships, not transactional handoffs." },
                ].map((s) => (
                  <div key={s.n} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-bold text-foreground mb-2">{s.n}</h3>
                    <p className="text-muted-foreground">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-primary">
            <div className="container mx-auto px-6 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-primary-foreground mb-6">Interested in partnering?</h2>
                <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                  Start with a confidential conversation about how we might work together.
                </p>
                <Button onClick={() => setIsApplicationOpen(true)} size="lg" variant="secondary" className="font-semibold px-8 py-6 text-lg">
                  Apply to Partner <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Partner Application Modal */}
          <AnimatePresence>
            {isApplicationOpen && (
              <>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsApplicationOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
                >
                  <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Partner Application</h3>
                      <p className="text-sm text-muted-foreground mt-1">We'll review your application within 2 business days.</p>
                    </div>
                    <button onClick={() => setIsApplicationOpen(false)} className="p-2 rounded-lg hover:bg-muted transition-colors">
                      <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>

                  <div className="overflow-y-auto p-6 flex-1">
                    {!submitted ? (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Label>Full Name *</Label>
                          <Input className="mt-1.5" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                        </div>
                        <div>
                          <Label>Email *</Label>
                          <Input className="mt-1.5" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
                        </div>
                        <div>
                          <Label>Company / Firm Name *</Label>
                          <Input className="mt-1.5" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Your firm name" />
                        </div>
                        <div>
                          <Label>Phone (optional)</Label>
                          <Input className="mt-1.5" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone number" />
                        </div>
                        <div>
                          <Label>Partner Type *</Label>
                          <Select value={form.partnerType} onValueChange={(v) => setForm({ ...form, partnerType: v })}>
                            <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select partner type" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="law-firm">Law Firm</SelectItem>
                              <SelectItem value="management-consultant">Management Consultant</SelectItem>
                              <SelectItem value="tax-specialist">Tax Specialist / Accountant</SelectItem>
                              <SelectItem value="vc-pe">Venture Capital / Private Equity</SelectItem>
                              <SelectItem value="other">Other Professional Services</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Tell us about your practice and how you'd like to collaborate *</Label>
                          <Textarea className="mt-1.5 min-h-[100px]" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Describe your firm, client base, and how you see the partnership working..." />
                        </div>
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6">
                          Submit Application
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          Applications are reviewed by CFO Pilot. Everco Pty Ltd ABN 48 650 061.
                        </p>
                      </form>
                    ) : (
                      <div className="text-center py-8">
                        <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-foreground mb-2">Application Received</h3>
                        <p className="text-muted-foreground mb-6">Thank you for your interest. We'll review your application and respond within 2 business days.</p>
                        <Button variant="outline" asChild>
                          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Conversation Now</a>
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </PageLayout>
  );
};

export default PartnerProgram;
