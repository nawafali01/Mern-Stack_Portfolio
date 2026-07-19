"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
  const contactLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/nawaf-ali-43a141284",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: FaGithub,
      url: "https://github.com/nawafali01",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: FaWhatsapp,
      url: "https://wa.me/923144664098",
      label: "WhatsApp",
      color: "hover:text-green-500",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* Contact Box */}
      <div className="theme-card rounded-2xl p-4 theme-float-shadow">
        <div className="flex flex-col gap-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`w-10 h-10 rounded-xl theme-card-inner theme-text-muted ${link.color} flex items-center justify-center transition-all duration-300 hover:scale-110`}
                title={link.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="bg-gradient-to-r from-[#902CB8] to-[#a83ec4] rounded-full p-3 shadow-lg hover:shadow-xl hover:shadow-[#902CB8]/30 transition-all duration-300 cursor-pointer flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
}
