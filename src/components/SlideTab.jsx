import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Tabs = ({ handleTabClick }) => {
  return <SlideTabs onTabClick={handleTabClick} />;
};

const SlideTabs = ({ onTabClick }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-customDarkPurple bg-darkBlue p-1"
    >
      <div onClick={() => onTabClick("All")}>
        <Tab setPosition={setPosition}>All</Tab>
      </div>
      <div onClick={() => onTabClick("Frontend")}>
        <Tab setPosition={setPosition}>Frontend</Tab>
      </div>
      <div onClick={() => onTabClick("Backend")}>
        <Tab setPosition={setPosition}>Backend</Tab>
      </div>
      <div onClick={() => onTabClick("FullStack")}>
        <Tab setPosition={setPosition}>Full-Stack</Tab>
      </div>
      <div onClick={() => onTabClick("DSA")}>
        <Tab setPosition={setPosition}>Data Structures & Algo</Tab>
      </div>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-lightGray mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      className="absolute z-0 h-7 rounded-full bg-skyblue md:h-12"
    />
  );
};
