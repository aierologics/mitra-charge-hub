import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, User, MapPin, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Delhi",
      car: "Tata Nexon EV",
      rating: 5,
      title: "Life-changing for long trips!",
      content: "I drove from Delhi to Manali without any range anxiety. Found amazing hosts along the way who charged my EV at home rates. The app made everything seamless - from booking to payment. Highly recommend!",
      route: "Delhi to Manali",
      savings: "₹2,400",
      avatar: "👨‍💼",
      verified: true
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai",
      car: "MG ZS EV",
      rating: 5,
      title: "Safe and affordable charging",
      content: "As a female traveler, safety is my top priority. All ChargingMitra hosts are verified and I felt completely safe. The prices are much better than commercial stations. Great community!",
      route: "Mumbai to Pune",
      savings: "₹800",
      avatar: "👩‍💻",
      verified: true
    },
    {
      id: 3,
      name: "Amit Singh",
      location: "Bangalore",
      car: "Hyundai Kona",
      rating: 5,
      title: "Exceeded expectations",
      content: "Was skeptical initially but the experience was fantastic. Hosts were welcoming, chargers worked perfectly, and the customer support was excellent. Now I'm a regular user for all my trips.",
      route: "Bangalore to Mysore",
      savings: "₹1,200",
      avatar: "👨‍🔧",
      verified: true
    },
    {
      id: 4,
      name: "Kavitha Reddy",
      location: "Chennai",
      car: "Mahindra e2o",
      rating: 5,
      title: "Community feeling",
      content: "It's not just about charging - it's about connecting with fellow EV enthusiasts. Many hosts shared tips about EV maintenance and local attractions. Made my journey memorable!",
      route: "Chennai to Pondicherry",
      savings: "₹600",
      avatar: "👩‍🎓",
      verified: true
    },
    {
      id: 5,
      name: "Ravi Patel",
      location: "Ahmedabad",
      car: "Tata Tigor EV",
      rating: 5,
      title: "Perfect for business travel",
      content: "I travel frequently for business and ChargingMitra has made EV travel practical. Reliable hosts, quick booking, transparent pricing. My company now reimburses EV travel over flights for short distances.",
      route: "Ahmedabad to Udaipur",
      savings: "₹1,800",
      avatar: "👨‍💼",
      verified: true
    }
  ];

  const stats = [
    { label: "Average Rating", value: "4.9/5", icon: Star },
    { label: "Cost Savings", value: "60%", icon: Car },
    { label: "Happy Customers", value: "10K+", icon: User }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 border border-emerald-200 rounded-full px-6 py-3 mb-6">
            <Quote className="w-5 h-5 text-emerald-600 mr-2" />
            <span className="text-emerald-700 font-medium">Customer Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Experiences from
            <span className="block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              EV Drivers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how ChargingMitra is transforming EV travel across India through genuine customer experiences.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">

                {/* Testimonial Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-4xl">{currentTestimonial.avatar}</div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
                        {currentTestimonial.verified && (
                          <Badge className="bg-emerald-100 text-emerald-700 text-xs">
                            ✓ Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{currentTestimonial.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Car className="w-4 h-4" />
                          <span>{currentTestimonial.car}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {currentTestimonial.title}
                  </h3>

                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                    "{currentTestimonial.content}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span className="font-medium">Route:</span>
                        <span>{currentTestimonial.route}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="font-medium text-gray-600">Saved:</span>
                        <span className="font-bold text-emerald-600">{currentTestimonial.savings}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Visual */}
                <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-8 lg:p-12 flex items-center justify-center text-white">
                  <div className="text-center">
                    <Quote className="w-16 h-16 mx-auto mb-6 text-white/80" />
                    <div className="text-6xl mb-4">{currentTestimonial.avatar}</div>
                    <h4 className="text-2xl font-bold mb-2">{currentTestimonial.name}</h4>
                    <p className="text-emerald-100 mb-6">{currentTestimonial.location}</p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      <p className="font-semibold text-lg">Money Saved</p>
                      <p className="text-3xl font-bold text-yellow-300">{currentTestimonial.savings}</p>
                      <p className="text-emerald-100 text-sm">vs Commercial Stations</p>
                    </div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-emerald-200 hover:bg-emerald-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-emerald-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-emerald-200 hover:bg-emerald-50"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Secondary Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={testimonial.id} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.content.slice(0, 120)}..."
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;