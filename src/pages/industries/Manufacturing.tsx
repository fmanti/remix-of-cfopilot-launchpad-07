import PageLayout from "@/components/PageLayout";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const Manufacturing = () => (
  <PageLayout>
    {({ openContact }) => (
      <IndustryPageTemplate
        headline="Financial Leadership for Australian Manufacturers"
        subheading="Inventory cycles, supply chain volatility, working capital pressure, and margin management — the financial complexities that define manufacturing."
        painPoints={[
          "Inventory valuation methods are inconsistent or non-compliant",
          "Working capital is tied up in raw materials and WIP",
          "Supply chain cost volatility erodes margin without visibility",
          "Cost of goods sold (COGS) is calculated inaccurately",
          "Capital expenditure decisions lack structured financial analysis",
          "BAS on imported goods and customs duties is complex",
          "Labour costing across shifts and overtime is poorly tracked",
          "Cash conversion cycle is too long and not actively managed",
        ]}
        serviceLinks={[
          { label: "Fractional CFO Leadership", href: "/services/cfo" },
          { label: "Bookkeeping & BAS", href: "/services/bookkeeping" },
          { label: "R&D Tax Incentive", href: "/services/rd-tax-incentive" },
          { label: "Tax Planning & Coordination", href: "/services/tax" },
          { label: "Outsourced Operations", href: "/services/outsourced-operations" },
        ]}
        outcomes={[
          {
            situation: "Food manufacturer with $8M revenue, inconsistent COGS calculation, and no visibility on product-line profitability.",
            action: "Restructured cost allocation methodology, implemented product-line P&L reporting, and introduced monthly variance analysis against budget.",
            result: "Management identified two product lines operating below breakeven. Reformulated pricing and improved gross margin by 8% within two quarters.",
          },
          {
            situation: "Metal fabrication business with $12M revenue considering a $2M capital expansion with no financial model in place.",
            action: "Built a detailed capital expenditure model including ROI analysis, cash flow impact projections, and financing scenario comparison.",
            result: "Business proceeded with a staged investment approach that preserved working capital and delivered positive ROI within 18 months.",
          },
        ]}
        onOpenContact={openContact}
      />
    )}
  </PageLayout>
);

export default Manufacturing;
