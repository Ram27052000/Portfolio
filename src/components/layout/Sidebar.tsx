"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Moments", href: "#moments" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Ram27052000",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/r-v-ram-2a267b19a/",
    icon: LinkedinIcon,
  },
  {
    name: "Email",
    href: "mailto:rvr1743@gmail.com",
    icon: Mail,
  },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    );

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex flex-col justify-between fixed left-0 top-0 h-screen w-[400px] px-12 py-24 z-10">
      {/* Header */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-slate-light tracking-tight"
        >
          Ram Raamanathan
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl font-medium text-accent mt-3"
        >
          Full Stack & Low Code Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate mt-4 max-w-xs leading-relaxed"
        >
          I build scalable web applications and intelligent digital solutions.
        </motion.p>

        {/* Navigation */}
        <nav className="mt-16">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={item.href}
                  className={`group flex items-center gap-4 py-2 transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "text-accent"
                      : "text-slate hover:text-slate-light"
                  }`}
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? "w-16 bg-accent"
                        : "w-8 bg-slate-dark group-hover:w-16 group-hover:bg-slate-light"
                    }`}
                  />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    {item.name}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex gap-5"
      >
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent transition-colors duration-300 hover:-translate-y-1 transform"
            aria-label={link.name}
          >
            <link.icon size={22} />
          </a>
        ))}
      </motion.div>
    </aside>
  );
}

