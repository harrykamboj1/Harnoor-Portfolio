import React from "react";
import { skills } from "../data/data";

/** Slow seamless horizontal marquee; pause on hover for readability */
const SkillRow = ({ items, rowId, reverse }) => (
  <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
    <div
      className={`flex w-max gap-6 pb-3 pt-1 animate-marquee [--duration:55s] motion-reduce:animate-none group-hover:[animation-play-state:paused] ${
        reverse ? "[animation-direction:reverse]" : ""
      }`}
    >
      {[...items, ...items].map((skill, index) => (
        <div
          key={`${rowId}-${skill.name}-${index}`}
          className="flex min-w-[100px] shrink-0 flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
        >
          <div className="h-10 w-10 p-2 text-zinc-200">
            {skill.icon ? <skill.icon className="h-full w-full" /> : null}
          </div>
          <span className="text-center text-xs font-medium text-zinc-400">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const allSkills = skills.reduce((acc, curr) => [...acc, ...curr.skills], []);

  const half = Math.ceil(allSkills.length / 2);
  const firstRow = allSkills.slice(0, half);
  const secondRow = allSkills.slice(half);

  return (
    <section id="Skills" className="py-20 overflow-hidden">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
          Skills
        </h2>
      </div>

      <div className="relative mx-auto flex w-full max-w-full flex-col gap-4">
        <SkillRow items={firstRow} rowId="a" reverse={false} />
        <SkillRow items={secondRow} rowId="b" reverse />
      </div>
    </section>
  );
};

export default Skills;
