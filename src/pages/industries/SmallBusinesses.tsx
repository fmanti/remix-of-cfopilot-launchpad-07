import PageLayout from "@/components/PageLayout";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const SmallBusinesses = () => (
  <PageLayout>
    {({ openContact }) => (
      <IndustryPageTemplate
        headline="Back-Office Strength for Small Businesses"
        subheading="You didn't start a business to chase BAS deadlines and reconcile bank feeds. Get clean books, clear reporting, and financial leadership that scales with you."
        painPoints={[
          "BAS and IAS lodgements are rushed, late, or inaccurate",
          "Cash flow is managed reactively, not proactively",
          "Bookkeeping is months behind or handled by unqualified staff",
          "No visibility on true profitability by product, service, or client",
          "Superannuation obligations are poorly tracked",
          "Tax planning happens in June, not year-round",
          "Financial reports are produced but never used for decisions",
          "Growth is constrained by lack of working capital visibility",
        ]}
        serviceLinks={[
          { label: "Bookkeeping & BAS", href: "/services/bookkeeping" },
          { label: "Tax Planning & Coordination", href: "/services/tax" },
          { label: "Fractional CFO Leadership", href: "/services/cfo" },
          { label: "Outsourced Operations", href: "/services/outsourced-operations" },
        ]}
        outcomes={[
          {
            situation: "Trades business with $2.4M revenue, bookkeeping 6 months behind, and two missed BAS lodgements.",
            action: "Caught up all bookkeeping in 3 weeks, lodged outstanding BAS, implemented fortnightly reconciliation cadence, and introduced monthly P&L review.",
            result: "Business owner regained ATO compliance, identified $38K in unclaimed deductions, and freed up 8 hours per month.",
          },
          {
            situation: "Retail business with strong revenue but persistent cash flow pressure and no understanding of margin by product line.",
            action: "Restructured chart of accounts to track margin by category, implemented weekly cash flow reporting, and coordinated with tax adviser on quarterly planning.",
            result: "Owner discontinued two underperforming product lines and improved net margin by 11% within two quarters.",
          },
        ]}
        onOpenContact={openContact}
      />
    )}
  </PageLayout>
);

export default SmallBusinesses;
