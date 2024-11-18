import React from "react";
import { headerItems } from "@/constants/constant";
import Image from "next/image";
import Traveling from "@/app/all project pic/Screenshot (6).png";
import Mobilestore from "@/app/all project pic/Screenshot (4).png";
import Myprofile from "@/app/all project pic/Screenshot (8).png";
import TODO from "@/app/all project pic/Screenshot (7).png";
import Rusume from "@/app/all project pic/Screenshot (5).png";
import blog from "@/app/all project pic/Screenshot (3).png";

const Projects: React.FC = () => {
  const mypic = [
    {
      name: "Traveling website",
      picture: Traveling,
    },
    {
      name: "Mobile store",
      picture: Mobilestore,
    },
    {
      name: "My profile",
      picture: Myprofile,
    },
    {
      name: "Todo List",
      picture: TODO,
    },
    {
      name: "Resume Builder",
      picture: Rusume,
    },
    {
      name: "My blog website",
      picture: blog,
    },
  ];

  return (
    <div
      id={headerItems.project.page}
      className="mt-44 md:mt-28  bg-gray-100 py-12"
    >
      <h1 className="text-center font-mono font-bold text-4xl md:text-6xl mb-10 text-gray-900">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0 w-full max-w-7xl mx-auto">
        {mypic.map((items, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              alt="this is my project picture"
              src={items.picture}
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h2 className="mt-3 font-mono font-bold text-2xl text-gray-800">
                {items.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
