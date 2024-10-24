import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { TCarouselBtnsProps, TCarouselCardProps } from "@/app/types";
import Image from "next/image";

export const CarouselBtns = ({
  prevSlide,
  currentIndex,
  nextSlide,
  arrayLength,
}: TCarouselBtnsProps) => {
  return (
    <div className="container mt-8 flex gap-6">
      <Button
        variant="icon"
        onClick={prevSlide}
        aria-label="Previous slide"
        disabled={currentIndex === 0}
      >
        <ArrowLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="icon"
        onClick={nextSlide}
        aria-label="Next slide"
        disabled={currentIndex === arrayLength - 1}
      >
        <ArrowRight className="w-6 h-6" />
      </Button>
    </div>
  );
};

export const CarouselCard = React.forwardRef<HTMLLIElement, TCarouselCardProps>(
  ({ index, currentCard, testimonial }, ref) => {
    return (
      <motion.li
        ref={index === 0 ? ref : null}
        transition={{ duration: 0.3 }}
        animate={{ scale: currentCard ? 1.1 : 1 }}
        className={`flex flex-col min-w-[360px] md:min-h-[442px] max-w-[360px] bg-white rounded-lg p-8 gap-4 ${
          currentCard ? "mx-4" : ""
        }`}
      >
        <p className="text-gray-600 mt-[110px]">{testimonial.content}</p>
        <div className="flex items-center">
          <Image
            width={64}
            height={64}
            src={`${testimonial.avatar}/${index + 1}.svg`}
            alt={testimonial.name}
            className="rounded-full mr-3"
          />
          <div>
            <p>{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </motion.li>
    );
  }
);

CarouselCard.displayName = "CarouselCard";
