import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import bannerImg from "@/assets/additional/banner.webp";
import corporateImg from "@/assets/additional/corporate.webp";
import funeralImg from "@/assets/additional/funeral.webp";
import graduationImg from "@/assets/additional/graduation.webp";
import barMitzvahImg from "@/assets/additional/bar_mitzvah.webp";
import concertsImg from "@/assets/additional/concerts.webp";
import ticketsImg from "@/assets/additional/tickets.webp";

const services = [
  {
    num: "01",
    title: "CORPORATE & CONFERENCE EVENTS",
    description:
      "Reach a wider demographic and expand your community while increasing sales.\n\nGet your employees motivated and mobilized with our corporate streaming solution. Stream your workshops and seminars to engage with them directly anywhere in the world.",
    image: corporateImg,
  },
  {
    num: "02",
    title: "FUNERALS",
    description:
      "There are times when distance, health or other circumstances make it impossible for some family and friends to attend a funeral and pay their respects. We provide a great alternative allowing those unable to attend the opportunity to participate, say goodbye and watch the funeral for themselves wherever they are in the world.",
    image: funeralImg,
    link: "/funerallivestreaming",
    linkText: "Learn more about our funeral livestreaming services →",
  },
  {
    num: "03",
    title: "EVENTS AND GRADUATIONS",
    description:
      "In the current time school events and graduations have been canceled or limited to a zoom session. Allow us to deliver a high-quality live stream of your school event or graduation to your parents and community and continue to grow your school's culture.",
    image: graduationImg,
  },
  {
    num: "04",
    title: "BAR/BAT MITZVAH",
    description:
      "Bar/Bat Mitzvah ceremonies are unequivocally the most important ritual in a young person's life. It is a joyous occasion for all involved.\n\nWhile it is ideal to have everyone present during such important of days, sometimes it is simply not possible. There may be many reasons such as poor health, financial constraints or perhaps long-distance separates them. Use live streaming as an opportunity to capture such a magnificent moment in one's life.",
    image: barMitzvahImg,
  },
  {
    num: "05",
    title: "CONCERTS",
    description:
      "Such an incredible way to offer your fans a fun experience from the comfort of their own home. Live stream truly serves as a dual function. Both an event and clips of digital content for future promotional opportunities, communications or brand promotion.",
    image: concertsImg,
  },
];

const moreServices = [
  "Political Events",
  "Podcasts",
  "Panel Discussions",
  "Contest/Influencers Events",
  "Trade Shows & Fashion Shows",
  "Summits",
];

const eventPhases = [
  {
    title: "Pre-event planning",
    items: "Strategy + Creative, Visual Storytelling, Explainer Videos, Marketing Videos, Animated Videos",
  },
  {
    title: "At-event production",
    items: "Event Videos, Live Stream, Corporate Videos, Drone Videography, Event Photography",
  },
  {
    title: "Post-event promotion",
    items: "Event Recap Videos, Sizzle Videos, Promotional Videos, Social Media Videos, Video Marketing",
  },
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
        {/* Hero Banner */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={bannerImg}
            alt="Speaker presenting at a live event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto max-w-6xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Additional Services.
              </h1>
              <div className="bg-accent/90 text-accent-foreground p-6 md:p-8 max-w-lg rounded-xl">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                  Reach Thousands Live
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
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What other live stream services do we offer?
            </h2>
          </div>
        </section>

        {/* Alternating Service Cards */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 max-w-6xl space-y-16 md:space-y-24">
            {services.map((service, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <div
                  key={service.num}
                  className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-80 object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <span className="text-accent font-body font-semibold text-sm tracking-widest uppercase">
                      {service.num}. {service.title}
                    </span>
                    {service.description.split("\n\n").map((p, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {p}
                      </p>
                    ))}
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
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
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
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you need live video, animation or a video marketing strategy,
                  we work alongside you to share your story during all aspects of your
                  event, conference, or trade show.
                </p>
                <div className="space-y-6">
                  {eventPhases.map((phase) => (
                    <div key={phase.title}>
                      <h4 className="font-display text-lg font-bold text-foreground mb-1">
                        {phase.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {phase.items}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Return on Investment */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={ticketsImg}
                alt="Laptop showing event tickets and livestream"
                className="w-full h-[350px] md:h-[450px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 md:bottom-8 md:left-8 bg-accent/90 text-accent-foreground p-8 md:p-10 max-w-md rounded-tr-2xl md:rounded-2xl">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                  Return on your Investment
                </h2>
                <p className="text-sm md:text-base leading-relaxed opacity-95">
                  With our strategy team, we can help support you monetize your event
                  live stream with live pay-per-view, entrance fee or donations. You can
                  also generate leads by adding customizable event registration forms to
                  collect actionable information from your registrants. Then, integrate
                  that data to further market your future events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
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
