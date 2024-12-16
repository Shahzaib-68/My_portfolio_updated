"use client"
import { userinfo , headerItems } from "@/constants/constant";
import { navItems } from "@/models/header"; 
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";
import { Link as ScrollLing } from "react-scroll";
 


const Header: React.FC = () => {
  const [navMenu , shownavMenu] = useState<boolean>(false)
  return (
    <div className="font-mono">
      <header className="md:flex justify-between p-4 z-10 fixed top-0 w-full bg-slate-100 ">
        <div className="flex justify-between">
          <h2 className="md:text-4xl text-3xl font-mono font-extrabold">{userinfo.name}</h2>
         <button onClick={()=>shownavMenu (!navMenu)}> <TfiMenu  className="text-2xl md:hidden"/></button>
        </div>
        {/* ======================= userinfo  */}
        <div className = {`md:text-2xl text-[20px] mt-4 md:mt-0 mr-9 md:space-x-4 md:block ${navMenu ? "block" : "hidden"}`}>
          {Object.keys(headerItems).map((items)=>(
            <ScrollLing
            to={headerItems[items as keyof navItems].page}
            className="block md:inline-block"
            key={headerItems[items as keyof navItems].label}
             href="">{headerItems[items as keyof navItems].label}</ScrollLing>
           ))}

        </div>
        {/* headerItems */}
      </header>

    
    </div>
  );
};

export default Header;


