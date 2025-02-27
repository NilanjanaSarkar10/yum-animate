
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedContainerProps {
  children: React.ReactNode;
  animation?: 
    | "fade-in" 
    | "slide-in-left" 
    | "slide-in-right" 
    | "slide-in-bottom" 
    | "scale-in"
    | "float"
    | "pulse-soft";
  delay?: number;
  className?: string;
  once?: boolean;
}

export const AnimatedContainer = ({
  children,
  animation = "fade-in",
  delay = 0,
  className,
  once = true,
}: AnimatedContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [once]);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";
    
    switch (animation) {
      case "fade-in":
        return "animate-fade-in";
      case "slide-in-left":
        return "animate-slide-in-left";
      case "slide-in-right":
        return "animate-slide-in-right";
      case "slide-in-bottom":
        return "animate-slide-in-bottom";
      case "scale-in":
        return "animate-scale-in";
      case "float":
        return "animate-float";
      case "pulse-soft":
        return "animate-pulse-soft";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClass(), className)}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
};

export default AnimatedContainer;
