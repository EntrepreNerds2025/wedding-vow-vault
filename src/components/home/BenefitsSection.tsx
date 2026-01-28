import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Monitor, Shield, Heart } from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Come One, Come All",
    description: "Share your special day with unlimited guests from anywhere in the world. Distance is no longer a barrier to celebration.",
    icon: Users,
  },
  {
    number: "02",
    title: "High Quality Streaming",
    description: "Crystal-clear HD video and audio quality ensures your guests feel like they're right there with you.",
    icon: Monitor,
  },
  {
    number: "03",
    title: "Worry Free",
    description: "Our experienced team handles all the technical details so you can focus on enjoying your day.",
    icon: Shield,
  },
  {
    number: "04",
    title: "Above and Beyond",
    description: "We go the extra mile to ensure every aspect of your livestream exceeds expectations.",
    icon: Heart,
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
            Leave the Work and Worry to Us
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            We take care of everything so you can focus on what matters most — celebrating your love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="text-center p-6 bg-cream rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <benefit.icon className="w-8 h-8" />
              </div>
              <span className="font-display text-4xl text-accent/30 block mb-2">
                {benefit.number}
              </span>
              <h3 className="font-display text-xl text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-body">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
