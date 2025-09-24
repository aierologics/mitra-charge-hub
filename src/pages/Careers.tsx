import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Users, TrendingUp, Heart, Zap } from "lucide-react";

const Careers = () => {
  const jobs = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Bengaluru",
      type: "Full-time",
      description: "Build and scale our platform to connect millions of EV users across India"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Bengaluru",
      type: "Full-time",
      description: "Lead product strategy for India's first peer-to-peer EV charging platform"
    },
    {
      title: "Regional Operations Manager",
      department: "Operations",
      location: "Mumbai",
      type: "Full-time",
      description: "Expand our host network across Western India's highways and cities"
    },
    {
      title: "Customer Success Manager",
      department: "Support",
      location: "Remote",
      type: "Full-time",
      description: "Ensure amazing experience for drivers and hosts using our platform"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance for you and your family"
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Learn and grow in India's fastest-growing EV ecosystem"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with passionate people building the future of mobility"
    },
    {
      icon: Zap,
      title: "Impact",
      description: "Directly contribute to India's sustainable transportation future"
    }
  ];

  const values = [
    "Community First - We put our users and their needs at the center of everything",
    "Innovation - We use technology to solve real problems for Indian EV owners",
    "Trust & Safety - We build products where reliability is never compromised",
    "Sustainability - We're committed to India's clean energy transition"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the ChargingMitra Team
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Help us build India's most trusted community-powered EV charging network
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Work at ChargingMitra?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Be part of the team solving India's EV charging infrastructure challenges
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-trust transition-all duration-300 hover:scale-[1.02] text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-8 h-8 text-primary" />
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

        {/* Our Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Values
                </h2>
                <p className="text-xl text-muted-foreground">
                  The principles that guide our work every day
                </p>
              </div>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-card p-6 rounded-lg border border-border">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-foreground text-lg">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-muted-foreground">
                Find your next opportunity with us
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {jobs.map((job, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {job.title}
                        </h3>
                        <div className="flex items-center space-x-6 text-muted-foreground mb-4">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          {job.description}
                        </p>
                      </div>
                      <div className="mt-6 lg:mt-0 lg:ml-8">
                        <Button variant="hero">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Don't see a role that fits? We're always looking for talented people.
              </p>
              <Button variant="outline" size="lg">
                Send Us Your Resume
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-energy-gradient">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join us in building the future of EV charging in India
              </p>
              <Button variant="secondary" size="xl" className="bg-white text-accent hover:bg-white/90">
                View All Openings
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;