"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    id: 107,
    title: "Gigaboost",
    description:
      "An AI-powered MERN stack platform connecting users with potential investors. Features seamless Google Login, secure payment integration, and backend AI integration to dynamically extract investor email data from the database for paid subscribers.",
    image: "/projects/gigaboost.jpg",
    technologies: ["MERN Stack", "AI Integration", "Google Auth", "Payment Integration", "Node.js", "MongoDB"],
    liveLink: "https://gigaboost.ai/",
  },
  {
    id: 0,
    title: "Growth Turbine",
    description:
      "A high-converting website built on Webflow featuring custom UI/UX design, scroll animations, SEO optimization, and seamless form-to-CRM lead generation integration.",
    image: "/projects/growth-turbine.jpg",
    technologies: ["Webflow", "UI/UX Design", "CRM Integration", "SEO", "Animations"],
    liveLink: "https://growthturbine.com",
  },
  {
    id: 101,
    title: "SPACR",
    description:
      "A Next.js platform for a Dubai-based agency, bringing Amazon products to unsupported countries. Features custom SVG design enhancements and seamless REST API integration for product data extraction.",
    image: "/projects/spa.jpg",
    technologies: ["Next.js", "REST API", "Custom SVGs", "E-Commerce", "Data Extraction"],
    liveLink: "https://spacr.vercel.app/",
  },
  {
    id: 102,
    title: "Rahat Gallary",
    description:
      "A full-stack Next.js e-commerce store with a custom admin panel, secure payment integration, and comprehensive order management. Features robust authentication and authorization.",
    image: "/projects/rahat-gallary.jpg",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Redux"],
    liveLink: "https://rahat-gallery.vercel.app/",
  },
  {
    id: 103,
    title: "151 Coffee",
    description:
      "An interactive Webflow website focused on premium design and animations. Leveraged custom embedded code for advanced styling, optimized SEO, and improved page navigation for a seamless user experience.",
    image: "/projects/151-coffee.jpg",
    technologies: ["Webflow", "UI/UX Design", "Custom Code", "Animations", "SEO"],
    liveLink: "https://www.151coffee.com/",
  },
  {
    id: 104,
    title: "Desi Mirch Masala",
    description:
      "A robust MERN stack e-commerce store utilizing Redux Toolkit for state management. Features include secure payment integration, map integration for accurate delivery/location, comprehensive product management, advanced SEO optimization, and complete hosting/deployment.",
    image: "/projects/desi-mirch-masala.jpg",
    technologies: ["MERN Stack", "Redux Toolkit", "Payment Integration", "Map Integration", "Product Management", "SEO"],
    liveLink: "https://desimirchmasala.com/",
  },
  {
    id: 105,
    title: "Global News Portal",
    description:
      "A dynamic MERN stack news application delivering real-time articles across various categories. Built with React and Redux for seamless state management, featuring user authentication, an admin dashboard for content management, and robust data handling with Node.js and MongoDB.",
    image: "/projects/news-website.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT Auth", "REST API"],
    liveLink: "https://news-website-alpha-ten.vercel.app/",
  },
  {
    id: 106,
    title: "Azeem Steel",
    description:
      "A specialized React application developed for a scrap metal and steel trading business. Features a highly polished UI/UX design, secure payment gateway integration for seamless transactions, dynamic routing, and an optimized component architecture for lightning-fast performance.",
    image: "/projects/azeem-steel.jpg",
    technologies: ["React.js", "UI/UX Design", "Payment Integration", "Tailwind CSS", "React Router"],
    liveLink: "https://azeem-scrap.vercel.app/",
  },

];

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-24 theme-section-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold theme-text">
              Featured Projects
            </h2>
          </div>
          <p className="theme-text-dimmed text-base max-w-md">
            A selection of projects I&apos;ve built — from concept to deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative theme-card rounded-2xl overflow-hidden"
            >
              {/* Top accent line — only visible on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Project Image */}
              <div className="relative w-full h-60 overflow-hidden" style={{ background: 'var(--bg-card-inner)' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent"></div>

                {/* Links Overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-black/80 transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-black/80 transition-all duration-300"
                      aria-label="Live Project"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                {/* Project number */}
                <span className="text-white/70 text-xs font-mono tracking-wider mb-3 block">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold theme-text mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="theme-text-dimmed text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 theme-card-inner text-[11px] font-medium rounded-md theme-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/nawafali01"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-3 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
          >
            <FaGithub className="w-4.5 h-4.5" />
            View All Projects on GitHub
            <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
