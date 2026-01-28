import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const WelcomeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
            Welcome to Dream Streams!
          </h2>
          <p className="font-display text-xl md:text-2xl text-accent italic mb-6">
            Wherever. Whenever. Together.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            At Dream Streams, we believe that every moment of your wedding day is precious and 
            deserves to be shared with those who matter most. Our professional wedding livestreaming 
            services ensure that your loved ones can witness your special day in real-time, 
            no matter where they are in the world. From intimate ceremonies to grand celebrations, 
            we capture every heartfelt moment with crystal-clear quality and seamless streaming.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 font-body">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
