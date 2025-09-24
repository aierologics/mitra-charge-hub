import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@chargingmitra.com",
      description: "For general inquiries and support"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9876543210",
      description: "Mon-Sun: 6 AM - 12 AM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Bengaluru, Karnataka, India",
      description: "Schedule an appointment"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+91 9876543210",
      description: "Quick support in Hindi & English"
    }
  ];

  const offices = [
    {
      city: "Bengaluru",
      address: "ChargingMitra Headquarters\nIndiranagar, Bengaluru\nKarnataka 560038",
      type: "Headquarters"
    },
    {
      city: "Mumbai",
      address: "Western Region Office\nAndheri West, Mumbai\nMaharashtra 400058",
      type: "Regional Office"
    },
    {
      city: "Delhi",
      address: "Northern Region Office\nGurgaon, Haryana\n122001",
      type: "Regional Office"
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
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to our team for support, partnerships, or general inquiries.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Can We Help You?
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the best way to reach us
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="group hover:shadow-trust transition-all duration-300 hover:scale-[1.02] text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-lg font-semibold text-primary mb-2">
                      {contact.details}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {contact.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-xl text-muted-foreground">
                  We'll respond within 2 hours during business hours
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card>
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                          <Input placeholder="Enter your first name" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                          <Input placeholder="Enter your last name" />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                          <Input type="email" placeholder="your@email.com" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                          <Input placeholder="+91 9876543210" />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                        <select className="w-full p-3 border border-border rounded-lg bg-background text-foreground">
                          <option>Select a topic</option>
                          <option>General Inquiry</option>
                          <option>Technical Support</option>
                          <option>Partnership Opportunity</option>
                          <option>Host Registration</option>
                          <option>Media Inquiry</option>
                          <option>Feedback</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                        <Textarea 
                          placeholder="Tell us how we can help you..."
                          className="min-h-32"
                        />
                      </div>

                      <Button variant="hero" size="lg" className="w-full">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Additional Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Quick Response Times
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-foreground">General inquiries: Within 2 hours</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Technical support: Within 30 minutes</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-foreground">Emergency support: Immediate</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Business Hours
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Monday - Sunday: 6:00 AM - 12:00 AM IST</p>
                      <p>Emergency support available 24/7</p>
                      <p>Multilingual support in Hindi & English</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Other Ways to Connect
                    </h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Start WhatsApp Chat
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Phone className="w-4 h-4 mr-2" />
                        Schedule a Call
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Offices
              </h2>
              <p className="text-xl text-muted-foreground">
                Visit us at our locations across India
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {offices.map((office, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <MapPin className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {office.city}
                    </h3>
                    <p className="text-sm text-primary font-semibold mb-4">
                      {office.type}
                    </p>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {office.address}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;