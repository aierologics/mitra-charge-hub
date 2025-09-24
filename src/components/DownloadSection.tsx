import { Button } from "@/components/ui/button";
import { Download, Star, Users, Smartphone } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Download ChargingMitra App
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join thousands of EV drivers who trust ChargingMitra for their charging needs across India
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <Button variant="secondary" size="lg" className="bg-white text-accent hover:bg-white/90 w-full sm:w-auto">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Google Play Store
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent w-full sm:w-auto">
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Coming Soon - iOS
            </Button>
          </div>

          {/* App Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <Download className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">10K+</p>
              <p className="text-sm sm:text-base text-white/80">Downloads</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">4.8★</p>
              <p className="text-sm sm:text-base text-white/80">App Rating</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">500+</p>
              <p className="text-sm sm:text-base text-white/80">Active Hosts</p>
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="mt-8 sm:mt-12 inline-flex items-center space-x-4 sm:space-x-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-lg flex items-center justify-center">
              <div className="w-12 h-12 sm:w-20 sm:h-20 bg-primary/20 rounded flex items-center justify-center">
                <Smartphone className="w-6 h-6 sm:w-10 sm:h-10 text-primary" />
              </div>
            </div>
            <div className="text-left">
              <p className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Scan to Download</p>
              <p className="text-sm sm:text-base text-white/80">Available on Google Play Store</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;