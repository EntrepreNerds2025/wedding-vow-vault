import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const weddingClips = [
  "https://player.vimeo.com/video/787014009",
  "https://player.vimeo.com/video/787014238",
  "https://player.vimeo.com/video/925499861",
  "https://player.vimeo.com/video/787013891",
  "https://player.vimeo.com/video/925496463",
  "https://player.vimeo.com/video/787013844",
  "https://player.vimeo.com/video/925498784",
];

const featuredClip = "https://player.vimeo.com/video/925499418";

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Dream Streams</title>
        <meta
          name="description"
          content="Watch examples of Dream Streams' live stream weddings. We capture the moments from your wedding day that you will remember and cherish for a lifetime."
        />
        <link rel="canonical" href="https://dreamstreams.ca/portfolio" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Video */}
          <section className="bg-secondary py-12">
            <div className="container mx-auto px-4">
              <h1 className="font-display text-3xl md:text-4xl text-primary text-center mb-8">
                Portfolio
              </h1>
              <div className="max-w-5xl mx-auto">
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    src="https://player.vimeo.com/video/776013593?badge=0&autopause=0&player_id=0"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Dream Streams Portfolio Reel"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Intro Text */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Below are just a few examples of our live stream weddings.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  We strive to capture the moments from your wedding day that you will remember and cherish for a lifetime.
                </p>
              </div>
            </div>
          </section>

          {/* Livestream Wedding Clips */}
          <section className="py-12 bg-secondary">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-2xl md:text-3xl text-accent text-center italic mb-10">
                Livestream Wedding Clips
              </h2>

              <div className="max-w-6xl mx-auto space-y-6">
                {/* First video - full width */}
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={`${weddingClips[0]}?badge=0&autopause=0&player_id=0`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Wedding Clip 1"
                  />
                </div>

                {/* Grid of 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {weddingClips.slice(1).map((url, i) => (
                    <div key={i} className="aspect-video rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={`${url}?badge=0&autopause=0&player_id=0`}
                        className="w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={`Wedding Clip ${i + 2}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Featured bottom video - full width */}
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={`${featuredClip}?badge=0&autopause=0&player_id=0`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Featured Wedding Clip"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
