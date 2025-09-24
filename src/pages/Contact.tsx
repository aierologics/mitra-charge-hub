import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Headphones } from "lucide-react";

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
        {/* Modern Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <MessageCircle className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-medium">We're Here to Help</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block mb-2">Get In</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Have questions? We're here to help. Reach out to our team for support, partnerships, or general inquiries.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-cyan-100 border border-cyan-200 rounded-full px-6 py-3 mb-6">
                <Headphones className="w-5 h-5 text-cyan-600 mr-2" />
                <span className="text-cyan-700 font-medium">Get Support</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                How Can We
                <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Help You?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the best way to reach us
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 text-center cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                      index === 0 ? 'bg-gradient-to-r from-blue-400 to-cyan-400' :
                      index === 1 ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
                      index === 2 ? 'bg-gradient-to-r from-purple-400 to-indigo-400' :
                      'bg-gradient-to-r from-orange-400 to-red-400'
                    }`}>
                      <contact.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {contact.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-800 mb-3">
                      {contact.details}
                    </p>
                    <p className="text-gray-600">
                      {contact.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-6 py-3 mb-6">
                  <Send className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-blue-700 font-medium">Send Message</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Send Us a
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>
                <p className="text-xl text-gray-600">
                  We'll respond within 2 hours during business hours
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0">
                  <CardContent className="p-10">
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

                      <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
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