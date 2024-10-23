"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/app/_constants/landing";
import { CarouselBtns, CarouselCard } from "../utils/Carousel";
import useCarousel from "@/app/_hooks/useCarousel";

const Configure = () => {
  const {
    cardRef,
    containerRef,
    currentIndex,
    getXPosition,
    nextSlide,
    prevSlide,
  } = useCarousel(testimonials.length);

  return (
    <section id="configure" className="py-20 relative bg-main">
      <div ref={containerRef} className="overflow-clip">
        <div className="container py-0 flex justify-between items-center mb-20">
          <div>
            <p className="text-base lg:text-xl text-secondary font-medium mb-2">
              Join other Sun harvesters
            </p>
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-white max-w-[700px]">
              Make something awesome
            </h2>
            <p className="text-sm md:text-base max-w-[700px] text-white">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <Button variant="secondary" className="w-fit">
            Request a Quote
            <ArrowRight className="ml-4 -mr-2 h-4 w-4" />
          </Button>
        </div>
        <motion.ul
          className="flex gap-6 items-start relative px-4 lg:px-[80px]"
          animate={{ x: getXPosition() }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {testimonials.map((testimonial, index) => (
            <CarouselCard
              key={index}
              index={index}
              ref={cardRef}
              testimonial={testimonial}
              currentCard={index === currentIndex}
            />
          ))}
        </motion.ul>
        <CarouselBtns
          prevSlide={prevSlide}
          currentIndex={currentIndex}
          nextSlide={nextSlide}
          arrayLength={testimonials.length}
        />
      </div>
    </section>
  );
};

export default Configure;
