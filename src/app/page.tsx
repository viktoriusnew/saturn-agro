import Hero from "@/components/sections/Hero";
import GeneralInfo from "@/components/sections/GeneralInfo";
import CardStackContainer from "@/components/CardStackContainer";
import GeoAdvantage from "@/components/sections/GeoAdvantage";
import LandBank from "@/components/sections/LandBank";
import ProductionProfile from "@/components/sections/ProductionProfile";
import Infrastructure from "@/components/sections/Infrastructure";
import Finance from "@/components/sections/Finance";
import Strategy from "@/components/sections/Strategy";
import Uniqueness from "@/components/sections/Uniqueness";
import Cooperation from "@/components/sections/Cooperation";
import ProjectStatus from "@/components/sections/ProjectStatus";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Hero />
        <GeneralInfo />
        <CardStackContainer>
          <GeoAdvantage />
          <LandBank />
          <ProductionProfile />
          <Infrastructure />
          <Finance />
          <Strategy />
          <Uniqueness />
          <Cooperation />
        </CardStackContainer>
        <ProjectStatus />
      </main>
    </>
  );
}
