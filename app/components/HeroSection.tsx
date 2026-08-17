import Image from "next/image";
import { SiReact, SiNodedotjs, SiNextdotjs, SiPostgresql, SiWordpress } from "react-icons/si";
import { Code2 } from "lucide-react";
import { MdLocationOn } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center lg:items-end justify-center theme-section-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0 pt-8 lg:pt-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:items-end w-full">
          {/* Left Content */}
          <div className="w-full lg:self-center">
            <div className="mb-4">
              <p className="text-xl theme-text font-light flex items-center gap-2">
                Hello <span className="w-3 h-3 rounded-full bg-blue-600"></span>
              </p>
            </div>

            <div className="mb-6 flex items-center gap-4">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-transparent"></div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light theme-text-secondary mb-2">
                I&apos;m Nawaf Ali
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold theme-text">
                Full-Stack Developer
              </h2>
            </div>
            <div className="mb-8">
              <p className="text-lg theme-text-secondary">
                I build scalable web applications and high-converting websites
                that help businesses grow and succeed online.
              </p>
            </div>

            <div className="mb-8 flex gap-8 items-center flex-wrap">
              <div className="flex items-center gap-2">
                <MdLocationOn className="w-5 h-5 text-blue-600" />
                <span className="theme-text-secondary">Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBriefcase className="w-5 h-5 text-blue-600" />
                <span className="theme-text-secondary">1 Years Experience</span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition whitespace-nowrap inline-block text-center cursor-pointer"
              >
                Got a project?
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-blue-600 theme-text rounded font-medium hover:bg-blue-600 hover:text-white transition whitespace-nowrap inline-block text-center cursor-pointer"
              >
                My projects
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center lg:justify-end items-end relative h-86 lg:h-[calc(100vh-64px)] lg:self-end">
            {/* Tech Icons Background */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <SiReact className="absolute top-10 left-10 w-20 h-20 opacity-20 text-blue-600 animate-pulse" />
              <Code2 className="absolute top-26 right-12 w-24 h-24 opacity-30 text-blue-600" />
              <SiNodedotjs className="absolute bottom-38 left-10 w-20 h-20 opacity-10 text-blue-600 animate-pulse" />
              <SiNextdotjs className="absolute top-4 right-28 w-20 h-20 opacity-15 text-blue-600" />
              <SiPostgresql className="absolute bottom-18 right-4 w-28 h-18 opacity-20 text-blue-600" />
              <SiWordpress className="absolute top-100 left-1/4 w-20 h-20 opacity-15 text-blue-600" />
            </div>

            {/* Profile Image */}
            <div className="relative w-full max-w-lg lg:max-w-xl z-10 h-[430px] sm:h-[490px] lg:h-[550px] overflow-hidden flex items-end justify-center">
              <Image
                src="/nawafali-hero.png"
                alt="Nawaf Ali"
                fill
                unoptimized
                className="object-cover object-[center_top] scale-135 lg:scale-145 origin-[center_top]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
