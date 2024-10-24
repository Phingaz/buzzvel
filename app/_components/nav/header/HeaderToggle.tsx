"use client";
import React from "react";
import { motion } from "framer-motion";

type HeaderToggleProps = {
  mobileNav: boolean;
  toggleMobileNav: () => void;
};

const HeaderToggle = ({ mobileNav, toggleMobileNav }: HeaderToggleProps) => {
  return (
    <motion.button
      animate={mobileNav ? "open" : "closed"}
      className="flex flex-col justify-center items-center rounded-lg p-2 py-3 gap-[7px] lg:hidden"
      aria-label="Toggle header navigation"
      onClick={toggleMobileNav}
    >
      <motion.span
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 11 },
        }}
        className="w-6 h-px bg-gray-700 block"
      ></motion.span>
      <motion.span
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        className="w-6 h-px bg-gray-700 block"
      ></motion.span>
      <motion.span
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -5 },
        }}
        className="w-6 h-px bg-gray-700 block"
      ></motion.span>
    </motion.button>
  );
};

export default HeaderToggle;
