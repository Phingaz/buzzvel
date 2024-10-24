"use client";

import { services } from "@/app/_constants/landing";
import Image from "next/image";
import React from "react";
import SectionHeaders from "../utils/SectionHeaders";
import useHeaderHook from "../nav/header/Header.hook";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const Solutions = () => {
  const { isMobile } = useHeaderHook();

  return (
    <section id="solutions" className="section-padding">
      <motion.div
        className="grid place-content-center relative overflow-x-clip md:mt-32"
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-main absolute h-[500px] w-[800px] lg:h-[650px] sm:w-[1000px] rounded-full -z-10 md:-left-[450px] md:top-[100px] sm:-bottom-[1300px] sm:-left-[350px] -bottom-[1530px] -left-[450px] transform -rotate-45"
          viewport={{ once: true }}
          initial={{ scale: 0, opacity: 0, rotate: 45 }}
          whileInView={{ scale: 1, opacity: 1, rotate: -45 }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </motion.div>
      <div className="flex justify-center items-center md:justify-start md:items-start md:flex-row flex-col gap-10 container">
        <motion.div
          className="sm:min-w-[500px] -ml-4 order-2 md:order-1 w-full grid place-content-center md:place-content-start"
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <MotionImage
            src={!isMobile ? "/landing/mobile-2.svg" : "/landing/mobile.svg"}
            width={500}
            height={900}
            alt="hero"
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </motion.div>
        <motion.div
          className="mb-12 grid place-content-center order-1 md:order-2"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionHeaders
            title="Services"
            heading="Personalized services"
            text="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
          />

          <motion.div
            className="grid grid-cols-2 gap-12 text-center md:text-left"
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
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              >
                <h3 className="font-bold md:text-lg mb-4 mt-20">
                  {service.title}
                </h3>
                <p>{service.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
