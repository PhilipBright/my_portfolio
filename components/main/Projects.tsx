import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Image from "next/image";
import mobile1 from './mobile1.png'
import mobile2 from './mobile2.png'
import mobile3 from './mobile3.png'
import mobile4 from './mobile4.png'
import mobile5 from './mobile5.png'
import mobile6 from './mobile6.png'
const Projects = () => {
  return (
      <div
          className="flex flex-col items-center justify-center pb-20"
          id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-5 px-8 z-40">
          <ProjectCard
              src="/projects/mediagent.svg"
              title="MediAgent"
              description="A multi-agent LLM system for symptom-based differential diagnosis, built for my MSc dissertation. Six specialised Claude agents handle symptom extraction, medical history, reasoning with self-consistency voting, retrieval-augmented verification, safety triage and explanation. Every agent can be switched off independently, so I could measure each one's effect on accuracy using the DDXPlus benchmark."
              technologies={["Python", "FastAPI", "PostgreSQL", "Next.js", "TypeScript", "Claude API", "RAG"]}
              href="https://github.com/PhilipBright/MediAgent"
          />
          <ProjectCard
              src="/projects/ai-os.svg"
              title="Personal AI Operating System"
              description="My own AI assistant, built on n8n and the Claude API and used through a Telegram bot. A manager agent routes requests to 18 sub-agents across 6 domains, such as email, research, career and finance, and picks the right model for each job across Claude, GPT, Gemini and Whisper. Memory lives across Notion, Pinecone, Supabase, Airtable and Google Drive, and scheduled runs send me a morning briefing, a news digest, job leads and a nightly plan."
              technologies={["n8n", "Claude API", "Multi-agent", "Pinecone", "Supabase", "Telegram"]}
          />
          <ProjectCard
              src="/projects/lsm.svg"
              title="LSM Audio Denoising"
              description="An audio denoising pipeline built with a Liquid State Machine. Noisy audio is encoded as spike trains, processed by a spiking neural network reservoir that learns with STDP, and decoded by a trained readout to reconstruct clean audio."
              technologies={["Python", "NEST", "NumPy", "SciPy", "Spiking neural networks"]}
          />
        </div>
        <div className="h-full w-full">
          <div className="flex flex-col gap-5 md:flex-row m-10 px-8 py-4 border border-[#2A0E61] rounded-lg">
            <div>
              <Image src={mobile1} alt="mobile app" width="200" height="100" className="rounded-lg" loading="eager" />
            </div>
            <div>
              <Image src={mobile2} alt="mobile app" width="200" height="100" className="rounded-lg" loading="eager" />
            </div>
            <div>
              <Image src={mobile3} alt="mobile app" width="200" height="100" className="rounded-lg" loading="eager" />
            </div>
            <div>
              <Image src={mobile4} alt="mobile app" width="200" height="100" className="rounded-lg" loading="eager" />
            </div>
            <div>
              <Image src={mobile5} alt="mobile app" width="200" height="100" className="rounded-lg" loading="eager" />
            </div>
            <div>
              <Image src={mobile6} alt="mobile app" width="200" height="100" className="rounded-lg" loading="eager" />
            </div>
          </div>
        </div>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-5 px-8 z-40">
          <ProjectCard
              src="/ainu.png"
              title="Ainu-Sushi Kriftel"
              description="Online ordering platform for a sushi restaurant in Germany. Customers create accounts, order food, and choose cash on delivery or pickup."
              technologies={["PHP", "Laravel", "MySQL", "Tailwind"]}
              href="https://ainu-sushi-kriftel.com/"
          />
          <ProjectCard
              src="/myway.png"
              title="My Way Travel & Tour"
              description="Travel booking site for flights, bus tickets and hotels, built for speed and search visibility."
              technologies={["Next.js", "TypeScript", "Redux", "MongoDB", "Prisma", "SCSS"]}
              href="https://www.mywaymm.com/"
          />
          <ProjectCard
              src="/organization.png"
              title="Devnoverse"
              description="Website for Devnoverse, my web development agency, showcasing client work and services."
              technologies={["Next.js", "TypeScript", "Tailwind"]}
              href="https://devnoverse.vercel.app/"
          />
        </div>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 px-8 z-40">
          <ProjectCard
              src="/slang.png"
              title="Slang Digital Marketing"
              description="Website for a Yangon-based digital marketing agency covering social media, advertising, branding and content."
              technologies={["Next.js", "Bootstrap", "SASS", "Framer Motion"]}
              href="https://www.slangdigital.co/"
          />
          <ProjectCard
              src="/conference.png"
              title="Conference Room"
              description="Video conferencing app for creating and joining real-time calls with multiple participants."
              technologies={["Next.js", "TypeScript", "Tailwind", "Stream"]}
              href="https://video-conference-app-orcin.vercel.app/"
          />
          <ProjectCard
              src="/chillflix.png"
              title="ChillFlix"
              description="ChillFlix is a movie streaming platform where users can easily create accounts with their desired subscription plans. Additionally, users have the option to add movies to their favorites, enhancing their personalized viewing experience."
              technologies={["React", "Redux","Express","MongoDB", "Javascript", "Tailwind"]}
          />
        </div>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 px-8 z-40">
          <ProjectCard
              src="/notion.png"
              title="Space Themed Website"
              description=""
              technologies={["Prisma", "Next.js", "TypeScript", "Supabase", "Tailwind", "Zod"]}
          />
        </div>
      </div>
  );
};

export default Projects;
