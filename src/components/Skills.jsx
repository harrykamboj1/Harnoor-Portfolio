import React from "react";
import { SkillBlock } from "./SkillCard";
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
          <SkillBlock color="customDarkPurple" skill={skills[0]} />
        </div>

        <div className="p-5">
          <SkillBlock color="yellow" skill={skills[1]} />
        </div>
      </div>
      <div className="mt-10 flex md:flex-row flex-col md:justify-center sm:items-center">
        <div className="p-5">
          <SkillBlock color="fadeOrange" skill={skills[2]} />
        </div>

        <div className="p-5">
          <SkillBlock color="skyblue" skill={skills[3]} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
