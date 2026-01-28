import { Video, Wifi, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Multi-Camera Setup",
    description: "Multiple angles capture every precious moment of your ceremony and reception.",
  },
  {
    icon: Wifi,
    title: "Reliable Connection",
    description: "We bring our own internet backup to ensure uninterrupted streaming.",
  },
  {
    icon: Clock,
    title: "On-Demand Replay",
    description: "Your guests can rewatch the ceremony anytime with our replay feature.",
  },
  {
    icon: Award,
    title: "Professional Team",
    description: "Experienced videographers who specialize in wedding livestreaming.",
  },
];

export const UniqueSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            What Makes Us Unique
          </h2>
          <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto">
            We combine cutting-edge technology with personalized service to deliver an exceptional livestreaming experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-primary-foreground/20 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground mb-4">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-lg mb-2">{feature.title}</h3>
              <p className="font-body text-sm text-primary-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
