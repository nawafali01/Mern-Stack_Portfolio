"use client";

import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 z-50 w-full bg-nav-bg backdrop-blur-xl border-b border-b-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-t-primary">Nawaf Ali</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-t-secondary hover:text-[#902CB8] transition">
              Home
            </a>
            <a href="#" className="text-t-secondary hover:text-[#902CB8] transition">
              About
            </a>
            <a href="#" className="text-t-secondary hover:text-[#902CB8] transition">
              Services
            </a>
            <a href="#" className="text-t-secondary hover:text-[#902CB8] transition">
              Contact
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
                <FiMoon className="w-[18px] h-[18px] text-[#902CB8]" />
              )}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg bg-c-bg border border-b-card flex items-center justify-center cursor-pointer"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <FiSun className="w-4 h-4 text-amber-400" />
              ) : (
                <FiMoon className="w-4 h-4 text-[#902CB8]" />
              )}
            </button>

            <button className="inline-flex items-center justify-center p-2 text-t-primary">
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
