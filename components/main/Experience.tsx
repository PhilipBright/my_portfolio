'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const ExperienceTimeline = () => {
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true });
  
  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({ triggerOnce: true });

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView({ triggerOnce: true });

  const controls4 = useAnimation();
  const [ref4, inView4] = useInView({ triggerOnce: true });

  const controls5 = useAnimation();
  const [ref5, inView5] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView1) controls1.start('visible');
    if (inView2) controls2.start('visible');
    if (inView3) controls3.start('visible');
    if (inView4) controls4.start('visible');
    if (inView5) controls5.start('visible');
  }, [controls1, inView1, controls2, inView2, controls3, inView3, controls4, inView4, controls5, inView5]);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const iconSVG = (
    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
      <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
    </svg>
  );

  const dot = (
    <div className="flex items-center md:ml-10 justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
      {iconSVG}
    </div>
  );

  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-48'>
      <div>
        <h1 className='text-white text-6xl font-bold mb-16'>Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Experience </span></h1>
      </div>
      <div className="space-y-8 w-[70%] items-center relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

        {/* Global Choice */}
        <div ref={ref1}>
          <motion.div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" variants={variants} initial="hidden" animate={controls1}>
            {dot}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1d1836] p-4 rounded border border-slate-200 shadow z-20">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  <Link href="https://global-choice.vercel.app/">Global Choice</Link>
                </div>
                <time className="font-caveat font-medium text-green-300">August 2022</time>
              </div>
              <div className='text-white font-bold'><h1>Front-End Developer</h1></div>
              <div className="text-blue-200">Frontend lead specializing in ReactJS. Collaborated across teams, built reusable components for seamless integration, and maintained code quality through constructive reviews.</div>
            </div>
          </motion.div>
        </div>

        {/* Ainu Sushi */}
        <div ref={ref2}>
          <motion.div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row group is-active" variants={variants} initial="hidden" animate={controls2}>
            {dot}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1d1836] p-4 rounded border border-slate-200 shadow z-20">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  <Link href='https://ainu-sushi-kriftel.com/'>Ainu-Sushi Kriftel</Link>
                </div>
                <time className="font-caveat font-medium text-green-300">January 2023</time>
              </div>
              <div className='text-white font-bold'><h1>Full-Stack Developer</h1></div>
              <div className="text-blue-200">Led development of secure, high-performance web apps using Laravel. Implemented encryption, optimised performance with caching, and excelled in complex code debugging.</div>
            </div>
          </motion.div>
        </div>

        {/* My Way Travel */}
        <div ref={ref3}>
          <motion.div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" variants={variants} initial="hidden" animate={controls3}>
            {dot}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1d1836] p-4 rounded border border-slate-200 shadow z-20">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">My Way Travel & Tour</div>
                <time className="font-caveat font-medium text-green-300">June 2023</time>
              </div>
              <div className='text-white font-bold'><h1>Full-Stack Developer</h1></div>
              <div className="text-blue-200">Utilised Next.js for dynamic, high-performance web development. Improved site speed, SEO, and UX through collaborative feature integration and optimised page load times.</div>
            </div>
          </motion.div>
        </div>

        {/* Devnoverse */}
        <div ref={ref4}>
          <motion.div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row group is-active" variants={variants} initial="hidden" animate={controls4}>
            {dot}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1d1836] p-4 rounded border border-slate-200 shadow z-20">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Devnoverse</div>
                <time className="font-caveat font-medium text-green-300">December 2023</time>
              </div>
              <div className='text-white font-bold'><h1>Founder & Full-Stack Developer</h1></div>
              <div className="text-blue-200">Founded Devnoverse, a web development agency delivering end-to-end solutions. Architect intuitive frontends and robust backends across the full stack, driving client-centric results.</div>
            </div>
          </motion.div>
        </div>

        {/* Kewordal */}
        <div ref={ref5}>
          <motion.div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" variants={variants} initial="hidden" animate={controls5}>
            {dot}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1d1836] p-4 rounded border border-slate-200 shadow z-20">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Kewordal</div>
                <time className="font-caveat font-medium text-green-300">Present</time>
              </div>
             <div className='text-white font-bold'><h1>React Native Developer</h1></div>
<div className="text-blue-200">React Native developer at Kewordal, a UK EdTech company. Building and maintaining cross-platform mobile features while pursuing my MSc in Artificial Intelligence at Nottingham Trent University.</div>
</div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ExperienceTimeline;