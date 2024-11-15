import React from "react";

import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section id="about">
        <div className="container mx-auto py-4 px-4">
        <h2 className="lg:text-4xl md:text-4xl text-3xl font-bold text-center text-white"> <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-5xl md:text-5xl text-4xl">About Me</span></h2>
        
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-16">

        <Image
          src="/images/about-image.png"
          alt="About Section Image"
          width={500}
          height={500}
          className="transition-shadow duration-300 ease-in hover:shadow-[0_0_8px_6px_rgba(182,27,79)] rounded"
        />
        <div className="mt-4 md:mt-0 text-left flex-col h-full">

          <div className="sm:text-center w-full border-4 rounded-md px-2 py-2 border-double border-purple-600 mb-8 mt-8 transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(170,81,197)] hover:scale-105">
         <div className="sm:text-center w-full border-4 rounded-md px-2 py-2 border-pink-600">
        <p className="lg:text-[1rem] text-base mb-6  block bg-[#121212] pt-4 text-white">
            I am Simra Khan, a passionate front-end  developer with a
            strong foundation in TypeScript, JavaScript, HTML, CSS, React.js, Next.js and Node.js.
            <br /> </p>
        </div>
        </div>

        <div className=" sm:text-center w-full border-4 rounded-md px-2 py-2 border-double border-purple-600 mb-8 mt-8 transition-transform duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(170,81,197)] hover:scale-105">
         <div className="sm:text-center w-full border-4 rounded-md px-2 py-2 border-pink-600">
            <p className="lg:text-[1rem] text-base mb-6  block bg-[#121212] pt-4 text-white">
            I completed my matriculation at shaukat memorial public school,
            . <br /> Later, I
            complete my  intermediate in medical science at  Allama Iqbal Government Girls College ,
           Karachi. Currently i pursue a bs Degree (bachelors in arts and social sciences), from Karachi University.
             <br />
            </p>
            </div>
            </div>

            <div className="text-center w-full border-4 rounded-md px-2 py-2 border-double border-purple-600 mb-8 mt-8 transition-transform duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(170,81,197)] hover:scale-105">
            <div className="w-full border-4 rounded-md px-2 py-2 border-pink-600">
            <p className="lg:text-[1rem] text-base mb-6 block bg-[#121212] pt-4 text-white">
            I thrive on new challenges and love working on innovative projects.
            My hobbies include exploring new technologies, playing logical games, and teaching others. I find great joy in motivating people and helping them learn new skills with a strong dedication to learning and growth, I am always eager to expand my knowledge and tackle new projects. My enthusiasm for
            web development and passion for technology drives me to continuously
            improve and take on exciting challenges.
            </p>
            </div>
            </div>
            </div>  
      </div>
      </div>
    </section>
  );
};

export default AboutSection;