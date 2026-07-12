"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const letters = text.split("");

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + index * 0.05,
            ease: "easeOut",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  return (
    <main className="flex flex-col items-center justify-start overflow-x-hidden w-full bg-tertiary">
      <motion.h1
        className="font-bold font-main mt-8 text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-center text-primary"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Ahmed Wagih
      </motion.h1>
      <div className="border-box">
        <motion.h2
          className="font-bold sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] font-secondary text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="flex flex-row flex-wrap justify-center items-center">
            <AnimatedText text="FrontEnd" delay={0.3} />
            <AnimatedText
              text="Developer"
              className="text-zinc-700"
              delay={0.3 + "FrontEnd".length * 0.05}
            />
          </div>
        </motion.h2>

        <motion.p
          className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] text-center text-secondary mt-4 md:text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        >
          I build responsive and interactive web applications using modern
          technologies. I build responsive and interactive web applications
          using modern technologies. I build responsive .
        </motion.p>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
        >
          <a
            href="/cv/Ahmed%20Wagih%20CV.pdf"
            download="Ahmed Wagih CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#d0d5dc] text-white font-secondary text-[1rem] sm:text-[1.1rem]  transition-shadow duration-300  hover:shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default HeroSection;
