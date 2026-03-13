"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#080130] text-white border-t border-white/10 pt-12">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light-purple">
            Let's Connect
          </h2>

          <p className="text-white/60 max-w-md leading-relaxed">
            I'm always open to discussing design, collaboration,
            or new opportunities. Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          {/* Email */}
          <p
            
            className="flex items-center gap-3 px-6 py-3 rounded-lg 
            border border-white/10 bg-white/5 
            hover:bg-light-purple/20 hover:border-light-purple/40
            transition-all duration-300 backdrop-blur"
          >
            {/* Email Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 8.25V6.75A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75v10.5A2.25 2.25 0 005.25 19.5h13.5A2.25 2.25 0 0021 17.25V8.25z" />
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3.75 7.5l8.25 6 8.25-6" />
            </svg>

            hadiaali90500@gmail.com
          </p>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hadia-ali-301408387/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-lg 
            border border-white/10 bg-white/5 
            hover:bg-light-purple/20 hover:border-light-purple/40
            transition-all duration-300 backdrop-blur"
          >
            {/* LinkedIn Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
              2.76 2.24 5 5 5h14c2.76 0 5-2.24 
              5-5v-14c0-2.76-2.24-5-5-5zm-11 
              19h-3v-10h3v10zm-1.5-11.28c-.97 
              0-1.75-.79-1.75-1.75s.78-1.75 
              1.75-1.75 1.75.79 
              1.75 1.75-.78 1.75-1.75 
              1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
              0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.75 
              1.38-1.54 2.84-1.54 3.04 0 3.6 2 
              3.6 4.59v5.58z"/>
            </svg>

            LinkedIn
          </a>
             
        <a
  href=" https://github.com/Hadiya-Ali"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 px-6 py-3 rounded-lg 
  border border-white/10 bg-white/5 
  hover:bg-light-purple/20 hover:border-light-purple/40
  transition-all duration-300 backdrop-blur"
>
  {/* GitHub Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.2 11.2 0 015.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.68 5.41-5.24 5.69.41.36.77 1.07.77 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
  </svg>

  Github
</a>
        </motion.div>

    

        {/* Divider */}
        <div className="w-full max-w-xl h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-xl text-sm text-white/40 gap-4">
          {/* <p>© {new Date().getFullYear()} Hadia Ali</p> */}
          <p>Designed & Built with Next.js</p>
        </div>

      </div>
    </footer>
  );
}