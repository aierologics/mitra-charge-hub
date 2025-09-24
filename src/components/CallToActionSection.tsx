import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Smartphone, Shield, ArrowRight, Zap, Users, MapPin, Star, Play, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CallToActionSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const features = [
    { icon: MapPin, text: "1000+ Verified Charging Points" },
    { icon: Users, text: "50K+ Happy EV Drivers" },
    { icon: Shield, text: "100% Secure & Verified" },
    { icon: Star, text: "4.9★ Average Rating" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Main CTA Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-medium">Join the EV Revolution</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              <span className="block mb-2">Ready to Transform</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                Your EV Journey?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of EV drivers who trust ChargingMitra for safe, affordable, and convenient charging across India.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300"
                >
                  <feature.icon className="w-4 h-4 text-yellow-300" />
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">

            {/* Download App Card */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Download the App</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Get instant access to India's largest peer-to-peer EV charging network. Available on Android with iOS coming soon.
                  </p>
                  <div className="space-y-3">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <Download className="w-5 h-5 mr-3" />
                      Download for Android
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-2 border-white text-white hover:bg-white hover:text-gray-900 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
                      disabled
                    >
                      <Play className="w-5 h-5 mr-3" />
                      Coming Soon - iOS
                    </Button>
                  </div>
                  <p className="text-white/60 text-sm mt-4">
                    Free download • No hidden charges • Instant setup
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Become Host Card */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Become a Host</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Share your home charger and earn money while helping fellow EV drivers. Verified hosts earn up to ₹15,000/month.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-black font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-4"
                  >
                    <Link to="/host-registration">
                      <Users className="w-5 h-5 mr-3" />
                      Join as Host
                    </Link>
                  </Button>
                  <div className="text-white/60 text-sm space-y-1">
                    <p>✓ Free registration & verification</p>
                    <p>✓ Earn 80-85% of charging fees</p>
                    <p>✓ Full insurance coverage</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Get the latest updates on new charging locations, features, and EV travel tips delivered to your inbox.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-yellow-300 focus:bg-white/20 backdrop-blur-sm"
                  required
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-semibold px-6 rounded-xl"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </form>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-emerald-500/20 border border-emerald-300/30 rounded-xl p-4 text-emerald-300">
                  <p className="font-semibold">✓ Successfully subscribed!</p>
                  <p className="text-sm mt-1">We'll keep you updated on all the latest developments.</p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 text-center">
            <p className="text-white/60 mb-6">Trusted by the EV community</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span className="font-semibold">50K+ Downloads</span>
              </div>
              <div className="w-px h-6 bg-white/20 hidden sm:block"></div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span className="font-semibold">4.9★ Rating</span>
              </div>
              <div className="w-px h-6 bg-white/20 hidden sm:block"></div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Active Community</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;