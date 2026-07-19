"use client";

import { useState } from "react";
import {
  SiWebflow,
  SiWordpress,
  SiMongodb,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
} from "react-icons/si";
import {
  FaPaintBrush,
  FaShoppingCart,
  FaRocket,
  FaMobileAlt,
  FaSearch,
  FaCogs,
  FaPlug,
  FaPalette,
  FaArrowRight,
  FaCheckCircle,
  FaDatabase,
  FaShieldAlt,
  FaServer,
  FaCloud,
  FaLayerGroup,
  FaBolt,
  FaSyncAlt,
  FaRegLightbulb,
} from "react-icons/fa";

interface ServiceFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ServicePlatform {
  id: string;
  name: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  gradient: string;
  features: ServiceFeature[];
  stats: { label: string; value: string }[];
}

const platforms: ServicePlatform[] = [
  {
    id: "mern",
    name: "MERN Stack",
    icon: SiReact,
    tagline: "Full-Stack JavaScript Applications",
    description:
      "I build robust, scalable full-stack web applications using MongoDB, Express.js, React, and Node.js. From RESTful APIs to real-time dashboards and complex SPAs — I deliver production-ready apps that handle real business logic.",
    gradient: "from-[#00684A] to-[#13AA52]",
    features: [
      {
        icon: SiReact,
        title: "React Frontend",
        description: "Dynamic, component-driven UIs with Redux, Context API, and TanStack Query",
      },
      {
        icon: FaServer,
        title: "Node & Express API",
        description: "Scalable REST APIs with JWT authentication and middleware architecture",
      },
      {
        icon: FaDatabase,
        title: "MongoDB Database",
        description: "Schema design, indexing, aggregation pipelines, and Mongoose ODM",
      },
      {
        icon: FaShieldAlt,
        title: "Auth & Security",
        description: "JWT, bcrypt, role-based access control, and input validation with Zod",
      },
    ],
    stats: [
      { label: "Full-Stack Projects", value: "10+" },
      { label: "APIs Built", value: "20+" },
      { label: "Happy Clients", value: "15+" },
    ],
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: SiNextdotjs,
    tagline: "Modern Web Apps with Next.js",
    description:
      "I specialize in building high-performance, SEO-friendly web applications with Next.js — leveraging Server Components, App Router, API routes, and server-side rendering to create blazing-fast, production-grade applications.",
    gradient: "from-[#333333] to-[#666666]",
    features: [
      {
        icon: FaRocket,
        title: "SSR & SSG",
        description: "Server-side rendering and static generation for optimal SEO and speed",
      },
      {
        icon: FaLayerGroup,
        title: "App Router",
        description: "Modern file-based routing with layouts, loading, and error states",
      },
      {
        icon: FaCloud,
        title: "API Routes",
        description: "Built-in serverless API endpoints for backend functionality",
      },
      {
        icon: FaBolt,
        title: "Performance",
        description: "Image optimization, code splitting, and edge deployment ready",
      },
    ],
    stats: [
      { label: "Next.js Projects", value: "8+" },
      { label: "Lighthouse Score", value: "95+" },
      { label: "On-Time Delivery", value: "100%" },
    ],
  },
  {
    id: "vuejs",
    name: "Vue.js",
    icon: SiVuedotjs,
    tagline: "Progressive Vue.js Applications",
    description:
      "I develop clean, maintainable, and reactive frontend applications with Vue.js and the Composition API. From single-page applications to Nuxt.js powered full-stack solutions — I deliver elegant UIs with smooth user experiences.",
    gradient: "from-[#35495E] to-[#41B883]",
    features: [
      {
        icon: SiVuedotjs,
        title: "Composition API",
        description: "Modern Vue 3 with composables, reactive state, and script setup",
      },
      {
        icon: FaSyncAlt,
        title: "Pinia / Vuex",
        description: "Centralized state management for scalable application architecture",
      },
      {
        icon: FaRegLightbulb,
        title: "Nuxt.js",
        description: "Full-stack Vue apps with SSR, file routing, and auto-imports",
      },
      {
        icon: FaMobileAlt,
        title: "Responsive UI",
        description: "Pixel-perfect, responsive interfaces optimized for all devices",
      },
    ],
    stats: [
      { label: "Vue.js Projects", value: "5+" },
      { label: "Components Built", value: "100+" },
      { label: "Client Satisfaction", value: "100%" },
    ],
  },
  {
    id: "webflow",
    name: "Webflow",
    icon: SiWebflow,
    tagline: "Pixel-Perfect, No-Code Websites",
    description:
      "I design and develop stunning, responsive websites on Webflow — fully custom, visually polished, and optimized for performance. From landing pages to complex multi-page sites, I bring your vision to life with clean interactions and animations.",
    gradient: "from-[#4353FF] to-[#146EF5]",
    features: [
      {
        icon: FaPaintBrush,
        title: "Custom Design",
        description: "Unique, pixel-perfect layouts tailored to your brand identity",
      },
      {
        icon: FaRocket,
        title: "Animations & Interactions",
        description: "Smooth scroll-based animations and micro-interactions",
      },
      {
        icon: FaMobileAlt,
        title: "Fully Responsive",
        description: "Flawless experience across all devices and screen sizes",
      },
      {
        icon: FaSearch,
        title: "SEO Optimized",
        description: "Built with clean structure and SEO best practices",
      },
    ],
    stats: [
      { label: "Projects Delivered", value: "15+" },
      { label: "Client Satisfaction", value: "100%" },
      { label: "Avg. Delivery", value: "5 Days" },
    ],
  },
  {
    id: "wordpress",
    name: "WordPress",
    icon: SiWordpress,
    tagline: "Powerful, Scalable WordPress Solutions",
    description:
      "I build professional WordPress websites — from business sites and blogs to full-fledged e-commerce stores with WooCommerce. Custom themes, plugin development, speed optimization, and everything in between.",
    gradient: "from-[#21759B] to-[#0073AA]",
    features: [
      {
        icon: FaPalette,
        title: "Custom Themes",
        description: "Bespoke WordPress themes built from scratch or customized",
      },
      {
        icon: FaShoppingCart,
        title: "WooCommerce",
        description: "Complete e-commerce solutions with payment integration",
      },
      {
        icon: FaPlug,
        title: "Plugin Integration",
        description: "Custom plugin development and third-party integrations",
      },
      {
        icon: FaCogs,
        title: "Speed & Security",
        description: "Performance optimization and security hardening",
      },
    ],
    stats: [
      { label: "Projects Delivered", value: "20+" },
      { label: "E-Commerce Stores", value: "8+" },
      { label: "Happy Clients", value: "25+" },
    ],
  },
];

