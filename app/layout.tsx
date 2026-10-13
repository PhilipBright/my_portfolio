import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saw Kaung Set Hein | AI Engineer & Full-Stack Developer",
  description:
    "Saw Kaung Set Hein (Philip), AI engineer and full-stack developer. MSc in Artificial Intelligence, building LLM agent systems and full-stack products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
        <meta name="google-site-verification" content="VQ_R_ltEuHQiKqSJdY3PO2KBNpwMyKxgOxEoWjh9L64" />

      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar/>
        <StarsCanvas />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
