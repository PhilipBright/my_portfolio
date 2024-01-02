import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Org from '@/components/main/Org'
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
        <Hero />
        <Org/>
        <Skills />
        <Encryption />
        <Projects />

      </div>
    </main>
  );
}
