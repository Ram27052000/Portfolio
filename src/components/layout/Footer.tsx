"use client";

import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-navy-lighter">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-6 lg:hidden">
          <a
            href="https://github.com/Ram27052000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/r-v-ram-2a267b19a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:rvr1743@gmail.com"
            className="text-slate hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate text-sm font-mono text-center"
        >
          <span className="flex items-center justify-center gap-1">
            Built with <Heart size={14} className="text-accent" /> by Ram
            Raamanathan
          </span>
        </motion.p>
      </div>
    </footer>
  );
}

