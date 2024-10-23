import { services } from "@/app/_constants/landing";
import Image from "next/image";
import React from "react";

const Solutions = () => {
  return (
    <section id="solutions" className="pb-20">
      <div className="grid place-content-center relative overflow-x-clip mt-32">
        <div className="bg-main absolute lg:h-[650px] lg:w-[1000px] rounded-full -z-10 -left-[450px] top-[100px] transform -rotate-45"></div>
      </div>
      <div className="flex gap-10 pl-10 pr-20">
        <Image src="/mobile.svg" width={500} height={900} alt="hero" />
        <div className="mb-12 grid place-content-center">
          <div className="mb-[80px]">
            <p className="text-base lg :text-xl text-secondary-orange font-medium mb-2">
              Services
            </p>
            <h2 className="font-bold text-4xl md:text-5xl mb-6">
              Personalized services
            </h2>
            <p className="md:text-lg">
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
              et. Auctor turpis semper id sit ornare maecenas lectus sed.
            </p>
          </div>

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
      </div>
    </section>
  );
};

export default Solutions;
