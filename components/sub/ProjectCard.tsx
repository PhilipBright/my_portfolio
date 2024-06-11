import Image from "next/image";
import React from "react";
import Languages from './language';

interface Props {
  src: string;
  title: string;
  description: string;
  technologies: string[];
  href: string;
}

const ProjectCard = ({ src, title, description, technologies, href }: Props) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={800}
          className="w-full object-contain"
        />
        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
          {technologies.map((tech, index) => (
            <button
              key={index}
              className="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-2 mr-2"
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
