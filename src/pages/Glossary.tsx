import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";

const terms = [
  { term: "BAS", definition: "Business Activity Statement. A form submitted to the ATO to report and pay GST, PAYG withholding, PAYG instalments, and other tax obligations." },
  { term: "IAS", definition: "Instalment Activity Statement. Used by businesses that don't need to report GST but still have PAYG withholding or instalment obligations." },
  { term: "STP", definition: "Single Touch Payroll. A reporting system that requires employers to report payroll information to the ATO each pay cycle." },
  { term: "GST", definition: "Goods and Services Tax. A 10% broad-based consumption tax on most goods, services, and other items sold or consumed in Australia." },
  { term: "PAYG", definition: "Pay As You Go. A system for making regular payments towards your expected income tax liability (instalments) and withholding tax from employee wages." },
  { term: "Superannuation", definition: "Compulsory retirement savings contributions made by employers on behalf of their employees. Currently 11.5% of ordinary time earnings." },
  { term: "R&D Tax Incentive", definition: "A government program providing a tax offset for eligible research and development activities conducted by Australian companies." },
  { term: "ASIC", definition: "Australian Securities and Investments Commission. The corporate regulator responsible for company registration and compliance." },
  { term: "ATO", definition: "Australian Taxation Office. The principal revenue collection agency of the Australian Government." },
  { term: "Burn Rate", definition: "The rate at which a company is spending its cash reserves, typically expressed as a monthly figure. Critical for startups and pre-profit businesses." },
  { term: "Cash Conversion Cycle", definition: "The time it takes for a business to convert its investments in inventory and other resources into cash from sales." },
  { term: "COGS", definition: "Cost of Goods Sold. The direct costs attributable to the production of goods or services sold by a company." },
  { term: "Debtor Days", definition: "The average number of days it takes to collect payment from customers after issuing an invoice." },
  { term: "EBITDA", definition: "Earnings Before Interest, Tax, Depreciation, and Amortisation. A measure of operating performance before capital structure and non-cash charges." },
  { term: "Fractional CFO", definition: "A part-time or contract Chief Financial Officer who provides senior financial leadership without the cost of a full-time executive hire." },
  { term: "Gross Margin", definition: "Revenue minus cost of goods sold, expressed as a percentage. Indicates how efficiently a business produces or delivers its products and services." },
  { term: "Net Margin", definition: "Net profit as a percentage of revenue. The bottom-line measure of business profitability after all expenses." },
  { term: "TPAR", definition: "Taxable Payments Annual Report. Required for businesses in certain industries to report payments made to contractors." },
  { term: "Working Capital", definition: "Current assets minus current liabilities. A measure of a company's short-term liquidity and ability to meet its obligations." },
  { term: "WIP", definition: "Work in Progress. The value of partially completed work that has not yet been billed or recognised as revenue." },
];

const Glossary = () => {
  const [search, setSearch] = useState("");
  const filtered = terms.filter(t => t.term.toLowerCase().includes(search.toLowerCase()) || t.definition.toLowerCase().includes(search.toLowerCase()));

  return (
    <PageLayout>
      {() => (
        <>
          <section className="pt-32 pb-16 bg-gradient-to-b from-navy to-navy/90">
            <div className="container mx-auto px-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Financial Glossary</h1>
                <p className="text-xl text-white/70">Plain-English definitions of common financial and compliance terms in Australia.</p>
              </motion.div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="relative mb-10">
                <Search className="w-5 h-5 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="space-y-4">
                {filtered.map((t, i) => (
                  <motion.div key={t.term} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.02 }} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-1">{t.term}</h3>
                    <p className="text-muted-foreground text-sm">{t.definition}</p>
                  </motion.div>
                ))}
                {filtered.length === 0 && <p className="text-muted-foreground text-center py-8">No terms found matching "{search}"</p>}
              </div>
            </div>
          </section>
        </>
      )}
    </PageLayout>
  );
};

export default Glossary;
