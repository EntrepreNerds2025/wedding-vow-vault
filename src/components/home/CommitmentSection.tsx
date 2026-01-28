import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CommitmentSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with decorative border */}
          <div className="relative">
            <div className="absolute inset-0 border-2 border-accent transform translate-x-4 translate-y-4 rounded-lg" />
            <img
              src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80"
              alt="Professional wedding livestream setup with elegant equipment"
              className="relative rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
              Our Commitment to You
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              We understand that your wedding day is one of the most important days of your life. 
              That's why we're committed to providing you with the highest quality livestream service, 
              ensuring that every precious moment is captured and shared flawlessly.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Our team of experienced professionals uses state-of-the-art equipment and technology 
              to deliver a seamless viewing experience for your guests, whether they're watching 
              from across the city or across the globe.
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-body">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
