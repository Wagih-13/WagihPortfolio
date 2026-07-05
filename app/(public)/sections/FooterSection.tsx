import React from "react";
import { FaInstagramSquare, FaLinkedin, FaHeart } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const FooterSection = () => {
  return (
    <footer className="border-box">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Social Media Icons */}
        <div className="flex flex-row items-center justify-center gap-5">
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
        </div>

        {/* Thank You Message */}
        <p className="text-[0.8rem] sm:text-[1.1rem] md:text-[1.2rem] text-primary font-bold text-center">
          Thank you for visiting my portfolio. Let us build something great
          together!
        </p>

        {/* Copyright */}
        <p className="text-[0.8rem] w-full sm:text-[0.9rem] text-tertiary font-main p-2 bg-primary  text-center">
          &copy; {new Date().getFullYear()} Ahmed Wagih. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
