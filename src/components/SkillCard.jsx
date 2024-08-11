import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const SkillCard = ({ color, skill, className }) => (
  <div>
    <Block
      whileHover={{
        rotate: "0.4deg",
        scale: 1.03,
      }}
      className={className}
    >
      <div>
        <h1
          className={`flex justify-center items-center p-3 text-2xl text-${color} `}
        >
          {skill?.title}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:p-4 p-3">
          {skill?.skills?.map((skill, index) => (
            <div key={index} className="p-2">
              <button
                className={`text-${color}  flex gap-1 rounded-[10px] shadow-md w-32	border	justify-center items-center transition-all ease-out delay-75 duration-75		 cursor-pointer text-[16px] font-semibold no-underline py-3 px-4 `}
              >
                <img className="w-5 h-5" src={skill.image} alt="" />
                {skill.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Block>
  </div>
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
