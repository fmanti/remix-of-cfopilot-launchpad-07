import { Link } from "react-router-dom";

export interface BlogArticle {
  slug: string;
  title: string;
  summary: string;
  category: "cashflow" | "governance" | "growth" | "compliance" | "funding";
  readTime: string;
  publishedDate: string;
  relatedSlugs: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "why-growing-revenue-can-strangle-cashflow",
    title: "Why Growing Revenue Can Strangle Cashflow",
    summary: "Revenue growth is the goal every founder chases — but without matching working capital discipline, faster growth can accelerate cash problems rather than solve them. This article breaks down the mechanics of growth-driven cash strain, from debtor days blowouts to inventory build-ups, and explains why profitable businesses still run out of money.",
    category: "cashflow",
    readTime: "7 min",
    publishedDate: "2026-01-15",
    relatedSlugs: ["forecasting-vs-budgeting", "working-capital-tightening-what-sme-leaders-need-to-know"],
  },
  {
    slug: "rd-tax-incentive-what-founders-get-wrong",
    title: "R&D Tax Incentive: What Founders Get Wrong",
    summary: "The R&D Tax Incentive is one of the most valuable programs available to Australian innovators — but most founders either under-claim, mis-classify activities, or miss the registration deadline entirely. We break down the eligibility criteria, the common mistakes in documentation, and how to structure your claim for maximum benefit without triggering an ATO review.",
    category: "funding",
    readTime: "9 min",
    publishedDate: "2026-01-28",
    relatedSlugs: ["why-growing-revenue-can-strangle-cashflow", "founder-super-strategies"],
  },
  {
    slug: "forecasting-vs-budgeting",
    title: "Forecasting vs Budgeting: Why Most Boards Confuse Them",
    summary: "A budget sets targets. A forecast predicts outcomes. Most leadership teams treat them as the same thing, which leads to outdated budgets, unreliable forecasts, and board meetings that waste everyone's time. This article explains the difference, when to use each, and how to build a reporting cadence that actually drives decisions.",
    category: "governance",
    readTime: "8 min",
    publishedDate: "2026-02-05",
    relatedSlugs: ["why-growing-revenue-can-strangle-cashflow", "five-signs-your-business-has-outgrown-its-bookkeeper"],
  },
  {
    slug: "five-signs-your-business-has-outgrown-its-bookkeeper",
    title: "Five Signs Your Business Has Outgrown Its Bookkeeper",
    summary: "There's nothing wrong with a bookkeeper — until there is. This article identifies the five clear signals that your finance function needs to evolve: from delayed reporting and reconciliation backlogs to the inability to produce a cash flow forecast. If your bookkeeper can't answer strategic questions, it's time for a different conversation.",
    category: "growth",
    readTime: "6 min",
    publishedDate: "2026-02-12",
    relatedSlugs: ["forecasting-vs-budgeting", "bas-lodgement-mistakes-that-cost-real-money"],
  },
  {
    slug: "bas-lodgement-mistakes-that-cost-real-money",
    title: "BAS Lodgement Mistakes That Cost Real Money",
    summary: "Late or incorrect BAS lodgements result in penalties, interest charges, and — in serious cases — director liability. We cover the most common BAS errors we see across Australian SMEs: from misclassified GST to missed IAS obligations, incorrect PAYG withholding, and the downstream effects on cashflow forecasting.",
    category: "compliance",
    readTime: "7 min",
    publishedDate: "2026-02-19",
    relatedSlugs: ["five-signs-your-business-has-outgrown-its-bookkeeper", "founder-super-strategies"],
  },
  {
    slug: "founder-super-strategies",
    title: "Founder Super Strategies: Beyond the 11% Minimum",
    summary: "Most founders treat superannuation as a compliance cost. The strategic founders treat it as a tax planning lever. This article covers concessional contribution strategies, the $30k cap, carry-forward unused amounts, and how to coordinate super with salary and dividend decisions for maximum after-tax efficiency.",
    category: "compliance",
    readTime: "8 min",
    publishedDate: "2026-02-26",
    relatedSlugs: ["rd-tax-incentive-what-founders-get-wrong", "bas-lodgement-mistakes-that-cost-real-money"],
  },
];

export const getArticleBySlug = (slug: string) => blogArticles.find((a) => a.slug === slug);

export const getRelatedArticles = (article: BlogArticle) =>
  article.relatedSlugs.map((s) => blogArticles.find((a) => a.slug === s)).filter(Boolean) as BlogArticle[];

export const getCategoryLabel = (cat: string) => {
  const labels: Record<string, string> = { cashflow: "Cashflow", governance: "Governance", growth: "Growth", compliance: "Compliance", funding: "Funding" };
  return labels[cat] || cat;
};
