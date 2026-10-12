'use client'
import React from 'react';
import { motion } from 'framer-motion';

const education: { degree: string; school: string; date: string; result?: string; detail?: string }[] = [
  {
    degree: 'MSc Artificial Intelligence',
    school: 'Nottingham Trent University',
    date: '2025 – 2026',
    detail: 'Dissertation: MediAgent, a multi-agent LLM system for differential diagnosis.',
  },
  {
    degree: 'BSc Computing',
    school: 'Edinburgh Napier University',
    date: '2021 – 2024',
    result: 'First Class with Distinction',
  },
];

const variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const Education = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-32' id="education">
      <div>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-6xl font-bold mb-16'>Education</h1>
      </div>
      <div className="w-[70%] grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((item) => (
          <motion.div
            key={item.degree}
            className="bg-[#1d1836] p-4 rounded border border-slate-200 shadow z-20"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {item.degree}
              </div>
              <time className="font-caveat font-medium text-green-300">{item.date}</time>
            </div>
            <div className='text-white font-bold'><h1>{item.school}</h1></div>
            {item.result && <div className="text-blue-200">{item.result}</div>}
            {item.detail && <div className="text-blue-200 mt-2">{item.detail}</div>}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
