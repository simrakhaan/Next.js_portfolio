import React from 'react';
import { SkillBarProps } from '../../../type/componentsTypes';

const skillLevels: SkillBarProps[] = [
    { name: "TypeScript", level: "90"},
    { name: "JavaScript", level: "90"},
    { name: "Tailwind", level: "70"},
    { name: "Next.js", level: "70"},
    { name: "HTML", level: "90"},
    { name: "CSS", level: "90"},
    { name: "Nodejs", level: "90"},
];

export const Skillsbar: React.FC = () => {
  return (
    <div className='space-y-6 p-4 mb-4'> 
      {skillLevels.map((skill) =>(
        <div key={skill.name}>
          <div className='flex justify-between mb-1 items-center text-white font-semibold hover:text-pink-500'>
            <span className='text-sm font-medium'>{skill.name}</span>
            <span className='text-sm font-medium'>{skill.level}%</span>
          </div>
          <div className='w-full bg-white rounded-full h-2.5'>
            <div
              className='bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 h-2.5 rounded-full'
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skillsbar;
