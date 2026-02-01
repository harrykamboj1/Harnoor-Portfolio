import React from "react";
import { Github, ExternalLink } from "lucide-react";

export const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project?.image}
          alt={project?.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-foreground">{project?.title}</h3>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={project.webapp}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <p className="mb-4 text-sm text-zinc-400 line-clamp-3">
          {project?.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-zinc-200"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
