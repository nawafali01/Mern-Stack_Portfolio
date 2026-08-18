import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechStackSection from "./components/TechStackSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import WebServicesSection from "./components/WebServicesSection";
import WorkProcessSection from "./components/WorkProcessSection";
import GetInTouchSection from "./components/GetInTouchSection";
import FooterSection from "./components/FooterSection";
import FloatingContact from "./components/FloatingContact";
import ChatWidget from "./components/chat/ChatWidget";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <TechStackSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <WebServicesSection />
      <WorkProcessSection />
      {/* Skills Scroll Bar */}
      <div className="absolute bottom-0 w-full"></div>
      <GetInTouchSection />
      <FooterSection />
      
      {/* Original Floating Social & Contact Actions */}
      <FloatingContact />

      {/* Floating Real-Time Interactive AI Chat Widget */}
      <ChatWidget />
    </div>
  );
}
