import React from 'react';
import ProjectCard from './ProjectCard';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl:string;
  previewUrl:string;
};

const projectData: Project[] = [

  {
    id: 1,
    title: "Food Web",
    description: "This project is developed using React.js and JavaScript  ",
    image: "/images/projectimages/food web.png",
    tag: ["All", "WEB"],
    gitUrl:"https://github.com/simrakhaan/Food_App.git",
    previewUrl:"https://food-app-six-pi.vercel.app/",
  
  },
  
  {
    id: 2,
    title: "Animated Website",
    description: "This project is developed using HTML, CSS & JAVASCRIPT",
    image: "/images/projectimages/animated website piicture.jpeg",
    tag: ["All", "WEB"],
    gitUrl:"https://github.com/simrakhaan/Animated_website.git",
    previewUrl:"https://animated-website-sage.vercel.app/",
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "This project is developed using React.js and JavaScript with Tailwind CSS",
    image: "/images/projectimages/resturant.png",
    tag: ["All", "WEB"],
    gitUrl:"https://github.com/simrakhaan/Restaurant-website.git",
    previewUrl:"https://restaurant-website-sepia-tau.vercel.app/",
  },
  
  
  {
    id: 4,
    title: "Amazon Clone",
    description: "This project is developed using HTML & CSS",
    image: "/images/projectimages/amazonclone picture.jpg",
    tag: ["All", "WEB"],
    gitUrl:"https://github.com/simrakhaan/Amazon_clone.git",
    previewUrl:"https://amazon-clone-murex-mu.vercel.app/",
  },
  {
    id: 5,
    title: "Portfolio",
    description: "This project is developed using react and JavaScript",
    image: "/images/projectimages/portfolio.png",
    tag: ["All", "WEB"],
    gitUrl:"https://github.com/simrakhaan/react_portrfolio.git",
    previewUrl:"https://react-portrfolio.vercel.app/",
  },
  {
    id: 6,
    title: "Student Management",
    description: "This project is developed using TYPESCRIPT",
    image: "/images/projectimages/student management picture.png",
    tag: ["All", "WEB"],
    gitUrl:"https://github.com/simrakhaan/student-Managment.git",
    previewUrl:"/",
  },
  {
    id: 7,
    title: "Todo List",
    description: "This project is developed using TYPESCRIPT",
    image: "/images/projectimages/todolist picture.jpg",
    tag: ["All", "WEB"],
    gitUrl:"https://github.com/simrakhaan/todo_list.git",
    previewUrl:"/",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" >
      <h2 className="text-center text-4xl font-bold text-white mt-4"><span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-5xl md:text-5xl text-4xl">My Projects</span></h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            
          />
        ))}
      </div>
    </section>
   
  );
};

export default ProjectsSection;
