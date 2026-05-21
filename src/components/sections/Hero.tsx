"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 lg:py-0">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-accent font-mono text-sm md:text-base mb-5"
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-light leading-tight"
      >
        Ram Raamanathan Visalakshi.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mt-2 leading-tight"
      >
        I build digital experiences.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-slate text-base md:text-lg max-w-xl mt-6 leading-relaxed"
      >
        I build scalable web applications and intelligent digital solutions using modern
        technologies, cloud-native tools, AI-assisted workflows, and low-code platforms.
        Passionate about clean architecture, automation, and building impactful user
        experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap gap-4 mt-10"
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent font-mono text-sm rounded hover:bg-accent/10 transition-all duration-300"
        >
          <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          View My Work
        </a>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent text-accent font-mono text-sm rounded hover:bg-accent/20 transition-all duration-300"
        >
          <Mail size={16} />
          Contact Me
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:hidden"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-accent"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

