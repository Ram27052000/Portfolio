"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 lg:py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-accent font-mono text-sm mb-4">07. What&apos;s Next?</p>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-light mb-6">
          Get In Touch
        </h2>

        <p className="text-slate text-lg mb-10 leading-relaxed">
          I&apos;m currently open to new opportunities and collaborations. Whether you
          have a question, want to discuss a project, or just want to say hi,
          I&apos;ll do my best to get back to you!
        </p>

        <motion.a
          href="mailto:rvr1743@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent font-mono text-lg rounded hover:bg-accent/10 transition-all duration-300 group"
        >
          <Mail size={20} />
          Say Hello
          <Send
            size={16}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </motion.a>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-6 mt-12"
        >
          <a
            href="https://github.com/Ram27052000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent transition-all duration-300 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <GithubIcon size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/r-v-ram-2a267b19a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent transition-all duration-300 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={24} />
          </a>
          <a
            href="mailto:rvr1743@gmail.com"
            className="text-slate hover:text-accent transition-all duration-300 hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

