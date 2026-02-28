import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { blogArticles, getArticleBySlug, getRelatedArticles, getCategoryLabel } from "@/data/blogArticles";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/frank-manti";

// Full article content keyed by slug
const articleContent: Record<string, string[]> = {
  "why-growing-revenue-can-strangle-cashflow": [
    "Every founder wants to grow revenue. It's the metric that validates the business model, attracts investors, and keeps the team motivated. But revenue growth without matching working capital discipline is one of the most dangerous financial states a business can be in.",
    "The mechanics are straightforward. As revenue grows, so do receivables — the money customers owe you. If your payment terms are 30 days but your suppliers require payment in 14, you're funding the gap from your own cash reserves. The faster you grow, the wider that gap becomes.",
    "This is the cash conversion cycle at work. A business can be profitable on paper — strong margins, growing top line, solid pipeline — and still run out of cash. It's not a theoretical risk. It's one of the top three reasons Australian SMEs fail.",
    "## The Working Capital Trap",
    "Consider a services business generating $200k per month in revenue with 45-day debtor terms. At any given time, approximately $300k is sitting in receivables. If revenue doubles to $400k per month, receivables jump to $600k — that's $300k in additional working capital you need to fund, usually from reserves or debt.",
    "Meanwhile, your costs — salaries, rent, SaaS subscriptions, super — don't wait for your clients to pay. They hit your bank account on schedule, every month.",
    "## What Smart Operators Do Differently",
    "The businesses that grow without cash crises do three things consistently. First, they forecast cash — not just revenue. They model debtor days, creditor days, and the timing of BAS payments. Second, they tighten collections early. Before a growth phase, they negotiate better payment terms, implement automated invoicing, and enforce follow-up processes. Third, they build a cash buffer before they need it — not after.",
    "A 13-week rolling cashflow forecast is the single most valuable tool for managing growth-stage cash. It forces you to confront the timing mismatch between when revenue is earned and when cash arrives.",
    "## The BAS and Super Timing Problem",
    "Australian businesses face an additional complication: GST and superannuation timing. GST collected on invoices must be remitted to the ATO regardless of whether your client has paid. If you're on quarterly BAS, you could owe GST on $600k of invoiced revenue while sitting on $300k of outstanding receivables. Superannuation guarantee payments are due 28 days after quarter end — another fixed cash outflow that doesn't care about your debtor days.",
    "## The Bottom Line",
    "Revenue growth is not inherently good or bad for cashflow. It depends entirely on how well you manage the working capital cycle. The businesses that scale successfully are the ones that treat cash management with the same discipline they apply to sales.",
    "If your revenue is growing but your bank balance isn't keeping pace, the problem is almost certainly in your cash conversion cycle. And the fix starts with visibility.",
  ],
  "rd-tax-incentive-what-founders-get-wrong": [
    "The R&D Tax Incentive is one of the most generous innovation support programs in the developed world. For eligible companies with turnover under $20 million, it provides a 43.5% refundable tax offset — effectively returning 43.5 cents of every eligible R&D dollar spent. For larger companies, it provides a non-refundable offset above the company tax rate.",
    "Despite its value, most founders either miss out entirely or significantly under-claim. Here's why — and how to fix it.",
    "## The Eligibility Threshold Most Founders Miss",
    "The R&D Tax Incentive requires activities to meet two core criteria: they must involve 'core R&D activities' that generate new knowledge where the outcome cannot be known in advance, and they must be conducted in a systematic, investigative manner. Many founders assume software development automatically qualifies. It doesn't. Writing code to build a known feature using established methods is not R&D. Developing a novel algorithm, testing an unproven architecture, or solving a technical problem where the solution isn't determinable in advance — that's where eligibility begins.",
    "## Registration Timing",
    "You must register your R&D activities with AusIndustry within 10 months of the end of the financial year in which the activities were conducted. Miss this deadline and you lose the claim entirely. No extensions. No exceptions. For a 30 June year-end, the registration deadline is effectively 30 April of the following year.",
    "## Documentation Failures",
    "The ATO and AusIndustry expect contemporaneous records — documentation created at the time the R&D was being conducted, not retrospectively assembled at claim time. This includes experiment logs, hypothesis records, test results, technical meeting notes, and time allocation records. The most common audit finding is insufficient contemporaneous documentation.",
    "## Overclaiming and Underclaiming",
    "Overclaiming — including ineligible activities or inflating costs — triggers ATO review and can result in penalties, repayment obligations, and being flagged for future scrutiny. Underclaiming is equally costly but invisible. Many businesses fail to capture supporting activities (activities directly related to core R&D), prototype costs, contractor time, and overhead allocations that are legitimately claimable.",
    "## How to Structure Your Claim Properly",
    "Work with a specialist R&D tax adviser — not just your regular accountant. Establish documentation practices at the start of each project, not at year-end. Maintain clear separation between R&D and business-as-usual development in your project management tools. Track time allocation rigorously, ideally at the task level.",
    "The R&D Tax Incentive can return hundreds of thousands of dollars to eligible businesses. But only if the claim is structured correctly from the outset.",
  ],
  "forecasting-vs-budgeting": [
    "In most board meetings we've attended, the terms 'budget' and 'forecast' are used interchangeably. They shouldn't be. They serve fundamentally different purposes, and conflating them leads to poor financial governance.",
    "## What a Budget Is",
    "A budget is a plan. It sets targets for revenue, expenses, and capital allocation over a defined period — usually 12 months. It reflects strategic intent: where you choose to invest, what growth you're targeting, and what costs you're willing to accept. A budget is set at the beginning of the period and should remain relatively stable. It's the benchmark against which actual performance is measured.",
    "## What a Forecast Is",
    "A forecast is a prediction. It uses current data, trends, and assumptions to project what will actually happen. Unlike a budget, a forecast should be updated regularly — monthly or quarterly — to reflect changing conditions. A forecast answers the question: 'Given what we know now, where are we likely to end up?'",
    "## Why the Distinction Matters",
    "When a board receives a single set of numbers that serves as both budget and forecast, two problems emerge. First, the budget loses its value as a target — because it keeps moving. Second, the forecast loses credibility — because it's anchored to assumptions that may be months old.",
    "The proper approach is to maintain both: a fixed budget that sets the bar, and a rolling forecast that tells you whether you're likely to clear it. The gap between the two is where the conversation should focus.",
    "## Building a Useful Reporting Cadence",
    "Monthly: Produce a management report that shows actuals vs budget and actuals vs latest forecast. Highlight material variances and explain the drivers. Quarterly: Reforecast the remaining period. Update revenue assumptions based on pipeline data. Adjust cost projections for known changes. Half-yearly: Conduct a formal budget review. Determine whether the original targets remain relevant or need resetting.",
    "## The Board Meeting Test",
    "If your board spends time debating why the forecast changed rather than discussing what to do about performance gaps, your reporting structure needs work. The budget provides the standard. The forecast provides the reality. The leadership team's job is to close the gap between them.",
  ],
  "five-signs-your-business-has-outgrown-its-bookkeeper": [
    "Bookkeepers are essential. Every business needs accurate transaction recording, reconciliation, and compliance preparation. But there's a point where the finance function needs to evolve beyond bookkeeping — and most founders don't recognise it until the problems are already compounding.",
    "## Sign 1: Your Monthly Reports Are Late",
    "If you're receiving your P&L and balance sheet more than 10 business days after month-end, your bookkeeping function isn't keeping pace with your business complexity. Late reports mean late decisions. And in a fast-moving business, even a two-week delay can mean missed opportunities or undetected problems.",
    "## Sign 2: You Can't Get a Cash Flow Forecast",
    "A bookkeeper records what has happened. A CFO-level function predicts what will happen. If nobody in your finance function can produce a 13-week cash flow forecast, you're operating blind. Cash flow forecasting is the single most important forward-looking financial tool for any SME.",
    "## Sign 3: BAS Preparation Is Reactive",
    "If BAS preparation happens in a rush every quarter — with last-minute reconciliations, missing invoices, and uncertain classifications — your bookkeeping discipline has gaps. A well-run finance function prepares for BAS continuously, not quarterly.",
    "## Sign 4: You're Making Decisions Without Financial Context",
    "Should you hire? Can you afford that lease? Is this client profitable? If your bookkeeper can't answer these questions — or if you're not asking them because you know the data isn't there — you've outgrown the function.",
    "## Sign 5: Your Accountant Keeps Finding Errors",
    "If your year-end accountant regularly identifies misclassifications, incorrect GST treatment, or reconciliation gaps, it's not just a quality issue — it's a structural one. Your finance function needs a layer of review and oversight that pure bookkeeping doesn't provide.",
    "## What to Do About It",
    "Outgrowing your bookkeeper doesn't mean replacing them. It means adding a layer of financial leadership — someone who can interpret the numbers, build forecasts, advise on decisions, and ensure governance standards are maintained. That's what a fractional CFO does.",
  ],
  "bas-lodgement-mistakes-that-cost-real-money": [
    "BAS lodgement is one of the most routine compliance obligations for Australian businesses — and one of the most commonly mismanaged. The penalties for late or incorrect lodgement are real, and the downstream effects on cash flow forecasting can be significant.",
    "## Mistake 1: Late Lodgement",
    "The ATO applies a Failure to Lodge (FTL) penalty of one penalty unit ($313 as at 2025–26) for each 28-day period the BAS is overdue, up to a maximum of five penalty units per statement. For a business that lodges quarterly, four late BAS statements in a year can result in penalties exceeding $6,000 — before interest charges.",
    "## Mistake 2: Incorrect GST Classification",
    "GST-free items classified as taxable (or vice versa) create errors that compound over time. Common examples include incorrectly treating exported services as domestic (and charging GST), failing to apportion GST on mixed-use assets, and misclassifying capital purchases.",
    "## Mistake 3: PAYG Withholding Errors",
    "If you're withholding tax from employee wages, the amount reported on BAS must match your payroll records exactly. Discrepancies between BAS-reported PAYG and STP-reported PAYG will trigger ATO data-matching alerts.",
    "## Mistake 4: Missing IAS Obligations",
    "Businesses required to lodge monthly Instalment Activity Statements (IAS) sometimes miss the obligation entirely — particularly if they're accustomed to quarterly BAS lodgement. The ATO determines IAS frequency based on your withholding amount, and the obligation can change without explicit notification.",
    "## Mistake 5: Not Provisioning for BAS Payments",
    "Perhaps the most costly mistake isn't a lodgement error at all — it's failing to provision for the BAS payment. GST collected is not your money. PAYG withheld is not your money. If you're spending it and scrambling to pay the ATO at quarter-end, you have a cash management problem that no amount of bookkeeping accuracy will fix.",
    "## The Fix",
    "Set up a dedicated BAS savings account. Transfer GST and PAYG withholding amounts weekly. Reconcile monthly — not quarterly. And build BAS payments into your 13-week cash flow forecast as a fixed outflow.",
  ],
  "founder-super-strategies": [
    "Most founders treat superannuation as a compliance cost — the 11% they're obligated to pay on salary. But for founder-operators of Pty Ltd entities, super is one of the most powerful tax planning levers available.",
    "## The Concessional Contribution Cap",
    "As at 2025–26, the concessional contributions cap is $30,000 per person per year. Concessional contributions — including employer super guarantee, salary sacrifice, and personal deductible contributions — are taxed at just 15% inside super. For a founder on a marginal tax rate of 47% (including Medicare levy), redirecting $19,000 in additional salary to super saves approximately $6,080 in tax annually.",
    "## Carry-Forward Unused Amounts",
    "If your total super balance is below $500,000, you can carry forward unused concessional contribution amounts from the previous five years. This is particularly valuable for founders who paid themselves minimal super in the early years. A founder with four years of unused cap space could contribute up to $120,000 in a single year at the concessional tax rate.",
    "## Salary vs Dividend vs Super: The Optimisation Framework",
    "The optimal compensation structure for a founder depends on several variables: company profitability, personal marginal tax rate, existing super balance, and cash flow requirements. The general framework is: pay enough salary to cover personal expenses and maximise concessional super contributions. Draw dividends to utilise franking credits efficiently. Retain surplus earnings in the company if the corporate tax rate (25% for base rate entities) is lower than your personal marginal rate.",
    "## Division 7A Interaction",
    "Any amounts drawn from the company that aren't classified as salary, dividends, or compliant Division 7A loans will be treated as unfranked dividends by the ATO. This includes informal 'director's drawings' that aren't properly documented. The tax consequences are severe: the full amount is assessable as income with no franking credit offset.",
    "## The Personal Services Income (PSI) Trap",
    "If more than 80% of your company's income comes from a single client, PSI rules may apply — limiting the deductions available to the company and potentially attributing income directly to you. This affects how much you can retain in the company and the effectiveness of salary/dividend splitting strategies.",
    "## Getting It Right",
    "Founder compensation structuring is not a set-and-forget exercise. It should be reviewed annually as part of your tax planning process — ideally in the March–May window before EOFY. The difference between an optimised structure and an ad hoc approach can easily exceed $20,000 per year in after-tax outcomes.",
  ],
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <PageLayout>
        {() => (
          <section className="pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-3xl text-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
              <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
            </div>
          </section>
        )}
      </PageLayout>
    );
  }

  const related = getRelatedArticles(article);
  const content = articleContent[article.slug] || [];

  return (
    <PageLayout>
      {() => (
        <>
          {/* Header */}
          <section className="pt-32 pb-12 gradient-navy">
            <div className="container mx-auto px-6 max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Link to="/blog" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-6">
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
                </Link>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">{getCategoryLabel(article.category)}</span>
                  <span className="text-xs text-white/50 flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                  <span className="text-xs text-white/50">{new Date(article.publishedDate).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{article.title}</h1>
              </motion.div>
            </div>
          </section>

          {/* Article Body */}
          <section className="py-16">
            <div className="container mx-auto px-6 max-w-3xl">
              <div className="prose prose-lg max-w-none">
                {content.map((paragraph, i) => {
                  if (paragraph.startsWith("## ")) {
                    return <h2 key={i} className="text-xl font-bold text-foreground mt-10 mb-4">{paragraph.replace("## ", "")}</h2>;
                  }
                  return <p key={i} className="text-muted-foreground leading-relaxed mb-6">{paragraph}</p>;
                })}
              </div>

              {/* Mid-article CTA */}
              {content.length > 4 && (
                <div className="my-12 bg-light-bg border border-border rounded-xl p-8 text-center">
                  <p className="text-foreground font-semibold mb-2">Need structured financial advice?</p>
                  <p className="text-sm text-muted-foreground mb-4">We help Australian founders and operators build financial clarity.</p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Confidential Conversation</a>
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* Related Articles */}
          {related.length > 0 && (
            <section className="py-16 bg-light-bg">
              <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-xl font-bold text-foreground mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {related.slice(0, 3).map((r) => (
                    <Link key={r.slug} to={`/blog/${r.slug}`} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors group">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{getCategoryLabel(r.category)}</span>
                      <h3 className="font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors text-sm">{r.title}</h3>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {r.readTime}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Bottom CTA */}
          <section className="py-16">
            <div className="container mx-auto px-6 max-w-xl text-center">
              <h2 className="text-xl font-bold text-foreground mb-4">Strengthen Your Financial Foundation</h2>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </section>
        </>
      )}
    </PageLayout>
  );
};

export default BlogPost;
