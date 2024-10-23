import { services } from "@/app/_constants/landing";
import Image from "next/image";
import React from "react";
import SectionHeaders from "../utils/SectionHeaders";

const Features = () => {
  return (
    <section id="services" className="section-padding">
      <div className="grid place-content-center relative overflow-x-clip md:mt-32">
        <div className="bg-secondary absolute h-[500px] w-[800px] lg:h-[650px] sm:w-[1000px] rounded-full -z-10 md:-right-[450px] md:top-[100px] sm:-bottom-[1300px] sm:-right-[350px] -bottom-[1530px] -right-[450px] transform rotate-45"></div>
      </div>
      <div className="flex gap-10 container flex-col md:flex-row">
        <div className="mb-12">
          <SectionHeaders
            title="System features"
            heading="Powerful features"
            text="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
          />
          <div className="grid grid-cols-2 gap-12">
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
        <Image
          src="/landing/mobile2.svg"
          width={500}
          height={900}
          alt="hero"
          className="-mr-4"
        />
      </div>
    </section>
  );
};

export default Features;
