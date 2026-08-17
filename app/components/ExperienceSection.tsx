"use client";

import { MdDateRange } from "react-icons/md";

interface ExperienceItem {
  id: number;
  dateRange: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  certificate?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    dateRange: "Nov 2025 - Dec 2025",
    title: "MERN Stack Developer Intern",
    company: "GeekyTheory",
    description:
      "During my internship at GeekyTheory, I gained hands-on experience in building full-stack web applications using the MERN stack. I worked on a variety of projects, including a social media platform and an e-commerce website. I also learned how to use RESTful APIs and how to deploy applications to the cloud.",
    skills: ["Node.js", "Express.js", "MongoDB", "SQL", "PostgreSQL", "REST APIs", "MERN Stack"],
  },
  {
    id: 2,
    dateRange: "Jan 2026 - Apr 2026",
    title: "MERN Stack Developer Intern",
    company: "IIFA Tech",
    description:
      "Built and enhanced full-stack web application features using React.js, Node.js, Express.js, and MongoDB. Developed reusable React.js components with Tailwind CSS, created and integrated RESTful APIs, designed MongoDB schemas, and implemented CRUD operations.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "RESTful APIs", "MERN Stack"],
  },
  {
    id: 3,
    dateRange: "Apr 2026 - Present",
    title: "MERN Stack Developer — Live Projects",
    company: "IIFA Tech",
    description:
      "Working on live production projects, developing and maintaining full-stack web applications using the MERN stack. Developing responsive and reusable UI components with React.js & Tailwind CSS, implementing RESTful APIs with Node.js/Express.js & MongoDB, and building authentication, authorization, and role-based access control.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "RESTful APIs", "JWT Auth", "RBAC", "MERN Stack"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full py-20 theme-section-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold theme-text mb-4">
            Experience
          </h2>
          <p className="theme-text-muted text-lg">
            1 Years of professional experience building web applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-blue-600/50 to-transparent md:transform md:-translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-2.5 md:-translate-x-3 border-4 border-[var(--bg-primary)]"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  } md:w-1/2`}
                >
                  <div className="theme-card rounded-2xl p-6">
                    {/* Date */}
                    <div className="flex items-center gap-2 mb-3">
                      <MdDateRange className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        {exp.dateRange}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold theme-text mb-2">
                      {exp.title}
                    </h3>

                    {/* Company */}
                    <p className="text-blue-600 font-semibold mb-3">
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="theme-text-muted text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 theme-card-inner text-xs font-medium rounded-md theme-text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
