import React, { useEffect, useState } from "react";
import { Tabs } from "./SlideTab";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/data";

const ProjectSection = () => {
  const [filterProject, setFilterProject] = useState([]);
  const [tabValue, setTabValue] = useState("");

  useEffect(() => {
    setFilterProject(projects);
  }, []);

  useEffect(() => {
    if (tabValue === "" || tabValue === "All") {
      setFilterProject(projects);
    } else {
      const filteredProjects = projects.filter(
        (project) => project.category === tabValue
      );
      setFilterProject(filteredProjects);
    }
  }, [tabValue]);

  const handleTabValue = (tabValue) => {
    setTabValue(tabValue);
  };

  return (
    <section className="mt-20" id="Projects">
      <div className="flex justify-center items-center">
        <h1 className="text-lightGreen text-5xl font-sans font-bold cursor-pointer transition-all ease-out delay-75 duration-75 hover:scale-110">
          Projects
        </h1>
      </div>

      <div className="mt-10 md:mt-14">
        <Tabs handleTabClick={handleTabValue} />

        <div className="flex justify-center pt-14 flex-wrap">
          {filterProject.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
