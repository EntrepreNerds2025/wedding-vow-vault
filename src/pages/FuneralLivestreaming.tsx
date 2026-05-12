import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

import breathe8 from "@/assets/services/breathe_8.webp";
import breathe7 from "@/assets/services/breathe_7.webp";
import breathe9 from "@/assets/services/breathe_9.webp";
import breathe6 from "@/assets/services/breathe_6.webp";
import heroFuneral from "@/assets/funeral/Funeral_New_Banner.png";
import grandmaImg from "@/assets/funeral/grandma-names-we-love-jpg.webp";
import preachingImg from "@/assets/funeral/preachingatfuneral.webp";
import goldImg from "@/assets/funeral/download.webp";
import silverImg from "@/assets/funeral/raising-a-toast.webp";
import bronzeImg from "@/assets/funeral/celebration-of-life-memorial-venue-las-vegas.webp";

const packages = [
  {
    name: "Gold Package",
    price: "$1,300",
    image: goldImg,
    imageFirst: true,
    features: [
      "Celebration of Life/Service Streaming",
      "Event Flyer Creation",
      "Unlimited Viewers",
      "30 minute Planning Session",
      "3-4 Camera Angles with Mobile Capabilities (switching angles, to give a dynamic stream)",
      "Pre-record Slideshow",
      "Include Dream Thank You Video (Provided by you)",
      "Include Dream Story Video (Edited by Us)",
      "Dream Page - Custom Landing Page",
      "USB Stick",
      "Professional Wireless Input microphones, post-amplifying",
      "Live Chat Capability",
      "Internet Provided if Needed",
      "7-10 Business Days HD Footage Delivery",
    ],
  },
  {
    name: "Silver Package",
    price: "$900",
    image: silverImg,
    imageFirst: false,
    features: [
      "Celebration of Life/Service Streaming",
      "Youtube or Zoom",
      "Event Flyer Creation",
      "Unlimited Viewers",
      "2 Camera Angles with Mobile Capabilities (switching angles to give a dynamic stream)",
      "Include Dream Thank You Video (Provided by you)",
      "Pre-record Slideshow",
      "Professional Audio with wireless Lavaliers post-amplifying",
      "Live Chat Capability",
      "Internet Provided if Needed",
      "7-10 Business Days HD Footage Delivery",
    ],
  },
  {
    name: "Bronze Package",
    price: "$600",
    image: bronzeImg,
    imageFirst: true,
    features: [
      "Celebration of Life/Funeral Streaming",
      "Youtube Only",
      "Unlimited Viewers",
      "1 Camera Angle",
      "Professional Audio post-amplifying",
      "Live Chat Capability",
      "Venue Wifi Required",
      "7-10 Business Days HD Footage Delivery",
    ],
  },
];

const FuneralLivestreaming = () => {
  return (
    <>
      <Helmet>
        <title>Toronto Funeral and Celebration of Life Livestreaming</title>
        <meta
          name="description"
          content="Compassionate funeral livestreaming services by Dream Streams. Allow loved ones to grieve together from anywhere with professional, dignified memorial streaming."
        />
        <link rel="canonical" href="https://dreamstreams.ca/funerallivestreaming" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* 1. Hero Banner */}
          <section className="relative w-full h-[70vh] min-h-[400px] overflow-hidden">
            <img
               src={heroFuneral}
               alt="Grandpa smiling in a group hug celebration of life"
               className="absolute inset-0 w-full h-full object-cover"
             />
            <div className="absolute inset-0 bg-primary/30" />
          </section>


          {/* 4. Why Livestream a Funeral */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div
                    className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 hidden md:block"
                    style={{ borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%" }}
                  />
                  <img
                    src={grandmaImg}
                    alt="Grandmother embracing grandchild with love"
                    className="relative rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
                    Why Livestream a Funeral?
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">
                    In times of grief, being together matters more than ever. But distance, health,
                    travel restrictions, or other circumstances can prevent loved ones from attending
                    in person.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">
                    Funeral livestreaming allows everyone — no matter where they are — to be part of
                    the service, to grieve together, and to honour the life of someone special.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    With Dream Streams, families can share these sacred moments with dignity, comfort,
                    and the highest quality streaming experience available.
                  </p>
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-body">
                    <Link to="/contact/funerals">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Video Experience Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
                    Because your guests' live viewing experience really does matter
                  </h2>
                  <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                    See the difference a professional Dream Streams memorial livestream makes
                    compared to standard video calling platforms.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent hidden md:block" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent hidden md:block" />
                  <div className="aspect-video rounded-lg overflow-hidden shadow-2xl bg-primary/10">
                    <iframe
                      src="https://player.vimeo.com/video/1169120409?title=0&byline=0&portrait=0"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Dream Streams Funeral Livestream Experience"
                    />
                  </div>
                </div>
                {/* Zoom vs Dream Streams comparison */}
                <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <div className="text-center p-6 bg-muted rounded-lg">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                      <span className="font-display text-2xl text-muted-foreground">Z</span>
                    </div>
                    <h3 className="font-display text-lg text-muted-foreground mb-1">Standard Zoom</h3>
                    <p className="font-body text-sm text-muted-foreground/70">Limited to 40 min on free plan</p>
                  </div>
                  <div className="text-center p-6 bg-accent/10 rounded-lg border-2 border-accent">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="font-display text-2xl text-accent">DS</span>
                    </div>
                    <h3 className="font-display text-lg text-primary mb-1">Dream Streams</h3>
                    <p className="font-body text-sm text-muted-foreground">Unlimited time, unlimited guests</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. We're here to help you */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
                  We're here to help you.
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  Dream Streams approaches every funeral livestream with the utmost compassion and
                  professionalism. We understand the sensitivity of these moments and handle every
                  detail with care, so families can focus on what truly matters — being together in spirit.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  Our experienced team works discreetly and respectfully, ensuring a seamless
                  experience for both in-person and virtual attendees.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 font-body">
                  <Link to="/contact/funerals">Learn More</Link>
                </Button>
              </div>
            </div>
          </section>


          {/* 9. Our Packages */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
                  Our Packages
                </h2>
                <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                  Choose the package that best honours your loved one's memory.
                </p>
              </div>
              <div className="max-w-5xl mx-auto space-y-0">
                {packages.map((pkg, i) => {
                  const imageBlock = (
                    <div className="relative md:w-1/2 aspect-[4/3] overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                        <span className="font-display text-3xl text-primary-foreground drop-shadow-lg">
                          {pkg.name}
                        </span>
                      </div>
                    </div>
                  );

                  const detailsBlock = (
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                      <h3 className="font-display text-2xl text-primary mb-1">{pkg.name}</h3>
                      <p className="font-display text-3xl text-accent mb-6">{pkg.price}</p>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );

                  return (
                    <div key={i}>
                      <div className={`flex flex-col ${pkg.imageFirst ? 'md:flex-row' : 'md:flex-row-reverse'} bg-background rounded-lg overflow-hidden shadow-lg`}>
                        {imageBlock}
                        {detailsBlock}
                      </div>
                      {i < packages.length - 1 && (
                        <div className="border-b border-border my-8" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 9b. Add-Ons */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
                  Add-Ons
                </h2>
                <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                  Customize your package with additional services to make the day even more memorable.
                </p>
              </div>
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Burial Livestream",
                    price: "$300",
                    image: "https://images.unsplash.com/photo-1602522953860-44eb37798e22?w=800&q=80",
                    description: "We have the capability to live stream outdoors at a burial site without the need of power depending on the length of time of the burial.",
                  },
                  {
                    name: "Videography Highlight Film",
                    price: "$400",
                    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
                    description: "Looking to combine our videographer and live streaming package? Have your event live-streamed while capturing every moment, put into a highlight video that can be watched again and again. When you think about the cost of hiring a separate videographer.. it's a steal of a deal.",
                  },
                  {
                    name: "Zoom – TV Monitor Rental",
                    price: "$250",
                    image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?w=800&q=80",
                    description: "Looking for an opportunity to virtually and visually engage with your guests? Rent our large screen monitor for Zoom to see everyone viewing the event on a large screen.",
                  },
                  {
                    name: "Dream Story (We Film and Edit)",
                    price: "$350",
                    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
                    description: "A short film of the unique story of your late loved one, to be played while your audience waits for your live stream event to begin. What a beautiful opportunity to share your love story with your friends and family.",
                  },
                  {
                    name: "Funeral Viewing",
                    price: "$300",
                    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
                    description: "Livestream the Viewing before the funeral.",
                  },
                  {
                    name: "Additional Hour",
                    price: "$150",
                    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80",
                    description: "Purchase an additional hour of coverage to meet the needs of your special day.",
                  },
                ].map((addon, i) => (
                  <div key={i} className="bg-secondary rounded-lg overflow-hidden shadow-lg flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={addon.image} alt={addon.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-xl text-primary mb-1">{addon.name}</h3>
                      <p className="font-display text-2xl text-accent mb-3">{addon.price}</p>
                      <p className="font-body text-sm text-muted-foreground">{addon.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 10. Spiritual Leader Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
                    You may also be a Spiritual Leader, Funeral Director, or Celebrant...
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">
                    If you are a funeral home, spiritual leader, pastor, imam, rabbi, or celebrant,
                    Dream Streams can be your trusted livestreaming partner. We work alongside you to
                    provide families with a professional, respectful streaming experience that
                    complements your services.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed mb-8">
                    Partner with us to offer an additional level of care and service to grieving
                    families — allowing their loved ones from around the world to be present during
                    these important moments.
                  </p>
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-body">
                    <Link to="/contact/funerals">Get in Touch</Link>
                  </Button>
                </div>
                <div className="relative">
                  <div
                    className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 hidden md:block"
                    style={{ borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%" }}
                  />
                  <img
                    src={preachingImg}
                    alt="Spiritual leader preaching at a funeral service"
                    className="relative rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 11. Ready to Get Started CTA */}
          <section className="py-20 bg-accent/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
                  Ready to Get Started?
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  Let us help you honour your loved one's memory and bring everyone together,
                  no matter the distance. Contact us today to learn more about our funeral
                  livestreaming services.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-body px-8">
                  <Link to="/contact/funerals">Let's Chat!</Link>
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

export default FuneralLivestreaming;
