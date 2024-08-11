import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../data/data";
import ExperienceCard from "./ExperienceCard";

const WorkExperience = () => {
  return (
    <section id="Experience" className="mt-28 h-full">
      <div className="flex justify-center items-center">
        <h1 className="text-lightGreen text-5xl font-sans font-bold cursor-pointer transition-all ease-out delay-75 duration-75 hover:scale-110">
          Work Experience
        </h1>
      </div>

      <div className="mt-10">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default WorkExperience;
