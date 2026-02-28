import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import heroImg from "@/assets/about/326A8122.webp";
import xoxoImg from "@/assets/about/pexels-karolina-grabowska-4016535.webp";
import masksImg from "@/assets/about/326A8139.webp";
import rovannImg from "@/assets/about/DSC09552.webp";
import cameshaImg from "@/assets/about/Camesha-0018-web.webp";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Dream Streams – Wedding Livestreaming Toronto</title>
        <meta
          name="description"
          content="Meet the dream team behind Dream Streams. Our story of love, resilience, and a passion for wedding livestreaming born during a global pandemic." />

      </Helmet>

      <Header />

      <main>
        {/* Hero / Our Story Section */}
        <section className="relative bg-secondary overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left – Photo with decorative curve */}
              <div className="relative">
                {/* Decorative copper curve */}
                <svg
                  className="absolute -top-8 -right-8 w-[55%] h-auto z-0"
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">

                  <path
                    d="M300 0 C300 0 300 150 150 200 C0 250 0 300 0 300 L300 300 Z"
                    fill="hsl(27 60% 49%)" />

                </svg>
                <img
                  src={heroImg}
                  alt="Dream Streams founders on their wedding day"
                  className="relative z-10 w-full h-auto object-cover rounded-sm"
                  loading="eager" />

              </div>

              {/* Right – Text */}
              <div className="flex flex-col gap-4">
                <h1 className="font-display text-4xl md:text-5xl italic text-foreground">
                  the dream team.
                </h1>
                <p className="font-display text-sm tracking-[0.25em] uppercase text-accent">
                  Our Story
                </p>
                <p className="font-body text-sm md:text-base leading-relaxed text-muted-foreground">
                  Never in a million years did we think we would be getting married to the love of
                  our lives during a global pandemic. We faced many twists and turns as we tried
                  to navigate the changes and mandates we were currently facing. We found ways to
                  modify during these challenging times to plan the perfect day we had always hoped
                  for. We went from a 150+ person wedding and reception at a gorgeous lakeside
                  private Chateau to a 25 person ceremony with our closest family and friends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* XOXO + Chapters Section */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 md:py-20">
            {/* XOXO image */}
            <div className="max-w-2xl mx-auto mb-12">
              <img
                src={xoxoImg}
                alt="XOXO candy letters"
                className="w-full h-auto object-cover"
                loading="lazy" />

            </div>

            {/* Two-column chapters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Chapter 1 */}
              <div className="text-center md:text-left">
                <h2 className="font-display text-sm tracking-[0.25em] uppercase text-accent mb-4">
                  Chapter 1
                </h2>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">Initially, for people like Rovonn and I, we were heartbroken by the thought of not having our friends and family witness us make one of the most significant decisions of our lives. So my extremely intelligent soon to be husband (at the time) decided he would invest time to learn how to set up a live stream production himself for our special day.





                </p>
              </div>

              {/* Chapter 2 */}
              <div className="text-center md:text-left">
                <h2 className="font-display text-sm tracking-[0.25em] uppercase text-accent mb-4">
                  Chapter 2
                </h2>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  As a videographer, he quickly adapted his services to offer a fun, unique live
                  streaming experience for our virtual guests that went above and beyond a simple
                  Skype or Zoom call! One of the most important elements of a live stream is audio;
                  so you can actually hear the vows. Most DIY solutions can't deliver on this
                  front, so we've made sure that our streaming services allow our couples to be
                  heard as well as seen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3 Section */}
        <section className="bg-background">
          <div className="container mx-auto px-4 pb-16 md:pb-20">
            {/* Masks photo */}
            <div className="max-w-2xl mx-auto mb-8">
              <img
                src={masksImg}
                alt="Couple on their wedding day wearing masks"
                className="w-full h-auto object-cover"
                loading="lazy" />

            </div>

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-sm tracking-[0.25em] uppercase text-accent mb-4">
                Chapter 3
              </h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                Our Livestream wedding quickly became an integral part of our beautiful vision,
                enabling us to have 350+ friends and family from around the world witness our
                magical day.
              </p>
            </div>

            {/* Decorative divider */}
            <div className="max-w-3xl mx-auto mt-8">
              <hr className="border-border" />
            </div>
          </div>
        </section>

        {/* The Duo Section */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="font-display text-4xl md:text-5xl italic text-foreground mb-12 text-center md:text-left">
              the duo.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Rovann */}
              <div className="text-center">
                <img
                  src={rovannImg}
                  alt="Rovann – Director and Camera Operator"
                  className="w-full aspect-[3/4] object-cover mb-4"
                  loading="lazy" />

                <p className="font-display text-lg italic text-foreground">Rovann</p>
                <p className="font-body text-sm text-muted-foreground">
                  Director / Camera Operator
                </p>
              </div>

              {/* Camesha */}
              <div className="text-center">
                <img
                  src={cameshaImg}
                  alt="Camesha – Producer and Administrator"
                  className="w-full aspect-[3/4] object-cover mb-4"
                  loading="lazy" />

                <p className="font-display text-lg italic text-foreground">Camesha</p>
                <p className="font-body text-sm text-muted-foreground">
                  Producer / Administrator
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>);

};

export default About;