const sectionAnimation = `
  @keyframes float-service {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.5); }
  }

  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .float-animation {
    animation: float-service 6s ease-in-out infinite;
  }

  .pulse-dot {
    animation: pulse-dot 2s ease-in-out infinite;
  }

  .fade-in-up {
    animation: fade-in-up 0.4s ease both;
  }
`;

export default function WebServicesSection() {
  const [activePlatform, setActivePlatform] = useState<string>("mern");

  const active = platforms.find((p) => p.id === activePlatform) || platforms[0];
  const PlatformIcon = active.icon;

  return (
    <section
      id="web-services"
      className="relative w-full py-20 theme-section-1 overflow-hidden"
    >
      <style>{sectionAnimation}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-card mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full pulse-dot"></span>
            <span className="text-sm theme-text-muted font-medium">
              Available for Projects
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold theme-text mb-4">
            My Development Services
          </h2>
          <p className="theme-text-muted text-lg max-w-2xl mx-auto">
            From full-stack web apps and modern JavaScript frameworks to
            pixel-perfect no-code sites — I deliver end-to-end solutions
            tailored to your business goals.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center theme-card rounded-xl p-1.5 gap-2">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <button
                  key={platform.id}
                  onClick={() => setActivePlatform(platform.id)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer ${activePlatform === platform.id
                    ? `bg-gradient-to-r ${platform.gradient} text-white shadow-lg`
                    : "theme-text-muted hover:theme-text"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {platform.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Platform Content */}
        <div
          key={activePlatform}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up"
        >
          {/* Left - Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${active.gradient} flex items-center justify-center float-animation`}
              >
                <PlatformIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold theme-text">
                  {active.name}
                </h3>
                <p className="theme-text-muted text-sm">{active.tagline}</p>
              </div>
            </div>

            <p className="theme-text-secondary leading-relaxed mb-8">
              {active.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {active.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="theme-card rounded-xl p-4 text-center"
                >
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${active.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs theme-text-dimmed mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r ${active.gradient} text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105`}
            >
              Start a Project
              <FaArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {active.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group theme-card rounded-xl p-6"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${active.gradient} flex items-center justify-center mb-4`}
                  >
                    <FeatureIcon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="theme-text font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="theme-text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* What You Get Section */}
        <div className="mt-20 theme-card rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold theme-text mb-8 text-center">
            What You Get With Every Project
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Fully Responsive Design",
              "SEO Optimized Structure",
              "Fast Loading Speed",
              "Cross-Browser Compatibility",
              "Clean & Organized Code",
              "Free Revisions",
              "Post-Launch Support",
              "On-Time Delivery",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <FaCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="theme-text-secondary text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4353FF]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#13AA52]/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
