"use client";

import { motion } from "framer-motion";

type FloatingScreenProps = {
  src: string;
  alt: string;
  className: string; // absolute positioning
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

function SectionBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
      {text}
    </span>
  );
}

const PROJECTS = [
  {
    title: "CyberShield",
    desc: "Cybersecurity awareness + incident reporting portal with phishing simulation and risk scoring.",
    tags: ["Next.js", "Node", "MongoDB", "AWS"],
  },
  {
    title: "DataHub",
    desc: "File management platform with auth, storage, dashboards, and secure uploads.",
    tags: ["MERN", "TypeScript", "AWS S3", "Cloudinary"],
  },
  {
    title: "GreenThread",
    desc: "Sustainable fashion marketplace connecting thrift stores and small businesses.",
    tags: ["React", "Node", "MongoDB", "UI/UX"],
  },
  {
    title: "Spidex",
    desc: "Web scraping platform with auth and downloadable data outputs (JSON/HTML).",
    tags: ["Next.js", "MongoDB", "Cheerio", "Clerk"],
  },
  {
    title: "Profeval",
    desc: "RAG-powered professor Q&A chatbot with embeddings and vector search.",
    tags: ["Next.js", "Pinecone", "LLM", "TypeScript"],
  },
  {
    title: "Cortex Dashboard",
    desc: "AI voice agent performance dashboard with sentiment analysis and customer profiles.",
    tags: ["AWS", "DynamoDB", "Lambda", "Comprehend"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#070016] text-white">
      {/* Top Hero */}
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute top-40 right-[-120px] h-[320px] w-[320px] rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="absolute bottom-[-180px] left-[-140px] h-[420px] w-[420px] rounded-full bg-purple-500/15 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24">
          <div className="flex flex-col gap-5">
            {/* <div className="flex flex-wrap items-center gap-2">
              <SectionBadge text="Projects" />
              <SectionBadge text="Screens • Case Studies • Builds" />
              <SectionBadge text="Next.js • Tailwind • Framer Motion" />
            </div> */}

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl pt-5">
              Work I’ve built —
              <span className="block text-white/70">
                with real products, not just demos.
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Scroll down — the project screens float up and settle in different positions,
              giving you a quick visual overview before you jump into details.
            </p>
          </div>
        </div>

        {/* Floating Screens Canvas */}
        <div className="relative mx-auto max-w-6xl px-6">
          {/* Make this tall to give scroll room for the entrance */}
          <div className="relative h-[1100px] md:h-[1200px] lg:h-[1300px]">
            {/* BACK LAYER */}
            <FloatingScreen
              src="/projects/screen-1.png"
              alt="Project screen 1"
              delay={0.05}
              rotate={-6}
              z={5}
              sizeClass="w-[220px] md:w-[280px] lg:w-[310px]"
              className="top-[18%] left-[4%] opacity-80 blur-[0.2px]"
            />
            <FloatingScreen
              src="/projects/screen-2.png"
              alt="Project screen 2"
              delay={0.15}
              rotate={7}
              z={5}
              sizeClass="w-[210px] md:w-[270px] lg:w-[300px]"
              className="top-[28%] right-[2%] opacity-75"
            />

            {/* MID LAYER */}
            <FloatingScreen
              src="/projects/screen-3.png"
              alt="Project screen 3"
              delay={0.22}
              rotate={-4}
              z={10}
              className="top-[40%] left-[18%]"
            />
            <FloatingScreen
              src="/projects/screen-4.png"
              alt="Project screen 4"
              delay={0.28}
              rotate={5}
              z={12}
              className="top-[44%] right-[16%]"
            />

            {/* FRONT LAYER */}
            <FloatingScreen
              src="/projects/screen-5.png"
              alt="Project screen 5"
              delay={0.34}
              rotate={-3}
              z={18}
              sizeClass="w-[260px] md:w-[340px] lg:w-[390px]"
              className="top-[56%] left-[8%]"
            />
            <FloatingScreen
              src="/projects/screen-6.png"
              alt="Project screen 6"
              delay={0.42}
              rotate={4}
              z={18}
              sizeClass="w-[250px] md:w-[330px] lg:w-[380px]"
              className="top-[60%] right-[6%]"
            />
          </div>
        </div>

        {/* Gradient separator */}
        <div className="mx-auto mt-6 max-w-6xl px-6 pb-2">
          <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent" />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Selected Projects</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A mix of production work, fellowships, and research-focused builds.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <SectionBadge text="Case studies" />
            <SectionBadge text="GitHub" />
            <SectionBadge text="Live demos" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.05, ease: "easeOut" }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold md:text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {p.desc}
                  </p>
                </div>

                <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5" />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15 transition">
                  View case study
                </button>
                <button className="rounded-2xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white/80 hover:text-white transition">
                  GitHub
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
