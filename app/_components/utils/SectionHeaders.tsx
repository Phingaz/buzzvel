import React from "react";

type SectionHeadersProps = {
  title: string;
  heading: string;
  text: string;
};

const SectionHeaders = ({ title, heading, text }: SectionHeadersProps) => {
  return (
    <div className="mb-[80px] md:text-left text-center">
      <p className="text-base lg:text-xl text-secondary-orange font-medium mb-2">
        {title}
      </p>
      <h2 className="font-bold text-4xl md:text-5xl mb-6">{heading}</h2>
      {text && <p className="md:text-lg">{text}</p>}
    </div>
  );
};

export default SectionHeaders;
