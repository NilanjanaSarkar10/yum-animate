
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import AnimatedContainer from "./AnimatedContainer";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <AnimatedContainer>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Fast Delivery • Fresh Food • Great Prices
            </span>
          </AnimatedContainer>
          
          <AnimatedContainer delay={100} animation="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Delicious Food Delivered To Your Doorstep
            </h1>
          </AnimatedContainer>
          
          <AnimatedContainer delay={200} animation="fade-in">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Discover local restaurants and order your favorite meals with just a few taps. Fast delivery, contactless options, and real-time tracking.
            </p>
          </AnimatedContainer>
          
          <AnimatedContainer delay={300} animation="fade-in">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Enter your delivery address"
                className="w-full pl-10 pr-20 py-3 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <Button className="absolute right-1 top-1 rounded-full button-hover">
                Find Food
              </Button>
            </div>
          </AnimatedContainer>
          
          <AnimatedContainer delay={400} animation="slide-in-bottom">
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="glassmorphism rounded-xl p-4 flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                  alt="Pizza" 
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="ml-3">
                  <h3 className="font-medium">Pizza</h3>
                  <p className="text-sm text-muted-foreground">20+ options</p>
                </div>
              </div>
              
              <div className="glassmorphism rounded-xl p-4 flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60" 
                  alt="Burger" 
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="ml-3">
                  <h3 className="font-medium">Burger</h3>
                  <p className="text-sm text-muted-foreground">15+ options</p>
                </div>
              </div>
              
              <div className="glassmorphism rounded-xl p-4 flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1c2hpfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60" 
                  alt="Sushi" 
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="ml-3">
                  <h3 className="font-medium">Sushi</h3>
                  <p className="text-sm text-muted-foreground">12+ options</p>
                </div>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
