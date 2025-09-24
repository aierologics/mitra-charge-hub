import { useState } from "react";
import { Search, Calendar, Navigation, Zap, CreditCard, Star, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VisualStorySection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Search,
      title: "Discover Charging Points",
      description: "Find verified charging hosts along your route with real-time availability",
      visual: {
        type: "mockup",
        content: "Map interface showing charging points"
      },
      details: [
        "Search by route or destination",
        "Filter by charging speed and price",
        "View host ratings and reviews",
        "Real-time availability updates"
      ]
    },
    {
      icon: Calendar,
      title: "Book Instantly",
      description: "Reserve your charging slot with flexible timing options",
      visual: {
        type: "mockup",
        content: "Booking interface"
      },
      details: [
        "Select preferred time slots",
        "Instant confirmation",
        "Flexible cancellation policy",
        "Direct host communication"
      ]
    },
    {
      icon: Navigation,
      title: "Navigate Safely",
      description: "Get turn-by-turn directions with offline maps support",
      visual: {
        type: "mockup",
        content: "Navigation interface"
      },
      details: [
        "GPS navigation to host location",
        "Offline maps for remote areas",
        "Live traffic updates",
        "Host contact information"
      ]
    },
    {
      icon: Zap,
      title: "Charge Securely",
      description: "Safe charging with verified hosts and monitored sessions",
      visual: {
        type: "mockup",
        content: "Charging session monitoring"
      },
      details: [
        "Verified host identity",
        "Session monitoring and alerts",
        "Emergency support access",
        "Usage tracking and reports"
      ]
    },
    {
      icon: CreditCard,
      title: "Pay & Review",
      description: "Seamless payments with escrow protection and review system",
      visual: {
        type: "mockup",
        content: "Payment and review interface"
      },
      details: [
        "Automatic payment processing",
        "Escrow protection for security",
        "Rate your experience",
        "Earn loyalty rewards"
      ]
    }
  ];

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-6 py-3 mb-6">
            <Play className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your EV Charging
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Journey Simplified
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From discovery to payment, experience seamless EV charging in 5 simple steps.
          </p>
        </div>

        {/* Interactive Story */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Step Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  {(() => {
                    const StepIcon = steps[activeStep].icon;
                    return <StepIcon className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <div>
                  <div className="text-sm font-medium text-blue-600 mb-1">
                    Step {activeStep + 1} of {steps.length}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3">
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevStep}
                  className="border-blue-200 hover:bg-blue-50"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <Button
                  size="sm"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Visual Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 min-h-[400px] flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                      {(() => {
                        const StepIcon = steps[activeStep].icon;
                        return <StepIcon className="w-10 h-10 text-blue-600" />;
                      })()}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {steps[activeStep].visual.content}
                    </h4>
                    <div className="space-y-2">
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                          style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500">Step {activeStep + 1} of {steps.length}</p>
                    </div>
                  </div>
                </div>

                {/* Phone Frame Decoration */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-float-delayed"></div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeStep
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
            <CardContent className="px-8 py-6">
              <div className="flex items-center space-x-4">
                <Star className="w-8 h-8 text-yellow-300" />
                <div className="text-left">
                  <p className="font-semibold text-lg">Ready to start your journey?</p>
                  <p className="text-white/90">Join thousands of satisfied EV drivers</p>
                </div>
                <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Download App
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default VisualStorySection;