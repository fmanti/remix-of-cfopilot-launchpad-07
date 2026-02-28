import PageLayout from "@/components/PageLayout";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const CreativeAgencies = () => (
  <PageLayout>
    {({ openContact }) => (
      <IndustryPageTemplate
        headline="Financial Structure for Creative Agencies"
        subheading="Project margins, contractor management, retainer billing, and scaling without losing control — financial clarity for agencies that create, not count."
        painPoints={[
          "Project profitability is unknown until after delivery",
          "Contractor vs employee classification creates compliance risk",
          "Retainer revenue masks true project-level performance",
          "Scope creep erodes margins on fixed-fee engagements",
          "Cash flow is lumpy due to milestone-based billing cycles",
          "No structured approach to capacity planning or hiring decisions",
          "BAS and superannuation for mixed workforce models are complex",
          "Financial reporting doesn't differentiate revenue streams or clients",
        ]}
        serviceLinks={[
          { label: "Fractional CFO Leadership", href: "/services/cfo" },
          { label: "Bookkeeping & BAS", href: "/services/bookkeeping" },
          { label: "Tax Planning & Coordination", href: "/services/tax" },
          { label: "Outsourced Operations", href: "/services/outsourced-operations" },
        ]}
        outcomes={[
          {
            situation: "Digital agency with $3M revenue, 60% contractor workforce, and no visibility on project margins.",
            action: "Built project-level P&L reporting, restructured contractor agreements for compliance, and implemented monthly financial review cadence with the leadership team.",
            result: "Agency identified that 3 of its top 10 clients were unprofitable. Renegotiated terms and improved blended margin by 14%.",
          },
          {
            situation: "Brand consultancy scaling from founder-led to a team of 15 with ad hoc financial processes.",
            action: "Implemented Xero-based finance stack, automated payroll and super, introduced quarterly tax planning, and built a capacity model for hiring decisions.",
            result: "Founder stepped out of day-to-day finance. Hiring decisions became data-driven, and cash reserves grew by $120K over 12 months.",
          },
        ]}
        onOpenContact={openContact}
      />
    )}
  </PageLayout>
);

export default CreativeAgencies;
