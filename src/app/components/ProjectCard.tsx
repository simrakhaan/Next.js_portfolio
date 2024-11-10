import React from 'react';
import Image from 'next/image';
import { CodeBracketIcon,EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl:string;
   previewUrl: string; 
};

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 border-4 border-transparent bg-clip-padding hover:border-pink-500 hover:border-opacity-70 hover:bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600">
      <div className="h-52 md:h-72 relative group ">
        <Image 
          src={imgUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className='overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          <Link href={ gitUrl} className='h-14 w-14 mr-2 border-2  relative rounded-full border-[ADB7BE] hover:border-white group/link'>
          <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-[]: hover/link:text-white'/>
          </Link>
          <Link href={previewUrl} className='h-14 w-14  border-2  relative rounded-full border-[ADB7BE] hover:border-white group/link'>
          <  EyeIcon className='h-10 w-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-[]: hover/link:text-white'/>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ABD7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
