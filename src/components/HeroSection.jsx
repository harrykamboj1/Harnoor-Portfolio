import React from "react";
import { Bio } from "../data/data";
import HeroHoverMotion from "./HeroHoverMotion";

const HeroSection = () => {
  return (
    <section className="mx-auto px-4 pt-20 max-w-[1050px]">
      <div className="flex flex-row py-6 px-3 md:px-0" id="About">
        <div className="flex w-full justify-between items-center mb-12 md:mb-24">
          <div>
            <h1 className="md:text-8xl text-6xl  font-bold text-skyblue hover:scale-105  transition-all ease-in-out duration-300 cursor-pointer">
              Harnoor
            </h1>
            <div className="flex flex-col gap-4 mt-5 md:px-3 ">
              <h3 className="font-jetbrain text-xl md:text-2xl hover:scale-105 font-bold  text-customDarkPurple transition-all ease-in-out duration-300 cursor-pointer">
                Freelancer.
              </h3>
              <h3 className="font-jetbrain text-xl md:text-2xl font-bold hover:scale-105 text-customDarkPurple transition-all ease-in-out duration-300 cursor-pointer">
                Full Stack Developer
              </h3>
            </div>
            <div className="flex gap-5 md:gap-8 pl-3  mt-6 md:mt-8 mb-6 md:mb-6">
              <a
                href={Bio.resume}
                target="_blank"
                rel="noreferrer"
                className="text-customDarkPurple flex gap-1 rounded-[20px]	border-2	justify-center items-center transition-all ease-out delay-75 duration-75		 cursor-pointer text-[16px] font-semibold no-underline py-3 px-4 hover:bg-[#8f64c3] hover:text-[#ffffff] hover:border-r-customDarkPurple hover:scale-110"
              >
                <div>Check Resume</div>
              </a>
            </div>
          </div>
        </div>
        <div className="relative cursor-pointer animate-float hidden md:block mr-8">
          <HeroHoverMotion />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
