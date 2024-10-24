"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const Bottom = () => {
  return (
    <motion.section
      className="relative overflow-clip"
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-main-light flex flex-col justify-center items-center">
        <motion.div
          className="section-margin flex flex-col md:flex-row justify-between items-center text-center md:text-left"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="md:mr-[240px]">
            <motion.p
              className="text-base lg:text-xl text-secondary font-medium mb-2"
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Get the Sun to power your home
            </motion.p>
            <motion.h2
              className="font-bold text-4xl md:text-5xl mb-6 text-white max-w-[700px]"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              All the power that you need for your house is now available
            </motion.h2>
          </div>
          <motion.div
            className="flex flex-col gap-4 z-[1]"
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button variant="secondary" className="w-fit">
              Request a Quote
              <ArrowRight className="ml-4 -mr-2 h-4 w-4" />
            </Button>
            <p className="text-white text-xs text-center">
              Egestas fringilla aliquam leo
            </p>
          </motion.div>
        </motion.div>
        <MotionImage
          src="/landing/macbook.svg"
          width={1000}
          height={500}
          alt="macbook svg"
          className="z-[1]"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50, scale: 0 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="bg-main-dark size-[150px] sm:size-[250px] md:size-[350px] lg:size-[700px] absolute rounded-full -top-[300px] -right-[100px]"
          viewport={{ once: true }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
      </div>
    </motion.section>
  );
};

export default Bottom;
