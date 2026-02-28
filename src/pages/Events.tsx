import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const upcoming = [
  {
    title: "CFO Roundtable: Managing Cash in a High-Rate Environment",
    date: "March 2026",
    location: "Sydney CBD (Invite Only)",
    description: "An intimate session for founders and finance leaders navigating working capital pressure, debt management, and cash flow forecasting in the current rate environment.",
  },
  {
    title: "Quarterly SME Financial Health Check — Webinar",
    date: "April 2026",
    location: "Online",
    description: "A 45-minute briefing on the key financial trends affecting Australian SMEs this quarter, with practical steps you can take now.",
  },
];

const past = [
  {
    title: "R&D Tax Incentive: Getting Your Claim Right",
    date: "November 2025",
    summary: "Covered common documentation failures, AusIndustry compliance expectations, and how to structure R&D activities for maximum eligible claim value.",
    serviceLink: { label: "R&D Tax Incentive", href: "/services/rd-tax-incentive" },
  },
  {
    title: "From Founder to Financial Leader: Building a Finance Function",
    date: "September 2025",
    summary: "Explored when and how to transition from founder-managed finances to a structured finance function — bookkeeping, controller, and CFO layers.",
    serviceLink: { label: "CFO Services", href: "/services/cfo" },
  },
  {
    title: "BAS & Compliance Bootcamp for Small Businesses",
    date: "July 2025",
    summary: "A practical walkthrough of BAS, IAS, STP, and superannuation obligations for Australian small businesses — common mistakes and how to avoid them.",
    serviceLink: { label: "Bookkeeping", href: "/services/bookkeeping" },
  },
];

const Events = () => (
  <PageLayout>
    {({ openContact }) => (
      <>
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy/90">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Events</h1>
              <p className="text-xl text-white/70">Roundtables, webinars, and briefings for Australian business leaders.</p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-foreground mb-10">Upcoming Events</h2>
            <div className="space-y-6">
              {upcoming.map((e, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">{e.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{e.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{e.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{e.description}</p>
                  <Button onClick={openContact} size="sm">Register Interest <ArrowRight className="w-3 h-3 ml-1" /></Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-foreground mb-10">Past Events</h2>
            <div className="space-y-6">
              {past.map((e, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{e.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{e.title}</h3>
                  <p className="text-muted-foreground mb-4">{e.summary}</p>
                  <Link to={e.serviceLink.href} className="text-sm text-primary hover:underline">{e.serviceLink.label} →</Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </>
    )}
  </PageLayout>
);

export default Events;
