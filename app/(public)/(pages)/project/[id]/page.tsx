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
import projectsData from "@/data/projects.json";

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
  // Try numeric ID first
  const numericId = parseInt(id, 10);
  if (!isNaN(numericId)) {
    return projectsData.projects.find((p) => p.id === numericId);
  }
  // Fall back to slug lookup
  return projectsData.projects.find((p) => p.slug === id);
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    return (
      <div className="border-box min-h-[60vh] flex flex-col items-center justify-center">
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
      </div>
    );
  }

  return (
    <main className="bg-tertiary min-h-screen">
      {/* Back Navigation */}
      <div className="p-4 flex items-center justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-tertiary text-[0.8rem] sm:text-[0.9rem]"
        >
          <FaArrowLeft />
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <section className="border-box">
        <h1 className="font-bold font-main text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] text-primary text-center leading-tight">
          {project.name}
        </h1>
        <p className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] text-secondary text-center mt-4 max-w-4xl mx-auto">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
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
            <h3 className="inline-flex text-white items-center gap-2 px-6 py-3 bg-primary  text-[0.9rem] sm:text-[1rem] rounded-lg hover:bg-secondary transition-colors duration-300">
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
        </div>

        {/* Timeframe */}
        <div className="flex items-start justify-center gap-2 mt-6 text-secondary/60 font-tertiary text-[0.7rem] sm:text-[0.8rem]">
          <FaCalendarAlt />
          <span>{project.timeframe}</span>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="border-box">
        <h2 className="section-title">Gallery</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
          {project.gallery.length > 0 ? (
            project.gallery.map((img, index) => (
              <div
                key={index}
                className="aspect-video bg-white rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`${project.name} screenshot ${index + 1}`}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          ) : (
            <div className="md:col-span-2 col-span-1">
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
            </div>
          )}
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="border-box">
        <h2 className="section-title">Tools & Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-12 md:mt-8">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white text-primary border border-gray-200 rounded-full font-tertiary text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] hover:shadow-md transition-shadow duration-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="border-box">
        <h2 className="section-title">Challenges</h2>
        <div className="flex flex-col gap-8 mt-8 text-start max-w-4xl mx-auto">
          {project.challenges.map((item, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
