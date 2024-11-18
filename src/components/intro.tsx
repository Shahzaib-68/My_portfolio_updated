"use client"
import React from "react"
import { headerItems } from "@/constants/constant"
import Image from "next/image"
import photo from "@/app/my_img.jpg"
import { userInfo1 } from "@/constants/constant"
import { Link as ScrollLing } from "react-scroll";



 const Intro: React.FC = () => {
   return (
    <div className="">
        <section id={headerItems.home.page}
        className="h-screen flex  md:flex-row flex-col justify-center items-center text-center mt-6 w-full md:text-start"
         >
         <div className="mt-40 md:mt-0">
         <Image 
          src={photo} 
          alt="this is my own picture"
          width={200}
          height={10}
          className="rounded-full shadow-2xl"
          />
         </div>
          <div className="md:ml-20 sm:10 md:w-1/2">
            <h1 className="uppercase md:text-6xl  font-bold text-3xl mt-6 ">Frontend Developer</h1>
            <h1 className="md:text-3xl text-2xl md:mt-5 mt-2"> Hi I&#39;m <span className="font-bold text-3xl text-blue-700 font-mono">Shahzaib Ali</span></h1>
             <p dangerouslySetInnerHTML={{__html:userInfo1.heading}}
             className="font-mono mt-4 text-[17px] text-left "
             />
             <ScrollLing
              className="bg-blue-600 w-32 h-9 flex items-center justify-center cursor-pointer text-neutral-100 rounded-lg mt-2 slide-in-element"
              to={headerItems.project.page}
              spy={false}
              smooth={false}
              >Project</ScrollLing>
          </div>
        </section>
    </div>
   )
}

export default Intro