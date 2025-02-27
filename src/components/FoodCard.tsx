
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Star, Plus } from "lucide-react";
import AnimatedContainer from "./AnimatedContainer";

interface FoodCardProps {
  id: string;
  name: string;
  restaurant: string;
  image: string;
  price: number;
  rating: number;
  deliveryTime: string;
  cuisine: string;
  delay?: number;
}

const FoodCard = ({
  id,
  name,
  restaurant,
  image,
  price,
  rating,
  deliveryTime,
  cuisine,
  delay = 0,
}: FoodCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedContainer 
      animation="fade-in" 
      delay={delay} 
      className="h-full"
    >
      <div 
        className="relative flex flex-col h-full overflow-hidden rounded-xl bg-card border card-hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          
          <div className="absolute top-2 left-2">
            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/90 text-white">
              {cuisine}
            </span>
          </div>
          
          <div className="absolute top-2 right-2">
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/90">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium">{rating}</span>
            </div>
          </div>
          
          <div className="absolute bottom-2 left-2">
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/90">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs">{deliveryTime}</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 p-4">
          <h3 className="font-medium text-lg mb-1 line-clamp-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{restaurant}</p>
          
          <div className="flex items-center justify-between mt-auto pt-2">
            <span className="font-medium">${price.toFixed(2)}</span>
            <Button 
              size="sm" 
              className="rounded-full h-8 w-8 p-0 button-hover"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default FoodCard;
