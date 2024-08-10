import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Bio, skills } from "../data/data";

export const SkillBlock = () => (
  <>
    <div>
      <Block
        whileHover={{
          rotate: "0.4deg",
          scale: 1.03,
        }}
        className=" bg-darkBlue md:h-80 h-90 w-98 max-w-98 mx-10 md:ml-20 rounded-lg border-r-8 border-b-8 border-r-customDarkPurple border-b-customDarkPurple  border-l-2 border-t-2 border-l-customDarkPurple border-t-customDarkPurple "
      >
        <h1 className="flex justify-center items-center p-3 text-2xl text-customDarkPurple">
          {skills[0].title}
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-3">
          {skills[0].skills.map((e) => (
            <div className="gap-3 p-3">
              <button className="text-customDarkPurple flex gap-1 rounded-[10px] shadow-md w-32	border	justify-center items-center transition-all ease-out delay-75 duration-75		 cursor-pointer text-[16px] font-semibold no-underline py-3 px-4 ">
                <img className="w-5 h-5" src={e.image} alt="" />
                {e.name}
              </button>
            </div>
          ))}
        </div>
      </Block>
    </div>
    <div>
      <Block
        whileHover={{
          rotate: "-0.4deg",
          scale: 1.03,
        }}
        className=" bg-darkBlue md:h-80 h-90 w-98 max-w-98 mx-10 md:mr-20 rounded-lg border-r-8 border-b-8 border-r-yellow border-b-yellow  border-l-2 border-t-2 border-l-yellow border-t-yellow"
      >
        <h1 className="flex justify-center items-center p-3 text-2xl text-yellow">
          {skills[1].title}
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-3">
          {skills[1].skills.map((e) => (
            <div className="gap-3 p-3">
              <button className="text-yellow flex gap-1 rounded-[10px] shadow-md w-32	border	justify-center items-center transition-all ease-out delay-75 duration-75		 cursor-pointer text-[16px] font-semibold no-underline py-3 px-4 ">
                <img className="w-5 h-5" src={e.image} alt="" />
                {e.name}
              </button>
            </div>
          ))}
        </div>
      </Block>
    </div>
    <div>
      <Block
        whileHover={{
          rotate: "-0.4deg",
          scale: 1.03,
        }}
        className=" bg-darkBlue md:h-80 h-[300px] w-98 max-w-98 mx-10 md:ml-20 rounded-lg border-r-8 border-b-8 border-r-fadeOrange border-b-fadeOrange  border-l-2 border-t-2 border-l-fadeOrange border-t-fadeOrange  "
      >
        <h1 className="flex justify-center items-center p-3 text-2xl text-fadeOrange">
          {skills[2].title}
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-3">
          {skills[2].skills.map((e) => (
            <div className="gap-3 p-3">
              <button className="text-fadeOrange flex gap-1 rounded-[10px] shadow-md w-32	border	justify-center items-center transition-all ease-out delay-75 duration-75		 cursor-pointer text-[16px] font-semibold no-underline py-3 px-4 ">
                <img className="w-5 h-5" src={e.image} alt="" />
                {e.name}
              </button>
            </div>
          ))}
        </div>
      </Block>
    </div>
    <div>
      <Block
        whileHover={{
          rotate: "0.4deg",
          scale: 1.03,
        }}
        className=" bg-darkBlue md:h-80 h-[300px] w-98 max-w-98 mx-10 md:mr-20 rounded-lg border-r-8 border-b-8 border-r-skyblue border-b-skyblue  border-l-2 border-t-2 border-l-skyblue border-t-skyblue "
      >
        <h1 className="flex justify-center items-center p-3 text-2xl text-skyblue">
          {skills[3].title}
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-3">
          {skills[3].skills.map((e) => (
            <div className="gap-3 p-3">
              <button className="text-skyblue flex gap-1 rounded-[10px] shadow-md w-32	border	justify-center items-center transition-all ease-out delay-75 duration-75		 cursor-pointer text-[16px] font-semibold no-underline py-3 px-4 ">
                <img className="w-5 h-5" src={e.image} alt="" />
                {e.name}
              </button>
            </div>
          ))}
        </div>
      </Block>
    </div>
  </>
);

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
      className={twMerge("", className)}
      {...rest}
    />
  );
};
