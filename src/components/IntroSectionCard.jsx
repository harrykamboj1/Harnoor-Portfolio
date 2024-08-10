import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { Bio } from "../data/data";

export const RevealBento = () => {
  return (
    <div className="min-h-screen  px-5 py-12 ">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.55,
        }}
        className="mx-auto grid max-w-5xl  grid-cols-12 gap-5"
      >
        <AboutBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg  hover:cursor-pointer border-2  shadow-lg border-customDarkPurple  p-6",
        className
      )}
      {...rest}
    />
  );
};

const AboutBlock = () => (
  <Block className="col-span-12 text-xl leading-snug ">
    <p className="text-lightBlue font-sans">
      Hey, I am a {calculateAge("2001-03-03")}-year-old Full-Stack Developer and
      Freelancer based in India.{" "}
      <span className="text-customDarkPurple font-sans ">
        Currently, I'm working as a Software Developer at a Fintech startup,
        where I leverage my skills to build impactful projects. I enjoy building
        various projects and solving problems with code.
      </span>
    </p>
    <div className="flex text-shadowOrange items-center justify-center pt-4 gap-4 h-10 text-2xl cursor-pointer transition-all ease-out delay-75 duration-75">
      <a href={Bio.twitter} target="_blank" rel="noreferrer">
        <BsTwitterX className="hover:scale-110 hover:text-[#fea390]" />
      </a>
      <a href={Bio.linkedin} target="_blank" rel="noreferrer">
        <BsLinkedin className="hover:scale-110 hover:text-[#fea390]" />
      </a>
      <a href={Bio.github} target="_blank" rel="noreferrer">
        <BsGithub className="hover:scale-110 hover:text-[#fea390]" />
      </a>
    </div>
  </Block>
);

const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
};
