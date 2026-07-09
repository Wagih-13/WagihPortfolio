import Image from "next/image";
import React from "react";

const AboutMeSection = () => {
  return (
    <div className="border-box ">
      <section className="relative h-[60vw] md:h-[500px] bg-tertiary flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="/Owner.png"
          alt="Owner Project"
          width={500}
          height={300}
          // استخدمنا عرض نسبي للموبايل وعرض ثابت للكمبيوتر
          className="absolute z-10 shadow-lg rounded-full left-1/2 transform -translate-x-1/2 w-[60vw] md:w-[500px] h-auto object-cover"
        />

        <h2 className="font-bold pt-[5vw] md:pt-[50px] text-[18vw] md:text-[20vw] whitespace-nowrap text-center">
          About Me
        </h2>
      </section>
      <section className="border-box w-full">
        <p className="text-[1.2rem]  m:text-[1.5rem] md:text-[1.6rem] lg:text-[1.6rem] text-start md:text-center text-secondary mt-4 md:text-center">
          I specialize in transforming complex business requirements into
          intuitive, polished web interfaces. My approach centers on clean
          architecture — structuring codebases so they remain maintainable and
          scalable as features grow. Whether it's designing a bilingual CMS with
          JSONB-based localization, implementing real-time booking logic with
          race-condition prevention, or building a Kanban pipeline for a CRM, I
          focus on solving the hard problems at the system level rather than
          patching symptoms. Outside of code, I care deeply about user
          experience, performance metrics, and shipping products that people
          actually enjoy using.
        </p>
      </section>
    </div>
  );
};

export default AboutMeSection;
