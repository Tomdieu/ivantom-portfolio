import React from 'react';
import { Badge } from "@/components/ui/badge";
import BlurFade from '../magicui/blur-fade';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiPython, SiNodedotjs, SiDjango, SiPrisma, SiSequelize,
  SiExpo, SiPostgresql, SiElasticsearch, SiRedis, SiRabbitmq,
  SiNginx, SiDocker, SiKubernetes, SiGit, SiVisualstudiocode,
  SiSocketdotio
} from "react-icons/si";
import { FaJava, FaProjectDiagram, FaGlobe } from "react-icons/fa";

const BLUR_FADE_DELAY = 0.04;

const skillCategories = [
  {
    name: "Frontend",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    name: "Backend",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Django REST", icon: SiDjango },
      { name: "Prisma", icon: SiPrisma },
      { name: "Sequelize", icon: SiSequelize },
    ],
  },
  {
    name: "Database & Infrastructure",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Elasticsearch", icon: SiElasticsearch },
      { name: "Redis", icon: SiRedis },
      { name: "RabbitMQ", icon: SiRabbitmq },
      { name: "Nginx", icon: SiNginx },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "WebSockets", icon: SiSocketdotio },
    ],
  },
  {
    name: "Mobile",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    skills: [
      { name: "React Native", icon: SiReact },
      { name: "Expo", icon: SiExpo },
    ],
  },
  {
    name: "Tools & Other",
    color: "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Java", icon: FaJava },
      { name: "UML", icon: FaProjectDiagram },
      { name: "OWL", icon: FaGlobe },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <div className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              What I work with
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground max-w-xl">
              A collection of technologies I&apos;ve used across production projects, from frontend to infrastructure.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIdx) => (
            <BlurFade key={category.name} delay={BLUR_FADE_DELAY * 10 + catIdx * 0.08}>
              <div className="rounded-xl border border-border bg-card p-5 space-y-4 h-full hover:border-border/80 hover:shadow-sm transition-all">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-all hover:scale-105 ${category.color}`}
                    >
                      <skill.icon className="w-3.5 h-3.5" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
