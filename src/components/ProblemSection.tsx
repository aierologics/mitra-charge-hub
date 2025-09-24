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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tired of Range Anxiety on 
            <span className="block bg-energy-gradient bg-clip-text text-transparent">
              Indian Highways?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            EV owners face real challenges when traveling beyond city limits. ChargingMitra solves these problems through community-powered charging.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problems Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="group hover:shadow-trust transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={chargingGapsImage} 
                alt="Charging infrastructure gaps on Indian highways" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Major Highway Coverage Gaps
                </h3>
                <p className="text-white/90">
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