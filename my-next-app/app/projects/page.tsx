"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type FloatingScreenProps = {
  src: string;
  alt: string;
  className: string;
  delay: number;
  sizeClass?: string;
  rotate?: number;
  z?: number;
};

function FloatingScreen({
  src,
  alt,
  className,
  delay,
  sizeClass = "w-[260px] md:w-[320px] lg:w-[360px]",
  rotate = 0,
  z = 10,
}: FloatingScreenProps) {
  return (
    <motion.div
      initial={{ y: 280, opacity: 0, rotate }}
      whileInView={{ y: 0, opacity: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute ${className}`}
      style={{ zIndex: z }}
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur"
      >
        <img
          src={src}
          alt={alt}
          className={`h-auto ${sizeClass} rounded-xl object-cover`}
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}
type Project = {
  title: string;
  desc?: string;
  tags?: string[];
  designTools?: string[];
  figmaLink?: string;
  midFigmaLink?: string;
  highFigmaLink?: string;
  githubLink?: string;
};
const PROJECTS = [
  {
    title: "CyberShield",
    desc: "Cybersecurity Awareness & Incident Reporting Platform (Final Year Project- Ongoing)",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "ExpressJS",
      "MongoDB Atlas",
      "Clerk",
      "AWS",
      "Twilio",
      "Nodemailer",
      "Gemini API",
      "Dialogflow",
      "ElevenLabs",
      "Cloudinary",
      "Vercel",
      "LLM",
      "Git",
    ],
    designTools: ["Figma"],
    figmaLink:
      "https://www.figma.com/design/szFXsQvPQSxjLSvBb8s4Y2/CyberShield",
    githubLink: "https://github.com/AimenMunawarDeveloper/Cybershield-Frontend",
  },
  {
    title: "CyberShield (Urdu Figma)",
    desc: "Cybersecurity Awareness & Incident Reporting Platform (Final Year Project- Ongoing)",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "ExpressJS",
      "MongoDB Atlas",
      "Clerk",
      "AWS",
      "Twilio",
      "Nodemailer",
      "Gemini API",
      "Dialogflow",
      "ElevenLabs",
      "Cloudinary",
      "Vercel",
      "LLM",
      "Git",
    ],
    designTools: ["Figma"],
    figmaLink:
      "https://www.figma.com/design/Z1pCtMuDx3tucttlemwpnO/CyberShield-in-urdu",
      githubLink: "https://github.com/AimenMunawarDeveloper/Cybershield-Frontend",
    
  },
  {
    title: "ProjectX",
    desc: "Academic Project Marketplace",
    tags: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "JWT",
      "MongoDB",
      "Cloudinary",
      "Jest",
      "Playwright",
      
    ],
    designTools: ["Figma"],
   midFigmaLink:
      "https://www.figma.com/design/kK49fPeX1kf0wRNhsTfmzH/Project-X---Mid-Fidelity-Design?node-id=0-1&p=f&t=cVYBwpwPoDS3V7yg-0",

    highFigmaLink:
      "https://www.figma.com/design/XHxAIQuezauePKDqA5Ccvw/ProjectX--HighFidelity?node-id=0-1&t=QraSrUIE4zoglOKL-0",

    githubLink:
      "https://github.com/AimenMunawarDeveloper/Project-X/tree/new-changes",
  },
  {
    title: "Pawsome 😺",
    desc: "AI Cat Health Assistant Application.",
    designTools: ["Figma"],
    figmaLink:
      "https://www.figma.com/design/TncLwqt77LUKK07c5cEiVS/AI-Cat-Health-Assistant",
  },
];

export default function ProjectsPage() {
  const text =
    "Here are some projects that reflect my passion for design, creativity, and building user-focused experiences.";

  const letters = text.split("");

  return (
    <div className="min-h-screen bg-deep-purple text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Glow background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-light-purple/20 blur-3xl" />
          <div className="absolute top-40 right-[-120px] h-[320px] w-[320px] rounded-full bg-pink/20 blur-3xl" />
          <div className="absolute bottom-[-180px] left-[-140px] h-[420px] w-[420px] rounded-full bg-primary-red/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-20 pb-14">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Work I’ve built —
          </h1>

          <p className="text-white/70 mt-6 max-w-3xl text-2xl leading-relaxed">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.03 }}
              >
                {char}
              </motion.span>
            ))}

            <motion.span
              className="inline-block w-[2px] h-[1em] bg-yellow ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </p>
        </div>

        {/* Floating Screens */}
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="relative h-[1400px] md:h-[1600px] lg:h-[1800px]">
            <FloatingScreen
              src="/Client Admin.png"
              alt="Project"
              delay={0.05}
              rotate={-3}
              sizeClass="w-[350px] h-[600px] object-contain"
              className="top-[5%] left-[5%]"
            />

            <FloatingScreen
              src="/Onboarding 3.png"
              alt="Project"
              delay={0.12}
              rotate={2}
              sizeClass="w-[320px] h-[600px] object-contain"
              className="top-[20%] right-[10%]"
            />

            <FloatingScreen
              src="/Home Page.png"
              alt="Project"
              delay={0.18}
              rotate={-1}
              sizeClass="w-[360px] h-[600px] object-contain"
              className="top-[45%] left-[12%]"
            />

            <FloatingScreen
              src="/Client Admin (1).png"
              alt="Project"
              delay={0.25}
              rotate={3}
              sizeClass="w-[340px] h-[600px] object-contain"
              className="top-[65%] right-[6%]"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl px-6">
          <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-light-purple/70 to-transparent" />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold md:text-4xl text-light-purple">
            Projects
          </h2>

          <p className="mt-3 max-w-2xl text-white/70 leading-relaxed">
            Selected projects showcasing my skills in design, development,
            and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10 hover:border-light-purple/40"
            >
              <div className="flex flex-col justify-between min-h-[360px]">
                <div>
                  <h3 className="text-xl font-semibold text-yellow">
                    <Link
                      href={`/projects/${p.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="hover:underline"
                    >
                      {p.title}
                    </Link>
                  </h3>

                  {p.desc && (
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {p.desc}
                    </p>
                  )}

                  {p.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {p.designTools?.length > 0 && (
                    <>
                      <h4 className="mt-6 text-sm font-semibold text-light-purple">
                        Designing Tools
                      </h4>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {p.designTools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="my-6 h-px w-full bg-white/10" />

                
                 {(p.figmaLink || p.midFigmaLink || p.highFigmaLink || p.githubLink) && (
  <div className="flex flex-wrap items-center gap-3">

    {p.figmaLink && (
      <a
        href={p.figmaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-white/10 bg-light-purple/20 px-4 py-2 text-sm text-white transition hover:bg-light-purple"
      >
        Figma
      </a>
    )}

    {p.midFigmaLink && (
      <a
        href={p.midFigmaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-white/10 bg-light-purple/20 px-4 py-2 text-sm text-white transition hover:bg-light-purple"
      >
        Mid-Fidelity
      </a>
    )}

    {p.highFigmaLink && (
      <a
        href={p.highFigmaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-white/10 bg-pink/20 px-4 py-2 text-sm text-white transition hover:bg-pink"
      >
        High-Fidelity
      </a>
    )}

    {p.githubLink && (
      <a
        href={p.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-pink hover:text-white"
      >
        GitHub
      </a>
    )}

  </div>
)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}