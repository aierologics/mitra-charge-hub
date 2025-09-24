import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play, ArrowRight, Zap, Shield, Users, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-charging.jpg";

const ModernHeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern EV charging station"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/20 rounded-full animate-float"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">

          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 hover:bg-white/20 transition-all duration-300">
            <Zap className="w-5 h-5 mr-2 text-yellow-300" />
            <span className="text-sm font-medium">India's Most Trusted EV Charging Network</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block mb-2">Charge Your EV</span>
            <span className="block bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent">
              Anywhere in India
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with verified local hosts for <span className="font-semibold text-yellow-300">affordable</span>,
            <span className="font-semibold text-cyan-300"> convenient</span> charging where public infrastructure doesn't exist.
          </p>

          {/* Enhanced Search Bar */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="w-6 h-6" />
              </div>
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find charging points on your route..."
                className="pl-16 pr-40 py-6 text-lg rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 text-white placeholder:text-white/60 focus:border-yellow-300 focus:bg-white/20 transition-all duration-300"
              />
              <Button
                size="lg"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Search
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="flex items-center justify-center mt-4 text-sm text-white/70">
              Popular routes: Delhi-Shimla • Mumbai-Goa • Bangalore-Mysore
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="xl"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Play className="w-6 h-6 mr-3" />
              Download App
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-2 border-white text-primary hover:bg-white hover:text-primary px-8 py-4 rounded-2xl font-semibold backdrop-blur-md hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/host-registration">
                <Shield className="w-6 h-6 mr-3" />
                Become a Host
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-yellow-300" />
                </div>
              </div>
              <p className="text-2xl font-bold text-white mb-1">1000+</p>
              <p className="text-white/80 text-sm">Charging Points</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-cyan-300" />
                </div>
              </div>
              <p className="text-2xl font-bold text-white mb-1">5000+</p>
              <p className="text-white/80 text-sm">Happy Drivers</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-green-300" />
                </div>
              </div>
              <p className="text-2xl font-bold text-white mb-1">100%</p>
              <p className="text-white/80 text-sm">Verified Hosts</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-purple-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-purple-300" />
                </div>
              </div>
              <p className="text-2xl font-bold text-white mb-1">24/7</p>
              <p className="text-white/80 text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse"></div>
          </div>
          <p className="text-white/60 text-xs mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;