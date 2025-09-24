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
        {/* Modern Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center text-white">
              <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
                <Route className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="font-medium">For EV Drivers</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block mb-2">Drive Anywhere</span>
                <span className="block bg-gradient-to-r from-yellow-300 via-white to-blue-300 bg-clip-text text-transparent">
                  With Confidence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                Never worry about range anxiety again. Find trusted charging hosts in remote areas where public chargers don't reach.
              </p>
              <Button size="xl" className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-semibold px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Download className="w-6 h-6 mr-3" />
                Download App Now
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-6 py-3 mb-6">
                <Star className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-700 font-medium">Driver Benefits</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Why EV Drivers Choose
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  ChargingMitra
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The most trusted platform for EV charging in India's remote areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className={`w-20 h-20 mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                      index === 0 ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
                      index === 1 ? 'bg-gradient-to-r from-blue-400 to-indigo-400' :
                      index === 2 ? 'bg-gradient-to-r from-red-400 to-pink-400' :
                      index === 3 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                      index === 4 ? 'bg-gradient-to-r from-purple-400 to-indigo-400' :
                      'bg-gradient-to-r from-teal-400 to-cyan-400'
                    }`}>
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
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

        {/* Modern CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
                <Download className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="font-medium">Get Started</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="block mb-2">Ready to Drive</span>
                <span className="block bg-gradient-to-r from-yellow-300 via-white to-green-300 bg-clip-text text-transparent">
                  Without Limits?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join thousands of EV drivers who trust ChargingMitra for their charging needs
              </p>
              <Button size="xl" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Download className="w-6 h-6 mr-3" />
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