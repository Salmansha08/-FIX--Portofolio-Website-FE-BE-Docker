import React from 'react';
import { Code, Eye } from '@phosphor-icons/react';
import Link from 'next/link';

function ProjectCard({ title, category, description, imgUrl, gitUrl, previewUrl }: { title: string; category: string[]; description: string; imgUrl: string; gitUrl: string; previewUrl: string }) {
  return (
    <div className="mb-2">
      <div className="h-32 rounded-t-xl relative group" style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }}>
        <div className="overlay items-center justify-center absolute w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 group-hover:rounded-t-lg transition-all duration-500 ">
          <Link href={gitUrl} className="h-10 w-10 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link">
            <Code size={24} className="w-7 h-7 text-[#adb7be] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
          <Link href={previewUrl} className="h-10 w-10 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link">
            <Eye size={24} className="w-7 h-7 text-[#adb7be] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
        </div>
      </div>
      <div className="px-4 py-2 text-white rounded-b-xl bg-[#181818]">
        <h5 className="text-xl font-semibold my-2">{title}</h5>
        <div className="flex space-x-2 my-2 text-sm font-semibold">
          {category.slice(1, 3).map((cat, index) => (
            <h6 key={index} className="text-black bg-gradient-to-br from-primary-500 to-secondary-500 py-1 px-3 rounded-2xl">
              {cat}
            </h6>
          ))}
        </div>
        <p className="text-sm py-2">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
