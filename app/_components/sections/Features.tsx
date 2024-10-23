import { services } from "@/app/_constants/landing";
import Image from "next/image";
import React from "react";
import SectionHeaders from "../utils/SectionHeaders";

const Features = () => {
  return (
    <section id="services" className="pb-20">
      <div className="grid place-content-center relative overflow-x-clip mt-32">
        <div className="bg-secondary absolute lg:h-[650px] lg:w-[1000px] rounded-full -z-10 -right-[350px] top-[50px] transform -rotate-45"></div>
      </div>
      <div className="flex gap-10 container">
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
