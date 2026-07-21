import { Code2, Smartphone, Cloud } from "lucide-react";

export default function AboutSection() {
  const services = [
    {
      icon: Code2,
      title: "Website Development",
      description: "Building responsive and modern websites",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Creating powerful mobile applications",
    },
    {
      icon: Cloud,
      title: "Website Hosting",
      description: "Reliable hosting solutions",
    },
  ];

  const stats = [
    {
      number: "20",
      symbol: "+",
      label: "Completed\nProjects",
    },
    {
      number: "95",
      symbol: "%",
      label: "Client\nsatisfaction",
    },
    {
      number: "2",
      symbol: "+",
      label: "Years of\nexperience",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-start theme-section-1">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Services Timeline */}
          <div className="flex gap-8">
            {/* Timeline Line */}
            <div className="relative flex flex-col items-center w-12">
              {/* Top line segment */}
              <div className="w-1 h-24 bg-gradient-to-b from-blue-600 to-blue-600"></div>

              {/* Timeline items with icons */}
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="flex flex-col items-center w-full">
                    {/* Circle with icon */}
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center border-4 border-[var(--bg-primary)] relative z-20 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Line segment after circle (except last) */}
                    {index < services.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-blue-600 to-blue-600"></div>
                    )}
                  </div>
                );
              })}

              {/* Bottom line segment */}
              <div className="w-1 h-24 bg-gradient-to-b from-blue-600 to-transparent"></div>
            </div>

            {/* Service Cards */}
            <div className="flex flex-col gap-12 pt-0">
              {services.map((service, index) => {
                return (
                  <div key={index} className="flex flex-col items-start justify-center h-24">
                    <h3 className="text-xl font-light theme-text">
                      {service.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - About and Stats */}
          <div>
            {/* About Heading */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold theme-text mb-6">
                About me
              </h2>
              <p className="text-lg theme-text-secondary leading-relaxed">
              My journey into software development began with a passion for creating meaningful digital experiences. Today, I specialize in building modern, high-performance web applications using the MERN stack — MongoDB, Express.js, React, and Node.js — along with Next.js and PostgreSQL for scalable, production-ready solutions. I enjoy turning complex ideas into simple, scalable, and user-friendly applications that help businesses grow, improve customer experience, and achieve their goals. Every project I build is driven by clean code, thoughtful architecture, and a commitment to delivering real business value.

              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-bold theme-text">
                      {stat.number}
                    </span>
                    <span className="text-3xl text-blue-600 font-bold ml-1">
                      {stat.symbol}
                    </span>
                  </div>
                  <p className="text-sm theme-text-muted whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
