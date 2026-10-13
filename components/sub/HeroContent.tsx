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
      className="flex flex-row items-center justify-center px-20 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Saw Kaung Set Hein (Philip)
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              AI Engineer
            </span>{" "}
            & Full-Stack Developer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xl text-gray-200 max-w-[600px]"
        >
          I build LLM agent systems and the full-stack products around them.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="flex flex-col gap-4 text-lg text-gray-400 mb-5 max-w-[600px]"
        >
          <p>
            I&apos;m Saw Kaung Set Hein (Philip), an AI engineer and full-stack developer. I hold an MSc in Artificial Intelligence from Nottingham Trent University and a BSc in Computing from Edinburgh Napier University, where I graduated with a First Class degree with Distinction.
          </p>
          <p>
            I have 3+ years of experience building web and mobile products for clients in Myanmar, Germany and the UK, and I founded the web agency Devnoverse. Lately my focus is LLM agents: my MSc dissertation, MediAgent, is a multi-agent system for medical differential diagnosis built on the Claude API.
          </p>
        </motion.div>

        <div className="flex">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 p-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mr-4"
            href="mailto:sawkaungsethein123@gmail.com"
          >
            Contact me
          </motion.a>
          {/* <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 p-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            href="/SawKaungSetHeinResume.pdf"
            download="SawKaungSetHeinResume.pdf"
          >
            Download resume
          </motion.a> */}
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;