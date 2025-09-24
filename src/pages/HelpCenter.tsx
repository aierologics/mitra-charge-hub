import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Book, Zap, CreditCard, Shield, Headphones, ChevronRight } from "lucide-react";

const HelpCenter = () => {
  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of using ChargingMitra",
      articles: [
        "How to create an account",
        "Finding charging points near you",
        "Understanding host ratings",
        "Your first charging session"
      ]
    },
    {
      icon: Zap,
      title: "Charging Process",
      description: "Everything about booking and charging",
      articles: [
        "How to book a charging slot",
        "What to expect when you arrive",
        "Charging session guidelines",
        "What if something goes wrong?"
      ]
    },
    {
      icon: CreditCard,
      title: "Payments & Billing",
      description: "Understanding costs and payments",
      articles: [
        "How pricing works",
        "Payment methods accepted",
        "Getting refunds",
        "Understanding your bill"
      ]
    },
    {
      icon: Shield,
      title: "Safety & Trust",
      description: "Our safety measures and guidelines",
      articles: [
        "Host verification process",
        "Safety during charging",
        "Insurance coverage",
        "Reporting issues"
      ]
    },
    {
      icon: Headphones,
      title: "Host Information",
      description: "Information for charging hosts",
      articles: [
        "Becoming a host",
        "Setting up your listing",
        "Managing bookings",
        "Host earnings and payouts"
      ]
    }
  ];

  const popularQuestions = [
    {
      question: "How do I find charging points on highways?",
      category: "Getting Started"
    },
    {
      question: "What if the charger doesn't work when I arrive?",
      category: "Support"
    },
    {
      question: "How much does it cost to charge my EV?",
      category: "Pricing"
    },
    {
      question: "Is it safe to charge at someone's home?",
      category: "Safety"
    },
    {
      question: "How do I become a charging host?",
      category: "Host"
    },
    {
      question: "What payment methods are accepted?",
      category: "Payments"
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
              How Can We Help You?
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Find answers to your questions or get in touch with our support team
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Search for help topics..."
                  className="pl-12 pr-4 py-4 text-lg rounded-lg bg-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Popular Questions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Popular Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to the most common questions
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {popularQuestions.map((item, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.question}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.category}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-muted-foreground">
                Find detailed guides and tutorials
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {categories.map((category, index) => (
                <Card key={index} className="group hover:shadow-trust transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {category.description}
                    </p>
                    <ul className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex} className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                          <ChevronRight className="w-4 h-4 mr-2" />
                          {article}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our support team is available 24/7 to assist you
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-elegant transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Headphones className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-elegant transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Search className="w-8 h-8 text-secondary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                    <p className="text-sm text-muted-foreground">Response within 2 hours</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-elegant transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-8 h-8 text-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
                    <p className="text-sm text-muted-foreground">6 AM - 12 AM IST</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;