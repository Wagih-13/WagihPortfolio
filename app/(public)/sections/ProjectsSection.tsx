import React from "react";
import Link from "next/link";
import Image from "next/image";
const ProjectsSection = () => {
  const projects = ["MODEST WEAR", "CRM SYSTEM"];
  return (
    <section className="border-box p-4 ">
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-0 ">
        {Array.from({ length: 2 }).map((_, index) => (
          <Link
            href={`/project/${index + 1}`}
            key={index}
            className="border-box !px-0 relative "
          >
            <Image
              width={500}
              height={300}
              className="w-full h-auto object-cover "
              src={`/project-${index + 1}.png`}
              alt=""
            />
            <h2 className="text-[1.5rem] md:text-[2rem] w-full text-center text-zinc-700 md:text-center absolute bottom-0 bg-tertiary  left-[50%] transform -translate-x-[50%] -translate-y-[50%]  font-bold">
              {projects[index]}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
