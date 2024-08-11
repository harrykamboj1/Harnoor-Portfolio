import React from "react";

export const ProjectCard = ({ project }) => {
  return (
    <div
      className="w-full m-4 max-w-sm bg-darkBlue border border-customDarkPurple rounded-lg shadow-lg flex flex-col"
      style={{ boxShadow: "#c6a2f3 0px 1px 6px" }}
    >
      <img
        className="p-3 rounded-t-lg h-56 w-full object-cover"
        src={project?.image}
        alt="project"
      />

      <div className="px-5 pb-5 flex flex-col flex-grow">
        <div className="mb-2">
          {project.tags.map((tag, index) => (
            <button
              key={index}
              className="border gap-2 p-1 m-1 rounded-lg text-yellow text-xs"
            >
              {tag}
            </button>
          ))}
        </div>
        <h5 className="text-xl font-semibold tracking-tight text-fadeOrange">
          {project?.title}
        </h5>
        <h3 className="text-skyblue">{project?.date}</h3>
        <h5 className="text-lightGray text-wrap text-sm pt-1 text-left">
          {project?.description}
        </h5>
      </div>

      <div className="px-5 py-3 flex justify-between items-center">
        <a
          href={project.github}
          className="block text-md w-30  hover:text-[#d16d59] text-shadowOrange border border-shadowOrange rounded-lg p-2 text-center"
        >
          {project.category === "DSA" ? "LeetCode Link" : "Github Link"}
        </a>
        <a
          href={project.webapp}
          className="block text-md w-30  hover:text-[#d16d59] text-shadowOrange border border-shadowOrange rounded-lg p-2 text-center"
        >
          App. Link
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
