import React from "react";
import { Bio } from "../data/data";
import { SkillBlock } from "./SkillCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="mt-5 h-full">
      <div className="flex justify-center items-center">
        <h1 className="text-lightGreen text-5xl font-sans font-bold cursor-pointer transition-all ease-out delay-75 duration-75 hover:scale-110">
          Skills
        </h1>
      </div>

      <div className="mt-10 h-screen w-full">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid h-screen w-full   grid-flow-dense grid-cols-1 md:grid-cols-2 gap-10"
        >
          <SkillBlock />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
