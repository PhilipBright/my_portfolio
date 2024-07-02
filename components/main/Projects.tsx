import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Image from "next/image";
import mobile1 from './mobile1.png'
import mobile2 from './mobile2.png'
import mobile3 from './mobile3.png'
import mobile4 from './mobile4.png'
import mobile5 from './mobile5.png'
import mobile6 from './mobile6.png'
import iphone from './iphone.png'
const Projects = () => {
  return (
      <div
          className="flex flex-col items-center justify-center pb-20"
          id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-5 px-8 z-40">
          <ProjectCard
              src="/ainu.png"
              title="Ainu-Sushi Kriftel"
              description="The Ainu-Sushi Kriftel, an e-commerce platform dedicated to sushi and Asian cuisine. It allows users to create accounts, place food orders, and select between COD or Pick-up options, ensuring a smooth and convenient experience."
              technologies={["PHP", "Laravel", "MySQL", "Tailwind"]}
              href="https://ainu-sushi-kriftel.com/"
          />
          <ProjectCard
              src="/chillflix.png"
              title="ChillFlix"
              description="ChillFlix is a movie streaming platform where users can easily create accounts with their desired subscription plans. Additionally, users have the option to add movies to their favorites, enhancing their personalized viewing experience."
              technologies={["React", "Redux","Express","MongoDB", "Javascript", "Tailwind"]}
              href="https://example.com/chillflix"
          />
          <ProjectCard
              src="/notion.png"
              title="Space Themed Website"
              description="Ainu-Sushi Kriftel, an e-commerce platform dedicated to sushi and Asian cuisine. It allows users to create accounts, place food orders, and select between COD or Pick-up options, ensuring a smooth and convenient experience."
              technologies={["Prisma", "Next.js", "TypeScript", "Supabase", "Tailwind", "Zod"]}
              href="https://example.com/space-themed-website"
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
        <div className="h-full w-full flex flex-col md:flex-row gap-5 px-8 z-40">
          <ProjectCard
              src="/organization.png"
              title="Devnoverse"
              description="Devnoverse's website stands as a comprehensive showcase of our commitment to innovative web solutions serves as a testament to our client-centric approach and technological prowess."
              technologies={["Tailwind", "Next.js", "TypeScript"]}
              href="https://devnoverse.vercel.app/"
          />
          <ProjectCard
              src="/myway.png"
              title="My Way Travel & Tour"
              description="My Way Travel & Tour's website is your one-stop destination for travel needs. Offering flight and bus tickets alongside hotel bookings for every country with convenience and reliability."
              technologies={["Next.js", "TypeScript", "Bootstrap", "SCSS", "Redux", "MongoDB", "Prisma"]}
              href="https://www.mywaymm.com/"
          />
          {/* <ProjectCard
              src="/ecommerce.jpeg"
              title="Smart Life"
              description="Smart Life's website is a comprehensive platform catering to the diverse needs of modern living. Our extensive catalog offers an array of innovative and intelligent products."
              technologies={["PHP", "MySQL", "Tailwind"]}
              href="https://example.com/smart-life"
          /> */}
          <ProjectCard
              src="/iphone15.png"
              title="iPhone 15 Pro"
              description="Explore the cutting-edge innovation of the iPhone 15 Pro. Crafted with precision, the iPhone 15 Pro combines state-of-the-art technology with an elegant design, making it the pinnacle of modern smartphones."
              technologies={["React.js", "Three.js", "Tailwind", "GSAP"]}
              href="https://apple-website-two-smoky.vercel.app/"
          />
          {/* https://video-conference-app-orcin.vercel.app/ */}
        </div>
        <div className="h-full w-full flex flex-col md:flex-row gap-5 pt-8 px-8 z-40">
          <ProjectCard
              src="/conference.png"
              title="Conference Room"
              description="The video conferencing app allows users to conduct virtual meetings seamlessly. It supports creating and joining video calls, enabling multiple participants to communicate in real-time. "
              technologies={["Tailwind", "Next.js", "TypeScript", "Stream.io"]}
              href="https://video-conference-app-orcin.vercel.app/"
          />
          <ProjectCard
              src="/slang.png"
              title="Slang Digital Marketing"
              description="Slang is a Yangon-based digital marketing agency established in 2018, relaunched in 2021 to enhance services for SMEs. They specialize in social media marketing, digital advertising, branding, and content creation"
              technologies={["Next.js", "Boostrap", "SASS", "FramerMotion"]}
              href="https://www.slangdigital.co/"
          />
          {/* <ProjectCard
              src="/ecommerce.jpeg"
              title="Smart Life"
              description="Smart Life's website is a comprehensive platform catering to the diverse needs of modern living. Our extensive catalog offers an array of innovative and intelligent products."
              technologies={["PHP", "MySQL", "Tailwind"]}
              href="https://example.com/smart-life"
          /> */}
          {/* <ProjectCard
              src="/iphone15.png"
              title="iPhone 15 Pro"
              description="Explore the cutting-edge innovation of the iPhone 15 Pro. Crafted with precision, the iPhone 15 Pro combines state-of-the-art technology with an elegant design, making it the pinnacle of modern smartphones."
              technologies={["React.js", "Three.js", "Tailwind", "GSAP"]}
              href="https://apple-website-two-smoky.vercel.app/"
          /> */}
          {/* https://video-conference-app-orcin.vercel.app/ */}
        </div>
      </div>
  );
};

export default Projects;
