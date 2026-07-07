import React from "react";
import Link from "next/link";
import Image from "next/image";
import projectsData from "@/data/projects.json";

const ProjectsSection = () => {
  const displayProjects = projectsData.projects.filter(
    (project) => project.shortName,
  );
  return (
    <section className="border-box p-4">
      <h2 className="section-title">Top Projects</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-0">
        {displayProjects.map((project) => (
          <Link
            href={`/project/${project.id}`}
            key={project.id}
            className="border-box !px-0 relative"
          >
            <Image
              width={500}
              height={300}
              className="w-full h-auto object-cover"
              src={project.images[0] || "/project-placeholder.png"}
              alt={project.shortName || project.name}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
