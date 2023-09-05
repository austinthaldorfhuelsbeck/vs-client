import React from "react";
import { HeroBanner } from "src/components/hero-banner";
import { PageLayout } from "../components/page-layout";
import { PageFooter } from "src/components/page-footer";

export const LandingPage: React.FC = () => (
  <>
    <PageLayout>
      <>
        <HeroBanner />
      </>
    </PageLayout>
    <PageFooter />
  </>
);
