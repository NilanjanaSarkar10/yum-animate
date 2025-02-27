
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedContainer from "./AnimatedContainer";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedContainer animation="fade-in">
            <div>
              <Link to="/" className="inline-block mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  YumEats
                </span>
              </Link>
              <p className="text-muted-foreground mb-6">
                Delivering delicious meals to your doorstep, making every meal a special experience.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </AnimatedContainer>
          
          <AnimatedContainer animation="fade-in" delay={100}>
            <div>
              <h3 className="font-medium text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/restaurants" className="text-muted-foreground hover:text-primary transition-colors">
                    Restaurants
                  </Link>
                </li>
                <li>
                  <Link to="/deals" className="text-muted-foreground hover:text-primary transition-colors">
                    Deals & Offers
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </AnimatedContainer>
          
          <AnimatedContainer animation="fade-in" delay={200}>
            <div>
              <h3 className="font-medium text-lg mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">
                    1234 Main Street, New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    (123) 456-7890
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    support@yumeats.com
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedContainer>
          
          <AnimatedContainer animation="fade-in" delay={300}>
            <div>
              <h3 className="font-medium text-lg mb-4">Newsletter</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-4 pr-12 py-3 rounded border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <Button 
                  className="absolute right-1 top-1 rounded-full h-8 w-8 p-0 button-hover"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </AnimatedContainer>
        </div>
        
        <AnimatedContainer animation="fade-in" delay={400}>
          <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} YumEats. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </footer>
  );
};

export default Footer;
