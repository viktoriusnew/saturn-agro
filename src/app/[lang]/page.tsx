import { notFound } from "next/navigation";

import CardStackContainer from "@/components/CardStackContainer";
import GeneralInfo from "@/components/sections/GeneralInfo";
import GeoAdvantage from "@/components/sections/GeoAdvantage";
import Hero from "@/components/sections/Hero";
import Infrastructure from "@/components/sections/Infrastructure";
import LandBank from "@/components/sections/LandBank";
import Location from "@/components/sections/Location";
import ProductionProfile from "@/components/sections/ProductionProfile";
import ProjectStatus from "@/components/sections/ProjectStatus";
import Strategy from "@/components/sections/Strategy";
import Uniqueness from "@/components/sections/Uniqueness";
import Cooperation from "@/components/sections/Cooperation";
import Finance from "@/components/sections/Finance";
import VideoPresentation from "@/components/sections/VideoPresentation";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { getSiteContent } from "@/lib/site-content";

export default async function LocalePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale: Locale = lang ?? defaultLocale;
  const content = getSiteContent(locale);

  return (
    <main className="relative">
      <Hero locale={locale} ui={content.ui} content={content.hero} />
      <GeneralInfo ui={content.ui} content={content.generalInfo} />
      <CardStackContainer>
        <GeoAdvantage ui={content.ui} content={content.geoAdvantage} />
        <LandBank ui={content.ui} content={content.landBank} />
        <ProductionProfile ui={content.ui} content={content.productionProfile} />
        <Infrastructure ui={content.ui} content={content.infrastructure} />
        <Finance ui={content.ui} content={content.finance} />
        <Strategy ui={content.ui} content={content.strategy} />
        <Uniqueness ui={content.ui} content={content.uniqueness} />
        <Cooperation ui={content.ui} content={content.cooperation} />
      </CardStackContainer>
      <ProjectStatus ui={content.ui} content={content.projectStatus} />
      <VideoPresentation ui={content.ui} content={content.videoPresentation} />
      <Location locale={locale} ui={content.ui} content={content.location} />
    </main>
  );
}
