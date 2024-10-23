import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <section id="product" className="pb-20">
      <div className="text-center mb-[80px]">
        <p className="text-base lg :text-xl text-secondary-orange font-medium mb-2">
          No more waste
        </p>
        <h2 className="font-bold text-4xl md:text-5xl mb-6">Pick the Sun</h2>
        <p className="md:text-lg container-p max-w-[900px] mx-auto">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      <div className="grid place-content-center relative overflow-x-clip">
        <div className="bg-secondary-bright-orange size-[300px] sm:size-[400px] md:size-[500px] lg:size-[600px] absolute rounded-full -z-10 -left-[200px] -top-[140px]"></div>
        <div className="bg-main-light size-[150px] sm:size-[250px] md:size-[350px] lg:size-[450px] absolute rounded-full -z-10 -right-28 md:-right-[40px] -top-5 md:top-[40px]"></div>
        <Image
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
