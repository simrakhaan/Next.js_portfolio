import React from "react";
import SkillsBar from "./Skillsbar";
import ImageSlider from "./ImageSlider";

const SkillsSection: React.FC = () => {
  return (
    <section id="skill">
      <div className="container mx-auto py-4 px-4">
        <h2 className="lg:text-4xl md:text-4xl text-3xl  font-bold text-center mb-12 text-white">
          {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-5xl md:text-5xl text-4xl">
            My Skills
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="shadow-[0_0_8px_6px_rgb(39,210,216)] flex items-center justify-center mb-6 rounded-lg p-2">
            <ImageSlider />
          </div>
          <div className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(204,45,143)] hover:scale-105 border-4 border-double border-pink-500">
            <SkillsBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;