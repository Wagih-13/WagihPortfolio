"use client";

import { motion } from "framer-motion";
import SkillsList from "@/components/skillesList";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const floatAnimation = (delay: number) => ({
  y: [0, -8, 0],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "easeInOut" as const,
    delay: delay,
  },
});

const SkillesSection = () => {
  return (
    <motion.div
      className="border-box flex flex-row flex-wrap items-center justify-center bg-tertiary md:gap-8 gap-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="section-title">Skills</h2>

      <motion.div
        className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {SkillsList.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillVariants}
            className="flex flex-col items-center justify-center m-2 p-2 bg-tertiary"
          >
            <motion.div
              className="md:text-4xl text-3xl text-secondary"
              animate={floatAnimation(index * 0.15)}
            >
              {skill.icon}
            </motion.div>
            <p className="md:text-xl text-md text-secondary mt-2">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillesSection;
