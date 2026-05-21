"use client";

import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";
import CursorGlow from "@/components/layout/CursorGlow";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Moments from "@/components/sections/Moments";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <MobileNav />
      <Sidebar />

      <main className="lg:ml-[400px] min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Moments />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
