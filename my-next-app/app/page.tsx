// import ScrollFadeIn from "./Components/scrolling";
"use client";
import { motion, type Variants } from "framer-motion";

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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
};



const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const shimmer: Variants = {
  hidden: { backgroundPosition: "0% 50%" },
  show: {
    backgroundPosition: "100% 50%",
    transition: { duration: 3.5, repeat: Infinity, ease: "linear" },
  },
};


function SectionBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
      {text}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }
        @keyframes floatDiamond {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        @keyframes glowPulse {
          0% { filter: drop-shadow(0 0 6px #d501ff); }
          50% { filter: drop-shadow(0 0 18px #d501ff); }
          100% { filter: drop-shadow(0 0 6px #d501ff); }
        }
      `}</style>

      <div className="flex flex-col bg-deep-purple overflow-x-hidden">
        <section className="card z-10 flex items-center justify-around bg-deep-purple">
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 20% 50%, var(--light-purple) 0%, transparent 50%)",
            }}
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex w-screen max-w-6xl flex-row items-center justify-center gap-12 px-6 relative"
            style={{ boxShadow: "6px 0 6px #60007489" }}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex flex-col items-start justify-center gap-4 w-full max-w-md pl-6"
            >
              <p
                className="text-light-purple text-lg font-medium tracking-[0.2em] uppercase opacity-0"
                style={{ animation: "fadeIn 0.5s ease-out 0.1s forwards" }}
              >
                Hi, I am
              </p>

              <motion.div variants={fadeUp} custom={0.12} className="w-full">
                <h1
                  className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight opacity-0"
                  style={{
                    animation: "fadeInUp 0.6s ease-out 0.25s forwards",
                    background:
                      "linear-gradient(135deg, #FFCC00 0%, #ffdd33 50%, #FFCC00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <motion.span
                    variants={shimmer}
                    initial="hidden"
                    animate="show"
                    className="inline-block bg-[linear-gradient(90deg,#FFCC00,#fff1a3,#FFCC00)] bg-[length:200%_200%] bg-clip-text text-transparent"
                  >
                    Hadia Ali
                  </motion.span>
                </h1>
              </motion.div>

              <p
                className="text-2xl md:text-3xl text-white/90 font-medium tracking-tight opacity-0"
                style={{ animation: "fadeInUp 0.5s ease-out 0.5s forwards" }}
              >
                UI/UX Designer
              </p>

              <div
                className="h-0.5 w-20 rounded-full bg-light-purple mt-1 opacity-0 origin-left"
                style={{ animation: "lineExpand 0.5s ease-out 0.7s forwards" }}
              />

              <p
                className="text-white/50 text-sm md:text-base max-w-sm mt-3 leading-relaxed opacity-0"
                style={{ animation: "fadeIn 0.5s ease-out 0.85s forwards" }}
              >
                Crafting intuitive experiences and thoughtful interfaces.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.18}
              className="relative flex justify-center items-center w-[600px] h-[500px] overflow-visible"
              style={{ animation: "floatOnce 2s ease-in-out forwards" }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 pointer-events-none"
              />

              <svg
                className="absolute w-[480px] z-0 top-[10px]"
                style={{ height: "calc(480px * 256 / 288)" }}
                viewBox="0 0 288 256"
                fill="none"
              >
                <polygon
                  points="144,12 276,128 144,244 12,128"
                  stroke="#ffffff"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
              <svg
                className="absolute w-[480px] z-10"
                style={{ height: "calc(480px * 256 / 288)" }}
                viewBox="0 0 288 256"
                fill="none"
              >
                <polygon points="144,12 276,128 144,244 12,128" fill="#080130" />
              </svg>
              <svg
                className="absolute w-[480px] z-20 pointer-events-none"
                style={{
                  height: "calc(480px * 256 / 288)",
                  animation: "glowPulse 3s ease-in-out infinite",
                }}
                viewBox="0 0 288 256"
                fill="none"
              >
                <defs>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow
                      dy="4"
                      stdDeviation="4"
                      floodColor="#d501ff"
                      floodOpacity="1"
                    />
                  </filter>
                </defs>
                <polygon
                  points="144,12 276,128 144,244 12,128"
                  stroke="#d501ff"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#shadow)"
                />
              </svg>
              <div
                className="absolute w-[480px] z-30 overflow-visible"
                style={{
                  height: "calc(480px * 256 / 288)",
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 50%, 95.83% 50%, 50% 95.31%, 4.17% 50%, 0% 50%)",
                }}
              >
                <img
                  src="/Profilepic2.png"
                  alt="Profile"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[520px] object-cover object-bottom"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        <div className="h-24 flex-shrink-0" aria-hidden="true" />

        <section className="card min-h-screen z-20 flex items-center justify-center bg-[#0f0c1f] px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12 rounded-2xl py-12 px-6 md:px-12"
            style={{
              boxShadow: "0 0 60px rgba(213,1,255,0.12), 6px 0 6px #60007489",
            }}
          >
            <div className="w-full md:w-1/3 flex justify-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                src="/Profilepic2.png"
                alt="Hadia Ali"
                className="rounded-xl w-64 h-64 object-cover shadow-2xl"
              />
            </div>

            <div className="w-full md:w-2/3 text-white/90 max-w-3xl flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-yellow">About Me</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-lg md:text-xl leading-relaxed">
                  Hi! I’m{" "}
                  <span className="text-light-purple font-semibold">Hadia Ali</span>, a
                  passionate UI/UX designer focused on crafting intuitive,
                  user-friendly interfaces. I love transforming ideas into engaging
                  digital experiences while paying attention to every small detail.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-lg md:text-xl leading-relaxed">
                  I enjoy collaborating with developers, designers, and product teams
                  to create meaningful applications. My goal is to make digital
                  experiences that feel seamless and enjoyable.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-lg md:text-xl leading-relaxed">
                  When I’m not designing, I’m exploring new design trends,
                  experimenting with color palettes, or diving into new tools to level
                  up my skills.
                </p>
              </motion.div>
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
      </div>
    </>
  );
}
