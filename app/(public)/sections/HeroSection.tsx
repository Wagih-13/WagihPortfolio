import React from "react";

const HeroSection = () => {
  return (
    <main className="flex flex-col items-center justify-start w-full  bg-tertiary">
      <h1 className="font-bold font-main mt-8 text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-center text-primary">
        Ahmed Wagih
      </h1>
      <div className="border-box ">
        <h2 className="font-bold sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] font-secondary text-primary">
          FrontEnd <span className="text-zinc-700">Developer</span>
        </h2>
        <p className=" text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] text-center text-secondary mt-4 md:text-center">
          I build responsive and interactive web applications using modern
          technologies. I build responsive and interactive web applications
          using modern technologies. I build responsive .
        </p>
      </div>
    </main>
  );
};

export default HeroSection;
