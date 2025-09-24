import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, Search, Calendar, Shield, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const driverSteps = [
    {
      icon: Search,
      title: "Open App & Search",
      description: "Search for charging points along your travel route using our smart location finder"
    },
    {
      icon: Calendar,
      title: "Choose & Book",
      description: "Select from verified hosts, check availability, and book your charging slot instantly"
    },
    {
      icon: Zap,
      title: "Navigate & Charge",
      description: "Follow GPS directions to your host, meet them safely, and charge your EV"
    },
    {
      icon: Star,
      title: "Pay & Review",
      description: "Complete secure payment through the app and rate your charging experience"
    }
  ];

  const hostSteps = [
    {
      icon: Shield,
      title: "Register & Verify",
      description: "Sign up as a host, complete Aadhaar verification, and get your charging setup approved"
    },
    {
      icon: Clock,
      title: "Set Availability",
      description: "Configure your charging schedule, set fair pricing, and go live on the platform"
    },
    {
      icon: Zap,
      title: "Welcome Drivers",
      description: "Receive booking notifications, meet EV drivers, and provide safe charging access"
    },
    {
      icon: Star,
      title: "Earn & Grow",
      description: "Get paid automatically, build your rating, and earn consistent extra income"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How ChargingMitra Works
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Simple, safe, and community-powered EV charging for drivers and hosts across India
            </p>
          </div>
        </section>

        {/* For Drivers Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                For EV Drivers
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find and book charging points in remote areas where public chargers don't reach
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {driverSteps.map((step, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* For Hosts Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                For Charging Hosts
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Monetize your charging setup by hosting EV drivers in your area
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {hostSteps.map((step, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                      <step.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;