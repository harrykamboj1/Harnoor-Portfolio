import React from "react";
import { SkillCard } from "./SkillCard";
import { skills } from "../data/data";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      id="Skills"
      className="mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex justify-center items-center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-lightGreen text-5xl font-sans font-bold cursor-pointer transition-all ease-out delay-75 duration-75 hover:scale-110">
          Skills
        </h1>
      </motion.div>

      <div className="mt-10 flex md:flex-row flex-col md:justify-center sm:items-center">
        <motion.div
          className="p-5"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SkillCard
            color="customDarkPurple"
            skill={skills[0]}
            className={` bg-darkBlue h-full lg:h-96  w-full   rounded-lg border-r-8 border-b-8 border-r-customDarkPurple border-b-customDarkPurple   border-l-2 border-t-2 border-l-customDarkPurple  border-t-customDarkPurple`}
          />
        </motion.div>

        <motion.div
          className="p-5"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SkillCard
            color="yellow"
            skill={skills[1]}
            className={` bg-darkBlue h-full lg:h-96  w-full   rounded-lg border-r-8 border-b-8 border-r-yellow border-b-yellow   border-l-2 border-t-2 border-l-yellow  border-t-yellow`}
          />
        </motion.div>
      </div>
      <div className="mt-10 flex md:flex-row flex-col md:justify-center sm:items-center">
        <motion.div
          className="p-5"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SkillCard
            color="fadeOrange"
            skill={skills[2]}
            className={` bg-darkBlue h-full lg:h-96  w-full   rounded-lg border-r-8 border-b-8 border-r-fadeOrange border-b-fadeOrange   border-l-2 border-t-2 border-l-fadeOrange  border-t-fadeOrange`}
          />
        </motion.div>

        <motion.div
          className="p-5"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <SkillCard
            color="skyblue"
            skill={skills[3]}
            className={` bg-darkBlue h-full lg:h-96  w-full   rounded-lg border-r-8 border-b-8 border-r-skyblue border-b-skyblue   border-l-2 border-t-2 border-l-skyblue  border-t-skyblue`}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
