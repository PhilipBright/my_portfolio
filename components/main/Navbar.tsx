"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


interface SocialMedia {
  link: string;
  src: string;
  name: string;
}

const navLinks = [
  { href: "#about-me", label: "About me" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center shrink-0"
        >
          <Image
            src="/pblogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Saw Kaung Set Hein
          </span>
        </a>

        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="cursor-pointer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center gap-5">
          {Socials.map((social: SocialMedia) => (
            <Link href={social.link} key={social.name} className="shrink-0">

                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 min-w-[24px]"
                />

            </Link>
          ))}

          <button
            type="button"
            className="md:hidden text-gray-200 shrink-0"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-[65px] left-0 w-full bg-[#030014] border-b border-[#7042f861] shadow-lg shadow-[#2A0E61]/50">
          <div className="flex flex-col px-6 py-4 gap-4 text-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
