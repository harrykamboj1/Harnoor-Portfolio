import React from "react";
import { SkillCard } from "./SkillCard";
import { skills } from "../data/data";

const Skills = () => {
  return (
    <section id="Skills" className="mt-5 ">
      <div className="flex justify-center items-center">
        <h1 className="text-lightGreen text-5xl font-sans font-bold cursor-pointer transition-all ease-out delay-75 duration-75 hover:scale-110">
          Skills
        </h1>
      </div>

      <div className="mt-10 flex md:flex-row flex-col md:justify-center sm:items-center">
        <div className="p-5">
          <SkillCard
            color="customDarkPurple"
            skill={skills[0]}
            className={` bg-darkBlue h-full lg:h-96  w-full   rounded-lg border-r-8 border-b-8 border-r-customDarkPurple border-b-customDarkPurple   border-l-2 border-t-2 border-l-customDarkPurple  border-t-customDarkPurple`}
          />
        </div>

        <div className="p-5">
          <SkillCard
            color="yellow"
            skill={skills[1]}
            className={` bg-darkBlue h-full lg:h-96  w-full   rounded-lg border-r-8 border-b-8 border-r-yellow border-b-yellow   border-l-2 border-t-2 border-l-yellow  border-t-yellow`}
          />
        </div>
      </div>
      <div className="mt-10 flex md:flex-row flex-col md:justify-center sm:items-center">
        <div className="p-5">
          <SkillCard
            color="fadeOrange"
            skill={skills[2]}
            className={` bg-darkBlue h-full lg:h-96  w-full   rounded-lg border-r-8 border-b-8 border-r-fadeOrange border-b-fadeOrange   border-l-2 border-t-2 border-l-fadeOrange  border-t-fadeOrange`}
          />
        </div>

        <div className="p-5">
          <SkillCard
            color="skyblue"
            skill={skills[3]}
            className={` bg-darkBlue h-full lg:h-96  w-full   rounded-lg border-r-8 border-b-8 border-r-skyblue border-b-skyblue   border-l-2 border-t-2 border-l-skyblue  border-t-skyblue`}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
