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
    <motion.section
      id="configure"
      className="section-padding relative bg-main"
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div ref={containerRef} className="overflow-clip">
        <div className="container py-0 flex flex-col md:flex-row md:justify-between items-center mb-20">
          <motion.div
            className="mb-6 md:mb-0 text-center md:text-left"
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.p
              className="text-base lg:text-xl text-secondary font-medium mb-2"
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Join other Sun harvesters
            </motion.p>
            <motion.h2
              className="font-bold text-4xl md:text-5xl mb-6 text-white max-w-[700px]"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Make something awesome
            </motion.h2>
            <motion.p
              className="text-sm md:text-base max-w-[700px] text-white"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </motion.p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button variant="secondary" className="w-fit">
              Request a Quote
              <ArrowRight className="ml-4 -mr-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
        <motion.ul
          viewport={{ once: true }}
          className="flex gap-6 items-start relative px-4 lg:px-[80px]"
          whileInView={{ x: getXPosition() }}
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
    </motion.section>
  );
};

export default Configure;
