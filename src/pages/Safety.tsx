import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, UserCheck, Phone, FileText, Eye, Lock, AlertTriangle, CheckCircle } from "lucide-react";

const Safety = () => {
  const safetyFeatures = [
    {
      icon: UserCheck,
      title: "Host Verification",
      description: "All hosts undergo Aadhaar verification and background checks before joining our platform"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Every charging session is monitored with GPS tracking and time-based check-ins"
    },
    {
      icon: Phone,
      title: "Emergency SOS",
      description: "One-touch SOS button in the app connects you directly to emergency services and our support team"
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "Escrow system holds payments until charging is complete, protecting both drivers and hosts"
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Comprehensive insurance covers both vehicle and personal safety during charging sessions"
    },
    {
      icon: FileText,
      title: "Safety Guidelines",
      description: "Detailed safety protocols for both drivers and hosts to ensure secure charging experiences"
    }
  ];

  const driverSafety = [
    "Verify host identity before charging",
    "Park in well-lit, visible areas",
    "Keep your vehicle locked during charging",
    "Stay near your vehicle if possible",
    "Use the app's check-in feature",
    "Report any safety concerns immediately"
  ];

  const hostSafety = [
    "Verify driver identity through the app",
    "Meet drivers in safe, public areas",
    "Ensure charging equipment is properly maintained",
    "Keep emergency contact numbers handy",
    "Follow electrical safety protocols",
    "Report suspicious behavior immediately"
  ];

  const emergencySteps = [
    {
      step: "1",
      title: "Use SOS Button",
      description: "Press the emergency SOS button in the ChargingMitra app"
    },
    {
      step: "2",
      title: "Auto-Alert System",
      description: "Our system automatically alerts emergency services and our support team"
    },
    {
      step: "3",
      title: "Location Sharing",
      description: "Your exact location is shared with emergency responders"
    },
    {
      step: "4",
      title: "Immediate Support",
      description: "Our support team contacts you within 60 seconds for assistance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Modern Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-600 to-amber-600">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Shield className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-medium">Safety First</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block mb-2">Your Safety is</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-white to-orange-300 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed">
              Comprehensive safety measures and protocols to ensure secure charging experiences for everyone in our community
            </p>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-red-100 border border-red-200 rounded-full px-6 py-3 mb-6">
                <Shield className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-red-700 font-medium">Safety Features</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Multi-Layer
                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Safety System
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced technology and human oversight working together
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {safetyFeatures.map((feature, index) => (
                <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className={`w-20 h-20 mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                      index === 0 ? 'bg-gradient-to-r from-blue-400 to-indigo-400' :
                      index === 1 ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
                      index === 2 ? 'bg-gradient-to-r from-red-400 to-pink-400' :
                      index === 3 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                      index === 4 ? 'bg-gradient-to-r from-purple-400 to-indigo-400' :
                      'bg-gradient-to-r from-teal-400 to-cyan-400'
                    }`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Guidelines */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Safety Guidelines
              </h2>
              <p className="text-xl text-muted-foreground">
                Best practices for drivers and hosts
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Driver Safety */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <UserCheck className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">For Drivers</h3>
                  </div>
                  <ul className="space-y-4">
                    {driverSafety.map((guideline, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Host Safety */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">For Hosts</h3>
                  </div>
                  <ul className="space-y-4">
                    {hostSafety.map((guideline, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Response */}
        <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-orange-100 border border-orange-200 rounded-full px-6 py-3 mb-6">
                <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-700 font-medium">Emergency Response</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Emergency Response
                <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  System
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Immediate help when you need it most
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {emergencySteps.map((item, index) => (
                <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                      <span className="text-3xl font-bold text-white">{item.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <AlertTriangle className="w-6 h-6" />
                <span className="font-bold text-lg">Emergency Helpline: 1800-123-4567</span>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Coverage */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Comprehensive Insurance Coverage
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-8 text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-4">Vehicle Protection</h3>
                    <p className="text-muted-foreground">Coverage for vehicle damage during charging sessions</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-8 text-center">
                    <UserCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-4">Personal Safety</h3>
                    <p className="text-muted-foreground">Personal accident coverage for drivers and hosts</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-8 text-center">
                    <Lock className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-4">Property Protection</h3>
                    <p className="text-muted-foreground">Coverage for host property and charging equipment</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Score */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Trust Score System
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our dynamic trust scoring ensures you connect with the most reliable community members
              </p>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
                    <div className="text-sm text-muted-foreground">Average Host Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">99.2%</div>
                    <div className="text-sm text-muted-foreground">Successful Sessions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Safety Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Safety;