import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join hundreds of legal professionals who have automated their billing workflow
          </p>

          <div className="bg-card/10 backdrop-blur-sm border border-primary-glow/30 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 text-primary-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Cancel anytime</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" className="group">
                Start Your Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>

          <p className="text-sm text-primary-foreground/60">
            Trusted by law firms across the country • SOC 2 Type II Certified
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
