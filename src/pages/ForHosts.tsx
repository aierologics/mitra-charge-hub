import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, Clock, Shield, Zap, TrendingUp, Download, Star } from "lucide-react";

const ForHosts = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn Extra Income",
      description: "Make ₹5,000-15,000 monthly by sharing your charging setup with EV drivers"
    },
    {
      icon: Users,
      title: "Help Your Community",
      description: "Support EV adoption by providing charging access in your area"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Set your own availability - host when it's convenient for you"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "All drivers are verified, with insurance coverage and 24/7 support"
    },
    {
      icon: Zap,
      title: "No Investment Required",
      description: "Use your existing charging setup - no additional equipment needed"
    },
    {
      icon: TrendingUp,
      title: "Growing Market",
      description: "India's EV market is exploding - be part of the green revolution"
    }
  ];

  const requirements = [
    "Reliable electricity connection",
    "15A or 5A charging point",
    "Safe parking space for vehicles",
    "Aadhaar card for verification",
    "Basic smartphone for app usage",
    "Willingness to help EV drivers"
  ];

  const earnings = [
    { type: "Per Unit", rate: "₹1-2", description: "Commission on each unit of electricity" },
    { type: "Booking Fee", rate: "₹50-100", description: "Per successful charging session" },
    { type: "Monthly Avg", rate: "₹8,000", description: "Based on 10-15 sessions per month" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-energy-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Become a ChargingMitra Host
                <span className="block text-white/90">Earn by Helping EV Drivers</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Turn your charging setup into a source of income while supporting India's EV revolution
              </p>
              <Button variant="secondary" size="xl" className="bg-white text-accent hover:bg-white/90">
                <Download className="w-5 h-5 mr-2" />
                Become a Host Today
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Become a ChargingMitra Host?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join India's growing network of trusted charging hosts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-trust transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                      <benefit.icon className="w-8 h-8 text-secondary" />
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

        {/* Earnings Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Much Can You Earn?
              </h2>
              <p className="text-xl text-muted-foreground">
                Transparent pricing with no hidden fees
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {earnings.map((earning, index) => (
                <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-3xl font-bold text-primary mb-2">{earning.rate}</div>
                    <div className="text-xl font-semibold text-foreground mb-4">{earning.type}</div>
                    <p className="text-muted-foreground">{earning.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Earnings grow with more sessions and better ratings</span>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What Do You Need to Get Started?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Simple requirements to become a trusted host
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg border border-border">
                    <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-trust-gradient">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Earning?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join 500+ hosts already earning with ChargingMitra
              </p>
              <Button variant="secondary" size="xl" className="bg-white text-accent hover:bg-white/90">
                <Download className="w-5 h-5 mr-2" />
                Register as Host
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForHosts;