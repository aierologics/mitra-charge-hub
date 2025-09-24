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
        {/* Hero Section */}
        <section className="py-16 bg-hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Safety is Our Priority
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive safety measures and protocols to ensure secure charging experiences for everyone in our community
            </p>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Multi-Layer Safety System
              </h2>
              <p className="text-xl text-muted-foreground">
                Advanced technology and human oversight working together
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {safetyFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-trust transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Emergency Response System
              </h2>
              <p className="text-xl text-muted-foreground">
                Immediate help when you need it most
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {emergencySteps.map((item, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-destructive/20 transition-colors">
                      <span className="text-2xl font-bold text-destructive">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-2 bg-destructive/10 px-6 py-3 rounded-full">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <span className="text-destructive font-semibold">Emergency Helpline: 1800-123-4567</span>
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