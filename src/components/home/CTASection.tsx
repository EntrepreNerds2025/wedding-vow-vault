import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Let us help you share your special day with everyone you love. 
            Contact us today to learn more about our wedding livestreaming packages 
            and how we can make your celebration accessible to all your guests, 
            no matter where they are in the world.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-body px-8">
            <Link to="/contact">Let's Chat!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
