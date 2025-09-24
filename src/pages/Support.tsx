import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, Mail, Phone, MessageCircle, Clock, HelpCircle, Shield, Zap } from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      icon: Headphones,
      title: "24/7 Live Chat",
      description: "Instant help through our app chat support",
      availability: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      availability: "6 AM - 12 AM IST",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed queries via email",
      availability: "Response within 2 hours",
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Quick help on WhatsApp in Hindi & English",
      availability: "6 AM - 12 AM IST",
      action: "WhatsApp Us"
    }
  ];

  const faqCategories = [
    {
      icon: HelpCircle,
      title: "General Questions",
      description: "Basic information about ChargingMitra",
      count: "15 articles"
    },
    {
      icon: Zap,
      title: "Charging Process",
      description: "How to find, book, and use charging points",
      count: "20 articles"
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Host verification, insurance, and safety measures",
      count: "12 articles"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Modern Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Headphones className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-medium">24/7 Support</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block mb-2">We're Here</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent">
                to Help
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Get instant support for all your ChargingMitra questions in Hindi and English
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-teal-100 border border-teal-200 rounded-full px-6 py-3 mb-6">
                <MessageCircle className="w-5 h-5 text-teal-600 mr-2" />
                <span className="text-teal-700 font-medium">Support Methods</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose Your
                <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Support Method
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple ways to get help when you need it
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {supportOptions.map((option, index) => (
                <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 text-center cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                      index === 0 ? 'bg-gradient-to-r from-blue-400 to-indigo-400' :
                      index === 1 ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
                      index === 2 ? 'bg-gradient-to-r from-purple-400 to-pink-400' :
                      'bg-gradient-to-r from-orange-400 to-red-400'
                    }`}>
                      <option.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {option.description}
                    </p>
                    <p className="text-sm text-teal-600 font-semibold mb-6">
                      {option.availability}
                    </p>
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-xl text-muted-foreground">
                  We'll get back to you within 2 hours
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                        <Input placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                        <Input placeholder="+91 9876543210" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                        <select className="w-full p-3 border border-border rounded-lg bg-background text-foreground">
                          <option>Select category</option>
                          <option>Technical Issue</option>
                          <option>Booking Problem</option>
                          <option>Payment Issue</option>
                          <option>Host Registration</option>
                          <option>General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                      <Textarea 
                        placeholder="Describe your issue or question in detail..."
                        className="min-h-32"
                      />
                    </div>

                    <Button variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Find quick answers to common questions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {faqCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                      <category.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <p className="text-sm text-primary font-semibold">
                      {category.count}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Emergency Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600">
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
                <Shield className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="font-medium">Emergency Support</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                <span className="block mb-2">Emergency</span>
                <span className="block bg-gradient-to-r from-yellow-300 via-white to-orange-300 bg-clip-text text-transparent">
                  Support
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                If you're stranded or facing an urgent charging issue, use the SOS button in the app or call our emergency helpline
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="xl" className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Phone className="w-6 h-6 mr-3" />
                  Emergency: 1800-123-4567
                </Button>
                <Button size="xl" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  SOS in App
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;