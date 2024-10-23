"use client";
import { services } from "@/app/_constants/landing";
import Image from "next/image";
import React from "react";
import SectionHeaders from "../utils/SectionHeaders";
import useHeaderHook from "../nav/header/Header.hook";

const Solutions = () => {
  const { isMobile } = useHeaderHook();
  return (
    <section id="solutions" className="section-padding">
      <div className="grid place-content-center relative overflow-x-clip md:mt-32">
        <div className="bg-main absolute h-[500px] w-[800px] lg:h-[650px] sm:w-[1000px] rounded-full -z-10 md:-left-[450px] md:top-[100px] sm:-bottom-[1300px] sm:-left-[350px] -bottom-[1530px] -left-[450px] transform -rotate-45"></div>
      </div>
      <div className="flex justify-center items-center md:justify-start md:items-start md:flex-row flex-col gap-10 container">
        <div className="sm:min-w-[500px] -ml-4 order-2 md:order-1 w-full grid place-content-center">
          <Image
            src={isMobile ? "/landing/mobile-2.svg" : "/landing/mobile.svg"}
            width={500}
            height={900}
            alt="hero"
          />
        </div>
        <div className="mb-12 grid place-content-center order-1 md:order-2">
          <SectionHeaders
            title="Services"
            heading="Personalized services"
            text="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
          />

          <div className="grid grid-cols-2 gap-12 text-center">
            {services.map((service, i) => (
              <div key={i}>
                <h3 className="font-bold md:text-lg mb-4 mt-20">
                  {service.title}
                </h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
