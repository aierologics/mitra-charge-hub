import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Eye, Heart, Users, Award, TrendingUp, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of community to solve India's charging infrastructure challenges"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Using technology to create sustainable solutions for India's EV ecosystem"
    },
    {
      icon: Users,
      title: "Trust & Safety",
      description: "Building a platform where safety and reliability are never compromised"
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Contributing to India's clean energy transition and reducing carbon emissions"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Founded",
      description: "ChargingMitra was born from the vision to solve EV charging gaps in remote India"
    },
    {
      year: "2024",
      title: "First 100 Hosts",
      description: "Onboarded our first 100 verified charging hosts across highways and hill stations"
    },
    {
      year: "2024",
      title: "10K+ Downloads",
      description: "Reached 10,000+ app downloads with 4.8★ rating from satisfied users"
    },
    {
      year: "2024",
      title: "500+ Charging Points",
      description: "Expanded network to 500+ charging points covering major travel routes"
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      description: "Former automotive engineer passionate about sustainable mobility"
    },
    {
      name: "Priya Sharma",
      role: "Co-founder & CTO",
      description: "Tech leader with 10+ years in platform development and IoT"
    },
    {
      name: "Arjun Patel",
      role: "Head of Operations",
      description: "Supply chain expert focused on scaling host network across India"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Modern Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Heart className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-medium">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block mb-2">About</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent">
                ChargingMitra
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              India's first peer-to-peer EV charging platform, connecting communities to power the electric revolution
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-6">
                  <Target className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-blue-700 font-medium">Mission & Vision</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Driving India's
                  <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    EV Future
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Mission</h3>
                  <p className="text-lg text-gray-600 leading-relaxed text-center">
                    To eliminate range anxiety for EV owners by creating India's most trusted community-powered charging network in remote areas.
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Vision</h3>
                  <p className="text-lg text-gray-600 leading-relaxed text-center">
                    A sustainable India where every EV owner can travel anywhere with confidence, supported by a thriving community of charging hosts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  ChargingMitra was born from a simple yet frustrating experience. Our founder, Rajesh, was traveling from Bangalore to Ooty in his new electric vehicle when he found himself stranded with a low battery and no public charging stations for miles.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  A kind local family allowed him to charge at their home, and this act of community support sparked an idea: What if we could connect EV owners with charging hosts across India's remote areas?
                </p>
                <p className="text-lg leading-relaxed">
                  Today, ChargingMitra is making this vision a reality, creating a trusted platform where communities come together to power India's electric future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-indigo-100 border border-indigo-200 rounded-full px-6 py-3 mb-6">
                <Heart className="w-5 h-5 text-indigo-600 mr-2" />
                <span className="text-indigo-700 font-medium">Core Values</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                The Values That
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Drive Us Forward
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="group bg-white/70 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                      index === 0 ? 'bg-gradient-to-r from-red-400 to-pink-400' :
                      index === 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                      index === 2 ? 'bg-gradient-to-r from-blue-400 to-indigo-400' :
                      'bg-gradient-to-r from-green-400 to-emerald-400'
                    }`}>
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in building India's charging community
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{milestone.year}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground">
                The passionate people building ChargingMitra
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6"></div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Stats Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
                <TrendingUp className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-white font-medium">Our Impact</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Numbers That
                <span className="block bg-gradient-to-r from-yellow-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  Tell Our Story
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="text-5xl font-bold text-yellow-300 mb-4">1500+</div>
                <div className="text-white/90 text-lg">Charging Points</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="text-5xl font-bold text-cyan-300 mb-4">10K+</div>
                <div className="text-white/90 text-lg">Happy Drivers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="text-5xl font-bold text-purple-300 mb-4">50K+</div>
                <div className="text-white/90 text-lg">App Downloads</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="text-5xl font-bold text-green-300 mb-4">4.9★</div>
                <div className="text-white/90 text-lg">User Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;