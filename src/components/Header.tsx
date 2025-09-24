import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Download, Globe } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ChargingMitra</h1>
              <p className="text-xs text-muted-foreground">Your Trusted Charging Partner</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#drivers" className="text-foreground hover:text-primary transition-colors">For Drivers</a>
            <a href="#hosts" className="text-foreground hover:text-primary transition-colors">For Hosts</a>
            <a href="#support" className="text-foreground hover:text-primary transition-colors">Support</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Globe className="w-4 h-4 mr-2" />
              EN | हिंदी
            </Button>
            <Button variant="hero" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
              <a href="#drivers" className="text-foreground hover:text-primary transition-colors">For Drivers</a>
              <a href="#hosts" className="text-foreground hover:text-primary transition-colors">For Hosts</a>
              <a href="#support" className="text-foreground hover:text-primary transition-colors">Support</a>
              <div className="pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="w-full mb-3 text-muted-foreground">
                  <Globe className="w-4 h-4 mr-2" />
                  EN | हिंदी
                </Button>
                <Button variant="hero" size="lg" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;