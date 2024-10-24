"use client";

import { services } from "@/app/_constants/landing";
import Image from "next/image";
import React from "react";
import SectionHeaders from "../utils/SectionHeaders";
import { motion } from "framer-motion";

const MotionImage = motion.create(Image);

const Features = () => {
  return (
    <section id="services" className="section-padding">
      <motion.div
        className="grid place-content-center relative overflow-x-clip md:mt-32"
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-secondary absolute h-[500px] w-[800px] lg:h-[650px] sm:w-[1000px] rounded-full -z-10 md:-right-[450px] md:top-[100px] sm:-bottom-[1300px] sm:-right-[350px] -bottom-[1530px] -right-[450px] transform rotate-45"></div>
      </motion.div>
      <div className="flex gap-10 container flex-col md:flex-row">
        <motion.div
          className="mb-12"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionHeaders
            title="System features"
            heading="Powerful features"
            text="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
          />
          <motion.div
            className="grid grid-cols-2 gap-12"
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              >
                <h3 className="font-bold md:text-lg mb-4 mt-20">
                  {service.title}
                </h3>
                <p>{service.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <MotionImage
          src="/landing/mobile2.svg"
          width={500}
          height={900}
          alt="hero"
          className="-mr-4"
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
      </div>
    </section>
  );
};

export default Features;
