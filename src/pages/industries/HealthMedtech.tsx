import PageLayout from "@/components/PageLayout";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const HealthMedtech = () => (
  <PageLayout>
    {({ openContact }) => (
      <IndustryPageTemplate
        headline="Financial Clarity for Health & Medtech"
        subheading="Clinical trials, TGA timelines, grant funding, and long regulatory cycles demand financial leadership that understands the burn — and the patience required."
        painPoints={[
          "Regulatory timelines create unpredictable cash demands",
          "Grant funding acquittal requirements are complex and time-consuming",
          "Clinical trial burn rates are difficult to forecast accurately",
          "Revenue recognition for milestone-based contracts is unclear",
          "R&D Tax Incentive claims need careful separation from commercial activities",
          "Investor reporting requirements differ from operational reporting",
          "Working capital gaps between billing and payment collection",
          "Payroll complexity across clinical, research, and administrative staff",
        ]}
        serviceLinks={[
          { label: "Fractional CFO Leadership", href: "/services/cfo" },
          { label: "R&D Tax Incentive", href: "/services/rd-tax-incentive" },
          { label: "Bookkeeping & BAS", href: "/services/bookkeeping" },
          { label: "Tax Planning & Coordination", href: "/services/tax" },
          { label: "Outsourced Operations", href: "/services/outsourced-operations" },
        ]}
        outcomes={[
          {
            situation: "Medtech company mid-clinical trial with grant funding acquittal due and no structured financial reporting in place.",
            action: "Established project-level cost tracking, prepared grant acquittal reports, and built a rolling forecast aligned to trial milestones.",
            result: "Grant acquittal accepted on first submission. Board gained visibility on cash requirements through to next funding milestone.",
          },
          {
            situation: "Digital health platform with complex revenue recognition across subscription and milestone-based contracts.",
            action: "Implemented compliant revenue recognition framework, restructured chart of accounts, and introduced monthly board reporting pack.",
            result: "Clean financials supported a successful $5M Series A and reduced audit preparation time by 60%.",
          },
        ]}
        onOpenContact={openContact}
      />
    )}
  </PageLayout>
);

export default HealthMedtech;
