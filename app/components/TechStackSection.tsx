import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiJson,
  SiReactquery,
  SiZod,
  SiWebflow,
  SiWordpress,
} from "react-icons/si";

const scrollAnimation = `
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-66.666%);
    }
  }
  
  .scroll-container {
    animation: scroll-left 95s linear infinite;
  }
  
  .scroll-container:hover {
    animation-play-state: paused;
  }
`;

export default function TechStackSection() {
  const technologies = [
    { icon: SiReact, name: "React.js" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiExpress, name: "Express.js" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiRedux, name: "Redux Toolkit" },
    { icon: SiJson, name: "JWT Auth" },
    { icon: SiReactquery, name: "TanStack Query" },
    { icon: SiZod, name: "Zod" },
    { icon: SiWebflow, name: "Webflow" },
    { icon: SiWordpress, name: "WordPress" },
  ];

  // Triple array for seamless infinite scrolling loop
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section className="relative w-full pb-20 theme-section-1 overflow-hidden">
      <style>{scrollAnimation}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          <div className="scroll-container flex gap-6 w-fit">
            {duplicatedTechs.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 px-6 py-6 rounded-2xl theme-card transition-all duration-300 flex-shrink-0 w-50 h-26"
                >
                  <IconComponent className="w-10 h-10 text-blue-600" />
                  <span className="theme-text font-medium text-center text-sm whitespace-normal">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
