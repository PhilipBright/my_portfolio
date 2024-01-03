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


  useEffect(() => {
    if (inView1) {
      controls1.start('visible');
    }
    if (inView2) {
      controls2.start('visible');
    }
    if (inView3) {
      controls3.start('visible');
    }
    if (inView4) {
      controls4.start('visible');
    }
  }, [controls1, inView1, controls2, inView2, controls3, inView3, controls4, inView4]);

  const variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-20'>
      <div>
        <h1 className=' text-white text-6xl font-bold mb-16'>Work Experience</h1>
      </div>
    <div className="space-y-8 w-[70%]  items-center relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      <div ref={ref1}>
        <motion.div
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          variants={variants}
          initial="hidden"
          animate={controls1}
        >
          {/* Your existing timeline content for the first section */}
          <div className="flex items-center md:ml-10 justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1d1836] p-4 rounded border border-slate-200 shadow z-20">
        <div className="flex items-center justify-between space-x-2 mb-1">
        <div className="font-bold md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> <Link href="https://global-choice.vercel.app/" className='z-50 cursor-pointer'>Global Choice</Link></div>
            <time className="font-caveat font-medium text-green-300">August 2022</time>
        </div>
        <div className='text-white font-bold'>
          <h1>Front-End Developer</h1>
        </div>
        <div className=" text-blue-200">Frontend lead at the Global Choice, specializing in ReactJS. I collaborate across teams, create reusable components for seamless integration, and ensure code quality through constructive code reviews.</div>
    </div>
          {/* ... */}
        </motion.div>
      </div>

      <div ref={ref2}>
        <motion.div
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row  group is-active"
          variants={variants}
          initial="hidden"
          animate={controls2}
        >
           <div className="flex items-center md:ml-10 justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1d1836] p-4 rounded border border-slate-200 shadow z-20">
        <div className="flex items-center justify-between space-x-2 mb-1">
        <div className="font-bold md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"><Link href='https://ainu-sushi-kriftel.com/'>Ainu-Sushi Kriftel</Link></div>
            <time className="font-caveat font-medium text-green-300">June 2023</time>
        </div>
        <div className='text-white font-bold'>
          <h1>Full-Stack Developer</h1>
        </div>
        <div className=" text-blue-200">Led the development of secure, high-performance web apps using Laravel at Ainu Sushi Kriftel. Implemented encryption, optimized performance with caching, and excelled in complex code debugging.</div>
    </div>
          {/* ... */}
        </motion.div>
      </div>

      <div ref={ref3}>
        <motion.div
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse  group is-active"
          variants={variants}
          initial="hidden"
          animate={controls3}
        >
           <div className="flex items-center md:ml-10 justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1d1836] p-4 rounded border border-slate-200 shadow z-20">
        <div className="flex items-center justify-between space-x-2 mb-1">
        <div className="font-bold md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">My Way Travel & Tour</div>
            <time className="font-caveat font-medium text-green-300">June 2023</time>
        </div>
        <div className='text-white font-bold'>
          <h1>Full-Stack Developer</h1>
        </div>
        <div className=" text-blue-200">At My Way Travel & Tour, utilized Next.js for dynamic, high-performance web development. Improved site speed, SEO, and user experience through collaborative feature integration, optimizing page load times for enhanced engagement</div>
    </div>
          {/* ... */}
        </motion.div>
      </div>

      <div ref={ref4}>
        <motion.div
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row  group is-active"
          variants={variants}
          initial="hidden"
          animate={controls4}
        >
           <div className="flex items-center md:ml-10 justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1d1836] p-4 rounded border border-slate-200 shadow">
        <div className="flex items-center justify-between space-x-2 mb-1">
        <div className="font-bold md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Devnoverse</div>
            <time className="font-caveat font-medium text-green-300">2023</time>
        </div>
        <div className='text-white font-bold'>
          <h1>Full-Stack Developer</h1>
        </div>
        <div className=" text-blue-200">Founder and full-stack developer at Devnoverse, driving end-to-end technical solutions. I architect intuitive frontends and robust backends, ensuring cohesive, client-centric results.</div>
    </div>
          {/* ... */}
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default ExperienceTimeline;
