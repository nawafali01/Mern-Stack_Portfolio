"use client";

import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaImage } from "react-icons/fa";

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
    id: 101,
    title: "Dental Clinic Website",
    description:
      "A modern, responsive dental clinic website built with React and Tailwind CSS, powered by a Node.js and Express backend with Redux Toolkit for state management. Features smooth scroll animations, an interactive service showcase, and a clean, patient-friendly user experience.",
    image: "/projects/dental-clinic.jpg",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "Redux Toolkit"],
    liveLink: "https://dental-clinic-two-ashy.vercel.app/",
  },
  {
    id: 102,
    title: "Ivory",
    description:
      "A premium dental clinic web experience for Ivory, featuring elegant UI design, appointment booking flows, and a polished service catalog. Built with React, Tailwind CSS, Node.js, and Express, with Redux Toolkit managing client-side state.",
    image: "/projects/ivory.jpg",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "Redux Toolkit"],
    liveLink: "https://ivory-ecmj.vercel.app/",
  },
  {
    id: 103,
    title: "BuzzTube",
    description:
      "A full-stack social media platform combining video sharing, short-form posts (tweets), and real-time chat in one unified experience. Built with a modern MERN architecture, it features seamless video uploads, an engaging social feed, and instant messaging for a connected, all-in-one social experience.",
    image: "/projects/buzztube.jpg",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Vite"],
    liveLink: "https://buzz-tube-navy.vercel.app/",
  },
  {
    id: 104,
    title: "151 Coffee",
    description:
      "An interactive Webflow website focused on premium design and animations. Leveraged custom embedded code for advanced styling, optimized SEO, and improved page navigation for a seamless user experience.",
    image: "/projects/151-coffee.jpg",
    technologies: ["Webflow", "UI/UX Design", "Custom Code", "Animations", "SEO"],
    liveLink: "https://www.151coffee.com/",
  },
  {
    id: 105,
    title: "Desi Mirch Masala",
    description:
      "A robust MERN stack e-commerce store utilizing Redux Toolkit for state management. Features include secure payment integration, map integration for accurate delivery/location, comprehensive product management, advanced SEO optimization, and complete hosting/deployment.",
    image: "/projects/desi-mirch-masala.jpg",
    technologies: ["MERN Stack", "Redux Toolkit", "Payment Integration", "Map Integration", "Product Management", "SEO"],
    liveLink: "https://desimirchmasala.com/",
  },
  {
    id: 106,
    title: "Global News Portal",
    description:
      "A dynamic MERN stack news application delivering real-time articles across various categories. Built with React and Redux for seamless state management, featuring user authentication, an admin dashboard for content management, and robust data handling with Node.js and MongoDB.",
    image: "/projects/news-website.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT Auth", "REST API"],
    liveLink: "https://news-website-alpha-ten.vercel.app/",
  },
  {
    id: 107,
    title: "Azeem Steel",
    description:
      "A specialized React application developed for a scrap metal and steel trading business. Features a highly polished UI/UX design, secure payment gateway integration for seamless transactions, dynamic routing, and an optimized component architecture for lightning-fast performance.",
    image: "/projects/azeem-steel.jpg",
    technologies: ["React.js", "UI/UX Design", "Payment Integration", "Tailwind CSS", "React Router"],
    liveLink: "https://azeem-scrap.vercel.app/",
  },

];

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-blue-600/20 to-blue-900/10">
        <FaImage className="w-8 h-8 text-blue-600/40" />
        <span className="text-xs text-blue-600/50 font-medium px-4 text-center">Preview coming soon</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
      onError={() => setHasError(true)}
    />
  );
}

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
              key={`project-${project.id}`}
              className="group relative theme-card rounded-2xl overflow-hidden"
            >
              {/* Top accent line — only visible on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Project Image */}
              <div className="relative w-full h-60 overflow-hidden" style={{ background: 'var(--bg-card-inner)' }}>
                <ProjectImage src={project.image} alt={project.title} />
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
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={`${project.id}-${tech}-${techIndex}`}
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
