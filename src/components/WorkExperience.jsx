import React from "react";
import { experiences } from "../data/data";

const WorkExperience = () => {
  return (
    <section id="Experience" className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground mb-4">Work Experience</h2>
        <p className="text-zinc-400">My professional journey.</p>
      </div>

      <div className="flex flex-col gap-6 max-w-2xl">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 group">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full border border-white/10 bg-white/5 p-2 overflow-hidden flex items-center justify-center">
                <img src={exp.img} alt={exp.company} className="h-full w-full object-contain rounded-full" />
              </div>
              <div className="flex-1 w-[1px] bg-white/10 my-2 group-last:hidden"></div>
            </div>

            <div className="pb-8 group-last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                <span className="text-xs text-zinc-500 font-mono">{exp.date}</span>
              </div>
              <div className="text-sm font-medium text-zinc-400 mb-2">{exp.company}</div>
              <p className="text-sm text-zinc-300 leading-relaxed text-balance whitespace-pre-line">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
