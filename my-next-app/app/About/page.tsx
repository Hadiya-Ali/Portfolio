"use client";

import { motion, type Variants } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: d,
      ease,
    },
  }),
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      delay: d,
      ease,
    },
  }),
};
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
  sizeClass = "w-[300px] md:w-[350px] lg:w-[400px]",
  rotate = 0,
  z = 10,
}: FloatingScreenProps) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0, rotate }}
      whileInView={{ y: 0, opacity: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative lg:absolute ${className}`}
      style={{ zIndex: z }}
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="rounded-lg border border-white/10 p-2 "
      >
        <img
          src={src}
          alt={alt}
          className={`h-auto ${sizeClass} object-cover`}
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}

const internships = [
  {
    role: "Frontend Web Developer Intern",
    company: "9T5",
    period: "8 July 2025 – 2 September 2025",
    description:
      " ● Contributed to the development of a role-based web application using Supabase for backend services and authentication, with a Next.js frontend focused on usability and access control. " +
      "● Worked on a job-oriented web platform, supporting application workflows and frontend data presentation in a real-world environment." +
      "● Assisted in upgrading an existing codebase from older versions of React and Next.js to newer releases to improve stability, compatibility, and performance. " +
      "● Converted CSS into Tailwind CSS, improving maintainability, consistency, and development efficiency. " +
      "● Integrated and consumed externally provided APIs to fetch and display dynamic data within the application. " +
      "● Developed frontend features using TypeScript and Next.js, following component-based design patterns and best practices. " +
      "● Implemented responsive and accessible UI components aligned with provided design guidelines." +
      "● Emphasized clean code, performance, and scalability, contributing to a smooth and reliable user experience. ",
  },
  {
    role: "Frontend Web Developer Intern",
    company: "9T5",
    period: "22 July 2024 – 2 September 2024",
    description:
      "● Built foundational projects using HTML, CSS, and JavaScript, including a fully functional TODO List website that strengthened my understanding of core web development concepts and interactivity. " +
      "● Advanced to React and Next.js, creating dynamic and efficient frontends while focusing on component-based design, routing, and improved user experience. " +
      "● Developed a coffee ordering website where I integrated online data for menu items, designed a clean and responsive frontend, and implemented Firebase authentication for secure user registration and login.",
  }
];


const education = [
  {
    title: "Bachelors of Software Engineering ",
    place: "National University of Sciences and Technology (NUST)",
    period: "2022 - Ongoing",
  },

];

export default function AboutPage() {
  return (
    <>
      <style>{`
        @keyframes glowPulse {
          0% { filter: drop-shadow(0 0 6px #d501ff); }
          50% { filter: drop-shadow(0 0 18px #d501ff); }
          100% { filter: drop-shadow(0 0 6px #d501ff); }
        }

        @keyframes floatSoft {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <main className="min-h-screen bg-deep-purple overflow-x-hidden text-white">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 20% 20%, var(--light-purple) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 80% 70%, #d501ff 0%, transparent 55%)",
          }}
        />

        <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-light-purple text-sm md:text-base uppercase tracking-[0.25em] mb-4"
            >
              About Me
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.08}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Designing experiences with
              <span className="bg-[linear-gradient(135deg,#FFCC00_0%,#ffdd33_50%,#FFCC00_100%)] bg-clip-text text-transparent">
                {" "}creativity and purpose
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.16}
              className="text-white/70 text-base md:text-xl leading-relaxed mt-6 max-w-3xl mx-auto"
            >
              I am a passionate UI/UX designer who enjoys transforming ideas into
              meaningful digital experiences. I love working on interfaces that
              feel visually engaging, intuitive, and user-friendly while bringing
              creativity and thoughtful problem-solving into every design.
            </motion.p>
          </motion.div>
        </section>

        <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.1}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 md:px-8"
              style={{
                boxShadow: "0 0 60px rgba(213,1,255,0.12), 6px 0 6px #60007489",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-light-purple/20 text-xl">
                  ✨
                </div>
                <h2 className="text-3xl font-bold text-yellow">Personal Story</h2>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  Design, for me, is about understanding people and building
                  experiences that connect with them naturally. I enjoy exploring
                  layouts, experimenting with ideas, and refining interfaces until
                  they feel both beautiful and effortless to use. I believe design
                  is not just about appearance — it is about creating something
                  useful, memorable, and meaningful for the user.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.18}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 md:px-8"
              style={{
                boxShadow: "0 0 60px rgba(213,1,255,0.12), 6px 0 6px #60007489",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink/20 text-xl">
                  🎓
                </div>
                <h2 className="text-3xl font-bold text-light-purple">Education</h2>
              </div>

              <div className="space-y-5">
                {education.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.12,
                      ease,
                    }}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <span className="text-sm text-light-purple">{item.period}</span>
                    </div>
                    <p className="text-white/80 text-sm mt-1">{item.place}</p>

                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            custom={0.22}
            className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 md:px-8"
            style={{
              boxShadow: "0 0 60px rgba(213,1,255,0.12), 6px 0 6px #60007489",
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-light-purple/20 text-xl">
                💼
              </div>
              <h2 className="text-3xl font-bold text-pink">Internships & Experience</h2>
            </div>

            <div className="relative ml-2 border-l border-white/10 pl-6 space-y-6">
              {internships.map((item, index) => (
                <motion.div
                  key={`${item.role}-${item.company}-${index}`}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.12,
                    ease,
                  }}
                  className="relative rounded-xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div
                    className="absolute -left-[2.05rem] top-6 h-3.5 w-3.5 rounded-full border border-white/20 bg-light-purple"
                    style={{ animation: "glowPulse 3s ease-in-out infinite" }}
                  />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                    <span className="text-sm text-light-purple">{item.period}</span>
                  </div>
                  <p className="text-white/80 text-sm mt-1">{item.company}</p>
                  <p className="text-white/60 text-sm md:text-base mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        <section className="flex md:flex-col z-10 bg-deep-purple overflow-visible">
          <div className="w-full max-w-6xl mx-auto px-6 relative overflow-visible flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-center text-4xl md:text-5xl font-bold text-pink pt-20 pb-10">
                Some of my digital arts.
              </h2>
            </motion.div>

            <div
              className="relative w-full overflow-visible 
                flex  flex-col items-center gap-10
                lg:block lg:h-[1300px]"
            >
              <FloatingScreen
                src="/2.jpeg"
                alt="Art 1"
                delay={0.05}
                rotate={-8}
                z={10}
                className="lg:top-[5%] lg:left-[20%] "
              />

              <FloatingScreen
                src="/1.jpeg"
                alt="Art 2"
                delay={0.1}
                rotate={6}
                z={20}
                className="lg:top-[20%] lg:right-[1%] "
              />

              <FloatingScreen
                src="/3.jpeg"
                alt="Art 3"
                delay={0.2}
                rotate={-4}
                z={15}
                className="lg:top-[35%] lg:left-[%] "
              />

              <FloatingScreen
                src="/4.jpeg"
                alt="Art 4"
                delay={0.3}
                rotate={5}
                z={25}
                className="lg:top-[45%] lg:right-[30%] "
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}