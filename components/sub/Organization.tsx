"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-20 w-auto z-[20]"
    >
         <motion.div
        variants={slideInFromRight(0.8)}
        className="md:w-[50%] w-full h-full flex justify-center items-center mt-16 md:mr-32"
      >
        <Image
          src="/dev.svg"
          alt="work icons"
          height={350}
          width={350}
          
        />
      </motion.div>
      <div className="h-full md:w-[70%] w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Organization
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-5 text-6xl font-bold text-white md:w-[130%] max-w-[800px]"
        >
          <span>
          Founder of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Devnoverse
            </span>
            
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[800px] "
        >
            As the founder of Devnoverse, I established a dynamic website development service.
            Devnoverse specializes in crafting high-quality, tailored websites that seamlessly fuse innovation with functionality.
            Under my leadership, we've delivered number of quality websites, elevating client visions using cutting-edge technologies and frameworks.
            Devnoverse's commitment to excellence continues to redefine standards in the digital realm,
            positioning us as a trusted partner for businesses seeking unparalleled web development expertise.
        </motion.p>
        <div>
        <motion.a
          variants={slideInFromLeft(1)}
          className="px-6 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mr-4"
        >
          Contact Email
        </motion.a>
        <motion.a
          variants={slideInFromRight(1)}
          className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Explore More
        </motion.a>
        </div>
       
      </div>

     
    </motion.div>
  );
};

export default HeroContent;
