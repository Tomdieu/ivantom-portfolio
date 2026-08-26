"use client";

import React from "react";
import { projectsData, slugifyProject } from "@/constants/projects";
import Project from "./Project";
import BlurFade from "../magicui/blur-fade";
import { useI18n } from "@/locales/client";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

const Projects = () => {
  const t = useI18n();
  return (
    <section id="projects" aria-label="Tomdieu Ivan's Projects" className="py-12">
      <div className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              {t("projects.badge")}
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("projects.title")}
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {t("projects.description", { count: projectsData.length })}
            </p>
          </div>
        </BlurFade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {projectsData.map((project, index) => (
            <BlurFade
              key={`${project.title}-${index}`}
              delay={BLUR_FADE_DELAY * 12 + index * 0.04}
              inView
            >
              <Link href={"/projects/"+slugifyProject(project.title)}>

              <Project project={project} />
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
