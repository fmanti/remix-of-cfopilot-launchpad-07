export interface InsightReport {
  slug: string;
  title: string;
  summary: string;
  publishedDate: string;
  quarter: string;
  keyFindings: string[];
  relatedSlugs: string[];
}

export const insightReports: InsightReport[] = [
  {
    slug: "q3-2025-sme-financial-conditions",
    title: "Q3 2025: SME Financial Conditions Under Pressure",
    summary: "Interest rate persistence, wage inflation, and tightening credit conditions are compressing margins across Australian SMEs. This quarterly review examines the operating environment through the lens of cash conversion, working capital adequacy, and cost structure resilience.",
    publishedDate: "2025-10-15",
    quarter: "Q3 2025",
    keyFindings: [
      "Average SME debtor days increased from 34 to 41 days — a 20% deterioration in collection speed",
      "Working capital ratios declined for the third consecutive quarter, with 38% of surveyed businesses reporting negative working capital",
      "Wage costs as a percentage of revenue increased by 2.4 percentage points year-on-year",
      "BAS penalty notices increased 15% compared to the same period last year",
    ],
    relatedSlugs: ["q4-2025-interest-rate-impact"],
  },
  {
    slug: "q4-2025-interest-rate-impact",
    title: "Q4 2025: Interest Rate Impact on SME Cash Reserves",
    summary: "With the RBA holding rates at elevated levels through Q4, Australian SMEs are depleting cash buffers faster than anticipated. This report analyses the downstream effects on capital expenditure deferral, hiring freezes, and the growing reliance on short-term credit facilities.",
    publishedDate: "2026-01-20",
    quarter: "Q4 2025",
    keyFindings: [
      "62% of SMEs with debt facilities reported increased interest costs exceeding $20k annually",
      "Capital expenditure was deferred by 45% of businesses surveyed — the highest rate in three years",
      "Cash reserves fell below 2 months of operating expenses for 1 in 3 SMEs",
      "Businesses with structured CFO oversight were 3.2x more likely to maintain positive working capital",
    ],
    relatedSlugs: ["q3-2025-sme-financial-conditions", "q1-2026-wage-inflation-margin-impact"],
  },
  {
    slug: "q1-2026-wage-inflation-margin-impact",
    title: "Q1 2026: Wage Inflation and Its Margin Impact",
    summary: "Labour costs continue to rise faster than revenue growth for most Australian SMEs. This report examines which industries are most affected, the impact on EBITDA margins, and the strategies businesses are deploying to protect profitability without sacrificing capability.",
    publishedDate: "2026-04-10",
    quarter: "Q1 2026",
    keyFindings: [
      "Average wage growth across SME workforces reached 4.8% — outpacing revenue growth of 3.1%",
      "Professional services firms reported the highest margin compression at 3.7 percentage points",
      "Businesses that adjusted pricing within 90 days of cost increases maintained margins within 1% of target",
      "Automation investment correlated with 2.1 percentage points higher EBITDA margin retention",
    ],
    relatedSlugs: ["q4-2025-interest-rate-impact"],
  },
];

export const getInsightBySlug = (slug: string) => insightReports.find((r) => r.slug === slug);

export const getRelatedInsights = (report: InsightReport) =>
  report.relatedSlugs.map((s) => insightReports.find((r) => r.slug === s)).filter(Boolean) as InsightReport[];
