import React from "react";
import { skills } from "../data/data";

const Skills = () => {
  // Flatten all skills 
  const allSkills = skills.reduce((acc, curr) => [...acc, ...curr.skills], []);

  // Split into two rows
  const half = Math.ceil(allSkills.length / 2);
  const firstRow = allSkills.slice(0, half);
  const secondRow = allSkills.slice(half);

  return (
    <section id="Skills" className="py-20 overflow-hidden">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">Skills</h2>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden">
        {/* First Row (Left) */}
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex w-max gap-8 animate-marquee">
            {[...firstRow, ...firstRow].map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 min-w-[100px] hover:bg-white/10 transition-colors">
                <div className="h-10 w-10 p-2 text-zinc-200">
                  {/* Check if icon exists and is a function/component, otherwise fallback */}
                  {skill.icon ? <skill.icon className="h-full w-full" /> : null}
                </div>
                <span className="text-xs font-medium text-zinc-400">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row (Right) */}
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex w-max gap-8 animate-marquee-reverse" style={{ animationDirection: 'reverse' }}>
            {[...secondRow, ...secondRow].map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 min-w-[100px] hover:bg-white/10 transition-colors">
                <div className="h-10 w-10 p-2 text-zinc-200">
                  {skill.icon ? <skill.icon className="h-full w-full" /> : null}
                </div>
                <span className="text-xs font-medium text-zinc-400">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
