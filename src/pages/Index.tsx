
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RestaurantList from "@/components/RestaurantList";
import Footer from "@/components/Footer";
import SupportBot from "@/components/SupportBot";
import AnimatedContainer from "@/components/AnimatedContainer";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <AnimatedContainer>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card rounded-xl p-6 border transition-all hover:shadow-md">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
                      <path d="M14.5 4.5a3.5 3.5 0 0 0-5 0" />
                      <path d="M18.5 4.5a7.5 7.5 0 0 0-13 0" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Fast Delivery</h3>
                  <p className="text-muted-foreground">
                    Get your food delivered in under 30 minutes from your favorite local restaurants.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-6 border transition-all hover:shadow-md">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M2 12c0 4.4 3.6 8 8 8a7.9 7.9 0 0 0 5.2-2" />
                      <path d="M14 2c4.4 0 8 3.6 8 8 0 1.4-.4 2.8-1 3.9" />
                      <path d="M12 9v3l1.5 1.5" />
                      <path d="m2 8 3-3 3 3" />
                      <path d="m19 16-3 3-3-3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Live Tracking</h3>
                  <p className="text-muted-foreground">
                    Track your order in real-time and know exactly when your food will arrive.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-6 border transition-all hover:shadow-md">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 20l-3 1V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15l-7-5" />
                      <path d="M5 15a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Special Offers</h3>
                  <p className="text-muted-foreground">
                    Enjoy exclusive deals and discounts from our partner restaurants every day.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedContainer>
        
        <RestaurantList />
        
        <AnimatedContainer>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">Download Our Mobile App</h2>
                  <p className="text-muted-foreground mb-6">
                    Get the full experience with our mobile app. Order food, track delivery, and receive exclusive offers directly on your phone.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                        <path d="M16 3v4" />
                        <path d="M8 3v4" />
                        <path d="M3 11h18" />
                        <path d="M19 16v6" />
                        <path d="M22 19h-6" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-sm font-medium">App Store</div>
                      </div>
                    </button>
                    
                    <button className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 20-7-7c-1.5-1.45-1.5-4.55 0-6l7-7 1.5 1.5-6.3 6.3c-.95.95-.95 3.25 0 4.2l6.3 6.3Z" />
                        <path d="M5 8.5c-1 0-2 .5-2 2s1 2 2 2" />
                        <path d="M19 8.5c1 0 2 .5 2 2s-1 2-2 2" />
                        <path d="m18 12-6.5-9.5 7 6L16 17l-4.5-3 7-3Z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">GET IT ON</div>
                        <div className="text-sm font-medium">Google Play</div>
                      </div>
                    </button>
                  </div>
                </div>
                
                <div className="md:w-1/3 relative">
                  <div className="absolute -top-6 -bottom-6 -right-6 -left-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1605722243979-fe0be8cbb4b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                    alt="Mobile App" 
                    className="w-full max-w-[240px] mx-auto rounded-2xl shadow-lg relative z-10" 
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedContainer>
      </main>
      
      <Footer />
      <SupportBot />
    </div>
  );
};

export default Index;
