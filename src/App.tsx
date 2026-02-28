import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import SubscriptionAgreement from "./pages/SubscriptionAgreement";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Bookkeeping from "./pages/services/Bookkeeping";
import CFOServices from "./pages/services/CFOServices";
import Tax from "./pages/services/Tax";
import OutsourcedOperations from "./pages/services/OutsourcedOperations";
import RDTaxIncentive from "./pages/services/RDTaxIncentive";
import Startups from "./pages/industries/Startups";
import HealthMedtech from "./pages/industries/HealthMedtech";
import SmallBusinesses from "./pages/industries/SmallBusinesses";
import ProfessionalServices from "./pages/industries/ProfessionalServices";
import CreativeAgencies from "./pages/industries/CreativeAgencies";
import Manufacturing from "./pages/industries/Manufacturing";
import ConsumerRetail from "./pages/industries/ConsumerRetail";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import DataInsights from "./pages/DataInsights";
import InsightPost from "./pages/InsightPost";
import Events from "./pages/Events";
import Careers from "./pages/Careers";
import PartnerProgram from "./pages/PartnerProgram";
import MediaKit from "./pages/MediaKit";
import WhyCFOPilot from "./pages/WhyCFOPilot";
import Demo from "./pages/Demo";
import Glossary from "./pages/Glossary";
import AnnualPlanning from "./pages/tools/AnnualPlanning";
import BackOfficeGuide from "./pages/tools/BackOfficeGuide";
import BurnRateCalculator from "./pages/tools/BurnRateCalculator";
import FounderSalaryReport from "./pages/tools/FounderSalaryReport";
import TaxCalendar from "./pages/tools/TaxCalendar";
import BusinessMetrics from "./pages/tools/BusinessMetrics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/subscription-agreement" element={<SubscriptionAgreement />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          
          {/* Service Pages */}
          <Route path="/services/bookkeeping" element={<Bookkeeping />} />
          <Route path="/services/cfo" element={<CFOServices />} />
          <Route path="/services/tax" element={<Tax />} />
          <Route path="/services/outsourced-operations" element={<OutsourcedOperations />} />
          <Route path="/services/rd-tax-incentive" element={<RDTaxIncentive />} />
          
          {/* Industry Pages */}
          <Route path="/industries/startups" element={<Startups />} />
          <Route path="/industries/health-medtech" element={<HealthMedtech />} />
          <Route path="/industries/small-businesses" element={<SmallBusinesses />} />
          <Route path="/industries/professional-services" element={<ProfessionalServices />} />
          <Route path="/industries/creative-agencies" element={<CreativeAgencies />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/consumer-retail" element={<ConsumerRetail />} />
          
          {/* Resource & Content Pages */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/data-insights" element={<DataInsights />} />
          <Route path="/insights/:slug" element={<InsightPost />} />
          <Route path="/events" element={<Events />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/glossary" element={<Glossary />} />
          
          {/* Tools & Guides */}
          <Route path="/resources/annual-planning" element={<AnnualPlanning />} />
          <Route path="/resources/back-office-guide" element={<BackOfficeGuide />} />
          <Route path="/burn-rate-calculator" element={<BurnRateCalculator />} />
          <Route path="/back-office-guide" element={<BackOfficeGuide />} />
          <Route path="/tools/burn-rate-calculator" element={<BurnRateCalculator />} />
          <Route path="/resources/founder-salary-report" element={<FounderSalaryReport />} />
          <Route path="/founder-salary-report" element={<FounderSalaryReport />} />
          <Route path="/resources/tax-calendar" element={<TaxCalendar />} />
          <Route path="/tax-compliance-calendar" element={<TaxCalendar />} />
          <Route path="/resources/business-metrics" element={<BusinessMetrics />} />
          <Route path="/small-business-metrics" element={<BusinessMetrics />} />
          
          {/* Company Pages */}
          <Route path="/why-cfo-pilot" element={<WhyCFOPilot />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partners" element={<PartnerProgram />} />
          <Route path="/partner-program" element={<PartnerProgram />} />
          <Route path="/media-kit" element={<MediaKit />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
