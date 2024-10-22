"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/app/_constants/header";
import { ArrowRight, Headphones } from "lucide-react";
import useHeaderHook from "./Header.hook";
import HeaderToggle from "./HeaderToggle";

export default function Header() {
  const { active, mobileNav, isMobile, toggleMobileNav } = useHeaderHook();

  return (
    <header
      className={`sticky top-0 z-50 w-full ${active && "shadow-md bg-white"} ${
        mobileNav && "bg-white"
      }`}
    >
      <div className="container flex items-center gap-8 justify-between lg:justify-start">
        <Link className="text-2xl font-bold" href="/">
          soller
        </Link>

        <div className="mr-4 hidden lg:flex gap-8 w-full">
          <nav className="flex items-center gap-4 font-medium capitalize w-full">
            <div className="flex-grow flex gap-4">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
            <NavAside mobileNav={mobileNav} isMobile={isMobile} />
          </nav>
        </div>

        <HeaderToggle mobileNav={mobileNav} toggleMobileNav={toggleMobileNav} />
      </div>
      {isMobile && mobileNav && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="px-4 py-2 pb-10 bg-white"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2"
              onClick={() => toggleMobileNav()}
            >
              {item.label}
            </Link>
          ))}
          <NavAside mobileNav={mobileNav} isMobile={isMobile} />
        </motion.div>
      )}
    </header>
  );
}

const NavAside = ({ mobileNav = false, isMobile = false }) => {
  return (
    <div
      className={`flex gap-4 ${
        mobileNav && isMobile ? "flex-col mt-10" : "items-center"
      }`}
    >
      <Link
        href="tel:555818282"
        className="flex gap-3 items-center text-blue-text"
      >
        <Headphones size={20} />
        555 818 282
      </Link>
      <Button className="w-fit">
        Request a Quote
        <ArrowRight className="ml-4 -mr-2 h-4 w-4" />
      </Button>
    </div>
  );
};
