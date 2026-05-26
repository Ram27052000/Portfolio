"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const moments = [
  {
    title: "DevFest Chennai",
    description:
      "Attended Google Developer Group DevFest Chennai to explore modern web technologies, AI trends, cloud-native development, and developer communities.",
    tags: ["DevFest", "Google Developer Group", "AI", "Cloud", "Frontend"],
    image: "/images/conference.jpg",
  },
  {
    title: "Germany Visit",
    description:
      "Visited Voerde, Germany during professional collaboration and industrial exposure experience connected with Flender and Winergy operations.",
    tags: ["Germany", "Industrial Visit", "Global Collaboration", "Engineering"],
    image: "/images/anomaly-detection-1.jpg",
  },
  {
    title: "AI Conference Presentation - Germany",
    description:
      "Presented an AI-powered multi-agent project demonstration using GitHub Copilot and AI-assisted workflows during a technical conference session in Germany.",
    tags: ["AI", "GitHub Copilot", "Multi-Agent Systems", "Conference", "Germany"],
    image: "/images/devfest.png",
  },
];

export default function Moments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="moments" className="py-24 lg:py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">
          <span className="text-accent font-mono text-xl font-normal">05.</span>
          Moments & Experiences
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moments.map((moment, index) => (
          <motion.div
            key={moment.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
            className="group glassmorphism rounded-lg overflow-hidden hover-glow"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-navy-lighter">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-light/90 to-transparent z-10" />
              <Image
                src={moment.image}
                alt={moment.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-light mb-3 group-hover:text-accent transition-colors">
                {moment.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed mb-4">
                {moment.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {moment.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-accent/80 bg-accent/5 px-2 py-1 rounded border border-accent/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

