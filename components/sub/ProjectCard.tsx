import Image from "next/image";
import React from "react";
import Languages from './language'
interface Props {
  src: string;
  title: string;
  description: string;
  technologies: string[]
}

const ProjectCard = ({ src, title, description, technologies }: Props) => {
  
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        {technologies.map((tech, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
          >
            {tech}
          </button>
        ))}

      </div>
      
    </div>
  );
};

export default ProjectCard;
