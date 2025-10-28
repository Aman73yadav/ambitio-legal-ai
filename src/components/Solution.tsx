import { Zap, Brain, CheckCircle } from "lucide-react";
import featureEmail from "@/assets/feature-email.jpg";
import featureAi from "@/assets/feature-ai.jpg";
import featureDashboard from "@/assets/feature-dashboard.jpg";

const Solution = () => {
  const features = [
    {
      icon: Zap,
      title: "Seamless Gmail Integration",
      description: "Automatically monitors your email for client communications and legal work",
      image: featureEmail,
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced AI converts email threads into well-written, grammatically perfect billable entries",
      image: featureAi,
    },
    {
      icon: CheckCircle,
      title: "Auto-Sync to Practice Panther",
      description: "Entries flow directly into your billing software—no manual copying or data entry",
      image: featureDashboard,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your <span className="bg-gradient-accent bg-clip-text text-transparent">Automated</span> Billing Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From email to billable entry in seconds, not hours
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-slide-up`}
            >
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Zero configuration required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Works with existing workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Enterprise-grade security</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
