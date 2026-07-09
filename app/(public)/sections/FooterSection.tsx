"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagramSquare, FaLinkedin, FaHeart } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const FooterSection = () => {
  return (
    <motion.footer
      className="border-box"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Social Media Icons */}
        <motion.div
          className="flex flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-secondary hover:text-primary transition-colors duration-300"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-secondary hover:text-primary transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/wagih-13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-secondary hover:text-primary transition-colors duration-300"
          >
            <FaSquareGithub />
          </a>
          <a
            href="mailto:wagiha498@gmail.com"
            className="text-2xl text-secondary hover:text-primary transition-colors duration-300"
          >
            <MdEmail />
          </a>
        </motion.div>

        {/* Thank You Message */}
        <motion.p
          className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.2rem] text-primary font-bold text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Thank you for visiting my portfolio. Let us build something great
          together!
        </motion.p>

        {/* Copyright */}
        <motion.p
          className="text-[0.8rem] w-full sm:text-[0.9rem] text-tertiary font-main p-2 bg-primary text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          &copy; {new Date().getFullYear()} Ahmed Wagih. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default FooterSection;
