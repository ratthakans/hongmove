import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Partners } from "@/components/sections/Partners";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { AirportNetwork } from "@/components/sections/AirportNetwork";
import { BusinessVision } from "@/components/sections/BusinessVision";
import { Reviews } from "@/components/sections/Reviews";
import { AppTeaser } from "@/components/sections/AppTeaser";
import { NewsTeaser } from "@/components/sections/NewsTeaser";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <AirportNetwork />
      <BusinessVision />
      <Reviews />
      <Partners />
      <AppTeaser />
      <NewsTeaser />
      <CTASection />
    </>
  );
}
