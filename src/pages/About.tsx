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
        {/* Hero Section */}
        <section className="py-16 bg-hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About ChargingMitra
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              India's first peer-to-peer EV charging platform, connecting communities to power the electric revolution
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our Mission
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
                  <p className="text-lg text-muted-foreground">
                    To eliminate range anxiety for EV owners by creating India's most trusted community-powered charging network in remote areas.
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
                  <p className="text-lg text-muted-foreground">
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-trust transition-all duration-300 hover:scale-[1.02] text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
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

        {/* Stats Section */}
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-white/80">Charging Points</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-white/80">Happy Drivers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-white/80">App Downloads</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.8★</div>
                <div className="text-white/80">User Rating</div>
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