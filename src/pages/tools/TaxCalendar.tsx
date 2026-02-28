import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, ChevronRight, X, Filter } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/frank-manti";

type TaxEvent = {
  date: string;
  title: string;
  description: string;
  category: string[];
};

const taxEvents: Record<number, TaxEvent[]> = {
  7: [
    { date: "14 Jul", title: "STP Finalisation", description: "Single Touch Payroll finalisation for the prior financial year must be completed by 14 July.", category: ["employer", "pty-ltd"] },
    { date: "21 Jul", title: "June BAS (Monthly)", description: "Monthly BAS for June is due for monthly lodgers.", category: ["sme", "startup"] },
    { date: "28 Jul", title: "Q4 BAS (Quarterly)", description: "Quarterly BAS for April–June quarter due. Includes GST, PAYG withholding, and PAYG instalments.", category: ["sme", "startup", "pty-ltd"] },
    { date: "28 Jul", title: "Super Guarantee Q4", description: "Superannuation guarantee contributions for April–June quarter must be received by employee funds by this date.", category: ["employer"] },
  ],
  8: [
    { date: "21 Aug", title: "July BAS (Monthly)", description: "Monthly BAS for July due.", category: ["sme"] },
    { date: "28 Aug", title: "Taxable Payments Annual Report (TPAR)", description: "TPAR due for businesses in building, cleaning, courier, IT, security, and road freight industries.", category: ["sme", "pty-ltd"] },
  ],
  9: [
    { date: "21 Sep", title: "August BAS (Monthly)", description: "Monthly BAS for August due.", category: ["sme"] },
  ],
  10: [
    { date: "21 Oct", title: "September BAS (Monthly)", description: "Monthly BAS for September due.", category: ["sme"] },
    { date: "28 Oct", title: "Q1 BAS (Quarterly)", description: "Quarterly BAS for July–September quarter due.", category: ["sme", "startup", "pty-ltd"] },
    { date: "28 Oct", title: "Super Guarantee Q1", description: "Superannuation guarantee for July–September quarter due.", category: ["employer"] },
    { date: "31 Oct", title: "Company Tax Return", description: "Company tax return for prior financial year due (if not using a tax agent extension).", category: ["pty-ltd"] },
  ],
  11: [
    { date: "21 Nov", title: "October BAS (Monthly)", description: "Monthly BAS for October due.", category: ["sme"] },
  ],
  12: [
    { date: "1 Dec", title: "ASIC Annual Review", description: "Check your ASIC annual review date. Failure to respond results in late fees and potential deregistration.", category: ["pty-ltd"] },
    { date: "21 Dec", title: "November BAS (Monthly)", description: "Monthly BAS for November due.", category: ["sme"] },
  ],
  1: [
    { date: "21 Jan", title: "December BAS (Monthly)", description: "Monthly BAS for December due.", category: ["sme"] },
    { date: "28 Jan", title: "Q2 BAS (Quarterly)", description: "Quarterly BAS for October–December quarter due.", category: ["sme", "startup", "pty-ltd"] },
    { date: "28 Jan", title: "Super Guarantee Q2", description: "Superannuation guarantee for October–December quarter due.", category: ["employer"] },
  ],
  2: [
    { date: "21 Feb", title: "January BAS (Monthly)", description: "Monthly BAS for January due.", category: ["sme"] },
    { date: "28 Feb", title: "Q2 PAYG Instalment", description: "PAYG instalment for October–December quarter due (if applicable).", category: ["pty-ltd"] },
  ],
  3: [
    { date: "21 Mar", title: "February BAS (Monthly)", description: "Monthly BAS for February due.", category: ["sme"] },
    { date: "21 Mar", title: "FBT Return Due", description: "Fringe Benefits Tax return and payment for the FBT year (1 April – 31 March) is due.", category: ["employer", "pty-ltd"] },
    { date: "31 Mar", title: "Tax Planning Review", description: "Final quarter to implement tax planning strategies before 30 June EOFY. Review deductions, asset write-offs, and super contributions.", category: ["sme", "startup", "pty-ltd"] },
  ],
  4: [
    { date: "21 Apr", title: "March BAS (Monthly)", description: "Monthly BAS for March due.", category: ["sme"] },
    { date: "28 Apr", title: "Q3 BAS (Quarterly)", description: "Quarterly BAS for January–March quarter due.", category: ["sme", "startup", "pty-ltd"] },
    { date: "28 Apr", title: "Super Guarantee Q3", description: "Superannuation guarantee for January–March quarter due.", category: ["employer"] },
    { date: "30 Apr", title: "R&D Tax Incentive", description: "R&D Tax Incentive registration with AusIndustry for the prior financial year must be lodged within 10 months of year end.", category: ["startup", "pty-ltd"] },
  ],
  5: [
    { date: "15 May", title: "Tax Agent Lodgement", description: "Tax agent lodgement program deadline for most company returns.", category: ["pty-ltd"] },
    { date: "21 May", title: "April BAS (Monthly)", description: "Monthly BAS for April due.", category: ["sme"] },
  ],
  6: [
    { date: "21 Jun", title: "May BAS (Monthly)", description: "Monthly BAS for May due.", category: ["sme"] },
    { date: "30 Jun", title: "End of Financial Year", description: "EOFY. Finalise all deductions, prepayments, asset write-offs, bad debt write-offs, and super contributions before midnight.", category: ["sme", "startup", "employer", "pty-ltd"] },
  ],
};

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const filters = [
  { id: "sme", label: "SME" },
  { id: "startup", label: "Startup" },
  { id: "employer", label: "Employer" },
  { id: "pty-ltd", label: "Pty Ltd Director" },
];

const TaxCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<TaxEvent | null>(null);

  const toggleFilter = (id: string) => {
    setActiveFilters((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
  };

  const monthEvents = (taxEvents[selectedMonth] || []).filter(
    (e) => activeFilters.length === 0 || e.category.some((c) => activeFilters.includes(c))
  );

  const prevMonth = () => setSelectedMonth((m) => (m === 1 ? 12 : m - 1));
  const nextMonth = () => setSelectedMonth((m) => (m === 12 ? 1 : m + 1));

  return (
    <PageLayout>
      {() => (
        <>
          {/* Hero */}
          <section className="pt-32 pb-16 gradient-navy">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">Interactive Calendar</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Tax Compliance Calendar
                </h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                  Every ATO deadline, superannuation due date, and compliance obligation mapped out for the Australian financial year.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Filters */}
          <section className="py-8 border-b border-border bg-light-bg">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="flex items-center gap-3 flex-wrap">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground mr-2">Filter:</span>
                {filters.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => toggleFilter(f.id)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      activeFilters.includes(f.id)
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-muted-foreground hover:border-primary"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
                {activeFilters.length > 0 && (
                  <button onClick={() => setActiveFilters([])} className="text-xs text-muted-foreground underline ml-2">
                    Clear
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Calendar */}
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-4xl">
              {/* Month Navigator */}
              <div className="flex items-center justify-between mb-12">
                <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                <h2 className="text-3xl font-bold text-foreground">{monthNames[selectedMonth - 1]}</h2>
                <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>
              </div>

              {/* Month Dots */}
              <div className="flex justify-center gap-2 mb-12">
                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMonth(m)}
                    className={`w-8 h-8 rounded-full text-xs font-medium transition-all ${
                      m === selectedMonth
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-primary/20"
                    }`}
                  >
                    {monthNames[m - 1].slice(0, 3)}
                  </button>
                ))}
              </div>

              {/* Events */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMonth}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {monthEvents.length === 0 ? (
                    <p className="text-center text-muted-foreground py-12">No deadlines this month for the selected filters.</p>
                  ) : (
                    monthEvents.map((event, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedEvent(event)}
                        className="w-full text-left bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-semibold text-primary mb-1">{event.date}</p>
                            <h3 className="font-semibold text-foreground">{event.title}</h3>
                          </div>
                          <div className="flex gap-1.5">
                            {event.category.map((c) => (
                              <span key={c} className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">{c}</span>
                            ))}
                          </div>
                        </div>
                      </button>
                    ))
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* Event Modal */}
          <AnimatePresence>
            {selectedEvent && (
              <>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedEvent(null)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl z-50 p-8"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm font-semibold text-primary">{selectedEvent.date}</p>
                      <h3 className="text-xl font-bold text-foreground">{selectedEvent.title}</h3>
                    </div>
                    <button onClick={() => setSelectedEvent(null)} className="p-1.5 rounded-lg hover:bg-muted">
                      <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{selectedEvent.description}</p>
                  <div className="flex gap-2 mb-6">
                    {selectedEvent.category.map((c) => (
                      <span key={c} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{c}</span>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Planning Review</a>
                  </Button>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* CTA */}
          <section className="py-16 bg-light-bg">
            <div className="container mx-auto px-6 max-w-xl text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Avoid Surprises</h2>
              <p className="text-muted-foreground mb-8">Let us manage your compliance calendar so nothing falls through the cracks.</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Planning Review</a>
              </Button>
            </div>
          </section>
        </>
      )}
    </PageLayout>
  );
};

export default TaxCalendar;
