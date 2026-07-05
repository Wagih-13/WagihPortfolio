import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="border-box">
      <h2 className="section-title">Contact</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8 text-start">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col items-start justify-center">
          <h3 className="font-bold font-secondary text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] text-primary leading-tight mb-4">
            Let's Work Together
          </h3>
          <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-secondary leading-relaxed mb-6">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            through any of the channels below.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 w-full">
            {/* Phone */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="text-2xl text-secondary">
                <FaPhone />
              </div>
              <div>
                <p className="text-[0.8rem] font-main text-secondary/60 uppercase tracking-wider">
                  Phone
                </p>
                <a
                  href="tel:+0201012639673"
                  className="text-[1rem] sm:text-[1.1rem] text-primary hover:text-secondary transition-colors"
                >
                  +0201012639673
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="text-2xl text-secondary">
                <MdEmail />
              </div>
              <div>
                <p className="text-[0.8rem] font-main text-secondary/60 uppercase tracking-wider">
                  Email
                </p>
                <a
                  href="mailto:wagiha498@gmail.com"
                  className="text-[1rem] sm:text-[1.1rem] text-primary hover:text-secondary transition-colors"
                >
                  wagiha498@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="text-2xl text-secondary">
                <FaWhatsapp />
              </div>
              <div>
                <p className="text-[0.8rem] font-main text-secondary/60 uppercase tracking-wider">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/0201012639673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1rem] sm:text-[1.1rem] text-primary hover:text-[#25D366] transition-colors"
                >
                  +0201012639673
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex flex-col bg-white p-6 rounded-lg border border-gray-200">
          <h4 className="font-bold font-secondary text-[1.3rem] sm:text-[1.5rem] md:text-[1.8rem] text-primary mb-6">
            Send a Message
          </h4>

          <form className="flex flex-col gap-5">
            {/* Name */}
            <div className="relative">
              <label
                htmlFor="name"
                className="text-[0.8rem] font-main text-secondary/60 uppercase tracking-wider mb-1 block"
              >
                Your Name
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg focus-within:border-secondary transition-colors">
                <span className="pl-4 text-secondary/40">
                  <FaUser />
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full p-3 pl-3 bg-transparent text-primary text-[1rem] outline-none placeholder:text-secondary/30"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label
                htmlFor="email"
                className="text-[0.8rem] font-main text-secondary/60 uppercase tracking-wider mb-1 block"
              >
                Your Email
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg focus-within:border-secondary transition-colors">
                <span className="pl-4 text-secondary/40">
                  <MdEmail />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full p-3 pl-3 bg-transparent text-primary text-[1rem] outline-none placeholder:text-secondary/30"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <label
                htmlFor="phone"
                className="text-[0.8rem] font-main text-secondary/60 uppercase tracking-wider mb-1 block"
              >
                Your Phone
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg focus-within:border-secondary transition-colors">
                <span className="pl-4 text-secondary/40">
                  <FaPhone />
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+20 101 263 9673"
                  className="w-full p-3 pl-3 bg-transparent text-primary text-[1rem] outline-none placeholder:text-secondary/30"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 mt-2 w-full p-3 bg-primary text-white font-secondary text-[1rem]  hover:bg-secondary transition-colors duration-300 cursor-pointer"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
