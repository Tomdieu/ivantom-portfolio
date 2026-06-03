import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CalendarIcon, ArrowLeft, ExternalLinkIcon } from "lucide-react"
import { projectsData, getProjectBySlug, getProjectSlug } from "@/constants/projects"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: getProjectSlug(project),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  const title = `${project.title} - Tomdieu Ivan Portfolio`
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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <article>
          {project.image && (
            <div className="relative w-full rounded-xl overflow-hidden mb-8" style={{ minHeight: "400px" }}>
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={630}
                className="w-full h-auto object-contain"
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
      </div>
    </div>
  )
}
