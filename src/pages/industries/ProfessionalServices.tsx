import PageLayout from "@/components/PageLayout";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const ProfessionalServices = () => (
  <PageLayout>
    {({ openContact }) => (
      <IndustryPageTemplate
        headline="Financial Discipline for Professional Services Firms"
        subheading="Utilisation rates, partner drawings, margin leakage, and project profitability — the numbers that actually matter in a services business."
        painPoints={[
          "Utilisation rates are unmeasured or misunderstood",
          "Partner drawings are disconnected from actual firm profitability",
          "Work-in-progress (WIP) is not tracked accurately",
          "Billing cycles create cash flow gaps that stress the business",
          "Overhead allocation is arbitrary rather than activity-based",
          "Project profitability is unknown until months after delivery",
          "BAS and payroll obligations are handled reactively",
          "No structured approach to annual budgeting or capacity planning",
        ]}
        serviceLinks={[
          { label: "Fractional CFO Leadership", href: "/services/cfo" },
          { label: "Bookkeeping & BAS", href: "/services/bookkeeping" },
          { label: "Tax Planning & Coordination", href: "/services/tax" },
          { label: "Outsourced Operations", href: "/services/outsourced-operations" },
        ]}
        outcomes={[
          {
            situation: "Law firm with 12 partners, inconsistent monthly reporting, and no visibility on matter-level profitability.",
            action: "Implemented matter-level cost tracking, introduced monthly partner reporting pack with utilisation and realisation metrics, and restructured drawings policy.",
            result: "Partners gained clear visibility on profitability. Firm identified $180K in annual margin leakage from under-billing and scope creep.",
          },
          {
            situation: "Engineering consultancy growing from 8 to 25 staff with no finance function beyond a part-time bookkeeper.",
            action: "Established complete finance function: monthly close process, project profitability reporting, cash flow forecasting, and tax planning coordination.",
            result: "Firm scaled with confidence, maintaining 22% net margin through the growth phase while staying fully ATO-compliant.",
          },
        ]}
        onOpenContact={openContact}
      />
    )}
  </PageLayout>
);

export default ProfessionalServices;
