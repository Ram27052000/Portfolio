"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Heart, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "OOP Concepts Certification",
    issuer: "Udemy",
    icon: GraduationCap,
    description: "Comprehensive understanding of Object-Oriented Programming principles and design patterns.",
  },
  {
    title: "Freelance Teacher",
    issuer: "Independent",
    icon: Heart,
    description: "Sharing knowledge and mentoring aspiring developers in programming fundamentals.",
  },
  {
    title: "Continuous Learning Enthusiast",
    issuer: "Self-driven",
    icon: BookOpen,
    description: "Constantly exploring new technologies, frameworks, and best practices in software development.",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 lg:py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">
          <span className="text-accent font-mono text-xl font-normal">06.</span>
          Certifications & Activities
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className="glassmorphism rounded-lg p-6 hover-glow group text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{
                type: "spring",
                delay: 0.3 + index * 0.1,
                stiffness: 200
              }}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
            >
              <cert.icon size={32} className="text-accent" />
            </motion.div>

            <h3 className="text-lg font-bold text-slate-light mb-1">
              {cert.title}
            </h3>
            <p className="text-accent font-mono text-sm mb-3">{cert.issuer}</p>
            <p className="text-slate text-sm">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

