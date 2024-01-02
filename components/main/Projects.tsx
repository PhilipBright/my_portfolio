import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Image from "next/image";

const Projects = () => {
  return (
      <div
          className="flex flex-col items-center justify-center pb-20"
          id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <ProjectCard
              src="/ainu.png"
              title="Modern Next.js Portfolio"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              technologies={["PHP", "Laravel", "MySQL", "Tailwind", ]}
          />
          <ProjectCard
              src="/chillflix.png"
              title="Interactive Website Cards"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              technologies={["React", "Next.js", "TypeScript"]}
          />
          <ProjectCard
              src="/notion.png"
              title="Space Themed Website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              technologies={["React", "Next.js", "TypeScript"]}
          />

        </div>
        <div className="h-full w-full">
          <div className=" flex flex-col gap-5 md:flex-row m-10 px-8 py-4 border border-[#2A0E61] rounded-lg"> 
          <div>
            <Image src="/mobile1.png" alt="mobile app" width="200" height='100' className="rounded-lg" />
          </div>
          <div>
          <Image src="/mobile2.png" alt="mobile app" width="200" height='100' className="rounded-lg" />

          </div>
          <div>
          <Image src="/mobile3.png" alt="mobile app" width="200" height='100' className="rounded-lg" />

          </div>
          <div>
          <Image src="/mobile4.png" alt="mobile app" width="200" height='100' className="rounded-lg" />

          </div>
          <div>
          <Image src="/mobile5.png" alt="mobile app" width="200" height='100' className="rounded-lg" />

          </div>
          <div>
          <Image src="/mobile6.png" alt="mobile app" width="200" height='100' className="rounded-lg" />

          </div></div>
         
        </div>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <ProjectCard
              src="/organization.png"
              title="Modern Next.js Portfolio"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              technologies={["React", "Next.js", "TypeScript"]}
          />
          <ProjectCard
              src="/myway.png"
              title="Interactive Website Cards"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              technologies={["React", "Next.js", "TypeScript"]}
          />
          <ProjectCard
              src="/e-commerce.png"
              title="Space Themed Website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              technologies={["React", "Next.js", "TypeScript"]}
          />

        </div>
      </div>
  );
};

export default Projects;
