import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Bottom = () => {
  return (
    <section className="relative overflow-clip">
      <div className="bg-main-light flex flex-col justify-center items-center">
        <div className="my-[80px] flex justify-between items-center border-rose-600">
          <div className="mr-[240px]">
            <p className="text-base lg:text-xl text-secondary font-medium mb-2">
              Get the Sun to power your home
            </p>
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-white max-w-[700px]">
              All the power that you need for your house is now available
            </h2>
          </div>
          <div className="flex flex-col gap-4 z-[1]">
            <Button variant="secondary" className="w-fit">
              Request a Quote
              <ArrowRight className="ml-4 -mr-2 h-4 w-4" />
            </Button>
            <p className="text-white text-xs text-center">
              Egestas fringilla aliquam leo
            </p>
          </div>
        </div>
        <Image
          src="/landing/macbook.svg"
          width={1000}
          height={500}
          alt="macbook svg"
          className="z-[1]"
        />
        <div className="bg-main-dark size-[150px] sm:size-[250px] md:size-[350px] lg:size-[700px] absolute rounded-full -top-[300px] -right-[100px]"></div>
      </div>
    </section>
  );
};

export default Bottom;
