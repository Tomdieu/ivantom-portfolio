import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CalendarIcon, ArrowLeft, ExternalLinkIcon, ArrowRight } from "lucide-react"
import { projectsData, getProjectBySlug, getProjectSlug } from "@/constants/projects"
import { caseStudiesData, type CaseStudyType } from "@/data/case-studies"
import { getI18n } from "@/locales/server"
import Header from "@/components/_header/Header"
import JoyFundCaseStudy from "@/components/_case_studies/JoyFundCaseStudy"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

type Props = {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  const locales = ["en", "fr"]
  const slugs = projectsData.map((p) => getProjectSlug(p))
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  const title = project.title
  const description = project.description
  const siteUrl = "https://ivantomdieu.vercel.app"
  const projectUrl = `${siteUrl}/projects/${slug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: projectUrl,
      type: "article",
      siteName: "Tomdieu Ivan Portfolio",
      images: project.image
        ? [{ url: `${siteUrl}${project.image}`, width: 1200, height: 630, alt: project.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: project.image ? [`${siteUrl}${project.image}`] : undefined,
    },
    alternates: {
      canonical: projectUrl,
    },
  }
}

function ProjectNav({ prev, next }: { prev?: string; next?: string }) {
  return (
    <div className="flex items-center justify-between pt-8 border-t border-border mt-12">
      <div>
        {prev && (
          <Link
            href={`/projects/${prev}`}
            className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Previous Project
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link
            href={`/projects/${next}`}
            className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Next Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  )
}

function CaseStudyTechStack({ techStack }: { techStack: string[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary text-secondary-foreground px-3 py-1.5 text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function CaseStudyContent({
  project,
  caseStudy,
}: {
  project: NonNullable<ReturnType<typeof getProjectBySlug>>
  caseStudy: CaseStudyType
}) {
  const projectIndex = projectsData.findIndex(
    (p) => getProjectSlug(p) === getProjectSlug(project)
  )
  const prevProject = projectIndex > 0 ? getProjectSlug(projectsData[projectIndex - 1]) : undefined
  const nextProject =
    projectIndex < projectsData.length - 1
      ? getProjectSlug(projectsData[projectIndex + 1])
      : undefined

  return (
    <article className="space-y-12">
      {/* Hero */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{caseStudy.projectName}</h1>
          <p className="text-lg text-muted-foreground">{caseStudy.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {caseStudy.liveUrl && (
            <Link
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Live Site
            </Link>
          )}
          {caseStudy.githubUrl && (
            <Link
              href={caseStudy.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <GitHubLogoIcon className="h-4 w-4" />
              GitHub
            </Link>
          )}
          {project.links?.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {link.icon && <span className="h-4 w-4">{link.icon}</span>}
              {link.label}
            </Link>
          ))}
        </div>

        {project.dates && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            <time>{project.dates}</time>
          </div>
        )}
      </div>

      {caseStudy.heroImage && (
        <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-border">
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.projectName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </div>
      )}

      {/* Sections */}
      {caseStudy.sections.map((section) => (
        <div key={section.title} className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
          {section.content.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      ))}

      {/* Tech Stack */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {caseStudy.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary text-secondary-foreground px-3 py-1.5 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Previous / Next */}
      <ProjectNav prev={prevProject} next={nextProject} />
    </article>
  )
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const caseStudy = caseStudiesData[slug]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {slug === "joyfund" ? (
          <JoyFundCaseStudy />
        ) : caseStudy ? (
          <CaseStudyContent project={project} caseStudy={caseStudy} />
        ) : (
          <article>
            {project.image && (
              <div className="relative w-full h-100 rounded-xl overflow-hidden mb-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
                {project.dates && (
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <time>{project.dates}</time>
                  </div>
                )}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {project.tags && project.tags.length > 0 && (
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary text-secondary-foreground px-3 py-1.5 text-sm font-medium"
                      >
                        {tag.icon && <span>{tag.icon}</span>}
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.links && project.links.length > 0 && (
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    Links
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.links.map(({ href, label, icon }, index) => (
                      <Link
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {icon ? <span className="h-4 w-4">{icon}</span> : <ExternalLinkIcon className="h-4 w-4" />}
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        )}
      </div>
    </div>
  )
}
