import { useState } from "react";
import { MapPin, Navigation, Zap, Clock, Filter, Search, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const InteractiveMapSection = () => {
  const [selectedRoute, setSelectedRoute] = useState("delhi-shimla");

  const routes = [
    {
      id: "delhi-shimla",
      name: "Delhi to Shimla",
      distance: "342 km",
      duration: "7 hours",
      chargingPoints: 8,
      difficulty: "Popular"
    },
    {
      id: "mumbai-goa",
      name: "Mumbai to Goa",
      distance: "463 km",
      duration: "9 hours",
      chargingPoints: 12,
      difficulty: "Well Connected"
    },
    {
      id: "bangalore-mysore",
      name: "Bangalore to Mysore",
      distance: "144 km",
      duration: "3 hours",
      chargingPoints: 5,
      difficulty: "Easy"
    },
    {
      id: "ahmedabad-udaipur",
      name: "Ahmedabad to Udaipur",
      distance: "262 km",
      duration: "5 hours",
      chargingPoints: 6,
      difficulty: "Scenic"
    }
  ];

  const chargingPoints = [
    {
      id: 1,
      location: "Chandigarh",
      distance: "245 km",
      type: "Fast Charging",
      price: "₹8/unit",
      rating: 4.8,
      available: true,
      host: "Rajesh Kumar"
    },
    {
      id: 2,
      location: "Ambala",
      distance: "200 km",
      type: "Standard",
      price: "₹6/unit",
      rating: 4.6,
      available: true,
      host: "Priya Sharma"
    },
    {
      id: 3,
      location: "Kalka",
      distance: "290 km",
      type: "Fast Charging",
      price: "₹7/unit",
      rating: 4.9,
      available: false,
      host: "Amit Singh"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-indigo-100 border border-indigo-200 rounded-full px-6 py-3 mb-6">
            <MapPin className="w-5 h-5 text-indigo-600 mr-2" />
            <span className="text-indigo-700 font-medium">Explore Routes</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Plan Your EV Journey
            <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Across India
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover charging points along popular routes. Real-time availability, verified hosts, and affordable prices.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Route Selection */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Popular Routes</h3>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>

                <div className="space-y-3">
                  {routes.map((route) => (
                    <Card
                      key={route.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                        selectedRoute === route.id
                          ? 'ring-2 ring-indigo-500 bg-indigo-50'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedRoute(route.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{route.name}</h4>
                          <Badge variant={route.difficulty === 'Easy' ? 'default' : 'secondary'}>
                            {route.difficulty}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Navigation className="w-4 h-4" />
                            <span>{route.distance}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{route.duration}</span>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center space-x-1 text-sm text-indigo-600">
                          <Zap className="w-4 h-4" />
                          <span>{route.chargingPoints} charging points</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-6 text-white">
                <Car className="w-8 h-8 mb-4 text-indigo-200" />
                <h4 className="text-lg font-semibold mb-2">Can't find your route?</h4>
                <p className="text-indigo-100 text-sm mb-4">
                  Search for charging points anywhere in India or request new locations.
                </p>
                <Button variant="secondary" size="sm" className="bg-white text-indigo-600 hover:bg-indigo-50">
                  <Search className="w-4 h-4 mr-2" />
                  Custom Search
                </Button>
              </div>
            </div>

            {/* Interactive Map Mock */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full min-h-[600px]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {routes.find(r => r.id === selectedRoute)?.name} Route
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      ● Live Updates
                    </Badge>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-64 mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Charging points along {routes.find(r => r.id === selectedRoute)?.name}</p>
                  </div>

                  {/* Mock route line */}
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-0.5 bg-indigo-500 rounded-full"></div>

                  {/* Mock charging points */}
                  <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>

                {/* Charging Points List */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-4">Available Charging Points</h4>
                  {chargingPoints.map((point) => (
                    <Card key={point.id} className="hover:shadow-md transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-3 h-3 rounded-full ${
                              point.available ? 'bg-green-500' : 'bg-red-500'
                            }`}></div>
                            <div>
                              <h5 className="font-semibold text-gray-900">{point.location}</h5>
                              <p className="text-sm text-gray-600">Host: {point.host}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-indigo-600">{point.price}</p>
                            <div className="flex items-center space-x-1 text-sm text-gray-600">
                              <span>★ {point.rating}</span>
                              <span>•</span>
                              <span>{point.distance}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <Badge variant={point.available ? 'default' : 'secondary'}>
                            {point.available ? 'Available Now' : 'Booked'}
                          </Badge>
                          <Button
                            size="sm"
                            disabled={!point.available}
                            className="bg-indigo-600 hover:bg-indigo-700"
                          >
                            {point.available ? 'Book Now' : 'Join Waitlist'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveMapSection;