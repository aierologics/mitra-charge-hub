import { AlertTriangle, DollarSign, Navigation, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import chargingGapsImage from "@/assets/charging-gaps.jpg";

const ProblemSection = () => {
  const problems = [
    {
      icon: Navigation,
      title: "Limited Charging in Remote Areas",
      description: "Highways, hill stations, and small towns lack proper EV charging infrastructure"
    },
    {
      icon: DollarSign,
      title: "Expensive Commercial Rates",
      description: "₹15-25/unit at public stations vs ₹3-8/unit at home - pay fair prices"
    },
    {
      icon: Zap,
      title: "Unreliable Infrastructure",
      description: "Broken chargers, long queues, and unpredictable availability"
    },
    {
      icon: AlertTriangle,
      title: "Range Anxiety on Roads",
      description: "Fear of getting stranded without charging options on popular routes"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tired of Range Anxiety on
            <span className="block bg-energy-gradient bg-clip-text text-transparent">
              Indian Highways?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            EV owners face real challenges when traveling beyond city limits. ChargingMitra solves these problems through community-powered charging.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Problems Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="group hover:shadow-trust transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-destructive/20 transition-colors">
                    <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={chargingGapsImage}
                alt="Charging infrastructure gaps on Indian highways"
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                  Major Highway Coverage Gaps
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  NH-44, NH-48, NH-16 and popular tourist routes lack adequate charging infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;