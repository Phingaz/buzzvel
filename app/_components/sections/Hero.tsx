"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MotionImage = motion.create(Image);

const Hero = () => {
  return (
    <section id="hero" className="section-padding">
      <div className="flex h-full">
        <div className="flex-1 container pt-[300px] sm:pt-0">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 mb-14 lg:mb-20 text-center sm:text-left container-padding"
          >
            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-[700]"
            >
              Get the Sun to <br /> Power Your Home
            </motion.h1>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:text-lg max-w-[500px]"
            >
              Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque.
            </motion.p>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="w-fit">
                Request a Quote <ArrowRight className="ml-4 -mr-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-[600px]"
          >
            <p className="mb-4">
              &ldquo;Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque faucibus.&ldquo;
            </p>

            <div className="flex items-center gap-4">
              <Image
                width={50}
                height={50}
                src="/landing/hero/hero-user.png"
                alt="quote"
              />
              <span>
                <p>Rwanda Melflor</p>
                <p className="text-gray-700 text-sm">zerowaste.com</p>
              </span>
            </div>
          </motion.div>
        </div>
        <MotionImage
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          width={0}
          height={0}
          className="absolute top-0 right-0 w-[300px] md:w-[400px] lg:w-[500px] -z-10"
          alt="image"
          src="/landing/hero/hero.svg"
        />
      </div>
    </section>
  );
};

export default Hero;
