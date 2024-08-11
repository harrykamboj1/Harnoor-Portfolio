import React from "react";
import { Bio } from "../data/data";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <>
      <section className="mx-auto px-4 py-20 max-w-[1050px] h-full">
        <hr className="text-skyblue" />

        <div className="flex justify-between">
          <div className="flex text-shadowOrange  pt-4 gap-4 h-10 text-2xl cursor-pointer transition-all ease-out delay-75 duration-75">
            <a href={Bio.twitter} target="_blank" rel="noreferrer">
              <BsTwitterX className="hover:scale-110 hover:text-[#fea390]" />
            </a>
            <a href={Bio.linkedin} target="_blank" rel="noreferrer">
              <BsLinkedin className="hover:scale-110 hover:text-[#fea390]" />
            </a>
            <a href={Bio.github} target="_blank" rel="noreferrer">
              <BsGithub className="hover:scale-110 hover:text-[#fea390]" />
            </a>
            <a href={Bio.leetCode} target="_blank" rel="noreferrer">
              <SiLeetcode className="hover:scale-110 hover:text-[#fea390]" />
            </a>
          </div>
          <div className="flex pt-4 text-shadowOrange">
            <h1 className="px-1">Made with</h1>
            <Heart />
            <h1 className="px-1">Harnoor</h1>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center text-yellow mb-2">
        <h1>{`© Copyright ${new Date().getFullYear()} Harnoor Singh. All Rights Reserved.`}</h1>
      </div>
    </>
  );
};

export default Footer;
