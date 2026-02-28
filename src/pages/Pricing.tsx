import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

import hero1 from "@/assets/pricing/bronze.webp";
import hero2 from "@/assets/pricing/silver.webp";
import hero3 from "@/assets/pricing/gold.webp";
import hero4 from "@/assets/pricing/hero-4.webp";
import goldImg from "@/assets/pricing/hero-3.webp";
import silverImg from "@/assets/pricing/hero-2.webp";
import bronzeImg from "@/assets/pricing/hero-1.webp";

import addonReception from "@/assets/pricing/addon-reception.webp";
import addonSocial from "@/assets/pricing/addon-social.webp";
import addonVideography from "@/assets/pricing/addon-videography.webp";
import addonDreamStory from "@/assets/pricing/addon-dreamstory.webp";
import addonInviteThankYou from "@/assets/pricing/addon-invite-thankyou.webp";
import addonHour from "@/assets/pricing/addon-hour.webp";

const goldFeatures = [
  "Ceremony Streaming",
  "Unlimited Viewers",
  "30-minute Planning Session",
  "3-4 Camera Angles with Mobile Capabilities (switching live, to give dynamic stream)",
  "Pre-ceremony Slideshow",
  "Dream Page - Custom Landing Page",
  "USB Stick",
  "Wireless lapel microphones (non-amplifying)",
  "Live Chat Capability",
  "Onsite Testing Report",
  "Internet Provided if Needed",
  "7-10 Business Days HD Footage Delivery",
];

const silverFeatures = [
  "Ceremony Streaming",
  "Unlimited Viewers",
  "30-minute Planning Session",
  "2 Camera Angles with Mobile Capabilities (switching live, to give dynamic stream)",
  "Pre-ceremony Slideshow",
  "Wireless lapel microphones (non-amplifying)",
  "Live Chat Capability",
  "Internet Provided if Needed",
  "7-10 Business Days HD Footage Delivery",
];

