
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen  mg:r{100px} flex-col bg-[#121212] ">

     <Navbar/>
      <div className="container mt-24 px-12 mx-auto">
        
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <ContactSection/>
      <Footer/>
      
      
      </div>
      </main>
  );
}
