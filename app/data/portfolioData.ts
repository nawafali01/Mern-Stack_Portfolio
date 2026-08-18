export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: string; icon?: string }[];
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  experienceYears: number;
  bio: string;
  about: string;
  email: string;
  phone: string;
  socials: {
    github: string;
    linkedin: string;
    whatsapp: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  quickPrompts: string[];
  faqs: { question: string; answer: string; keywords: string[] }[];
}

export const portfolioData: PortfolioData = {
  name: "Nawaf Ali",
  role: "Full-Stack Developer",
  location: "Lahore, Pakistan",
  experienceYears: 1,
  bio: "I build scalable web applications and high-converting websites that help businesses grow and succeed online.",
  about: "Passionate Full-Stack Developer with hands-on expertise in React, Next.js, Node.js, TypeScript, PostgreSQL, and modern web architectures. Dedicated to crafting intuitive user experiences with high-performance backends.",
  email: "contact@nawafali.dev",
  phone: "+92 315 3181236",
  socials: {
    github: "https://github.com/nawafali01",
    linkedin: "https://www.linkedin.com/in/nawafali/",
    whatsapp: "https://wa.me/923153181236",
  },
  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React / React 19", level: "Expert" },
        { name: "Next.js (App Router)", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Framer Motion", level: "Intermediate" },
        { name: "HTML5 / CSS3 / JavaScript", level: "Expert" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "Next.js Server Actions / API Routes", level: "Advanced" },
      ],
    },
    {
      category: "Database & ORM",
      skills: [
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Prisma ORM", level: "Intermediate" },
      ],
    },
    {
      category: "Tools & Workflow",
      skills: [
        { name: "Git / GitHub", level: "Advanced" },
        { name: "Docker", level: "Basics" },
        { name: "Vercel / Netlify", level: "Advanced" },
        { name: "WordPress", level: "Advanced" },
        { name: "Figma to Code", level: "Expert" },
      ],
    },
  ],
  projects: [
    {
      id: "ai-saas",
      title: "AI Portfolio & SaaS Platform",
      description: "A modern full-stack web application featuring interactive AI chat widgets, state management, and responsive glassmorphism UI.",
      category: "Full Stack",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion"],
      liveUrl: "https://nawafali.dev",
      githubUrl: "https://github.com/nawafali01",
      featured: true,
    },
    {
      id: "ecommerce-store",
      title: "High-Converting E-Commerce Hub",
      description: "Scalable e-commerce store with automated checkout, product filtering, PostgreSQL backend, and dynamic cart states.",
      category: "Web Application",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://github.com/nawafali01",
      githubUrl: "https://github.com/nawafali01",
      featured: true,
    },
    {
      id: "corporate-cms",
      title: "Enterprise Custom CMS & Landing Pages",
      description: "Ultra-fast headless CMS and marketing websites optimized for Core Web Vitals and high lead conversion rates.",
      category: "CMS & Frontend",
      tags: ["Next.js", "WordPress REST API", "Tailwind CSS"],
      liveUrl: "https://github.com/nawafali01",
      githubUrl: "https://github.com/nawafali01",
      featured: true,
    },
  ],
  quickPrompts: [
    "What are your top projects?",
    "What tech stack do you use?",
    "Are you available for freelance work?",
    "How can I contact or hire you?",
  ],
  faqs: [
    {
      question: "What is your primary tech stack?",
      answer: "I specialize in modern JavaScript/TypeScript ecosystems: Next.js (App Router), React, Tailwind CSS, Node.js, Express, and PostgreSQL.",
      keywords: ["stack", "technology", "technologies", "tech", "react", "next", "tools", "skills", "frontend", "backend"],
    },
    {
      question: "Are you available for freelance or full-time opportunities?",
      answer: "Yes, I am currently available for select freelance projects, contract work, and full-time full-stack developer roles. Feel free to leave a direct message right here in the chat or email me!",
      keywords: ["hire", "freelance", "available", "job", "work", "contract", "full-time", "opportunity", "rates", "pricing"],
    },
    {
      question: "What projects have you worked on?",
      answer: "I've built interactive SaaS platforms, AI-integrated web applications, fast headless CMS sites, and high-converting e-commerce web applications. Check out the 'Projects' section above or ask me about a specific project!",
      keywords: ["project", "projects", "portfolio", "work", "showcase", "built", "examples"],
    },
    {
      question: "Where are you located?",
      answer: "I am based in Lahore, Pakistan, and work effectively with clients and teams worldwide across multiple time zones.",
      keywords: ["location", "located", "country", "city", "where", "timezone", "lahore", "pakistan"],
    },
    {
      question: "How can I contact you directly?",
      answer: "You can reach me via the 'Direct Message' tab in this widget, email at contact@nawafali.dev, WhatsApp at +92 315 3181236, or connect on LinkedIn at https://www.linkedin.com/in/nawafali/.",
      keywords: ["contact", "email", "phone", "whatsapp", "linkedin", "message", "reach", "call"],
    },
  ],
};
