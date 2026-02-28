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
import heroFuneral from "@/assets/funeral/download.webp";
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
        <title>Funeral Livestreaming Services | Dream Streams</title>
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
               alt="Celebration of life with sparklers"
               className="absolute inset-0 w-full h-full object-cover"
             />
            <div className="absolute inset-0 bg-primary/30" />
          </section>

          {/* 2. Quote + Intro Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <blockquote className="font-display text-2xl md:text-3xl text-primary italic mb-8">
                  "You never know how strong you are until being strong is the only choice you have"
                </blockquote>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  At Dream Streams, we understand that losing a loved one is one of the most difficult
                  experiences in life. Our funeral livestreaming services provide a compassionate way
                  for family and friends to come together, no matter where they are in the world. We
                  ensure that every tribute, every memory, and every moment of love is shared with
                  dignity and care.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 font-body">
                  <Link to="/pricing">Learn More</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* 3. Banner - Dream and Grieve */}
          <section className="relative w-full h-[50vh] min-h-[300px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&q=80"
              alt="Memorial flowers and candles"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
              <h2 className="font-display text-3xl md:text-5xl text-primary-foreground text-center px-4">
                Dream and Grieve with Unlimited Attendees
              </h2>
            </div>
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
                    src="https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?w=800&q=80"
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
                  <p className="font-body text-muted-foreground leading-relaxed">
                    With Dream Streams, families can share these sacred moments with dignity, comfort,
                    and the highest quality streaming experience available.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. We're here to help you */}
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
                  <Link to="/pricing">Learn More</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* 6. What Makes Dream Streams Unique */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl mb-4">
                  What Makes Dream Streams Unique?
                </h2>
                <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto">
                  We provide more than just a livestream — we create a meaningful, dignified viewing
                  experience for your guests.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { image: breathe8, label: "Custom Webpage" },
                  { image: breathe7, label: "Video Tribute" },
                  { image: breathe9, label: "Memorial Page" },
                  { image: breathe6, label: "Video Invitation" },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                    <div className="p-3 bg-primary-foreground/10 text-center">
                      <span className="font-display text-sm">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Family Photo Section */}
          <section className="relative py-20 bg-secondary overflow-hidden">
            <div
              className="absolute top-10 left-10 w-48 h-48 bg-accent/15 hidden lg:block"
              style={{ borderRadius: "50% 40% 60% 30% / 40% 50% 30% 60%" }}
            />
            <div
              className="absolute bottom-10 right-10 w-36 h-36 bg-accent/15 hidden lg:block"
              style={{ borderRadius: "30% 60% 40% 50% / 60% 30% 50% 40%" }}
            />
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80"
                  alt="Family gathering together in remembrance"
                  className="w-full h-auto rounded-lg shadow-2xl object-cover aspect-[16/9]"
                />
              </div>
            </div>
          </section>

          {/* 8. Spiritual Leader Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
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
                  <Link to="/contact">Get in Touch</Link>
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

          {/* 10. Ready to Get Started CTA */}
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
                  <Link to="/contact">Let's Chat!</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* 11. Video Experience Section */}
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

          {/* 12. Final CTA */}
          <section className="py-16 bg-primary">
            <div className="container mx-auto px-4 text-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body px-10 text-lg"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FuneralLivestreaming;
