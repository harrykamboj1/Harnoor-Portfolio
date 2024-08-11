import { GitHub } from "@mui/icons-material";
import React, { useState } from "react";
import { Bio } from "../data/data";
import { Menu } from "lucide-react";

const navItemClass = `text-customDarkPurple hover:scale-105 duration-60 font-medium cursor-pointer no-underline transition-all ease-in-out  hover:text-[#8f64c3] `;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-20  flex items-center md:justify-evenly justify-between text-xl static top-0 z-10">
      <div className="text-customDarkPurple text-2xl hover:scale-105 duration-60 font-semibold transition-all ease-in-out hover:text-[#8f64c3] no-underline py-1 pl-10">
        <a href="/">Portfolio</a>
      </div>

      <div className="h-full  items-center pr-6 md:hidden flex">
        <Menu
          onClick={() => setIsOpen(!isOpen)}
          className="text-customDarkPurple"
        />
      </div>

      {isOpen && (
        <ul
          className={`w-full ${isOpen ? "translate-y-0" : "-translate-y-25"} ${
            isOpen ? "opacity-100 " : "opacity-0"
          }${
            isOpen ? "z-1000" : "-z-1000"
          }  gap-[16px] flex justify-start transition-all rounded-[8px] shadow-2xl	 delay-75 ease-in-out  flex-col pt-3 pr-10 pb-6 pl-10 absolute top-[80px] right-0 bg-transparent	 bg-customDarkPurple  md:hidden  list-none `}
        >
          <a
            className={`text-[#201f2c] hover:scale-105 duration-60 font-medium cursor-pointer no-underline transition-all ease-in-out  hover:text-[#0c0c11] hover:font-semibold`}
            href="#About"
          >
            About
          </a>
          <a
            className={`text-[#201f2c] hover:scale-105 duration-60 font-medium cursor-pointer no-underline transition-all ease-in-out  hover:text-[#0c0c11] hover:font-semibold`}
            href="#Skills"
          >
            Skills
          </a>
          <a
            className={`text-[#201f2c] hover:scale-105 duration-60 font-medium cursor-pointer no-underline transition-all ease-in-out  hover:text-[#0c0c11] hover:font-semibold`}
            href="#Experience"
          >
            Experience
          </a>
          <a
            className={`text-[#201f2c] hover:scale-105 duration-60 font-medium cursor-pointer no-underline transition-all ease-in-out  hover:text-[#0c0c11] hover:font-semibold`}
            href="#Projects"
          >
            Projects
          </a>
          <a
            href={Bio.github}
            target="_blank"
            rel="noreferrer"
            className="text-customDarkPurple w-fit flex gap-1 rounded-[20px]	border-2	justify-center items-center transition-all ease-out delay-75 duration-75 bg-[#201f2c]		 cursor-pointer text-[16px] font-semibold no-underline py-2 px-5 hover:bg-[#201f2c] hover:text-[#ffffff] hover:border-r-customDarkPurple hover:scale-110"
          >
            <GitHub>Github</GitHub>
            <div>Github</div>
          </a>
        </ul>
      )}

      {/* LINKS */}
      <ul className="w-full  items-center justify-center gap-[34px] md:flex hidden   list-none">
        <a className={navItemClass} href="#About">
          About
        </a>
        <a className={navItemClass} href="#Skills">
          Skills
        </a>
        <a className={navItemClass} href="#Experience">
          Experience
        </a>
        <a className={navItemClass} href="#Projects">
          Projects
        </a>
      </ul>

      {/* SOCIAL LINKS */}
      <div className="h-full  items-center justify-center py-0 pr-6 md:flex hidden">
        <a
          href={Bio.github}
          target="_blank"
          rel="noreferrer"
          className="text-customDarkPurple flex gap-1 rounded-[20px]	border-2	justify-center items-center transition-all ease-out delay-75 duration-75		 cursor-pointer text-[16px] font-semibold no-underline py-2 px-5 hover:bg-[#8f64c3] hover:text-[#ffffff] hover:border-r-customDarkPurple hover:scale-110"
        >
          <GitHub>Github</GitHub>
          <div>Github</div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
