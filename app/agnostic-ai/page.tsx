import { Suspense } from "react";

import HeroSection from "../../OurServices_components/AgnosticAI/Herosection";
import AgnosticAICom from "../../OurServices_components/AgnosticAI/AgnosticAi";
import Benifits from "../../OurServices_components/AgnosticAI/Benifits";
import ServiceDetails from "../../OurServices_components/AgnosticAI/CustomerAnalytics";

export default function AgnosticAI() {
  return (
    <>
      <HeroSection />
      <AgnosticAICom />
      <Benifits />

      {/* ✅ ONLY THIS PART NEEDS SUSPENSE */}
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <ServiceDetails />
      </Suspense>
    </>
  );
}
