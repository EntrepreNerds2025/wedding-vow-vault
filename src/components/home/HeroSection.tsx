import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - elegant wedding details */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26, 54, 93, 0.4), rgba(26, 54, 93, 0.6)), url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 animate-fade-in">
          Share Your Special Day
          <span className="block mt-2 text-accent">With Everyone You Love</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Professional wedding live streaming services in Toronto, Ontario.
          Let your loved ones be part of your celebration, no matter where they are.
        </p>
        
        {/* Video Embed */}
        <div className="max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://player.vimeo.com/video/776013593?title=0&byline=0&portrait=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Dream Streams Wedding Livestream Example"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-body">
            <Link to="/contact">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-body">
            <Link to="/pricing">View Packages</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
