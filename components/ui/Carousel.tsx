"use client";

import React, { useState, useRef, useEffect } from "react";
import { CarouselProvider } from "./carousel-context";
import { cn } from "@/lib/utils";

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: {
    align?: "start" | "center" | "end";
    loop?: boolean;
  };
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, children, opts, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }, []);

    const carouselContext = {
      currentIndex,
      setCurrentIndex,
      cardWidth,
      setCardWidth,
      containerWidth,
      opts,
    };

    return (
      <CarouselProvider value={carouselContext}>
        <div
          ref={containerRef}
          className={cn("overflow-clip", className)}
          {...props}
        >
          {children}
        </div>
      </CarouselProvider>
    );
  }
);
Carousel.displayName = "Carousel";

export { Carousel };
