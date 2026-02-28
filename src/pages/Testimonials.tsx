import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import claudiaPaulImg from "@/assets/testimonials/claudia-paul.webp";
import breanneMichaelImg from "@/assets/testimonials/breanne-michael.webp";
import sanaWardImg from "@/assets/testimonials/sana-ward.webp";
import hollyWeiImg from "@/assets/testimonials/holly-wei.webp";
import natashaTylerImg from "@/assets/testimonials/natasha-tyler.webp";
import janeZionImg from "@/assets/testimonials/jane-zion.webp";
import sierraMichaelImg from "@/assets/testimonials/sierra-michael.webp";
import thaeannMarvinImg from "@/assets/testimonials/thaeann-marvin.webp";
import rahaJimmyImg from "@/assets/testimonials/raha-jimmy.webp";

interface Testimonial {
  names: string;
  image: string;
  imagePosition: "left" | "right";
  paragraphs: string[];
  closing?: string[];
}

const testimonials: Testimonial[] = [
  {
    names: "Claudia & Paul",
    image: claudiaPaulImg,
    imagePosition: "left",
    paragraphs: [
      "Camesha & Rovonn were truly a DREAM to work with! From our first phone call, I could tell that they were so passionate about providing us and our guests with the best experience. We knew we were in good hands! They were always quick to answer any questions we had leading up to our special day, which helped us have peace of mind. For days after our wedding, we received so many compliments from our guests telling us that it was the best quality live stream ceremony they have ever watched!",
      "We are so grateful to have found such an amazing team. Hiring Dream Streams was one of the best decisions we made for our wedding!",
      "Thank you both again for everything! :)",
    ],
    closing: ["Best,", "Claudia & Paul"],
  },
  {
    names: "Breanne & Michael",
    image: breanneMichaelImg,
    imagePosition: "right",
    paragraphs: [
      "Planning a wedding during the Covid-19 pandemic was a fluster of unknowns. Having the privilege to work with Dream Streams, made the process that much easier. Right from the jump Dream Streams worked with us in bringing our vision to reality. One of our favourite qualities of the Dream Streams team were their prompt and informative responses to our questions and concerns. With the pandemic changing aspects of our wedding on a week to week basis, Dreams Stream was right there each step of the way, assuring us that our wedding day stream would be perfect. The feedback from our guests was overflowing with compliments on the quality and the precision of the live stream. Each of our virtual guests felt like they had the best seat in the house, it was an experience like no other. Dream Streams is a 10/10. They truly left us speechless. Every smile, every kiss, every moment was captured.",
    ],
    closing: ["Best,", "Breanne & Michael"],
  },
  {
    names: "Sana & Ward",
    image: sanaWardImg,
    imagePosition: "left",
    paragraphs: [
      'My fiancé and I were initially planning a big wedding that both our families from Jamaica and India could attend, but alas, Covid threw a huge spoke in the wheel. The Dream Streams team came as a Godsend - they live-streamed our micro wedding, turning it into a massive virtual affair that people from over 5 countries tuned in to! Our friends and family were ecstatic at having such a high-quality visual and audio experience of the whole event. They couldn\'t stop gushing about how they felt they were really "there" at the venue with us. Rovonn and Camesha used several cameras which they would switch between so that every integral moment was captured from multiple angles. They had multiple audio inputs as well so that virtual guests missed none of the adorable banter! Truly the best quality Livestream we have seen so far. Plus, both of them are so friendly and so great at what they do - they really made our wedding an exceedingly incredible virtual experience. We highly recommend their services!',
    ],
    closing: ["Sincerely,", "Sana and Ward"],
  },
  {
    names: "Holly & Wei",
    image: hollyWeiImg,
    imagePosition: "right",
    paragraphs: [
      "We used Dream Streams for our small 40-person wedding on August 1, 2021 and consider their services one of the BEST investments we could have made. Both my wife and I have large extended families abroad and wanted to be able to share the ceremony experience with them. Initially we had considered doing the livestream ourselves, but found that coordinating a livestream with the right angles, ensuring good internet connection, and clear audio is challenging. Previous livestream weddings we had watched usually had a camera positioned far from the altar which made it difficult for viewers to really feel engaged and a part of the ceremony not to mention difficult to hear important parts of the ceremony such as the vows.",
      "Needless to say, the Dream Stream livestream of our ceremony exceeded our expectations. The quality was HD on YouTube and many of the shots were even better than what our photographer could obtain. Rovonn and Camesha were able to do multi-angle views and move seamlessly between shots of our faces, the officiant, bridal party, audience and musicians. The audio was incredibly clear - Rovonn attached a mic to myself (groom) and the officiant, and they were able to flip audio inputs back and forth so that the balance remained even. Dream Streams even provided a remote WiFi connection as a back up in the event that the internet was not strong at our venue (this also allows them to livestream ceremonies in remote locations outdoors with no WiFi connection). The audio balance for the live musicians (keyboard/cello/flute) and pre-recorded music was also beautifully and professionally done.",
      "We were overwhelmed by how many friends and family raved about the livestream. The close up shots and multi-angle views, not to mention the crystal clear audio made everyone feel they were apart of our ceremony. Some even told us they felt like they were watching the Oscars!",
      "We are so thankful to Dream Streams for making this livestream one of the highlights of our wedding - we've enjoyed re-watching clips on YouTube and are amazed at the quality of videography.",
      "If you are looking for a livestream service for your wedding, Dream Streams is the choice for you. Camesha and Rovonn were wonderful, professional, efficient, and stress-free to work with - we only had 2 phone calls before meeting them in person on the day of the wedding. Their pricing is very competitive and they were open and flexible to adapt the livestream to our needs.",
      "Thank you Dream Streams for making our dream come true!",
    ],
  },
  {
    names: "Natasha & Tyler",
    image: natashaTylerImg,
    imagePosition: "left",
    paragraphs: [
      "Camesha and Rovonn are truly the ultimate Dream Team power couple! They were extremely helpful in our initial inquiry and no one else could measure up! We are so grateful to have found them in the chaos of planning a COVID wedding. We came to them a little under a month before our wedding and they made it feel like we had known eachother for months! The day of the wedding Dream Streams came ready to rock. They arrived early to set up and collaborated beautifully with our photographer and wedding coordinator. Our ceremony space did not have wifi but Dream Streams provided remote wifi that was perfect. We received SO many compliments from family and friends in Peru, USA, England and all over Canada saying that it felt like they were there with us for the ceremony while watching the livestream. We truly have Dream Streams to thank for this! I even had a friend say that watching our livestream has spoiled all other future weddings for them because of the perfect mic-ing and front seat view can't be beat! The various camera angles and prestine audio and visual quality truly made for such an intimate experience for our friends and family at home. We have already rewatched the ceremony several times with our personal copy!",
      "Beyond their amazing service, Camesha, Rovonn and their team are sincerely amazing humans. It is obvious that there is passion behind their work and it shines through in their talent. They are hard working and kind. We have only good things to say about them and our experience. We HIGHLY recommend Dream Streams for your wedding, you will not be disappointed! They were one of the best investments we made for our wedding!",
      "Thank you Dream Streams for providing us with the wedding experience we thought was impossible! We couldn't have imagined it without you!",
    ],
  },
  {
    names: "Jane & Zion",
    image: janeZionImg,
    imagePosition: "right",
    paragraphs: [
      "Rovonn and Camesha were an absolutely pleasure to work with leading up to our wedding day. We were planning our big day during the pandemic, and there were a lot of uncertainties surrounding the number of in-person guests permitted. As some of our families and friends were living in different parts of the world, we didn't want them to miss out on this moment due to travel restrictions. We wanted a reliable, professional and high quality live stream so we could share this new chapter with everyone. Dream Streams was perfect when it came to understanding what we envisioned. During our meetings, they were always accommodating and able to tailor our landing page accordingly. On our wedding day, we were thrilled to be able to share a few words with everyone online. Even though there was an unexpected delay from the previous wedding on-site, Dream Streams was able to adapt and set up the audio visual in a shorter time frame, allowing us to sit back, stay on schedule and remain stress free. Looking back, we are super happy with the quality of videography, angles captured and the final presentation. Many of our guests have complimented the live stream production quality and we can't wait to re-watch this with our family in the years to come.",
    ],
  },
  {
    names: "Sierra & Michael",
    image: sierraMichaelImg,
    imagePosition: "left",
    paragraphs: [
      "I cannot begin to explain how amazing it was to work with them. With covid restrictions and everything, we still wanted to tie the knot, and Dream Streams made it possible. From the very first phone call, they were amazing, extremely attentive and caring about every detail. We livestreamed our wedding to about 80 people, and everyone was so happy with both the quality of the stream/ camera work, and the convenience of tuning in. Being able to share our wedding with family and friends all over the country was amazing, and I cannot thank them enough.",
    ],
  },
  {
    names: "Thaeann & Marvin",
    image: thaeannMarvinImg,
    imagePosition: "right",
    paragraphs: [
      "Thanks so much for everything yesterday. I'm still getting feedback on the quality of the Livestream. Everyone thought they were sitting front row! May God continue to bless your marriage and your work!",
    ],
  },
  {
    names: "Raha & Jimmy",
    image: rahaJimmyImg,
    imagePosition: "left",
    paragraphs: [
      "We are so happy with the Livestream and our families loved the social media edit!! We are so impressed with the quality. Thank you!!",
    ],
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const imageBlock = (
    <div className="w-full md:w-80 flex-shrink-0">
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src={testimonial.image}
          alt={testimonial.names}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  const textBlock = (
    <div className="flex-1 space-y-4">
      <h2 className="font-display text-xl md:text-2xl text-accent italic">
        {testimonial.names}
      </h2>
      {testimonial.paragraphs.map((p, i) => (
        <p key={i} className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
          {p}
        </p>
      ))}
      {testimonial.closing && (
        <div className="pt-2">
          {testimonial.closing.map((line, i) => (
            <p key={i} className="font-body text-sm text-foreground">
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start py-12 border-b border-border last:border-b-0">
      {testimonial.imagePosition === "left" ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
};

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials | Dream Streams</title>
        <meta
          name="description"
          content="Read testimonials from happy couples who used Dream Streams for their wedding livestreaming. Real reviews and experiences."
        />
        <link rel="canonical" href="https://dreamstreams.ca/testimonials" />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Heading */}
        <section className="container mx-auto px-4 pt-12 pb-4 max-w-5xl text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground italic mb-4">
            Testimonials
          </h1>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            We love livestreaming weddings and we are always so touched to receive letters, thank-you cards and warm emails from happy couples. Here are a few testimonials that made our day.
          </p>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 max-w-5xl pb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Testimonials;
