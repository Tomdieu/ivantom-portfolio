import React from "react";
import { projectsData } from "@/constants/projects";
import Project from "./Project";
import BlurFade from "../magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const Projects = () => {
  return (
    <section id="projects" aria-label="Tomdieu Ivan's Projects" className="py-12">
      <div className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              Portfolio
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of{" "}
              <span className="text-foreground font-medium">{projectsData.length} projects</span>{" "}
              I&apos;ve built — from SaaS platforms and mobile apps to AI tools and open-source utilities.
            </p>
          </div>
        </BlurFade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {projectsData.map((project, index) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + index * 0.04}
              inView
            >
              <Project project={project} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
