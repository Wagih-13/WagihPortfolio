import React from "react";
import { FaReact, FaServer, FaRocket } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { MdDevices, MdCloudQueue, MdSpeed } from "react-icons/md";

const servicesData = [
  {
    title: "Advanced Front-End Engineering",
    subtitle: "React & Next.js Ecosystem",
    description:
      "Building scalable, high-performance web applications using React, Next.js, TypeScript, and modern state management with Redux Toolkit & TanStack Query.",
    icon: <FaReact />,
    iconSecondary: <SiNextdotjs />,
    highlights: [
      "SPA & SSR Development",
      "TypeScript & ES6+",
      "State Management",
      "Responsive UI/UX",
    ],
  },
  {
    title: "Production-Grade Systems Development",
    subtitle: "ERP, CRM, E-commerce & Booking Platforms",
    description:
      "Delivering end-to-end production systems with multi-role dashboards, secure authentication, and real-time workflows — serving 1,000+ active users.",
    icon: <MdDevices />,
    iconSecondary: <MdCloudQueue />,
    highlights: [
      "Multi-Role Dashboards",
      "Secure Authentication",
      "Admin Control Panels",
      "REST API Integration",
    ],
  },
  {
    title: "Deployment & Performance Optimization",
    subtitle: "VPS, Nginx, PM2 & AI-Assisted Workflows",
    description:
      "Deploying production applications on Linux VPS with Nginx reverse proxy and PM2 process management, while leveraging AI tools to accelerate development.",
    icon: <FaServer />,
    iconSecondary: <MdSpeed />,
    highlights: [
      "VPS Deployment",
      "Nginx & PM2",
      "Zero-Downtime",
      "AI-Assisted Dev",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="border-box">
      <h2 className="section-title">Services</h2>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-start bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icons Row */}
            <div className="flex items-center gap-3 text-3xl text-primary mb-4">
              <span className="text-secondary">{service.icon}</span>
              <span className="text-secondary/60">{service.iconSecondary}</span>
            </div>

            {/* Title */}
            <h3 className="font-bold font-secondary text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] text-primary leading-tight">
              {service.title}
            </h3>

            {/* Subtitle */}
            <p className="text-[1rem] sm:text-[1rem] md:text-[1.2rem] text-secondary/80 font-secondary mt-1 mb-3">
              {service.subtitle}
            </p>

            {/* Description */}
            <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-secondary leading-relaxed mb-4">
              {service.description}
            </p>

            {/* Highlights */}
            <ul className="flex flex-wrap gap-2 mt-auto">
              {service.highlights.map((item, i) => (
                <li
                  key={i}
                  className="text-[0.75rem] sm:text-[0.8rem] md:text-[0.9rem] px-3 py-1 bg-tertiary text-secondary rounded-full border border-gray-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
