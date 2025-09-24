import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, CreditCard, Shield, Clock, Download, Zap, Route, Star } from "lucide-react";

const ForDrivers = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Find Charging Anywhere",
      description: "Access 500+ charging points in remote areas where public chargers don't exist"
    },
    {
      icon: CreditCard,
      title: "Fair Pricing",
      description: "Pay home rates (₹3-8/unit) instead of expensive commercial rates (₹15-25/unit)"
    },
    {
      icon: Shield,
      title: "Verified Hosts",
      description: "All hosts are Aadhaar verified with background checks for your safety"
    },
    {
      icon: Clock,
      title: "Real-time Booking",
      description: "Instant booking with live availability updates and GPS navigation"
    },
    {
      icon: Route,
      title: "Route Planning",
      description: "Smart route optimization with charging stops along your journey"
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "Rated hosts and guaranteed charging with money-back protection"
    }
  ];

  const features = [
    "Smart route planning with charging stops",
    "Real-time charger availability",
    "Secure payment with instant refunds",
    "24/7 customer support in Hindi & English",
    "Emergency SOS button",
    "Insurance coverage during charging",
    "Offline maps for low-connectivity areas",
    "Host ratings and reviews"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Drive Anywhere in India
                <span className="block text-white/90">With Confidence</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Never worry about range anxiety again. Find trusted charging hosts in remote areas where public chargers don't reach.
              </p>
              <Button variant="secondary" size="xl" className="bg-white text-accent hover:bg-white/90">
                <Download className="w-5 h-5 mr-2" />
                Download App Now
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why EV Drivers Choose ChargingMitra
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The most trusted platform for EV charging in India's remote areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-trust transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  App Features Built for Indian Roads
                </h2>
                <p className="text-xl text-muted-foreground">
                  Everything you need for worry-free EV travel across India
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg border border-border">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-energy-gradient">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Drive Without Limits?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of EV drivers who trust ChargingMitra for their charging needs
              </p>
              <Button variant="secondary" size="xl" className="bg-white text-accent hover:bg-white/90">
                <Download className="w-5 h-5 mr-2" />
                Download Free App
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForDrivers;