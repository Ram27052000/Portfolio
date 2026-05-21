"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Cloud, Palette, Sparkles, Boxes } from "lucide-react";

const interests = [
  { icon: Sparkles, text: "AI Engineering" },
  { icon: Cpu, text: "Automation" },
  { icon: Boxes, text: "System Design" },
  { icon: Palette, text: "UX-focused Development" },
  { icon: Cloud, text: "Cloud-native Applications" },
  { icon: Code2, text: "Modern Frontend Technologies" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">
          <span className="text-accent font-mono text-xl font-normal">01.</span>
          About Me
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 space-y-4"
        >
          <p className="text-slate leading-relaxed">
            I am a software developer with{" "}
            <span className="text-accent">3 years and 9 months</span> of professional
            experience building enterprise-grade applications and digital solutions.
          </p>
          <p className="text-slate leading-relaxed">
            My expertise spans{" "}
            <span className="text-slate-light">full stack development</span>,{" "}
            <span className="text-slate-light">cloud-native technologies</span>,{" "}
            <span className="text-slate-light">AI-assisted engineering workflows</span>, and{" "}
            <span className="text-slate-light">low-code platforms</span>. I enjoy combining
            technical problem-solving with intuitive user experiences and scalable
            software architecture.
          </p>
          <p className="text-slate leading-relaxed">
            I continuously explore new technologies and methodologies to stay at the
            forefront of software development, always focusing on delivering impactful
            solutions that make a difference.
          </p>

          <div className="pt-6">
            <p className="text-slate-light font-semibold mb-4">
              I continuously explore:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-slate"
                >
                  <interest.icon size={14} className="text-accent" />
                  <span>{interest.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group"
        >
          <div className="relative w-full aspect-square max-w-[300px] mx-auto">
            {/* Decorative border */}
            <div className="absolute inset-0 border-2 border-accent rounded-lg translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />

            {/* Image container */}
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-navy-light">
              <div className="absolute inset-0 bg-accent/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300" />
              {/* Profile image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-accent text-6xl font-bold font-mono">
                RR
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

