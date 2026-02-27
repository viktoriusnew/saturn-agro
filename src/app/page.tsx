import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Section01General from "@/components/sections/Section01General";
import Section02Geo from "@/components/sections/Section02Geo";
import Section03LandBank from "@/components/sections/Section03LandBank";
import Section04Crops from "@/components/sections/Section04Crops";
import Section05Infrastructure from "@/components/sections/Section05Infrastructure";
import Section06Finance from "@/components/sections/Section06Finance";
import Section07Strategy from "@/components/sections/Section07Strategy";
import Section08Uniqueness from "@/components/sections/Section08Uniqueness";
import Section09Deal from "@/components/sections/Section09Deal";
import Section10Status from "@/components/sections/Section10Status";
import VideoPresentation from "@/components/sections/VideoPresentation";
import Contacts from "@/components/sections/Contacts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section01General />
        <Section02Geo />
        <Section03LandBank />
        <Section04Crops />
        <Section05Infrastructure />
        <Section06Finance />
        <Section07Strategy />
        <Section08Uniqueness />
        <Section09Deal />
        <Section10Status />
        <VideoPresentation />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
