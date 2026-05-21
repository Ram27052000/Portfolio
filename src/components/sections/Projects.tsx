"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Folder, ChevronLeft, ChevronRight, Brain } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  skills?: string[];
  github?: string;
  external?: string;
  images?: string[];
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Industrial IoT Anomaly Detection System",
    description:
      "An unsupervised anomaly detection system for industrial IoT telemetry analysis using machine learning — no labelled fault data required. Built end-to-end from signal processing to dashboard-assisted monitoring workflow.",
    tech: ["Python", "NumPy", "SciPy", "scikit-learn", "Isolation Forest", "FFT/Welch PSD"],
    skills: [
      "AI/ML Engineering",
      "Signal Processing & Vibration Analysis",
      "Unsupervised Learning",
      "Industrial IoT & Telemetry Analysis",
      "Data Preprocessing & Feature Engineering",
      "Python Scientific Computing",
      "Predictive Maintenance Systems",
    ],
    images: ["/images/anomaly-detection-1.jpg"],
    featured: true,
  },
  {
    title: "Flow State",
    description:
      "A full-stack wellness tracker featuring real-time habit completion, streak tracking, weekly progress charts, and a personalized dashboard — built with Next.js, TypeScript, and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    images: ["/images/flowstat.png"],
    external: "https://flowstate-tawny-six.vercel.app",
    featured: true,
  },
];

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative grid lg:grid-cols-12 gap-4 items-center"
    >
      {/* Project Image */}
      <div
        className={`lg:col-span-7 ${
          isEven ? "lg:col-start-1" : "lg:col-start-6"
        } row-start-1`}
      >
        <div className="relative group rounded-lg overflow-hidden bg-navy-light aspect-video">
          <div className="absolute inset-0 bg-accent/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-10" />

          {project.images ? (
            <>
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Image Navigation */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-navy/80 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-navy"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-navy/80 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-navy"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex
                            ? "bg-accent w-6"
                            : "bg-slate/50 hover:bg-slate"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Folder size={64} className="text-accent/30" />
            </div>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div
        className={`lg:col-span-6 row-start-1 ${
          isEven
            ? "lg:col-start-6 lg:text-right"
            : "lg:col-start-1 lg:text-left"
        } z-10`}
      >
        <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-light mb-4 hover:text-accent transition-colors">
          {project.external ? (
            <a href={project.external} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <div className="glassmorphism rounded-lg p-6 mb-4">
          <p className="text-slate">{project.description}</p>

          {/* Skills Demonstrated */}
          {project.skills && (
            <div className="mt-4 pt-4 border-t border-accent/10">
              <p className="text-accent font-mono text-xs mb-3 flex items-center gap-2">
                <Brain size={14} />
                Skills Demonstrated
              </p>
              <div className={`flex flex-wrap gap-2 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}>
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-slate-light bg-accent/10 px-2 py-1 rounded-full border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <ul
          className={`flex flex-wrap gap-3 mb-4 ${
            isEven ? "lg:justify-end" : "lg:justify-start"
          }`}
        >
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="text-slate text-sm font-mono bg-navy-lighter/50 px-3 py-1 rounded"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div
          className={`flex gap-4 ${
            isEven ? "lg:justify-end" : "lg:justify-start"
          }`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={22} />
            </a>
          )}
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors"
              aria-label="External Link"
            >
              <ExternalLink size={22} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 lg:py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">
          <span className="text-accent font-mono text-xl font-normal">03.</span>
          Featured Projects
        </h2>
      </motion.div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <FeaturedProject key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

