import { Metadata } from "next"
import Link from "next/link"
import { projectsData, getProjectSlug } from "@/constants/projects"
import Header from "@/components/_header/Header"
import { getI18n } from "@/locales/server"

export const metadata: Metadata = {
  title: "Projects - Tomdieu Ivan Portfolio",
  description: "Browse all projects built by Tomdieu Ivan — from SaaS platforms and mobile apps to AI tools and open-source utilities.",
  openGraph: {
    title: "Projects - Tomdieu Ivan Portfolio",
    description: "Browse all projects built by Tomdieu Ivan.",
  },
}

export default async function ProjectsPage() {
  const t = await getI18n();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-2 mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
            {t("projects.badge")}
          </span>
          <h1 className="text-4xl font-bold tracking-tight">{t("projects.allProjects")}</h1>
          <p className="text-muted-foreground max-w-xl">
            {t("projects.description", { count: projectsData.length })}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <Link
              key={project.title}
              href={`/projects/${getProjectSlug(project)}`}
              className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-border/80 hover:shadow-lg transition-all duration-300"
            >
              {project.image ? (
                <div className="relative w-full h-[200px] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="w-full h-[200px] flex items-center justify-center bg-muted">
                  <span className="text-5xl font-bold text-muted-foreground/20">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
              <div className="flex flex-col flex-1 p-5 space-y-2">
                <h2 className="font-semibold group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className="inline-flex items-center rounded-md bg-secondary text-secondary-foreground px-2 py-0.5 text-[10px] font-medium"
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
