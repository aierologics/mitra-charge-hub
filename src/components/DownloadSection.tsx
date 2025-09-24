import { Button } from "@/components/ui/button";
import { Download, Star, Users, Smartphone } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download ChargingMitra App
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of EV drivers who trust ChargingMitra for their charging needs across India
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="secondary" size="xl" className="bg-white text-accent hover:bg-white/90">
              <Download className="w-5 h-5 mr-2" />
              Google Play Store
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-accent">
              <Smartphone className="w-5 h-5 mr-2" />
              Coming Soon - iOS
            </Button>
          </div>

          {/* App Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <Download className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-white mb-2">10K+</p>
              <p className="text-white/80">Downloads</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-white mb-2">4.8★</p>
              <p className="text-white/80">App Rating</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-white mb-2">500+</p>
              <p className="text-white/80">Active Hosts</p>
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="mt-12 inline-flex items-center space-x-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
              <div className="w-20 h-20 bg-primary/20 rounded flex items-center justify-center">
                <Smartphone className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold text-white mb-2">Scan to Download</p>
              <p className="text-white/80">Available on Google Play Store</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;