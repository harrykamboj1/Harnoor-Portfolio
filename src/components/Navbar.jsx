import { GitHub } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Bio } from "../data/data";
import { Menu } from "lucide-react";

const navItemClass = `text-customDarkPurple hover:scale-105 duration-60 font-medium cursor-pointer no-underline transition-all ease-in-out hover:text-[#8f64c3]`;
const menuNavItemClass = `text-darkBlue hover:scale-105 duration-60 font-medium cursor-pointer no-underline transition-all ease-in-out hover:text-[#8f64c3]`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <div
      className={`h-20 flex items-center justify-between text-xl top-0 z-10 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : ""
      } w-full`}
    >
      <div className="text-customDarkPurple text-2xl hover:scale-105 duration-60 font-semibold transition-all ease-in-out hover:text-[#8f64c3] no-underline py-1 pl-10">
        <a href="/">Portfolio</a>
      </div>

      {/* LINKS */}
      <div>
        <ul className="w-full items-center justify-center gap-[34px] sm:flex hidden list-none">
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
      </div>

      {/* SOCIAL LINKS */}
      <div className="h-full items-center justify-center py-0 pr-6 sm:flex hidden">
        <a
          href={Bio.github}
          target="_blank"
          rel="noreferrer"
          className="text-customDarkPurple flex gap-1 rounded-[20px] border-2 justify-center items-center transition-all ease-out delay-75 duration-75 cursor-pointer text-[16px] font-semibold no-underline py-2 px-5 hover:bg-[#8f64c3] hover:text-[#ffffff] hover:border-r-customDarkPurple hover:scale-110"
        >
          <GitHub>Github</GitHub>
          <div>Github</div>
        </a>
      </div>

      <div className="sm:hidden flex items-center justify-end pr-6">
        <Menu
          onClick={() => setIsOpen(!isOpen)}
          className="text-customDarkPurple"
        />
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } bg-customDarkPurple opacity-100 overflow-auto z-50 absolute top-20 right-0 left-0 mx-0 my-0 rounded-b-xl p-6 sidebar`}
        >
          <ul className="list-none flex flex-col justify-center items-center flex-1 w-full space-y-4">
            <a className={menuNavItemClass} href="#About">
              About
            </a>
            <a className={menuNavItemClass} href="#Skills">
              Skills
            </a>
            <a className={menuNavItemClass} href="#Experience">
              Experience
            </a>
            <a className={menuNavItemClass} href="#Projects">
              Projects
            </a>
            <a
              href={Bio.github}
              target="_blank"
              rel="noreferrer"
              className="text-customDarkPurple w-full flex gap-1 rounded-[20px] border-2 justify-center items-center transition-all ease-out delay-75 duration-75 bg-[#201f2c] cursor-pointer text-[16px] font-semibold no-underline py-2 px-5 hover:bg-[#201f2c] hover:text-[#ffffff] hover:border-r-customDarkPurple hover:scale-110"
            >
              <GitHub>Github</GitHub>
              <div>Github</div>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
