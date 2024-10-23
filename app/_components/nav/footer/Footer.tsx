import { footerLinks } from "@/app/_constants/landing";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container py-[24px] md:py-[30px] flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center gap-6 flex-col md:flex-row">
        <Link
          className="text-2xl font-bold flex items-center gap-2 capitalize"
          href="/"
        >
          <Image src="/logo.svg" width={50} height={32} alt="logo" />
          soller
        </Link>

        <p>@ 2023 Soller, Inc. All rights reserved.</p>
      </div>
      <ul className="flex items-center gap-6 mt-6 md:mt-0">
        {footerLinks.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
