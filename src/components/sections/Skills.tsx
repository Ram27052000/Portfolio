"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Server,
  Cloud,
  Zap,
  Sparkles,
  MonitorSmartphone,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    skills: ["Next.js", "Angular", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "Java", "REST APIs", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "Low Code & Analytics",
    icon: Zap,
    skills: ["PowerApps", "Power Automate", "Power BI"],
  },
  {
    title: "AI & Tools",
    icon: Sparkles,
    skills: [
      "GitHub Copilot",
      "AI-assisted Development",
      "Python",
      "Git",
      "VS Code",
      "IntelliJ IDEA",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 lg:py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">
          <span className="text-accent font-mono text-xl font-normal">04.</span>
          Skills & Technologies
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className="glassmorphism rounded-lg p-6 hover-glow group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                <category.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-light">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + index * 0.1 + skillIndex * 0.05,
                  }}
                  className="px-3 py-1.5 text-sm font-mono text-accent bg-accent/5 border border-accent/20 rounded-full hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

