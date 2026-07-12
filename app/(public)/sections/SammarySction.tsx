"use client";

import React from "react";
import { motion } from "framer-motion";

const SammarySction = () => {
  return (
    <motion.section
      className="border-box flex text-center algin-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="section-title">Summary</h2>
      <motion.p
        className="text-[1.2rem] md:w-[90%] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[1.6rem] text-start md:text-center text-secondary mt-4 md:text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A skilled Front-End Developer with extensive experience building
        scalable, high-performance web applications using React, Next.js,
        TypeScript, and modern state management tools like Redux Toolkit and
        TanStack Query. Proven track record of architecting complete platforms
        across diverse domains — including e-commerce, booking systems, ERP
        interfaces, CRM solutions, and bilingual CMS platforms. Strong expertise
        in PostgreSQL database design, server-side rendering, authentication
        systems, and performance optimization, consistently delivering
        responsive, production-ready applications with clean, maintainable code.
      </motion.p>
    </motion.section>
  );
};

export default SammarySction;
