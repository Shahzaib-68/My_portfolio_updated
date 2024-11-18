import React from "react";
import { headerItems } from "@/constants/constant";
import Image from "next/image";
import photo from "@/app/my_img.jpg";
import { userInfo1 } from "@/constants/constant";

const About: React.FC = () => {
  return (
    <div>
      <section
        id={headerItems.about.page}
        className="h-screen flex md:flex-row flex-col justify-center items-center text-center mt-24 w-full md:text-start"
      >
        <div className="md:ml-20 sm:10 md:w-1/2">
          <h1 className="md:text-6xl font-bold text-3xl my-5 mt-20 md:mt-0">About</h1>
          <h2 className="text-3xl my-2">Get to know me!</h2>
          <p
            dangerouslySetInnerHTML={{ __html: userInfo1.about }}
            className="font-mono [&>p]:mt-2 text-[17px]"
          />
        </div>
        <div className="mt-20 flex flex-col justify-center items-center text-center">
          <Image
            src={photo}
            alt="this is my own picture"
            width={200}
            height={200}
            className="rounded-lg shadow-2xl m-auto"
          />
          <div className="mt-6 w-4/5 flex flex-wrap justify-center ">
            {userInfo1.skills.map((skill, index) => (
              <span
                className="bg-gray-500 m-2 p-2 text-neutral-200 font-bold font-mono text-[18px] rounded-md w-28"
                key={index}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* skills */}
      </section>
    </div>
  );
};

export default About;
