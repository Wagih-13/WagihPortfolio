"use client";

import {
  FaExternalLinkAlt,
  FaGithub,
  FaCalendarAlt,
  FaArrowLeft,
  FaSpinner,
} from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import projectsData from "@/data/projects.json";
import { useParams } from "next/navigation";

interface Project {
  id: number;
  slug: string;
  name: string;
  shortName: string | null;
  description: string;
  visitUrl: string | null;
  githubUrl: string | null;
  timeframe: string | null;
  category: string;
  featured: boolean;
  order: number;
  tools: string[];
  images: string[];
  gallery: string[];
  challenges: { problem: string; solution: string }[];
}

const getProject = (id: string): Project | undefined => {
  const numericId = parseInt(id, 10);
  if (!isNaN(numericId)) {
    return projectsData.projects.find((p) => p.id === numericId);
  }
  return projectsData.projects.find((p) => p.slug === id);
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Page = () => {
  const params = useParams();
  const id = params.id as string;
  const project = getProject(id);

  if (!project) {
    return (
      <motion.div
        className="border-box min-h-[60vh] flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-bold font-secondary text-[2rem] sm:text-[3rem] md:text-[4rem] text-primary">
          Project Not Found
        </h1>
        <p className="text-[1rem] sm:text-[1.2rem] text-secondary mt-4">
          The project you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 flex items-center gap-2 text-secondary hover:text-primary transition-colors font-tertiary text-[0.9rem]"
        >
          <FaArrowLeft />
          Back to Home
        </Link>
      </motion.div>
    );
  }

  return (
    <main className="bg-tertiary min-h-screen">
      {/* Back Navigation */}
      <motion.div
        className="p-4 flex items-center justify-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-tertiary text-[0.8rem] sm:text-[0.9rem]"
        >
          <FaArrowLeft />
          Back to Projects
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.section
        className="border-box"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="font-bold font-main text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] text-primary text-center leading-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {project.name}
        </motion.h1>
        <motion.p
          className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] text-secondary text-center mt-4 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {project.description}
        </motion.p>

        {/* Action Links */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {project.visitUrl ? (
            <a
              href={project.visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-secondary text-[0.9rem] sm:text-[1rem] rounded-lg hover:bg-secondary transition-colors duration-300"
            >
              <FaExternalLinkAlt />
              Visit Project
            </a>
          ) : (
            <h3 className="inline-flex text-white items-center gap-2 px-6 py-3 bg-primary text-[0.9rem] sm:text-[1rem] rounded-lg hover:bg-secondary transition-colors duration-300">
              <FaSpinner /> Project is not live yet.
            </h3>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-primary font-secondary text-[0.9rem] sm:text-[1rem] rounded-lg hover:bg-white transition-colors duration-300"
            >
              <FaGithub />
              View Source
            </a>
          ) : (
            <h3 className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-primary font-secondary text-[0.9rem] sm:text-[1rem] rounded-lg hover:bg-white transition-colors duration-300">
              <FaGithub />
              Source Private
            </h3>
          )}
        </motion.div>

        {/* Timeframe */}
        <motion.div
          className="flex items-start justify-center gap-2 mt-6 text-secondary/60 font-tertiary text-[0.7rem] sm:text-[0.8rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <FaCalendarAlt />
          <span>{project.timeframe}</span>
        </motion.div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="border-box"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="section-title">Gallery</h2>
        <motion.div
          className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {project.gallery.length > 0 ? (
            project.gallery.map((img, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="aspect-video bg-white rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`${project.name} screenshot ${index + 1}`}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))
          ) : (
            <motion.div variants={fadeIn} className="md:col-span-2 col-span-1">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="aspect-video bg-white rounded-lg border border-gray-200 flex items-center justify-center"
                  >
                    <div className="flex flex-col items-center gap-2 text-secondary/40">
                      <MdDevices className="text-3xl" />
                      <span className="font-tertiary text-[0.7rem]">
                        Screenshot {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.section>

      {/* Tools & Technologies */}
      <motion.section
        className="border-box"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="section-title">Tools & Technologies</h2>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-12 md:mt-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {project.tools.map((tool, index) => (
            <motion.span
              key={index}
              variants={fadeUp}
              className="px-4 py-2 bg-white text-primary border border-gray-200 rounded-full font-tertiary text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] hover:shadow-md transition-shadow duration-300"
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      {/* Challenges & Solutions */}
      <motion.section
        className="border-box"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="section-title">Challenges</h2>
        <motion.div
          className="flex flex-col gap-8 mt-8 text-start max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {project.challenges.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-secondary text-[0.9rem]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold font-secondary text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] text-primary mb-3">
                    Challenge
                  </h3>
                  <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] text-secondary leading-relaxed mb-4">
                    {item.problem}
                  </p>
                  <h4 className="font-bold font-secondary text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] text-primary mb-3">
                    Solution
                  </h4>
                  <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] text-secondary leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Page;
