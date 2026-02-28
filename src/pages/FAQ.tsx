import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import outdoorCeremonyImg from "@/assets/faq/outdoor-ceremony.webp";
import coupleKissImg from "@/assets/faq/couple-kiss.webp";
import boutonnieresImg from "@/assets/faq/boutonnieres.webp";
import receptionImg from "@/assets/faq/reception-laughing.webp";

const faqItems = [
  {
    question: "How does live streaming work?",
    answer:
      "We will set up multiple cameras and switch between them to capture all the action from the best angles. With our team onsite you will simply have to relax and enjoy your wedding day.",
  },
  {
    question: "How and when will I get my video?",
    answer:
      "A recording of your live stream is available within 7-10 business days of your ceremony. If you've purchased a USB you will recieve your drive in the mail following your ceremony.",
  },
  {
    question: "What platforms do you use?",
    answer:
      "We provide various platforms to support our couple's preferences. We can use Youtube or Zoom. Our Youtube options are the most popular option for our couples. This platform allows guests to be free from distractions so they can sit back, relax and enjoy the beautiful ceremony.",
  },
  {
    question: "Can our guests interact?",
    answer:
      "That depends on the platform - Youtube allows viewers to comment. We can also stream via Zoom and allow your online guests to interact visually as well.",
  },
  {
    question: "How is audio captured and incorporated?",
    answer:
      "Sound is essential to us. We also have multiple ways of capturing audio to give your viewers a high-quality listening experience. We can retrieve sound from your DJ's sounding board, your venue's sound system, or we always bring our own lapel mic's that are small and discrete. This way, we always ensure your voices are heard crystal clear for your virtual guests.",
  },
  {
    question: "For live streaming, what if my venue doesn't have Wi-Fi?",
    answer:
      "For our Gold and Silver packages, we provide our own wifi router if your venue requires it. The Gold and Silver package ensures that we don't run into challenges if the venue has a weak wifi connection.",
  },
  {
    question: "Do you have travelling fees?",
    answer:
      "Yes, our coverage expands to all of Ontario. The first 70km outside of the Toronto core is included in our base rate and $50.00 for every additional 70km.",
  },
  {
    question: "If I live stream, can anyone online see my video?",
    answer:
      "We provide you with a private streaming page that is visible only to those with whom you've shared the link.",
  },
  {
    question: "How do we share our live stream and will it be private?",
    answer:
      "We provide you with a private unlisted link that is visible only to those with whom you've shared the link with. Your landing page (Dream-Page) is also a private unlisted link that is visible to those with whom you've shared the link with.",
  },
  {
    question: "What's needed to reserve my date?",
    answer:
      "We require a 50% retainer and a signed contract to reserve your date.",
  },
  {
    question: "How does payment work?",
    answer:
      "We accept bank email transfer, debit/credit cards or PayPal.. 50% is required to reserve your date and the remaining amount is due 1 week before the wedding.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      'By reserving your date, we are saying "no" to other couples who may be interested. If you cancel completely, you will be refunded however much you\'ve paid minus the 50% retainer which is non-refundable. If you need to reschedule, that\'s not a problem! We\'ll do our best to accommodate your new date and be flexible. If your new date is more than a year out, your remaining balance is subjected to yearly inflation.',
  },
  {
    question: "What happens if we need more hours than originally booked?",
    answer:
      "Don't worry, we will never leave you hanging on your wedding day. If you would like us to stay for additional hours onsite, we charge an hourly rate and request that payment is provided prior to the video being delivered.",
  },
  {
    question: "How do you offer a highlight film as well?",
    answer:
      "Yes, we can create a highlight film of your wedding day. Please don't hesitate to ask and we can create a custom package to suit your desired request.",
  },
  {
    question: "Do you stream events other than weddings?",
    answer:
      "Yes, we sure do. Birthday parties, baby showers, bachelor/bachelorette parties, jack and jills and Bar and bat mitzvah.",
  },
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | Dream Streams</title>
        <meta
          name="description"
          content="Frequently asked questions about Dream Streams' wedding livestreaming services, pricing, and process."
        />
        <link rel="canonical" href="https://dreamstreams.ca/faq" />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Image Grid */}
        <section className="container mx-auto px-4 pt-8 pb-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={receptionImg}
                alt="Wedding reception"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={outdoorCeremonyImg}
                alt="Outdoor wedding ceremony"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={coupleKissImg}
                alt="Couple kissing at wedding"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={boutonnieresImg}
                alt="Wedding boutonnieres"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Heading Banner */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          {/* Copper wave background */}
          <div className="absolute inset-0 bg-accent/90" />
          <div
            className="absolute top-0 left-0 right-0 h-12"
            style={{
              background: "hsl(var(--background))",
              borderRadius: "0 0 50% 50%",
            }}
          />
          <div className="relative container mx-auto px-4 max-w-4xl text-center">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-accent-foreground mb-3 italic">
              frequently asked questions.
            </h1>
            <p className="font-body text-accent-foreground/80 uppercase tracking-[0.2em] text-xs md:text-sm mb-2">
              Have questions about the Dream Stream Process?
            </p>
            <p className="font-body text-accent-foreground/90 text-sm md:text-base">
              Below you will find a collection of some of our most commonly asked
              questions
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left font-body text-accent hover:text-accent/80 uppercase tracking-wider text-xs md:text-sm font-semibold py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
