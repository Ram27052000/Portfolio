"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Building2, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Flender",
    role: "Software Developer",
    duration: "3 Years 9 Months",
    period: "2022 - Present",
    achievements: [
      "Best Graduate Engineer of the Year 2022",
      "Worked on enterprise-scale applications",
      "Collaborated with global cross-functional teams",
      "Built scalable frontend and backend modules",
      "Worked on digital transformation initiatives",
      "Contributed to AI-assisted engineering workflows",
    ],
    highlight: true,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 lg:py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">
          <span className="text-accent font-mono text-xl font-normal">02.</span>
          Where I&apos;ve Worked
        </h2>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className="glassmorphism rounded-lg p-6 md:p-8 hover-glow"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-light">
                  {exp.role}{" "}
                  <span className="text-accent">@ {exp.company}</span>
                </h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-slate">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-accent" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Building2 size={14} className="text-accent" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {exp.highlight && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full"
                >
                  <Award size={16} className="text-accent" />
                  <span className="text-accent text-sm font-mono">
                    Best Graduate 2022
                  </span>
                </motion.div>
              )}
            </div>

            <ul className="space-y-3">
              {exp.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-slate"
                >
                  <ChevronRight
                    size={16}
                    className="text-accent mt-1 flex-shrink-0"
                  />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

