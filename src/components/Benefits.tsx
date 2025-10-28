import { TrendingUp, Target, Shield, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      metric: "23%",
      label: "Revenue Increase",
      description: "Capture previously missed billable time",
    },
    {
      icon: Zap,
      metric: "10hrs",
      label: "Time Saved/Week",
      description: "Eliminate manual data entry forever",
    },
    {
      icon: Target,
      metric: "95%",
      label: "Accuracy Rate",
      description: "AI-powered precision in every entry",
    },
    {
      icon: Shield,
      metric: "100%",
      label: "Secure & Compliant",
      description: "Bank-level encryption, HIPAA ready",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Measurable <span className="bg-gradient-accent bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real impact on your bottom line and your time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {benefit.metric}
              </div>
              <div className="text-lg font-semibold mb-2">{benefit.label}</div>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
