import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Bookkeeping", href: "/services/bookkeeping" },
      { label: "Outsourced Operations", href: "/services/outsourced-operations" },
      { label: "CFO Services", href: "/services/cfo" },
      { label: "Tax", href: "/services/tax" },
      { label: "R&D Tax Incentive", href: "/services/rd-tax-incentive" },
    ],
    industries: [
      { label: "Startups", href: "/industries/startups" },
      { label: "Health & Medtech", href: "/industries/health-medtech" },
      { label: "Small Businesses", href: "/industries/small-businesses" },
      { label: "Professional Services", href: "/industries/professional-services" },
      { label: "Creative Agencies", href: "/industries/creative-agencies" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Consumer Goods & Retail", href: "/industries/consumer-retail" },
    ],
    resources: [
      { label: "Resource Hub", href: "/resources" },
      { label: "Blog", href: "/blog" },
      { label: "Events", href: "/events" },
      { label: "CFO Pilot Demo", href: "/demo" },
      { label: "Glossary", href: "/glossary" },
      { label: "Data Insights", href: "/data-insights" },
    ],
    tools: [
      { label: "Annual Planning Playbook", href: "/resources/annual-planning" },
      { label: "Back Office Guide", href: "/resources/back-office-guide" },
      { label: "Burn Rate Calculator", href: "/tools/burn-rate-calculator" },
      { label: "Founder Salary Report", href: "/resources/founder-salary-report" },
      { label: "Tax Compliance Calendar", href: "/resources/tax-calendar" },
      { label: "Small Business Metrics", href: "/resources/business-metrics" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Why CFO Pilot?", href: "/why-cfo-pilot" },
      { label: "Careers", href: "/careers" },
      { label: "Partner Program", href: "/partners" },
      { label: "Media Kit", href: "/media-kit" },
      { label: "FAQ", href: "/faq" },
    ],
  };

  return (
    <footer className="bg-navy py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Logo */}
            <div>
              <Link to="/" className="text-2xl font-bold text-white">
                CFO<span className="text-primary">Pilot</span>
              </Link>
            </div>

            {/* Contact */}
            <div className="text-right">
              <a
                href="mailto:info@cfopilot.com.au"
                className="text-white/80 hover:text-white transition-colors"
              >
                info@cfopilot.com.au
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-white font-semibold mb-4">Industries</h4>
              <ul className="space-y-2">
                {footerLinks.industries.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-white font-semibold mb-4">Tools & Guides</h4>
              <ul className="space-y-2">
                {footerLinks.tools.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} Everco Pty Ltd. ABN 48 650 061
            </p>

            <div className="flex items-center gap-6">
              <Link
                to="/terms"
                className="text-white/40 hover:text-white/60 transition-colors text-sm"
              >
                Website Terms of Use
              </Link>
              <Link
                to="/privacy"
                className="text-white/40 hover:text-white/60 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/subscription-agreement"
                className="text-white/40 hover:text-white/60 transition-colors text-sm"
              >
                Subscription Agreement
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-white/30 text-xs text-center max-w-4xl mx-auto">
            CFO Pilot is a provider of back-office services, including bookkeeping, controller services, and CFO services.
            CFO Pilot is not a public accounting firm and does not provide services that would require a license to practice public accountancy.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
