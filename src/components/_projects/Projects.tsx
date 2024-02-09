import React from "react";
import SectionDivider from "../global/SectionDivider";
import { projectsData } from "@/constants/projects";
import Project from "./Project";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section
      id="projects"
      className="container mx-auto w-full py-6 sm:py-12 md:py-18 text-stone-900 dark:text-stone-50"
    >
      <SectionDivider />
      <div>
        <h1 className="text-xl lg:text-2xl font-bold">Projects</h1>
      </div>
      <div className="grid grid-cols-3 space-x-2 gap-2">
            {projectsData.map((project, index) => (<Project key={index} project={project} className="max-w-sm" />))}
      </div>
    </section>
  );
};

export default Projects;
