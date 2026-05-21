import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a192f",
          light: "#112240",
          lighter: "#233554",
        },
        accent: {
          DEFAULT: "#64ffda",
          dark: "#57e2c2",
        },
        slate: {
          light: "#ccd6f6",
          DEFAULT: "#8892b0",
          dark: "#495670",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "-apple-system", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(100, 255, 218, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(100, 255, 218, 0.4)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