const bronzeFeatures = [
  "Ceremony Streaming",
  "Unlimited Viewers",
  "1 Camera Angle (single camera stationary at the end of the aisle)",
  "Wireless lapel microphones (non-amplifying)",
  "Live Chat Capability",
  "Venue Wifi Required",
  "7-10 Business Days HD Footage Delivery",
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing & Packages | Dream Streams</title>
        <meta
          name="description"
          content="Explore Dream Streams wedding livestreaming packages — Gold, Silver, and Bronze tiers with add-ons to fit your needs."
        />
        <link rel="canonical" href="https://dreamstreams.ca/pricing" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero - 4 photos side by side with accent blobs */}
          <section className="relative bg-secondary overflow-hidden">
            {/* Decorative blob top-left */}
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-accent/30 z-0" />
            {/* Decorative blob top-right */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-accent/20 z-0" />

            <div className="container mx-auto px-4 py-12 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src={hero1} alt="Wedding couple" className="w-full h-64 md:h-80 object-cover" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src={hero2} alt="Wedding couple" className="w-full h-64 md:h-80 object-cover" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src={hero3} alt="Wedding couple" className="w-full h-64 md:h-80 object-cover" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src={hero4} alt="Wedding celebration" className="w-full h-64 md:h-80 object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* Intro */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="font-display text-3xl md:text-4xl text-primary mb-4">
                  our pricing.
                </h1>
                <p className="font-body text-muted-foreground leading-relaxed">
                  We offer tiered packages with several add-ons to fit your needs best.
                  This has quickly become one of the most cost-effective ways to have all your
                  favourite people in one space. Couples are choosing to marry and invite guests
                  to witness their union from the comfort of their own homes via live video streams.
                  The potential savings have become such a valued service in the wedding industry and
                  we look forward to playing a role in one of the most memorable days of your life.
                  Having the raw footage allows you to replay your special day for years to come.
                </p>
              </div>
            </div>
          </section>

          {/* Gold Package */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div className="overflow-hidden rounded-lg shadow-xl">
                  <img src={goldImg} alt="Gold Package" className="w-full aspect-square object-cover" />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl text-accent italic mb-2">
                    Gold Package
                  </h2>
                  <ul className="space-y-2 mb-6">
                    {goldFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-display text-3xl text-accent">$1650</p>
                </div>
              </div>
            </div>
          </section>

          {/* Silver Package */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div className="order-2 md:order-1">
                  <h2 className="font-display text-3xl md:text-4xl text-accent italic mb-2">
                    Silver Package
                  </h2>
                  <ul className="space-y-2 mb-6">
                    {silverFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-display text-3xl text-accent">$1250</p>
                </div>
                <div className="order-1 md:order-2 overflow-hidden rounded-lg shadow-xl">
                  <img src={silverImg} alt="Silver Package" className="w-full aspect-square object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* Bronze Package */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div className="overflow-hidden rounded-lg shadow-xl">
                  <img src={bronzeImg} alt="Bronze Package" className="w-full aspect-square object-cover" />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl text-accent italic mb-2">
                    Bronze Package
                  </h2>
                  <ul className="space-y-2 mb-6">
                    {bronzeFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-display text-3xl text-accent">$850</p>
                </div>
              </div>
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto mb-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
                  <h2 className="font-display text-3xl md:text-4xl text-primary">
                    Enhance your Wedding Live Stream<br />Experience With <span className="font-bold">Add-ons.</span>
                  </h2>
                  <p className="font-display text-accent italic text-right max-w-md">
                    our featured add-ons are tailored to give your wedding livestream a creative boost
                  </p>
                </div>
                <hr className="border-border" />
              </div>

              {/* Row 1: 3 cards */}
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                {/* Reception Livestream */}
                <div>
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img src={addonReception} alt="Reception Livestream" className="w-full aspect-[4/3] object-cover" />
                  </div>
                  <h3 className="font-display text-lg text-primary mb-2">Reception Livestream</h3>
                  <p className="font-body text-sm text-muted-foreground mb-2">
                    Up to 90-minute window between ceremony and reception
                  </p>
                  <p className="font-display text-accent text-lg">$750</p>
                </div>

                {/* Social Media Highlight */}
                <div>
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img src={addonSocial} alt="Social Media Highlight" className="w-full aspect-[4/3] object-cover" />
                  </div>
                  <h3 className="font-display text-lg text-primary mb-2">Social Media Highlight</h3>
                  <p className="font-body text-sm text-muted-foreground mb-2">
                    A social media film where we capture elements of your ceremony to share your beautiful story with friends and family.
                  </p>
                  <p className="font-display text-accent text-lg">Ceremony $350</p>
                </div>

                {/* Videography Highlight Film */}
                <div>
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img src={addonVideography} alt="Videography Highlight Film" className="w-full aspect-[4/3] object-cover" />
                  </div>
                  <h3 className="font-display text-lg text-primary mb-2">Videography Highlight Film</h3>
                  <p className="font-body text-sm text-muted-foreground mb-2">
                    Looking to combine our videographer and live streaming package? Well, you've come to the right place. This allows you to have the best of both worlds. Have your wedding live-streamed while capturing every moment of your special day, put into a short film that can be watched again and again.
                  </p>
                  <p className="font-display text-accent text-lg mb-1">Ceremony $1100</p>
                  <ul className="font-body text-xs text-muted-foreground space-y-0.5 mb-2">
                    <li>- getting ready (with the bride)</li>
                    <li>- getting ready (with the groom)</li>
                    <li>- ceremony</li>
                    <li>- footage during cocktail hour (venue or park)</li>
                  </ul>
                  <p className="font-body text-xs text-accent italic mb-1">* this package includes drone usage</p>
                  <p className="font-display text-accent text-lg">Ceremony + Reception $1400</p>
                </div>
              </div>

              {/* Row 2: 3 cards */}
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Dream Story */}
                <div>
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img src={addonDreamStory} alt="Dream Story" className="w-full aspect-[4/3] object-cover" />
                  </div>
                  <h3 className="font-display text-lg text-primary mb-2">Dream Story</h3>
                  <p className="font-body text-sm text-muted-foreground mb-2">
                    A short film of your unique story, to be played while your audience waits for your live stream ceremony to begin. Your guest would love for you to tell the story of how you both met and fell in love! What a beautiful opportunity to share your love story with your friends and family.
                  </p>
                  <p className="font-display text-accent text-lg">$550</p>
                </div>

                {/* Dream Invite + Dream Thank You */}
                <div>
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img src={addonInviteThankYou} alt="Dream Invite + Dream Thank You" className="w-full aspect-[4/3] object-cover" />
                  </div>
                  <h3 className="font-display text-lg text-primary mb-2">Dream Invite + Dream Thank You</h3>
                  <p className="font-body text-sm text-muted-foreground mb-2">
                    An exclusive video guest invitation. Your wedding video invitation will let you connect with your guests and give them the information they need in a fun and personal way.
                  </p>
                  <p className="font-body text-sm text-muted-foreground mb-2">
                    + A pre-recorded thank-you-for-viewing clip. What a special way to show your gratitude and appreciation to your guests by sending them off with one more chance to thank your guests and everyone who helped to make your day special.
                  </p>
                  <p className="font-body text-xs text-accent italic mb-1">* this package includes drone usage</p>
                  <p className="font-display text-accent text-lg">$450</p>
                </div>

                {/* Additional Hour */}
                <div>
                  <div className="overflow-hidden rounded-lg mb-4 flex items-center justify-center bg-background">
                    <img src={addonHour} alt="Additional Hour" className="w-48 h-48 object-contain" />
                  </div>
                  <h3 className="font-display text-lg text-primary mb-2">Additional Hour</h3>
                  <p className="font-body text-sm text-muted-foreground mb-2">
                    Purchase an additional hour of coverage to meet the needs of your special day.
                  </p>
                  <p className="font-display text-accent text-lg">$150</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-primary">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
                  Ready to Book Your Package?
                </h2>
                <p className="font-body text-primary-foreground/80 leading-relaxed mb-8">
                  Let us help you share your special day with everyone you love. Contact us today
                  to learn more about our packages and how we can make your celebration accessible
                  to all your guests.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-body px-8"
                >
                  <Link to="/contact">Let's Chat!</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
