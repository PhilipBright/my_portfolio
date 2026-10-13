import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-20 z-[20]"
      id="contact"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Contact
      </h1>
      <a
        href="mailto:sawkaungsethein123@gmail.com"
        className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
      >
        sawkaungsethein123@gmail.com
      </a>
      <div className="flex flex-row gap-5 mt-8">
        {Socials.map((social) => (
          <Link href={social.link} key={social.name}>
            <Image src={social.src} alt={social.name} width={24} height={24} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;
