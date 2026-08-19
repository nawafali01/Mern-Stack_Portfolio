"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiZod,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiVercel,
  SiWordpress,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { TbApi, TbShieldLock, TbDatabase, TbLayersLinked } from "react-icons/tb";
import { Sparkles, Code2, Server, Database as LucideDb, Wrench } from "lucide-react";

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level?: string;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, fast, and interactive user interfaces",
    icon: Code2,
    skills: [
      { name: "React.js / React 19", icon: SiReact, level: "Expert" },
      { name: "Next.js (App Router)", icon: SiNextdotjs, level: "Advanced" },
      { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, level: "Expert" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert" },
      { name: "Redux Toolkit & Zustand", icon: SiRedux, level: "Advanced" },
      { name: "TanStack Query", icon: SiReactquery, level: "Advanced" },
      { name: "HTML5 & CSS3", icon: SiHtml5, level: "Expert" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Architecting secure, scalable backend services & REST endpoints",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: "Advanced" },
      { name: "Express.js", icon: SiExpress, level: "Advanced" },
      { name: "RESTful APIs", icon: TbApi, level: "Advanced" },
      { name: "Next.js Server Actions", icon: TbLayersLinked, level: "Advanced" },
      { name: "JWT Auth & RBAC", icon: TbShieldLock, level: "Advanced" },
      { name: "Zod Validation", icon: SiZod, level: "Advanced" },
    ],
  },
  {
    title: "Databases & ORM",
    description: "Structuring reliable schemas, relations, and data persistence",
    icon: LucideDb,
    skills: [
      { name: "MongoDB & Mongoose", icon: SiMongodb, level: "Advanced" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Intermediate" },
      { name: "Prisma ORM", icon: SiPrisma, level: "Intermediate" },
      { name: "SQL & Querying", icon: TbDatabase, level: "Intermediate" },
    ],
  },
  {
    title: "Tools, Platforms & Workflow",
    description: "Streamlined modern development and deployment environments",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", icon: SiGithub, level: "Advanced" },
      { name: "Vercel Deployment", icon: SiVercel, level: "Advanced" },
      { name: "Figma to Code", icon: SiFigma, level: "Expert" },
      { name: "Postman Testing", icon: SiPostman, level: "Advanced" },
      { name: "WordPress CMS", icon: SiWordpress, level: "Advanced" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full py-20 theme-section-1 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-card text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold theme-text mb-4">
            Skills & Expertise
          </h2>
          <p className="theme-text-muted text-base sm:text-lg max-w-2xl">
            Technologies and tools I use to build scalable, high-converting digital products.
          </p>
        </div>

        {/* Simple & Clean Category Layout */}
        <div className="space-y-10">
          {skillCategories.map((cat, idx) => {
            const CategoryIcon = cat.icon;
            return (
              <div
                key={cat.title}
                className="pt-6 first:pt-0 border-t border-[var(--border-card)] first:border-0"
              >
                {/* Category Title & Description */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600">
                      <CategoryIcon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-bold theme-text tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-xs theme-text-dimmed sm:text-right">
                    {cat.description}
                  </span>
                </div>

                {/* Aesthetic, Clean Skill Chips */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {cat.skills.map((skill) => {
                    const IconComp = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl theme-card hover:border-blue-600/50 hover:bg-blue-600/5 transition-all duration-200 cursor-default"
                      >
                        <IconComp className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm font-medium theme-text group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded theme-card-inner theme-text-dimmed font-medium">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
    </section>
  );
}
