import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";
import Education from "@/components/main/Education";
import Contact from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      
      <div className="flex flex-col ">
        <Hero />
        <Projects />
        <Experience/>
        <Education/>
        <Skills />
        <Encryption />
        <Contact />

      </div>
    </main>
  );
}
