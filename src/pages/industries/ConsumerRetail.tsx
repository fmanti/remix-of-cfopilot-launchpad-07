import PageLayout from "@/components/PageLayout";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const ConsumerRetail = () => (
  <PageLayout>
    {({ openContact }) => (
      <IndustryPageTemplate
        headline="Financial Clarity for Consumer Goods & Retail"
        subheading="Inventory turns, seasonal cash cycles, channel profitability, and margin management — the financial fundamentals that determine survival in retail."
        painPoints={[
          "Seasonal cash flow swings are not planned for in advance",
          "Inventory management is disconnected from financial reporting",
          "Channel profitability (online vs wholesale vs retail) is unknown",
          "Margin erosion from discounting is not measured or controlled",
          "GST on mixed supply goods creates BAS complexity",
          "Supplier payment terms are not optimised for cash flow",
          "No structured approach to promotional ROI measurement",
          "Growth through new channels increases operational complexity without financial visibility",
        ]}
        serviceLinks={[
          { label: "Bookkeeping & BAS", href: "/services/bookkeeping" },
          { label: "Fractional CFO Leadership", href: "/services/cfo" },
          { label: "Tax Planning & Coordination", href: "/services/tax" },
          { label: "Outsourced Operations", href: "/services/outsourced-operations" },
        ]}
        outcomes={[
          {
            situation: "DTC skincare brand with $4M revenue across Shopify, Amazon, and wholesale — no visibility on channel profitability.",
            action: "Implemented channel-level P&L reporting, restructured COGS allocation to include fulfilment and platform fees, and introduced monthly financial review.",
            result: "Brand discovered wholesale channel was operating at 3% net margin. Shifted marketing spend to DTC and improved blended margin by 9%.",
          },
          {
            situation: "Multi-location retail business with $6M revenue and persistent cash pressure despite strong sales.",
            action: "Built 13-week rolling cash flow forecast, renegotiated supplier payment terms, and implemented inventory-level financial reporting by location.",
            result: "Cash reserves improved by $200K over 6 months. Owner gained weekly visibility on cash position for the first time.",
          },
        ]}
        onOpenContact={openContact}
      />
    )}
  </PageLayout>
);

export default ConsumerRetail;
