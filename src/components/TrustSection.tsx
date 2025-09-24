import { Shield, Award, Users, Globe, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustSection = () => {
  const trustMetrics = [
    {
      icon: Shield,
      number: "100%",
      label: "Aadhaar Verified Hosts",
      description: "Every host undergoes thorough background verification",
      color: "emerald"
    },
    {
      icon: Users,
      number: "50K+",
      label: "Active Community",
      description: "Growing network of EV drivers and hosts",
      color: "blue"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Average Rating",
      description: "Consistently high satisfaction ratings",
      color: "amber"
    },
    {
      icon: Globe,
      number: "28",
      label: "States Covered",
      description: "Pan-India presence with local support",
      color: "purple"
    }
  ];

  const certifications = [
    { name: "ISO 27001 Certified", icon: Award },
    { name: "Government Approved", icon: CheckCircle },
    { name: "24/7 Monitoring", icon: Shield },
    { name: "Insurance Protected", icon: Shield }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 rounded-full px-6 py-2 mb-6">
            <Shield className="w-5 h-5 text-emerald-600 mr-2" />
            <span className="text-emerald-700 font-medium">Trusted by Thousands</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why India Trusts
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              ChargingMitra
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built on trust, safety, and community. Every interaction is secured with industry-leading verification and monitoring systems.
          </p>
        </div>

        {/* Trust Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustMetrics.map((metric, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                  metric.color === 'emerald' ? 'bg-emerald-100 group-hover:bg-emerald-200' :
                  metric.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
                  metric.color === 'amber' ? 'bg-amber-100 group-hover:bg-amber-200' :
                  'bg-purple-100 group-hover:bg-purple-200'
                }`}>
                  <metric.icon className={`w-8 h-8 ${
                    metric.color === 'emerald' ? 'text-emerald-600' :
                    metric.color === 'blue' ? 'text-blue-600' :
                    metric.color === 'amber' ? 'text-amber-600' :
                    'text-purple-600'
                  }`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{metric.number}</h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{metric.label}</h4>
                <p className="text-gray-600 leading-relaxed">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Banner */}
        <div className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Certified & Compliant
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300">
                  <cert.icon className="w-6 h-6 text-white" />
                  <span className="font-medium text-white">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/5 rounded-full"></div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">NHAI</div>
            <div className="text-2xl font-bold text-gray-400">Ministry of Road Transport</div>
            <div className="text-2xl font-bold text-gray-400">EESL</div>
            <div className="text-2xl font-bold text-gray-400">State Transport Authorities</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;