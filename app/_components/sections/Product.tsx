"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MotionImage = motion.create(Image);

const Product = () => {
  return (
    <section id="product" className="section-padding">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-[80px]"
      >
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base lg:text-xl text-secondary-orange font-medium mb-2"
        >
          No more waste
        </motion.p>
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-bold text-4xl md:text-5xl mb-6"
        >
          Pick the Sun
        </motion.h2>
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:text-lg container-p max-w-[900px] mx-auto"
        >
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </motion.p>
      </motion.div>
      <div className="grid place-content-center relative overflow-x-clip">
        <div className="bg-secondary-bright-orange size-[300px] sm:size-[400px] md:size-[500px] lg:size-[600px] absolute rounded-full -z-10 -left-[200px] -top-[140px]"></div>
        <div className="bg-main-light size-[150px] sm:size-[250px] md:size-[350px] lg:size-[450px] absolute rounded-full -z-10 -right-28 md:-right-[40px] -top-5 md:top-[40px]"></div>
        <MotionImage
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          alt="desktop image"
          src="/landing/desktop.svg"
          width={1200}
          height={800}
        />
      </div>
    </section>
  );
};

export default Product;
