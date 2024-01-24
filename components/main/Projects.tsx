import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Image from "next/image";
import mobile1 from '@/public/mobile1.png'
import mobile2 from '@/public/mobile2.png'
import mobile3 from '@/public/mobile3.png'
import mobile4 from '@/public/mobile4.png'
import mobile5 from '@/public/mobile5.png'
import mobile6 from '@/public/mobile6.png'
const Projects = () => {
  return (
      <div
          className="flex flex-col items-center justify-center pb-20"
          id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-5 px-8">
          <ProjectCard
              src="/ainu.png"
              title="Ainu-Sushi Kriftel"
              description="The Ainu-Sushi Kriftel, an e-commerce platform dedicated to sushi and Asian cuisine. It allows users to create accounts, place food orders, and select between COD or Pick-up options, ensuring a smooth and convenient experience."
              technologies={["PHP", "Laravel", "MySQL", "Tailwind", ]}
          />
          <ProjectCard
              src="/chillflix.png"
              title="ChillFlix"
              description="ChillFlix is a movie streaming platform where users can easily create accounts with their desired subscription plans. Additionally, users have the option to add movies to their favorites, enhancing their personalized viewing experience."
              technologies={["React", "Redux","Express","MongoDB", "Javascript", "Tailwind",  ]}
          />
          <ProjectCard
              src="/notion.png"
              title="Space Themed Website"
              description="Ainu-Sushi Kriftel, an e-commerce platform dedicated to sushi and Asian cuisine. It allows users to create accounts, place food orders, and select between COD or Pick-up options, ensuring a smooth and convenient experience."
              technologies={["Prisma", "Next.js", "TypeScript", "Supabase", "Tailwind", "Zod" ]}
          />

        </div>
        <div className="h-full w-full">
          <div className=" flex flex-col gap-5 md:flex-row m-10 px-8 py-4 border border-[#2A0E61] rounded-lg"> 
          <div>
            <Image src={mobile1} alt="mobile app" width="200" height='100' className="rounded-lg" loading="eager"
 />
          </div>
          <div>
          <Image src={mobile2} alt="mobile app" width="200" height='100' className="rounded-lg" loading="eager"
 />

          </div>
          <div>
          <Image src={mobile3} alt="mobile app" width="200" height='100' className="rounded-lg" loading="eager"
 />

          </div>
          <div>
          <Image src={mobile4} alt="mobile app" width="200" height='100' className="rounded-lg" loading="eager"
 />

          </div>
          <div>
          <Image src={mobile5} alt="mobile app" width="200" height='100' className="rounded-lg" loading="eager"
 />

          </div>
          <div>
          <Image src={mobile6} alt="mobile app" width="200" height='100' className="rounded-lg" loading="eager"
 />

          </div></div>
         
        </div>
        <div className="h-full w-full flex flex-col md:flex-row gap-5 px-8">
          <ProjectCard
              src="/organization.png"
              title="Devnoverse"
              description="Devnoverse's website stands as a comprehensive showcase of our commitment to innovative web solutions serves as a testament to our client-centric approach and technological prowess."
              technologies={["Tailwind", "Next.js", "TypeScript"]}
          />
          <ProjectCard
              src="/myway.png"
              title="My Way Travel & Tour"
              description="My Way Travel & Tour's website is your one-stop destination for travel needs. Offering flight and bus tickets alongside hotel bookings for every country with convenience and reliability."
              technologies={["Next.js", "TypeScript", "Bootstrap", "SCSS", "Redux", "MongoDB", "Prisma"]}
          />
          <ProjectCard
              src="/ecommerce.jpeg"
              title="Smart Life"
              description="Smart Life's website is a comprehensive platform catering to the diverse needs of modern living. Our extensive catalog offers an array of innovative and intelligent products"
              technologies={["PHP", "MySQL", "Tailwind"]}
          />

        </div>
      </div>
  );
};

export default Projects;
