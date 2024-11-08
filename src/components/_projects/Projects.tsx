import React from "react";
import { projectsData } from "@/constants/projects";
import Project from "./Project";
import BlurFade from "../magicui/blur-fade";

type Props = {};

const BLUR_FADE_DELAY = 0.04;


const Projects = (props: Props) => {
  return (
    <section
      id="projects"
      className={"font-poppins"}
    // className="mx-auto w-full py-6 sm:py-12 md:py-18 text-stone-900 dark:text-stone-50"
    >
      <div className="space-y-12 py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>

          <div className={"space-y-2"}>
            <span className="text-xl lg:text-2xl font-bold">My Projects</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of projects, from simple
              websites to complex web applications. Here are a few of my
              favorites.
            </p>
          </div>
        </BlurFade>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
          {projectsData.map((project, index) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + index * 0.05}
            >
              <Project key={index} project={project} />
            </BlurFade>))}
        </div>
      </div>

    </section>
  );
};

export default Projects;
