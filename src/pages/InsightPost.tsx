import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { getInsightBySlug, getRelatedInsights } from "@/data/insightReports";
import { ArrowLeft, ArrowRight, TrendingDown } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/frank-manti";

const InsightPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const report = slug ? getInsightBySlug(slug) : undefined;

  if (!report) {
    return (
      <PageLayout>
        {() => (
          <section className="pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-3xl text-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">Report Not Found</h1>
              <Link to="/data-insights" className="text-primary hover:underline">Back to Data Insights</Link>
            </div>
          </section>
        )}
      </PageLayout>
    );
  }

  const related = getRelatedInsights(report);

  return (
    <PageLayout>
      {() => (
        <>
          <section className="pt-32 pb-12 gradient-navy">
            <div className="container mx-auto px-6 max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Link to="/data-insights" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-6">
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Data Insights
                </Link>
                <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">{report.quarter}</span>
                <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 leading-tight">{report.title}</h1>
                <p className="text-white/50 text-sm mt-4">{new Date(report.publishedDate).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</p>
              </motion.div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-6 max-w-3xl">
              <h2 className="text-xl font-bold text-foreground mb-4">Executive Summary</h2>
              <p className="text-muted-foreground leading-relaxed mb-12">{report.summary}</p>

              <h2 className="text-xl font-bold text-foreground mb-6">Key Findings</h2>
              <div className="space-y-4 mb-12">
                {report.keyFindings.map((finding, i) => (
                  <div key={i} className="flex items-start gap-3 bg-light-bg rounded-xl p-5 border border-border">
                    <TrendingDown className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{finding}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold text-foreground mb-4">Strategic Implications</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These trends underscore the importance of proactive financial management. Businesses that maintain structured reporting cadences, manage working capital actively, and engage in regular cashflow forecasting are better positioned to navigate volatile conditions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-12">
                The data consistently shows that businesses with dedicated financial leadership — whether in-house or fractional — outperform their peers on every key financial health metric. The gap widens during periods of economic pressure.
              </p>

              <div className="bg-light-bg border border-border rounded-xl p-8 text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">Apply These Insights to Your Business</h3>
                <p className="text-sm text-muted-foreground mb-4">A structured financial review can identify exactly where these trends are affecting your operations.</p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Confidential Conversation</a>
                </Button>
              </div>
            </div>
          </section>

          {related.length > 0 && (
            <section className="py-16 bg-light-bg">
              <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-xl font-bold text-foreground mb-8">Related Reports</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {related.map((r) => (
                    <Link key={r.slug} to={`/insights/${r.slug}`} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors group">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{r.quarter}</span>
                      <h3 className="font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">{r.title}</h3>
                      <span className="text-xs text-primary flex items-center gap-1">Read report <ArrowRight className="w-3 h-3" /></span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </PageLayout>
  );
};

export default InsightPost;
