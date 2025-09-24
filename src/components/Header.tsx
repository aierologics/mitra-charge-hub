import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Download, Globe } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ChargingMitra</h1>
              <p className="text-xs text-muted-foreground">Your Trusted Charging Partner</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/how-it-works"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/how-it-works') ? 'text-primary font-semibold' : ''}`}
            >
              How It Works
            </Link>
            <Link
              to="/for-drivers"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/for-drivers') ? 'text-primary font-semibold' : ''}`}
            >
              For Drivers
            </Link>
            <Link
              to="/for-hosts"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/for-hosts') ? 'text-primary font-semibold' : ''}`}
            >
              For Hosts
            </Link>
            <Link
              to="/support"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/support') ? 'text-primary font-semibold' : ''}`}
            >
              Support
            </Link>
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
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-foreground hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-semibold' : ''}`}
              >
                Home
              </Link>
              <Link
                to="/how-it-works"
                onClick={() => setIsMenuOpen(false)}
                className={`text-foreground hover:text-primary transition-colors ${isActive('/how-it-works') ? 'text-primary font-semibold' : ''}`}
              >
                How It Works
              </Link>
              <Link
                to="/for-drivers"
                onClick={() => setIsMenuOpen(false)}
                className={`text-foreground hover:text-primary transition-colors ${isActive('/for-drivers') ? 'text-primary font-semibold' : ''}`}
              >
                For Drivers
              </Link>
              <Link
                to="/for-hosts"
                onClick={() => setIsMenuOpen(false)}
                className={`text-foreground hover:text-primary transition-colors ${isActive('/for-hosts') ? 'text-primary font-semibold' : ''}`}
              >
                For Hosts
              </Link>
              <Link
                to="/support"
                onClick={() => setIsMenuOpen(false)}
                className={`text-foreground hover:text-primary transition-colors ${isActive('/support') ? 'text-primary font-semibold' : ''}`}
              >
                Support
              </Link>
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