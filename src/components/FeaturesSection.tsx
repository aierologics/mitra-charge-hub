import { Shield, Clock, CreditCard, Headphones, MapPin, Wifi } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Hosts",
      description: "All hosts are background-checked and verified with Aadhaar for your safety",
      color: "primary"
    },
    {
      icon: Clock,
      title: "Real-time Availability",
      description: "Live updates on charger status and booking availability",
      color: "secondary"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Escrow system with UPI, cards, and instant refund protection",
      color: "accent"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance in English and Hindi",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Insurance Protected",
      description: "Coverage for vehicle and personal safety during charging sessions",
      color: "secondary"
    },
    {
      icon: Wifi,
      title: "Offline Maps",
      description: "Works even in low-connectivity areas with offline navigation",
      color: "accent"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose
            <span className="block bg-trust-gradient bg-clip-text text-transparent">
              ChargingMitra?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for Indian roads with safety, reliability, and community at its core
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-trust transition-all duration-500 hover:scale-[1.05] border-2 hover:border-primary/10">
              <CardContent className="p-8">
                <div className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                  feature.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' :
                  feature.color === 'secondary' ? 'bg-secondary/10 group-hover:bg-secondary/20' :
                  'bg-accent/10 group-hover:bg-accent/20'
                }`}>
                  <feature.icon className={`w-8 h-8 ${
                    feature.color === 'primary' ? 'text-primary' :
                    feature.color === 'secondary' ? 'text-secondary' :
                    'text-accent'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-card border border-border rounded-2xl px-8 py-6 shadow-trust">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-foreground font-semibold">Aadhaar Verified</span>
            </div>
            <div className="w-px h-6 bg-border hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <CreditCard className="w-6 h-6 text-secondary" />
              <span className="text-foreground font-semibold">Secure Payments</span>
            </div>
            <div className="w-px h-6 bg-border hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <Headphones className="w-6 h-6 text-accent" />
              <span className="text-foreground font-semibold">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;