import { Smartphone, UserCheck, Navigation, Zap, CreditCard, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HowItWorksSection = () => {
  const driverSteps = [
    {
      icon: Smartphone,
      title: "Open App",
      description: "Search charging points along your route with real-time availability"
    },
    {
      icon: UserCheck,
      title: "Choose Host",
      description: "View verified host details, pricing, and user reviews"
    },
    {
      icon: Navigation,
      title: "Book & Navigate",
      description: "Secure booking with GPS navigation directly to the charging point"
    },
    {
      icon: Zap,
      title: "Charge Safely",
      description: "Meet your verified host and charge your vehicle securely"
    },
    {
      icon: CreditCard,
      title: "Pay & Review",
      description: "Automatic payment processing and rate your charging experience"
    }
  ];

  const hostSteps = [
    {
      icon: Smartphone,
      title: "List Your Charger",
      description: "Simple registration process with photos and availability settings"
    },
    {
      icon: UserCheck,
      title: "Get Verified",
      description: "Our team ensures safety standards and host verification"
    },
    {
      icon: Star,
      title: "Welcome Guests",
      description: "Host EV drivers and provide great charging experiences"
    },
    {
      icon: CreditCard,
      title: "Earn Money",
      description: "Get paid automatically with 80-85% of charging fees"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How ChargingMitra Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple steps to connect EV drivers with local charging hosts across India
          </p>
        </div>

        <Tabs defaultValue="drivers" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="drivers" className="text-lg py-3">For Drivers</TabsTrigger>
            <TabsTrigger value="hosts" className="text-lg py-3">For Hosts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="drivers">
            <div className="grid md:grid-cols-5 gap-6">
              {driverSteps.map((step, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-[1.05]">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="w-8 h-8 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="hosts">
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {hostSteps.map((step, index) => (
                <Card key={index} className="group hover:shadow-energy transition-all duration-300 hover:scale-[1.05]">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <step.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="w-8 h-8 mx-auto mb-4 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorksSection;