import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HomeCategories } from "@/components/home/home-categories";
import { HomeFounder } from "@/components/home/home-founder";
import { HomeForCompanies } from "@/components/home/home-for-companies";
import { HomeFeaturedPaths } from "@/components/home/home-featured-paths";
import { HomeFeaturedTemplates } from "@/components/home/home-featured-templates";
import { HomeHero } from "@/components/home/home-hero";
import { HomeLatestInsights } from "@/components/home/home-latest-insights";
import { HomeNewsletter } from "@/components/home/home-newsletter";
import { HomePillars } from "@/components/home/home-pillars";
import { HomeProofBar } from "@/components/home/home-proof-bar";
import { HomeTrustSection } from "@/components/home/home-trust-section";
import { HomeUseCases } from "@/components/home/home-use-cases";

export function HomePage() {
  return (
    <main className="min-h-screen text-foreground">
      <SiteHeader />
      <HomeHero />
      <HomeProofBar />
      <HomeTrustSection />
      <HomeCategories />
      <HomePillars />
      <HomeFeaturedPaths />
      <HomeFeaturedTemplates />
      <HomeUseCases />
      <HomeLatestInsights />
      <HomeForCompanies />
      <HomeFounder />
      <HomeNewsletter />
      <SiteFooter />
    </main>
  );
}