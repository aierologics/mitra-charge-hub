import { Search, Calendar, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SolutionSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Find charging points in remote locations through our network of local hosts",
      color: "primary"
    },
    {
      icon: Calendar,
      title: "Book",
      description: "Reserve your slot instantly via app with real-time availability updates",
      color: "secondary"
    },
    {
      icon: Zap,
      title: "Charge",
      description: "Safe, affordable charging with verified hosts at home rates",
      color: "accent"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ChargingMitra Connects You to
            <span className="block bg-trust-gradient bg-clip-text text-transparent">
              Community Charging
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our peer-to-peer platform bridges the gap between EV owners and local charging hosts, making long-distance EV travel possible and affordable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="group hover:shadow-elegant transition-all duration-500 hover:scale-[1.05] border-2 hover:border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                    step.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' :
                    step.color === 'secondary' ? 'bg-secondary/10 group-hover:bg-secondary/20' :
                    'bg-accent/10 group-hover:bg-accent/20'
                  }`}>
                    <step.icon className={`w-8 h-8 ${
                      step.color === 'primary' ? 'text-primary' :
                      step.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connection Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-primary/30"></div>
                  <div className="w-0 h-0 border-l-4 border-l-primary/30 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute top-0 right-0 transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Simple. Safe. Community-Powered.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;