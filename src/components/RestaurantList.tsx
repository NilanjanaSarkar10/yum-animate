
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter,
  Clock, 
  Truck, 
  DollarSign, 
  ChevronDown
} from "lucide-react";
import FoodCard from "./FoodCard";
import AnimatedContainer from "./AnimatedContainer";

// Sample data
const foodItems = [
  {
    id: "1",
    name: "Double Cheeseburger",
    restaurant: "Burger House",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    price: 8.99,
    rating: 4.7,
    deliveryTime: "15-25 min",
    cuisine: "American"
  },
  {
    id: "2",
    name: "Margherita Pizza",
    restaurant: "Pizza Palace",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    price: 12.99,
    rating: 4.5,
    deliveryTime: "20-30 min",
    cuisine: "Italian"
  },
  {
    id: "3",
    name: "Chicken Tikka Masala",
    restaurant: "Spice Garden",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 14.99,
    rating: 4.8,
    deliveryTime: "25-35 min",
    cuisine: "Indian"
  },
  {
    id: "4",
    name: "California Roll",
    restaurant: "Sushi Express",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    price: 9.99,
    rating: 4.6,
    deliveryTime: "15-25 min",
    cuisine: "Japanese"
  },
  {
    id: "5",
    name: "Pad Thai",
    restaurant: "Thai Delight",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFkJTIwdGhhaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 11.99,
    rating: 4.4,
    deliveryTime: "20-30 min",
    cuisine: "Thai"
  },
  {
    id: "6",
    name: "Grilled Salmon",
    restaurant: "Ocean Grill",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    price: 16.99,
    rating: 4.9,
    deliveryTime: "25-35 min",
    cuisine: "Seafood"
  },
  {
    id: "7",
    name: "Vegetable Stir Fry",
    restaurant: "Green Garden",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlJTIwc3RpciUyMGZyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 10.99,
    rating: 4.3,
    deliveryTime: "15-25 min",
    cuisine: "Vegetarian"
  },
  {
    id: "8",
    name: "Chicken Burrito",
    restaurant: "Mexican Fiesta",
    image: "https://images.unsplash.com/photo-1584031651703-bccafe106f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVycml0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 9.99,
    rating: 4.5,
    deliveryTime: "20-30 min",
    cuisine: "Mexican"
  }
];

const RestaurantList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMore, setViewMore] = useState(false);
  
  const displayedItems = viewMore ? foodItems : foodItems.slice(0, 4);

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimatedContainer>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Popular Near You</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the most loved restaurants and dishes in your area, with real-time delivery updates
            </p>
          </div>
        </AnimatedContainer>
        
        <AnimatedContainer delay={100}>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search for food or restaurants"
                className="w-full pl-10 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Delivery Time</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                <span>Price Range</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Truck className="h-4 w-4" />
                <span>Delivery Fee</span>
              </Button>
            </div>
          </div>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedItems.map((item, index) => (
            <FoodCard
              key={item.id}
              {...item}
              delay={150 + (index % 4) * 75}
            />
          ))}
        </div>
        
        <AnimatedContainer delay={300} className="flex justify-center mt-10">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => setViewMore(!viewMore)}
          >
            {viewMore ? "Show Less" : "Show More"}
            <ChevronDown className={`h-4 w-4 transition-transform ${viewMore ? "rotate-180" : ""}`} />
          </Button>
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default RestaurantList;
