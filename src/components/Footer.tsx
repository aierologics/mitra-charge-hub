import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">ChargingMitra</h3>
                <p className="text-sm text-white/70">Your Trusted Charging Partner</p>
              </div>
            </div>
            <p className="text-white/80 mb-6">
              India's first peer-to-peer EV charging platform connecting EV owners with charging station hosts in remote areas.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#press" className="text-white/80 hover:text-white transition-colors">Press</a></li>
              <li><a href="#blog" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#help" className="text-white/80 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#safety" className="text-white/80 hover:text-white transition-colors">Safety</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#community" className="text-white/80 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/80">support@chargingmitra.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-white/80">+91 9876543210</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-white/80">Bengaluru, Karnataka<br />India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <a href="#privacy" className="text-white/80 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#terms" className="text-white/80 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#cookies" className="text-white/80 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} ChargingMitra. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;