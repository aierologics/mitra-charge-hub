import { useState, useEffect } from "react";
import { Car, MapPin, Clock, DollarSign, Zap, Users, TrendingUp, Award } from "lucide-react";

const StatsSection = () => {
  const [counters, setCounters] = useState({
    chargingPoints: 0,
    happyDrivers: 0,
    citiesCovered: 0,
    moneySaved: 0
  });

  const stats = [
    {
      icon: MapPin,
      key: "chargingPoints",
      target: 1500,
      label: "Charging Points",
      description: "Active charging locations",
      suffix: "+",
      color: "emerald"
    },
    {
      icon: Users,
      key: "happyDrivers",
      target: 10000,
      label: "Happy Drivers",
      description: "Verified community members",
      suffix: "+",
      color: "blue"
    },
    {
      icon: Car,
      key: "citiesCovered",
      target: 150,
      label: "Cities Covered",
      description: "Pan-India presence",
      suffix: "+",
      color: "purple"
    },
    {
      icon: DollarSign,
      key: "moneySaved",
      target: 50,
      label: "Lakh Saved",
      description: "Cost savings for drivers",
      suffix: "+",
      color: "amber"
    }
  ];

  const achievements = [
    { icon: Award, label: "Best EV Platform 2024", org: "EV India Awards" },
    { icon: TrendingUp, label: "Fastest Growing Network", org: "Startup India" },
    { icon: Zap, label: "Most Trusted Platform", org: "User Choice Awards" }
  ];

  useEffect(() => {
    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;

    stats.forEach(stat => {
      const increment = stat.target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [stat.key]: Math.floor(current)
        }));
      }, interval);
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
            <TrendingUp className="w-5 h-5 mr-2 text-emerald-400" />
            <span className="font-medium">Growing Strong</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Impact in
            <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real metrics from our growing community of EV drivers and charging hosts across India.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                stat.color === 'emerald' ? 'bg-emerald-500/20 group-hover:bg-emerald-500/30' :
                stat.color === 'blue' ? 'bg-blue-500/20 group-hover:bg-blue-500/30' :
                stat.color === 'purple' ? 'bg-purple-500/20 group-hover:bg-purple-500/30' :
                'bg-amber-500/20 group-hover:bg-amber-500/30'
              }`}>
                <stat.icon className={`w-8 h-8 ${
                  stat.color === 'emerald' ? 'text-emerald-400' :
                  stat.color === 'blue' ? 'text-blue-400' :
                  stat.color === 'purple' ? 'text-purple-400' :
                  'text-amber-400'
                }`} />
              </div>

              <div className="text-4xl font-bold text-white mb-2">
                {counters[stat.key].toLocaleString('en-IN')}{stat.suffix}
              </div>

              <h3 className="text-xl font-semibold text-slate-200 mb-2">
                {stat.label}
              </h3>

              <p className="text-slate-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Real-time Activity Feed */}
        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Live Activity</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-3 h-3 bg-emerald-400 rounded-full mx-auto mb-3 animate-pulse"></div>
              <p className="text-slate-300 text-sm">Raja just booked charging in Shimla</p>
              <p className="text-slate-500 text-xs mt-1">2 minutes ago</p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mx-auto mb-3 animate-pulse"></div>
              <p className="text-slate-300 text-sm">New host joined in Ooty</p>
              <p className="text-slate-500 text-xs mt-1">5 minutes ago</p>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-purple-400 rounded-full mx-auto mb-3 animate-pulse"></div>
              <p className="text-slate-300 text-sm">Charging session completed in Goa</p>
              <p className="text-slate-500 text-xs mt-1">8 minutes ago</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Recognition & Awards</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-all duration-300"
              >
                <achievement.icon className="w-6 h-6 text-amber-400" />
                <div className="text-left">
                  <p className="font-semibold text-white">{achievement.label}</p>
                  <p className="text-slate-400 text-sm">{achievement.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;