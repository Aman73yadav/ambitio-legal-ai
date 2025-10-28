import { Mail, Cpu, Database } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Mail,
      title: "Connect Gmail",
      description: "Secure one-time setup connects your email—takes less than 60 seconds",
      step: "01",
    },
    {
      icon: Cpu,
      title: "AI Analyzes",
      description: "Our AI reads your emails, extracts billable work, and formats perfect entries",
      step: "02",
    },
    {
      icon: Database,
      title: "Auto-Sync",
      description: "Entries automatically appear in Practice Panther, ready for review and billing",
      step: "03",
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Three simple steps to automated billing perfection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card/10 backdrop-blur-sm border border-primary-glow/20 rounded-2xl p-8 text-center hover:bg-card/20 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center font-bold text-accent-foreground shadow-glow">
                {step.step}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-primary-light/20 flex items-center justify-center mx-auto mb-6 mt-2">
                <step.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">{step.title}</h3>
              <p className="text-primary-foreground/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
