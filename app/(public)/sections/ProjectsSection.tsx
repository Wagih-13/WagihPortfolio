"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import projectsData from "@/data/projects.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const ProjectsSection = () => {
  const displayProjects = projectsData.projects.filter(
    (project) => project.shortName,
  );
  return (
    <motion.section
      className="border-box p-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="section-title">Top Projects</h2>
      <motion.div
        className="grid md:grid-cols-2 grid-cols-1 gap-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {displayProjects.map((project) => (
          <motion.div key={project.id} variants={projectVariants}>
            <Link
              href={`/project/${project.id}`}
              className="border-box !px-0 relative block hover:scale-105 transition-transform duration-300"
            >
              <Image
                width={500}
                height={300}
                className="w-full h-auto object-cover"
                src={project.images[0] || "/project-placeholder.png"}
                alt={project.shortName || project.name}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
