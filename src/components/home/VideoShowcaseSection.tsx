export const VideoShowcaseSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
              What Does a Gold Package Look Like?
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              See the quality and professionalism that goes into every Dream Streams production.
            </p>
          </div>

          {/* Video Embed */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent hidden md:block" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent hidden md:block" />
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl bg-primary/10">
              <iframe
                src="https://player.vimeo.com/video/347119375?h=5c67d8c0f8&title=0&byline=0&portrait=0"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Dream Streams Gold Package Wedding Livestream Example"
              />
            </div>
          </div>

          <p className="text-center font-body text-sm text-muted-foreground mt-6">
            This is an example of our Gold Package livestream quality. Every package is tailored to your unique celebration.
          </p>
        </div>
      </div>
    </section>
  );
};
