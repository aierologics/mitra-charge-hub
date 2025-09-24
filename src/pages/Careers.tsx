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
        {/* Modern Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Users className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-medium">Join Our Team</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block mb-2">Shape India's</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-white to-purple-300 bg-clip-text text-transparent">
                EV Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Help us build India's most trusted community-powered EV charging network
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-purple-100 border border-purple-200 rounded-full px-6 py-3 mb-6">
                <Heart className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-purple-700 font-medium">Why Join Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Work at
                <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  ChargingMitra?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Be part of the team solving India's EV charging infrastructure challenges
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                      index === 0 ? 'bg-gradient-to-r from-red-400 to-pink-400' :
                      index === 1 ? 'bg-gradient-to-r from-blue-400 to-indigo-400' :
                      index === 2 ? 'bg-gradient-to-r from-purple-400 to-pink-400' :
                      'bg-gradient-to-r from-green-400 to-emerald-400'
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

        {/* Modern CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600">
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
                <Zap className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="font-medium">Join the Revolution</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="block mb-2">Ready to Make</span>
                <span className="block bg-gradient-to-r from-yellow-300 via-white to-orange-300 bg-clip-text text-transparent">
                  an Impact?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join us in building the future of EV charging in India
              </p>
              <Button size="xl" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Users className="w-6 h-6 mr-3" />
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