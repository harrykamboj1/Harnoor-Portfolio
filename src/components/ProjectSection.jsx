import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/data";

const ProjectSection = () => {
  // Take only featured projects or first 4-6 to emulate a focused portfolio
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="py-20" id="Projects">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground mb-4">Featured Projects</h2>
        <p className="text-zinc-400">A collection of projects I've worked on.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/harrykamboj1?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="text-sm border-b border-zinc-600 pb-1 text-zinc-400 hover:text-white hover:border-white transition-all"
        >
          View all projects &rarr;
        </a>
      </div>
    </section>
  );
};

export default ProjectSection;
