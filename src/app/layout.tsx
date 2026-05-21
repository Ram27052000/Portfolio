import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ram Raamanathan | Full Stack Developer",
  description:
    "Full Stack Developer & Low Code Developer building scalable web applications and intelligent digital solutions using modern technologies, AI-assisted workflows, and cloud-native tools.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Angular",
    "Spring Boot",
    "TypeScript",
    "AI",
    "Cloud Native",
  ],
  authors: [{ name: "Ram Raamanathan Visalakshi" }],
  openGraph: {
    title: "Ram Raamanathan | Full Stack Developer",
    description:
      "Full Stack Developer building scalable web applications and intelligent digital solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          firaCode.variable,
          "font-sans antialiased bg-navy text-slate-light"
        )}
      >
        {children}
      </body>
    </html>
  );
}
