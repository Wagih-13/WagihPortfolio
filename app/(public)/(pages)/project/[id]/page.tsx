import React from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCalendarAlt,
  FaArrowLeft,
} from "react-icons/fa";
import { MdDevices, MdCloudQueue, MdSpeed } from "react-icons/md";
import Link from "next/link";

const projectData: Record<
  string,
  {
    name: string;
    description: string;
    visitUrl: string;
    githubUrl: string;
    timeframe: string;
    tools: string[];
    images: string[];
    challenges: { problem: string; solution: string }[];
  }
> = {
  "1": {
    name: "E-Commerce Platform",
    description:
      "A full-scale Next.js e-commerce platform with secure authentication, server-side rendering, and a complete admin control panel.",
    visitUrl: "https://modestwear.cloud",
    githubUrl: "https://github.com/wagih-13",
    timeframe: "3 months (Jan 2025 - Mar 2025)",
    tools: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "NextAuth",
      "PostgreSQL",
      "Nginx",
      "PM2",
    ],
    images: [],
    challenges: [
      {
        problem:
          "Implementing a secure authentication system with role-based access control for customers, admins, and vendors was complex. Managing session persistence across server-side rendered pages while ensuring CSRF protection required careful architecture.",
        solution:
          "I used NextAuth.js with JWT strategy for stateless authentication, combined with middleware-based route protection. For role-based access, I created a custom middleware that checks user roles before rendering protected pages, and implemented CSRF tokens on all mutation endpoints.",
      },
      {
        problem:
          "Optimizing the product listing page for 1,000+ concurrent users with real-time inventory updates caused significant database load and slow page loads.",
        solution:
          "I implemented TanStack Query for client-side caching with stale-while-revalidate strategy, added server-side pagination, and used Nginx reverse proxy caching for static assets. This reduced database queries by 60% and improved Lighthouse performance score from 45 to 92.",
      },
      {
        problem:
          "Building a responsive admin dashboard with real-time order management, inventory tracking, and analytics charts that worked seamlessly across devices.",
        solution:
          "I designed a modular component architecture with Redux Toolkit for global state management. Charts were built with server-side data aggregation to minimize client-side processing, and the dashboard layout uses CSS Grid with Tailwind responsive breakpoints for full mobile compatibility.",
      },
    ],
  },
  "2": {
    name: "Booking System",
    description:
      "A React-based booking platform supporting customers, employees, and administrators with dedicated dashboards and real-time availability logic.",
    visitUrl: "#",
    githubUrl: "https://github.com/wagih-13",
    timeframe: "2.5 months (Jun 2024 - Aug 2024)",
    tools: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
      "Tailwind CSS",
      "Sass",
      "Node.js",
      "PostgreSQL",
    ],
    images: [],
    challenges: [
      {
        problem:
          "Designing real-time availability logic that prevented double-booking while handling timezone differences and varying service durations was technically challenging.",
        solution:
          "I implemented a server-side locking mechanism using database transactions to prevent race conditions during booking. Availability slots are calculated on the server using a timezone-aware algorithm, and the frontend polls for updates every 30 seconds using TanStack Query's refetchInterval.",
      },
      {
        problem:
          "Creating three distinct role-based dashboards (customer, employee, admin) with different views and permissions without duplicating code.",
        solution:
          "I built a shared component library with role-based rendering props. Each dashboard is composed from the same base components, with visibility and behavior controlled by the user's role context. This reduced code duplication by 70% and made adding new features consistent across all roles.",
      },
    ],
  },
  "3": {
    name: "ERP System",
    description:
      "A modular ERP interface with streamlined data management, multi-role access control, and comprehensive reporting for business clients.",
    visitUrl: "#",
    githubUrl: "https://github.com/wagih-13",
    timeframe: "4 months (Sep 2024 - Dec 2024)",
    tools: [
      "React",
      "Redux Toolkit",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "REST APIs",
      "PostgreSQL",
      "Nginx",
    ],
    images: [],
    challenges: [
      {
        problem:
          "Managing complex nested form data for inventory, orders, and invoices with real-time validation across multiple related entities was causing performance issues.",
        solution:
          "I normalized the Redux store structure using entity adapters to handle nested data efficiently. Form validation was moved to a debounced server-side validation layer, and TanStack Query was used for optimistic updates on CRUD operations, providing instant UI feedback while syncing in the background.",
      },
      {
        problem:
          "Generating printable PDF reports (invoices, inventory reports) from dynamic data while maintaining consistent formatting.",
        solution:
          "I created a server-side PDF generation endpoint using a headless browser approach, where the React components are rendered to HTML and converted to PDF. This ensured pixel-perfect output matching the web UI styling, and reports could be generated asynchronously for large datasets.",
      },
    ],
  },
  "4": {
    name: "CRM Platform",
    description:
      "A customer relationship management interface with lead tracking, communication logs, and analytics dashboards for sales teams.",
    visitUrl: "#",
    githubUrl: "https://github.com/wagih-13",
    timeframe: "3 months (Oct 2024 - Dec 2024)",
    tools: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "REST APIs",
      "PostgreSQL",
    ],
    images: [],
    challenges: [
      {
        problem:
          "Implementing a drag-and-drop Kanban board for lead pipeline management that performed smoothly with hundreds of leads across multiple stages.",
        solution:
          "I used a lightweight drag-and-drop library with virtualization to handle large lists. State updates are batched and debounced to prevent excessive re-renders, and the board layout uses CSS Grid with auto-fit columns for responsive behavior across screen sizes.",
      },
      {
        problem:
          "Building a comprehensive search and filter system that could query across leads, contacts, deals, and communication history with sub-second response times.",
        solution:
          "I implemented server-side full-text search using PostgreSQL tsvector indexes, with a debounced search input that sends requests only after the user stops typing. Results are cached with TanStack Query, and advanced filters are serialized into URL query parameters for shareable search states.",
      },
    ],
  },
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const project = projectData[id];

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
      <div className="p-4 flex items-center justify-center ">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-tertiary text-[0.8rem] sm:text-[0.9rem]"
        >
          <FaArrowLeft />
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <section className="border-box ">
        <h1 className="font-bold font-main text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] text-primary text-center leading-tight">
          {project.name}
        </h1>
        <p className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] text-secondary text-center mt-4 max-w-4xl mx-auto">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
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
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-primary font-secondary text-[0.9rem] sm:text-[1rem] rounded-lg hover:bg-white transition-colors duration-300"
          >
            <FaGithub />
            View Source
          </a>
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
          {project.images.length > 0 ? (
            project.images.map((img, index) => (
              <div
                key={index}
                className="aspect-video bg-white rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={img}
                  alt={`${project.name} screenshot ${index + 1}`}
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
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
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
