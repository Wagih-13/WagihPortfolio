import React from "react";
import Link from "next/link";
const ProjectsSection = () => {
  return (
    <section className="border-box p-4 ">
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-0 ">
        {Array.from({ length: 4 }).map((_, index) => (
          <Link
            href={`/project/${index + 1}`}
            key={index}
            className="border-box p-4 "
          >
            <img src="" alt="" />
            <div className="discription">
              <h2 className="font-bold sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] font-secondary text-primary">
                Project Name
              </h2>
              <p className=" text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] text-center text-secondary mt-4 md:text-center text-start">
                Project Description
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
