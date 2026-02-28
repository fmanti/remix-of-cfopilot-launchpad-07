import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FileText, Download, CheckCircle, BookOpen } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/frank-manti";
const NOTIFY_EMAIL = "info@cfopilot.com.au";

const guidePages = [
  {
    title: "Foundations",
    items: ["Bookkeeping cadence and reconciliation discipline", "Chart of accounts structure aligned to reporting needs", "Separation of duties for payment approvals", "Director oversight and governance checkpoints"],
  },
  {
    title: "Payroll & Compliance",
    items: ["Payroll tax thresholds and state-level variations", "Superannuation guarantee obligations and deadlines", "BAS & IAS lodgement cycles", "PAYG withholding and STP finalisation"],
  },
  {
    title: "Cashflow & Reporting",
    items: ["Monthly reporting pack structure", "13-week cashflow forecasting", "Aged receivables review cadence", "Working capital tracking and benchmarks"],
  },
  {
    title: "Systems & Automation",
    items: ["Xero / MYOB configuration best practices", "Document management and filing discipline", "Invoice automation and approval workflows", "Integration architecture for growing businesses"],
  },
];

function generateGuideBlob(): Blob {
  const content = `
THE CFO PILOT BACK OFFICE BLUEPRINT
====================================
A practical guide to structuring bookkeeping, payroll, BAS and reporting properly.

CFO Pilot – Everco Pty Ltd ABN 48 650 061
https://cfopilot.com.au

────────────────────────────────────

PAGE 1 — FOUNDATIONS

1. BOOKKEEPING CADENCE & RECONCILIATION DISCIPLINE

Weekly:
• Reconcile all bank accounts and credit cards
• Review and categorise transactions in Xero/MYOB
• Process supplier invoices and match to purchase orders
• Review outstanding customer invoices and follow up on overdue amounts

Monthly:
• Complete month-end close by the 10th business day
• Reconcile all balance sheet accounts (loans, GST clearing, PAYG clearing, super clearing)
• Prepare management reports: Profit & Loss, Balance Sheet, Cashflow Statement
• Review aged receivables and aged payables reports

Quarterly:
• BAS preparation and lodgement
• Superannuation payment and reconciliation
• Review chart of accounts for accuracy and relevance

Annually:
• Year-end adjustments and accruals
• Prepare tax-ready financials
• ASIC annual statement lodgement
• Stocktake (if applicable)

2. CHART OF ACCOUNTS STRUCTURE

Your chart of accounts should be structured to support the reports you need to make decisions:

Revenue: Break down by product line, service type, or business unit
Cost of Sales: Direct costs aligned to revenue categories
Operating Expenses: Grouped by function (People, Marketing, Technology, Occupancy, Admin)
Balance Sheet: Clear separation of current/non-current assets and liabilities

Key principles:
• Don't over-complicate — 40–60 accounts is sufficient for most SMEs under $5m
• Use tracking categories in Xero for department/project analysis rather than creating new accounts
• Ensure GST codes are correctly mapped to each account
• Review quarterly and archive unused accounts

3. SEPARATION OF DUTIES

For businesses with 2+ finance team members:
• The person who raises invoices should not be the person who processes payments
• Bank reconciliation should be reviewed by someone other than the person entering transactions
• Payroll preparation and payroll approval should be separated
• Petty cash should have a custodian and an auditor

For sole operators:
• Implement dual authorisation on payments above a threshold ($5,000 recommended)
• Director to review bank reconciliation monthly
• Use automated payment files from accounting software rather than manual payments

4. DIRECTOR OVERSIGHT & GOVERNANCE

Monthly director review checklist:
☐ Review Profit & Loss statement — are we on budget?
☐ Review Balance Sheet — are liabilities correct and current?
☐ Review bank reconciliation — does the balance match?
☐ Review aged receivables — are any debts at risk?
☐ Review cashflow forecast — can we meet obligations for the next 13 weeks?
☐ Review upcoming tax obligations (BAS, super, PAYG)
☐ Sign off on monthly financial pack

────────────────────────────────────

PAGE 2 — PAYROLL & COMPLIANCE

1. PAYROLL TAX THRESHOLDS

Payroll tax is a state-level obligation triggered when total Australian wages exceed the threshold:
• NSW: $1,200,000 (rate: 4.85%)
• VIC: $900,000 (rate: 4.85%)
• QLD: $1,300,000 (rate: 4.75%)
• WA: $1,000,000 (rate: 5.5%)
• SA: $1,500,000 (rate: 4.95%)

Key considerations:
• Contractor payments may be deemed wages for payroll tax purposes
• Related entity grouping provisions can aggregate wages across companies
• Monthly or annual lodgement depends on state and wage level
• Register before the threshold is reached to avoid penalties

2. SUPERANNUATION GUARANTEE OBLIGATIONS

Current rate: 11% (increasing to 11.5% from 1 July 2025, 12% from 1 July 2026)

Payment deadlines:
• Q1 (Jul–Sep): Due 28 October
• Q2 (Oct–Dec): Due 28 January
• Q3 (Jan–Mar): Due 28 April
• Q4 (Apr–Jun): Due 28 July

Failure to pay by the deadline triggers the Superannuation Guarantee Charge (SGC):
• The full amount of the shortfall (not tax-deductible)
• Nominal interest of 10% per annum
• An administration fee of $20 per employee per quarter

3. BAS & IAS LODGEMENT CYCLES

Quarterly BAS (most SMEs):
• Q1: Due 28 October
• Q2: Due 28 February
• Q3: Due 28 April
• Q4: Due 28 July (if using a tax agent: 25 August)

Monthly IAS (if annual PAYG withholding exceeds $25,000):
• Due 21st of the following month

What to report:
• GST collected and GST paid
• PAYG withholding
• PAYG instalments (if applicable)
• FBT instalments (if applicable)

4. PAYG WITHHOLDING & STP FINALISATION

• Withhold tax from employee wages per ATO tax tables
• Report via Single Touch Payroll (STP) with each pay run
• STP Finalisation due 14 July each year
• Ensure BAS PAYG withholding matches STP reported totals
• Discrepancies trigger ATO data-matching alerts

────────────────────────────────────

PAGE 3 — CASHFLOW & REPORTING

1. MONTHLY REPORTING PACK

Your minimum monthly reporting pack should include:
• Profit & Loss — actual vs budget, with variance commentary
• Balance Sheet — with month-on-month movement
• Cashflow Statement — operating, investing, financing
• Aged Receivables Summary
• Aged Payables Summary
• Key metrics dashboard (gross margin, net margin, cash position)

Delivery: By the 10th business day of the following month.

2. 13-WEEK CASHFLOW FORECASTING

The most important forward-looking financial tool for any SME.

Structure:
Week 1–4: Use known commitments (payroll, rent, scheduled payments, confirmed receipts)
Week 5–8: Use expected commitments based on pipeline and recurring patterns
Week 9–13: Use assumptions and scenario modelling

Update frequency: Weekly
Review frequency: Fortnightly with management, monthly with board/directors

Key inclusions:
• Opening cash balance
• Customer receipts (based on debtor days, not invoiced revenue)
• Supplier payments
• Payroll and super
• Tax obligations (BAS, PAYG, payroll tax)
• Loan repayments
• Capital expenditure
• Closing cash balance

3. AGED RECEIVABLES REVIEW

Review cadence: Weekly
Follow-up triggers:
• 7 days overdue: Automated reminder
• 14 days overdue: Phone call from accounts team
• 30 days overdue: Escalation to relationship manager
• 60 days overdue: Formal demand / payment plan discussion
• 90 days overdue: Debt recovery consideration

Target debtor days: Under 35 for services, under 45 for construction/manufacturing.

4. WORKING CAPITAL TRACKING

Working Capital = Current Assets − Current Liabilities

Track monthly. A declining trend over 3+ months requires investigation.

Key ratios:
• Current Ratio: Current Assets ÷ Current Liabilities (target: >1.5)
• Quick Ratio: (Current Assets − Inventory) ÷ Current Liabilities (target: >1.0)
• Cash Conversion Cycle: Debtor Days + Inventory Days − Creditor Days

────────────────────────────────────

PAGE 4 — SYSTEMS & AUTOMATION

1. XERO / MYOB CONFIGURATION

Setup checklist:
☐ Chart of accounts aligned to reporting requirements
☐ GST codes correctly mapped
☐ Bank feeds connected and categorisation rules established
☐ Tracking categories configured (department, project, location)
☐ Invoice templates branded and compliant (ABN, GST status, payment terms)
☐ Payment services connected (Stripe, GoCardless, etc.)
☐ Payroll module configured with correct award rates and super funds

Best practices:
• Lock periods monthly after reconciliation
• Use approval workflows for bills over threshold amounts
• Set up recurring invoices for retainer clients
• Enable two-factor authentication for all users

2. DOCUMENT MANAGEMENT

Filing structure:
/Finance
  /Bank Statements
  /BAS Lodgements
  /Invoices Issued
  /Invoices Received
  /Payroll
  /Superannuation
  /Tax Returns
  /Board Papers

Naming convention: YYYY-MM-DD_DocumentType_Description
Example: 2026-01-15_Invoice_ClientName_INV001

Retention periods:
• Financial records: 7 years (ATO requirement)
• Employee records: 7 years after termination
• Tax records: 5 years from lodgement date

3. INVOICE AUTOMATION

Implement:
• Automated invoice generation from CRM or project management tools
• Scheduled invoice delivery (e.g., 1st of month for retainers)
• Automated payment reminders at 7, 14, and 30 days
• Online payment links on all invoices (reduce debtor days by 5–10 days)
• Receipt matching using Hubdoc, Dext, or built-in Xero capture

4. APPROVAL WORKFLOWS

Recommended thresholds:
• Under $1,000: No approval required (auto-categorised)
• $1,000–$5,000: Single approver (finance manager or director)
• $5,000–$20,000: Dual approval (two directors or director + CFO)
• Over $20,000: Board or management committee approval

Digital approval tools: Xero approval workflow, ApprovalMax, or similar

Integration architecture for growing businesses:
CRM → Invoicing → Accounting → Reporting → Board Pack
       ↓              ↓
  Payment Gateway   Bank Feeds
       ↓              ↓
  Auto-reconciliation

────────────────────────────────────

ABOUT CFO PILOT

CFO Pilot provides fractional CFO, bookkeeping, and operational support 
for Australian SMEs and startups.

Website: cfopilot.com.au
Email: info@cfopilot.com.au
Booking: calendly.com/frank-manti

© Everco Pty Ltd ABN 48 650 061. All rights reserved.

This guide is for general information purposes only and does not constitute 
financial, tax, or legal advice. CFO Pilot is not a registered tax agent 
or public accounting firm. Always consult qualified professionals for 
advice specific to your circumstances.
`;

  return new Blob([content], { type: "text/plain" });
}

