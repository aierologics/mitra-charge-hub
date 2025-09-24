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
        {/* Modern Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
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
              <span className="text-white font-medium">Help Center</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="block mb-2">How Can We</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-white to-emerald-300 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Find answers to your questions or get in touch with our support team
            </p>

            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <Input
                  placeholder="Search for help topics..."
                  className="pl-16 pr-6 py-6 text-lg rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 text-white placeholder:text-white/60 focus:border-yellow-300 focus:bg-white/20 transition-all duration-300"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-white/80 text-sm font-medium">
                    ⌘K
                  </div>
                </div>
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
        <section className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-emerald-100 border border-emerald-200 rounded-full px-6 py-3 mb-6">
                <Book className="w-5 h-5 text-emerald-600 mr-2" />
                <span className="text-emerald-700 font-medium">Help Categories</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Browse by
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Category
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find detailed guides and tutorials
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {categories.map((category, index) => (
                <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className={`w-20 h-20 mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                      index === 0 ? 'bg-gradient-to-r from-blue-400 to-indigo-400' :
                      index === 1 ? 'bg-gradient-to-r from-emerald-400 to-teal-400' :
                      index === 2 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                      index === 3 ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
                      'bg-gradient-to-r from-purple-400 to-pink-400'
                    }`}>
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <ul className="space-y-3">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex} className="flex items-center text-sm text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer group/item">
                          <ChevronRight className="w-4 h-4 mr-3 text-gray-400 group-hover/item:text-emerald-600 transition-colors" />
                          <span className="group-hover/item:font-medium transition-all">{article}</span>
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