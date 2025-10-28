import { Clock, FileText, DollarSign, AlertCircle } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "Time Drain",
      description: "Lawyers spend 5-10 hours weekly manually entering billable time from emails and calls",
    },
    {
      icon: FileText,
      title: "Inconsistent Entries",
      description: "Rushed manual entries lead to poor documentation and unprofessional client communications",
    },
    {
      icon: DollarSign,
      title: "Revenue Loss",
      description: "Up to 20% of billable time goes untracked due to manual processes and human error",
    },
    {
      icon: AlertCircle,
      title: "Software Friction",
      description: "Switching between Gmail and Practice Panther creates workflow bottlenecks and delays",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-destructive">Billable Hour Problem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Legal professionals lose thousands in revenue and countless hours to manual billing processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