const BackOfficeGuide = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", title: "", revenueBand: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.title || !form.revenueBand) {
      toast({ title: "Please complete all fields", variant: "destructive" });
      return;
    }
    console.log("Lead captured:", form, "Notify:", NOTIFY_EMAIL);
    toast({ title: "Guide ready for download", description: "Your guide is ready below." });
    setSubmitted(true);
  };

  const handleDownload = () => {
    const blob = generateGuideBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CFO_Pilot_Back_Office_Blueprint.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <PageLayout>
      {() => (
        <>
          <section className="pt-32 pb-16 gradient-navy">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">Gated Guide</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Build a Back Office That Runs Without You.
                </h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                  A practical 4-page guide to structuring bookkeeping, payroll, BAS and reporting properly.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="grid lg:grid-cols-2 gap-16">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-bold text-foreground mb-8">What's Inside</h2>
                  <div className="space-y-8">
                    {guidePages.map((page, i) => (
                      <div key={page.title} className="border-l-2 border-primary pl-6">
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <h3 className="font-semibold text-foreground">Page {i + 1} — {page.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {page.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  {!submitted ? (
                    <div className="bg-card border border-border rounded-2xl p-8 sticky top-32">
                      <h2 className="text-xl font-bold text-foreground mb-2">Download the Guide</h2>
                      <p className="text-sm text-muted-foreground mb-6">Complete the form below to access The CFO Pilot Back Office Blueprint.</p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label>Full Name *</Label>
                          <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <Label>Email Address *</Label>
                          <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
                        </div>
                        <div className="space-y-2">
                          <Label>Job Title *</Label>
                          <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Founder, CFO, Operations Manager" />
                        </div>
                        <div className="space-y-2">
                          <Label>Business Revenue Band *</Label>
                          <Select value={form.revenueBand} onValueChange={(v) => setForm({ ...form, revenueBand: v })}>
                            <SelectTrigger><SelectValue placeholder="Select revenue band" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pre-revenue">Pre-revenue</SelectItem>
                              <SelectItem value="0-500k">$0 – $500k</SelectItem>
                              <SelectItem value="500k-1m">$500k – $1m</SelectItem>
                              <SelectItem value="1m-5m">$1m – $5m</SelectItem>
                              <SelectItem value="5m+">$5m+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6">
                          Download the Guide
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          By submitting you agree to receive communications from Everco Pty Ltd (ABN 48 650 061).
                        </p>
                      </form>
                    </div>
                  ) : (
                    <div className="bg-card border border-border rounded-2xl p-8 text-center sticky top-32">
                      <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h2 className="text-xl font-bold text-foreground mb-2">Your Guide Is Ready</h2>
                      <p className="text-muted-foreground mb-6">Click below to download The CFO Pilot Back Office Blueprint.</p>
                      <Button size="lg" onClick={handleDownload} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mb-4">
                        <Download className="w-4 h-4 mr-2" /> Download Guide
                      </Button>
                      <div className="border-t border-border pt-4 mt-4">
                        <p className="text-sm text-muted-foreground mb-3">Want to discuss your back office structure?</p>
                        <Button variant="outline" asChild>
                          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Confidential Conversation</a>
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-4">CFO Pilot – Everco Pty Ltd ABN 48 650 061</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        </>
      )}
    </PageLayout>
  );
};

export default BackOfficeGuide;
