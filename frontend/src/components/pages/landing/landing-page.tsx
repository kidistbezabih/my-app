// React import removed (not needed with JSX transform)
import {
  Advantage,
  AnalystReports,
  Awards,
  CSRSection,
  CaseStudies,
  Leadership,
  Partners,
  Portfolio,
  Stats,
} from "@/components/sections";
import { Hero } from "@/components/sections/Hero";
import { SEO } from "@/components/shared/SEO";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="AxionOre — The Future of Enterprise Technology"
        description="AxionOre builds and scales specialized enterprise solutions—from cloud security to secure ERP—trusted by Fortune 500s across 40+ countries."
      />
      <Hero />
      <Advantage />
      <Portfolio />
      <Stats />
      <Leadership />
      <CSRSection />
      <Partners />
      <AnalystReports />
      <CaseStudies />
      <Awards />
    </div>
  );
};
export default LandingPage;
