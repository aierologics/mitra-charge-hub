import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download, Users, MapPin, Clock, Zap, Navigation, Shield } from "lucide-react";
import heroImage from "@/assets/hero-charging.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="EV charging in scenic Indian location" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">India's #1 EV Charging Network</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="block">Charge Your EV</span>
              <span className="block bg-hero-gradient bg-clip-text text-transparent">
                Anywhere in India
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Connect with verified local hosts for affordable, convenient charging in remote areas where public infrastructure doesn't exist.
            </p>

            {/* Enhanced Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  <Search className="w-5 h-5" />
                </div>
                <Input
                  placeholder="Enter your destination or route..."
                  className="pl-12 pr-32 py-4 text-base rounded-2xl border-2 border-border focus:border-primary shadow-lg"
                />
                <Button
                  variant="hero"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-xl px-6"
                >
                  Find Chargers
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start mt-3 text-sm text-muted-foreground">
                <Navigation className="w-4 h-4 mr-1" />
                Popular: Delhi to Shimla, Mumbai to Goa, Bangalore to Mysore
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="xl" className="shadow-elegant">
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
              <Button variant="outline" size="xl" className="border-2" asChild>
                <Link to="/host-registration">
                  <Shield className="w-5 h-5 mr-2" />
                  Become a Host
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Stats & Features */}
          <div className="space-y-6">
            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/80 backdrop-blur-sm border rounded-2xl p-6 text-center hover:shadow-trust transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Charging Points</p>
              </div>

              <div className="bg-card/80 backdrop-blur-sm border rounded-2xl p-6 text-center hover:shadow-trust transition-all duration-300">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-2xl font-bold text-foreground">1000+</p>
                <p className="text-sm text-muted-foreground">Happy Drivers</p>
              </div>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border rounded-2xl p-6 text-center hover:shadow-trust transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <p className="text-2xl font-bold text-foreground">24/7 Support</p>
              <p className="text-sm text-muted-foreground">Always available when you need us</p>
            </div>

            {/* Trust Badge */}
            <div className="bg-hero-gradient rounded-2xl p-6 text-white text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-semibold">100% Verified Hosts</span>
              </div>
              <p className="text-sm text-white/90">
                All hosts are Aadhaar verified with background checks for your safety
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;