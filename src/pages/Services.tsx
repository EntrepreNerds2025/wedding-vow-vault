import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Monitor, Shield, Heart, Globe, Plane, Baby, Heart as HeartIcon, Video } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import breathe8 from "@/assets/services/breathe_8.webp";
import breathe7 from "@/assets/services/breathe_7.webp";
import breathe9 from "@/assets/services/breathe_9.webp";
import breathe6 from "@/assets/services/breathe_6.webp";

const benefits = [
  {
    number: "01",
    title: "Come One, Come All",
    description:
      "Share your special day with unlimited guests from anywhere in the world. Distance is no longer a barrier to celebration.",
    icon: Users,
  },
  {
    number: "02",
    title: "High Quality Streaming",
    description:
      "Crystal-clear HD video and audio quality ensures your guests feel like they're right there with you.",
    icon: Monitor,
  },
  {
    number: "03",
    title: "Worry Free",
    description:
      "Our experienced team handles all the technical details so you can focus on enjoying your day.",
    icon: Shield,
  },
  {
    number: "04",
    title: "Above and Beyond",
    description:
      "We go the extra mile to ensure every aspect of your livestream exceeds expectations.",
    icon: Heart,
  },
];

const uniqueSlides = [
  {
    image: breathe8,
    label: "dream story",
    title: "A Short Film",
    description:
      "A beautifully crafted short film of your ceremony that captures the emotion and magic of your day.",
  },
  {
    image: breathe7,
    label: "dream thank-you",
    title: "Pre-Recorded Thank-You Video",
    description:
      "A heartfelt thank-you message from you and your partner, shared with all your virtual guests.",
  },
  {
    image: breathe9,
    label: "dream page",
    title: "Custom Webpage",
    description:
      "A personalized webpage for your guests to access your livestream, photos, and more.",
  },
  {
    image: breathe6,
    label: "dream invite",
    title: "Exclusive Video Guest Invitation",
    description:
      "A custom video invitation sent to your virtual guests to make them feel included from the start.",
  },
];

const reasons = [
  {
    icon: Globe,
    title: "Distant Loved Ones",
    description:
      "Family and friends scattered around the world can watch your ceremony live, no matter their location or time zone.",
  },
  {
    icon: Heart,
    title: "Elderly & Immobile Guests",
    description:
      "Grandparents and loved ones who can't travel can still be part of your special day from the comfort of their home.",
  },
  {
    icon: Shield,
    title: "Health & Safety",
    description:
      "Whether it's COVID concerns, compromised immune systems, or other health barriers, livestreaming keeps everyone safe and included.",
  },
  {
    icon: Plane,
    title: "Destination Weddings",
    description:
      "Getting married abroad? Let everyone back home experience the magic without the travel costs.",
  },
  {
    icon: Video,
    title: "Military Families",
    description:
      "For service members deployed overseas, a livestream means they never have to miss a family milestone.",
  },
  {
    icon: Baby,
    title: "New Parents & Caregivers",
    description:
      "Parents with newborns or those caring for others at home can still witness every moment in real time.",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Wedding Livestreaming Services | Dream Streams</title>
        <meta
          name="description"
          content="Professional wedding livestreaming services by Dream Streams. Share your special day with loved ones anywhere in the world with high-quality, worry-free streaming."
        />
        <link rel="canonical" href="https://dreamstreams.ca/services" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <iframe
                src="https://player.vimeo.com/video/776013593?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
                className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
                style={{ border: "none" }}
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Dream Streams Wedding Livestream Banner"
              />
            </div>
            <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
          </section>

          {/* Welcome Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="font-display text-3xl md:text-4xl text-primary mb-4">
                  Welcome to Dream Streams!
                </h1>
                <p className="font-display text-xl md:text-2xl text-accent italic mb-6">
                  Wherever. Whenever. Together.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  At Dream Streams, we believe that every moment of your wedding
                  day is precious and deserves to be shared with those who matter
                  most. Our professional wedding livestreaming services ensure
                  that your loved ones can witness your special day in real-time,
                  no matter where they are in the world. From intimate ceremonies
                  to grand celebrations, we capture every heartfelt moment with
                  crystal-clear quality and seamless streaming.
                </p>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 font-body"
                >
                  <Link to="/pricing">Learn More</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Commitment Section */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-accent/20 hidden md:block" />
                  <div className="absolute inset-0 border-2 border-accent transform translate-x-4 translate-y-4 rounded-lg" />
                  <img
                    src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80"
                    alt="Wedding rings representing our commitment to quality livestreaming"
                    className="relative rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
                    Our Commitment to You
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    We understand that your wedding day is one of the most
                    important days of your life. That's why we're committed to
                    providing you with the highest quality livestream service,
                    ensuring that every precious moment is captured and shared
                    flawlessly.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed mb-8">
                    Our team of experienced professionals uses state-of-the-art
                    equipment and technology to deliver a seamless viewing
                    experience for your guests, whether they're watching from
                    across the city or across the globe.
                  </p>
                  <Button
                    asChild
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-body"
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
                  Leave the Work and Worry to Us
                </h2>
                <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                  We take care of everything so you can focus on what matters
                  most — celebrating your love.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.number}
                    className="text-center p-6 bg-secondary rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <span className="font-display text-4xl text-accent/30 block mb-2">
                      {benefit.number}
                    </span>
                    <h3 className="font-display text-xl text-primary mb-3">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 font-body"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* What Makes Dream Streams Unique */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl mb-4">
                  What Makes Dream Streams Unique
                </h2>
                <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto">
                  We go beyond just livestreaming — we create a complete
                  experience for you and your guests.
                </p>
              </div>

              <div className="max-w-4xl mx-auto px-12">
                <Carousel opts={{ loop: true }}>
                  <CarouselContent>
                    {uniqueSlides.map((slide, index) => (
                      <CarouselItem key={index}>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-full max-w-lg mb-6 rounded-lg overflow-hidden shadow-2xl">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-full h-auto object-cover aspect-[4/3]"
                            />
                          </div>
                          <span className="font-display text-accent italic text-lg mb-1">
                            {slide.label}
                          </span>
                          <h3 className="font-display text-2xl mb-3">
                            {slide.title}
                          </h3>
                          <p className="font-body text-primary-foreground/80 max-w-md">
                            {slide.description}
                          </p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="text-primary bg-primary-foreground hover:bg-primary-foreground/90" />
                  <CarouselNext className="text-primary bg-primary-foreground hover:bg-primary-foreground/90" />
                </Carousel>
              </div>
            </div>
          </section>

          {/* Why Livestream Your Wedding */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
                  Why Livestream Your Wedding?
                </h2>
                <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                  In today's world, there are countless reasons why loved ones
                  may not be able to attend in person. Livestreaming bridges that
                  gap.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-6 bg-background rounded-lg shadow-sm"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                        <reason.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-primary mb-2">
                        {reason.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Video Showcase */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
                    What Does a Gold Package Look Like?
                  </h2>
                  <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                    See the quality and professionalism that goes into every
                    Dream Streams production.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent hidden md:block" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent hidden md:block" />
                  <div className="aspect-video rounded-lg overflow-hidden shadow-2xl bg-primary/10">
                    <iframe
                      src="https://player.vimeo.com/video/924622427?title=0&byline=0&portrait=0"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Dream Streams Gold Package Wedding Livestream Example"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
                  Ready to Get Started?
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  Let us help you share your special day with everyone you love.
                  Contact us today to learn more about our wedding livestreaming
                  packages and how we can make your celebration accessible to all
                  your guests, no matter where they are in the world.
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

export default Services;
