"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from "react-icons/fi";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-nav-bg backdrop-blur-xl border-b border-b-card transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-t-primary hover:text-blue-600 transition-colors">
              Nawaf Ali
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-t-secondary hover:text-blue-600 font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}

            {/* Download CV Button */}
            <a
              href="/Nawaf_ali_cv.pdf"
              download="Nawaf_Ali_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <FiDownload className="w-4 h-4" />
              <span>Download CV</span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-10 h-10 rounded-xl bg-c-bg border border-b-card hover:border-b-card-hover flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <FiSun className="w-[18px] h-[18px] text-amber-400" />
              ) : (
                <FiMoon className="w-[18px] h-[18px] text-blue-600" />
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/Nawaf_ali_cv.pdf"
              download="Nawaf_Ali_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
            >
              <FiDownload className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg bg-c-bg border border-b-card flex items-center justify-center cursor-pointer"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <FiSun className="w-4 h-4 text-amber-400" />
              ) : (
                <FiMoon className="w-4 h-4 text-blue-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-t-primary rounded-lg hover:bg-c-bg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-nav-bg border-b border-b-card backdrop-blur-xl px-4 pt-2 pb-4 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-t-secondary hover:text-blue-600 hover:bg-c-bg font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-b-card">
            <a
              href="/Nawaf_ali_cv.pdf"
              download="Nawaf_Ali_CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
            >
              <FiDownload className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
