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
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};

export default AboutMeSection;
