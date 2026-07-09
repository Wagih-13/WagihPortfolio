"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaWhatsapp,
  FaUser,
  FaPaperPlane,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  validateContactForm,
  validateName,
  validateEmail,
  validatePhone,
  validateMessage,
  hasErrors,
  type ValidationErrors,
} from "@/lib/validation";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validateField = useCallback(
    (name: string, value: string): string | undefined => {
      switch (name) {
        case "name":
          return validateName(value);
        case "email":
          return validateEmail(value);
        case "phone":
          return validatePhone(value);
        case "message":
          return validateMessage(value);
        default:
          return undefined;
      }
    },
    [],
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Live validation if field was already touched
    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => {
        const next = { ...prev };
        if (fieldError) next[name as keyof ValidationErrors] = fieldError;
        else delete next[name as keyof ValidationErrors];
        return next;
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors((prev) => {
      const next = { ...prev };
      if (fieldError) next[name as keyof ValidationErrors] = fieldError;
      else delete next[name as keyof ValidationErrors];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ name: true, email: true, phone: true, message: true });

    // Validate all fields
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setStatusMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  const isSubmittable =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim() &&
    !hasErrors(errors);

  const inputStyle = (fieldName: keyof ValidationErrors) =>
    `w-full p-3 pl-3 bg-transparent text-primary text-[1rem] outline-none placeholder:text-secondary/30 ${
      touched[fieldName] && errors[fieldName]
        ? "border-red-400"
        : "border-gray-200"
    }`;

  const containerStyle = (fieldName: keyof ValidationErrors) =>
    `flex items-center border rounded-lg focus-within:border-secondary transition-colors ${
      touched[fieldName] && errors[fieldName]
        ? "border-red-400"
        : "border-gray-200"
    }`;

  return (
    <motion.section
      className="border-box"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="section-title">Contact</h2>

      <motion.div
        className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8 text-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
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
                  href="mailto:contact@wagih.site"
                  className="text-[1rem] sm:text-[1.1rem] text-primary hover:text-secondary transition-colors"
                >
                  contact@wagih.site
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/201012639673?text=Hi%20Ahmed%2C%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300 hover:border-[#25D366] group"
            >
              <div className="text-2xl text-secondary group-hover:text-[#25D366] transition-colors">
                <FaWhatsapp />
              </div>
              <div>
                <p className="text-[0.8rem] font-main text-secondary/60 uppercase tracking-wider">
                  WhatsApp
                </p>
                {/* تم تعديل النص ليظهر بشكل صحيح للزوار أيضاً */}
                <span className="text-[1rem] sm:text-[1.1rem] text-primary group-hover:text-[#25D366] transition-colors">
                  +20 101 263 9673
                </span>
                <p className="text-[0.7rem] text-secondary/40 mt-0.5">
                  Click to send a message
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex flex-col bg-white p-6 rounded-lg border border-gray-200">
          <h4 className="font-bold font-secondary text-[1.3rem] sm:text-[1.5rem] md:text-[1.8rem] text-primary mb-6">
            Send a Message
          </h4>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            noValidate
          >
            {/* Name */}
            <div className="relative">
              <label
                htmlFor="name"
                className="text-[0.8rem] font-main text-secondary/60 uppercase tracking-wider mb-1 block"
              >
                Your Name <span className="text-red-400">*</span>
              </label>
              <div className={containerStyle("name")}>
                <span className="pl-4 text-secondary/40">
                  <FaUser />
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Doe"
                  className={inputStyle("name")}
                />
              </div>
              {touched.name && errors.name && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <FaExclamationCircle className="shrink-0" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <label
                htmlFor="email"
                className="text-[0.8rem] font-main text-secondary/60 uppercase tracking-wider mb-1 block"
              >
                Your Email <span className="text-red-400">*</span>
              </label>
              <div className={containerStyle("email")}>
                <span className="pl-4 text-secondary/40">
                  <MdEmail />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="john@example.com"
                  className={inputStyle("email")}
                />
              </div>
              {touched.email && errors.email && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <FaExclamationCircle className="shrink-0" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="relative">
              <label
                htmlFor="phone"
                className="text-[0.8rem] font-main text-secondary/60 uppercase tracking-wider mb-1 block"
              >
                Your Phone <span className="text-secondary/40">(optional)</span>
              </label>
              <div className={containerStyle("phone")}>
                <span className="pl-4 text-secondary/40">
                  <FaPhone />
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+20 101 263 9673"
                  className={inputStyle("phone")}
                />
              </div>
              {touched.phone && errors.phone && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <FaExclamationCircle className="shrink-0" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="relative">
              <label
                htmlFor="message"
                className="text-[0.8rem] font-main text-secondary/60 uppercase tracking-wider mb-1 block"
              >
                Your Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell me about your project... (min. 10 characters)"
                rows={4}
                className={`w-full p-3 bg-transparent text-primary text-[1rem] outline-none border rounded-lg focus-within:border-secondary transition-colors placeholder:text-secondary/30 resize-none ${
                  touched.message && errors.message
                    ? "border-red-400"
                    : "border-gray-200"
                }`}
              />
              {touched.message && errors.message && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <FaExclamationCircle className="shrink-0" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Status Message */}
            {status === "success" && (
              <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                <FaCheckCircle className="text-green-500 shrink-0" />
                {statusMessage}
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                <FaExclamationCircle className="text-red-500 shrink-0" />
                {statusMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={
                status === "sending" || (touched.name && !isSubmittable)
              }
              className="flex items-center justify-center gap-2 mt-2 w-full p-3 bg-primary text-white font-secondary text-[1rem] hover:bg-secondary transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <FaPaperPlane />
              )}
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
