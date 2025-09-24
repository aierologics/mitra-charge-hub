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
        {/* Hero Section */}
        <section className="py-16 bg-hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get instant support for all your ChargingMitra questions in Hindi and English
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Support Method
              </h2>
              <p className="text-xl text-muted-foreground">
                Multiple ways to get help when you need it
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {supportOptions.map((option, index) => (
                <Card key={index} className="group hover:shadow-trust transition-all duration-300 hover:scale-[1.02] text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <option.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {option.description}
                    </p>
                    <p className="text-sm text-accent font-semibold mb-6">
                      {option.availability}
                    </p>
                    <Button variant="outline" className="w-full">
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

        {/* Emergency Section */}
        <section className="py-16 bg-destructive/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Emergency Support
              </h2>
              <p className="text-muted-foreground mb-6">
                If you're stranded or facing an urgent charging issue, use the SOS button in the app or call our emergency helpline
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="destructive" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: 1800-123-4567
                </Button>
                <Button variant="outline" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
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