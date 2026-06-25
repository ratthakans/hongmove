import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Partners } from "@/components/sections/Partners";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PopularRoutes } from "@/components/sections/PopularRoutes";
import { WhyUs } from "@/components/sections/WhyUs";
import { AirportNetwork } from "@/components/sections/AirportNetwork";
import { BusinessVision } from "@/components/sections/BusinessVision";
import { TourPackages } from "@/components/sections/TourPackages";
import { Credibility } from "@/components/sections/Credibility";
import { AppTeaser } from "@/components/sections/AppTeaser";
import { NewsTeaser } from "@/components/sections/NewsTeaser";
import { Faq } from "@/components/sections/Faq";
import { CTASection } from "@/components/sections/CTASection";
import { faqs } from "@/lib/data";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <PopularRoutes />
      <WhyUs />
      <TourPackages />
      <AirportNetwork />
      <BusinessVision />
      <Credibility />
      <Partners />
      <AppTeaser />
      <NewsTeaser />
      <Faq />
      <CTASection />
    </>
  );
}
