import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { CommitmentSection } from "@/components/home/CommitmentSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { UniqueSection } from "@/components/home/UniqueSection";
import { VideoShowcaseSection } from "@/components/home/VideoShowcaseSection";
import { CTASection } from "@/components/home/CTASection";

const Home = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dream Streams",
    "description": "Professional wedding live streaming services in Toronto, Ontario",
    "url": "https://dreamstreams.ca",
    "telephone": "",
    "email": "hello@dreamstreams.ca",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Greater Toronto Area"
    },
    "priceRange": "$$",
    "serviceType": "Wedding Live Streaming"
  };

  return (
    <>
      <Helmet>
        <title>Dream Streams | Wedding Live Streaming | Toronto, Ontario</title>
        <meta 
          name="description" 
          content="Dream Streams offers professional wedding live streaming services in Toronto, Ontario. Share your special day with loved ones anywhere in the world. High-quality, worry-free livestreaming." 
        />
        <link rel="canonical" href="https://dreamstreams.ca/home" />
        <meta property="og:title" content="Dream Streams | Wedding Live Streaming | Toronto, Ontario" />
        <meta property="og:description" content="Professional wedding live streaming services. Share your special day with loved ones anywhere in the world." />
        <meta property="og:url" content="https://dreamstreams.ca/home" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <WelcomeSection />
          <CommitmentSection />
          <BenefitsSection />
          <UniqueSection />
          <VideoShowcaseSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
