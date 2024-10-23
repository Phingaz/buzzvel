import { footerLinks } from "@/app/_constants/landing";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container py-[30px] flex justify-between items-center">
      <div className="flex items-center gap-6">
        <Link className="text-2xl font-bold flex items-center gap-1" href="/">
          soller
          <Image src="/logo.svg" width={50} height={32} alt="logo" />
        </Link>

        <p>@ 2023 Soller, Inc. All rights reserved.</p>
      </div>
      <ul className="flex items-center gap-6">
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
