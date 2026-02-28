import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const services = [
  {
    num: "01",
    title: "CORPORATE & CONFERENCE EVENTS",
    description:
      "Whether it's a corporate town hall, a product launch, or a major conference, Dream Streams ensures your event reaches a global audience in real-time. Our professional multi-camera livestream setups capture every keynote, panel, and breakout session with broadcast-quality production.",
  },
  {
    num: "02",
    title: "FUNERALS AND CELEBRATIONS OF LIFE",
    description:
      "We understand how important it is to include loved ones who can't be there in person. Dream Streams provides compassionate, professional funeral livestreaming services so family and friends can participate from anywhere in the world.",
    link: "/funerallivestreaming",
    linkText: "Learn more about our funeral livestreaming services →",
  },
  {
    num: "03",
    title: "CONCERTS AND FESTIVALS",
    description:
      "Bring the energy of live music to screens everywhere. From intimate acoustic sets to massive outdoor festivals, our team captures the full experience — the crowd, the lights, the sound — and streams it live to fans who can't make it in person.",
  },
  {
    num: "04",
    title: "RELIGIOUS SETTINGS",
    description:
      "Churches, mosques, temples, and other houses of worship rely on Dream Streams to share their services and ceremonies with congregants near and far. We handle the technology so spiritual leaders can focus on their message.",
  },
  {
    num: "05",
    title: "CONCERTS / LIVE MUSIC",
    description:
      "From band performances and DJ sets to music showcases and album release parties — we bring the stage to screens worldwide. Our multi-camera setups and professional audio ensure your audience gets the full experience, no matter where they're watching from.",
  },
];

const moreServices = [
  "Podcasts",
  "Product Launches",
  "Travel and Leisure",
  "Exclusive and Creative Events",
  "Expos and Trade Shows",
  "Webinars",
];

const AdditionalServices = () => {
  return (
    <>
      <Helmet>
        <title>Additional Services | Dream Streams</title>
        <meta
          name="description"
          content="Explore Dream Streams' additional livestream services including corporate events, concerts, religious settings, and more."
        />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Additional Services.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Beyond weddings, Dream Streams offers professional livestreaming for a
              wide range of events. From corporate conferences to concerts, religious
              ceremonies to celebrations of life — we bring your moments to the world.
            </p>
          </div>
          {/* Decorative blob */}
          <div
            className="absolute -top-10 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
            }}
          />
        </section>

        {/* Reach Millions Live */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
                alt="Speaker at a large conference event"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 right-0 md:bottom-8 md:right-8 bg-accent/90 text-accent-foreground p-8 md:p-10 max-w-md rounded-tl-2xl md:rounded-2xl">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                  Reach Millions Live
                </h2>
                <p className="text-sm md:text-base leading-relaxed opacity-95">
                  Our professional livestream production ensures your event reaches
                  audiences around the globe with crystal-clear video and audio — no
                  matter the size or type of event.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What other services heading */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              What other live stream services do we offer?
            </h2>
          </div>
        </section>

        {/* Alternating Service Cards */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-6xl space-y-16 md:space-y-24">
            {services.map((service, index) => {
              const isReversed = index % 2 !== 0;
              const images = [
                "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
                "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80",
                "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80",
                "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&q=80",
                "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
              ];
              return (
                <div
                  key={service.num}
                  className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={images[index]}
                      alt={service.title}
                      className="w-full h-64 md:h-80 object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <span className="text-accent font-body font-semibold text-sm tracking-widest uppercase">
                      {service.num} {service.title}
                    </span>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    {service.link && (
                      <Link
                        to={service.link}
                        className="inline-block text-accent hover:text-accent/80 font-medium transition-colors text-sm"
                      >
                        {service.linkText}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* And much more */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16">
              <div className="w-full md:w-1/2">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  And much more:
                </h3>
                <ul className="space-y-3">
                  {moreServices.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dream Streams is a multi-faceted production company. In addition to
                  livestreaming, we also offer professional Photography, Videography,
                  and Audio services for events of all sizes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need a single-camera stream for an intimate gathering or a
                  full multi-camera production for a large-scale event, our team has the
                  experience and equipment to deliver exceptional results every time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Return on Investment */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80"
                alt="Laptop showing livestream analytics"
                className="w-full h-[350px] md:h-[450px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 md:bottom-8 md:left-8 bg-accent/90 text-accent-foreground p-8 md:p-10 max-w-md rounded-tr-2xl md:rounded-2xl">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                  Return on your Investment
                </h2>
                <p className="text-sm md:text-base leading-relaxed opacity-95">
                  Livestreaming your event isn't just about reaching more people — it's
                  about maximizing the value of every moment. Extend your reach, engage
                  remote audiences, and create lasting content that keeps working long
                  after the event ends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Want to reach an unlimited audience..
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
              Let us turn your events into dynamic livestreamed experiences that
              captivate audiences around the world.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-body">
              {[
                { label: "What", path: "/services" },
                { label: "Where", path: "/about" },
                { label: "Who", path: "/about" },
                { label: "Find Us", path: "/contact" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-primary-foreground/70 hover:text-accent transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AdditionalServices;
