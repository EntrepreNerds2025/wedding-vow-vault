export const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
      {/* Full-width Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/776013593?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
          className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
          style={{ border: 'none' }}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Dream Streams Wedding Livestream Banner"
        />
      </div>
      
      {/* Optional dark overlay for better contrast if needed */}
      <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
    </section>
  );
};
