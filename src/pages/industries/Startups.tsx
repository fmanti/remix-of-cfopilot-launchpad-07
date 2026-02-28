import PageLayout from "@/components/PageLayout";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const Startups = () => (
  <PageLayout>
    {({ openContact }) => (
      <IndustryPageTemplate
        headline="Financial Leadership for Australian Startups"
        subheading="From pre-revenue to Series B and beyond — navigate runway, R&D tax offsets, capital raises, and ATO compliance with a CFO who's been through it before."
        painPoints={[
          "Burn rate visibility is poor or manually tracked in spreadsheets",
          "R&D Tax Incentive claims are under-documented or over-claimed",
          "Capital raise preparation lacks investor-grade financials",
          "GST, PAYG, and STP obligations are missed or lodged late",
          "Founder salary structures are tax-inefficient",
          "Cash runway projections don't account for seasonal variance",
          "Board reporting is inconsistent or superficial",
          "Chart of accounts doesn't support meaningful unit economics",
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
            situation: "Series A SaaS company with 14 months of disorganised books and an R&D claim lodged without proper documentation.",
            action: "Rebuilt the chart of accounts, reconciled 14 months of transactions, and restructured R&D tracking methodology to meet AusIndustry requirements.",
            result: "Secured a $420K R&D refund and presented investor-ready financials that supported a $3.2M raise.",
          },
          {
            situation: "Pre-revenue healthtech startup burning through grant funding with no visibility on cash runway.",
            action: "Implemented rolling 13-week cash flow forecasting, restructured payroll to optimise founder salary and superannuation, and automated BAS preparation.",
            result: "Extended effective runway by 4 months and reduced monthly finance administration from 12 hours to under 2.",
          },
        ]}
        onOpenContact={openContact}
      />
    )}
  </PageLayout>
);

export default Startups;
