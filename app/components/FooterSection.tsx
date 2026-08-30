"use client";

import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/nawafali/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      url: "https://github.com/nawafali01",
      label: "GitHub",
    },
    {
      icon: FaWhatsapp,
      url: "https://wa.me/923153181236",
      label: "WhatsApp",
    },
    {
      icon: FaEnvelope,
      url: "mailto:nawafali.dev@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="w-full theme-section-1 border-t border-b-card transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-b-card">
          {/* Brand & Status */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <a href="#home" className="text-2xl font-bold text-t-primary hover:text-blue-600 transition-colors">
              Nawaf Ali
            </a>
            <p className="text-sm text-t-secondary">
              Full-Stack Developer • Building scalable web apps & products
            </p>
            <div className="inline-flex items-center gap-2 mt-1 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for new opportunities</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-t-secondary hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="w-9 h-9 rounded-xl bg-c-bg border border-b-card hover:border-blue-600 text-t-secondary hover:text-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-t-secondary hover:text-blue-600 bg-c-bg border border-b-card hover:border-blue-600 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <FaArrowUp className="w-3 h-3" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-t-muted">
          <p>© {currentYear} Nawaf Ali. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-blue-500 font-medium">Next.js</span>, <span className="text-cyan-500 font-medium">Tailwind CSS</span> & <span className="text-purple-500 font-medium">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
