import { MetadataRoute } from "next"
import { projectsData, getProjectSlug } from "@/constants/projects"
import { getAllPostsMeta } from "@/lib/mdx"

const locales = ["en", "fr"]
const siteUrl = "https://ivantomdieu.vercel.app"

function getAlternates(path: string): Record<string, string> {
  const alternates: Record<string, string> = {}
  for (const locale of locales) {
    alternates[locale] = `${siteUrl}/${locale}${path}`
  }
  alternates["x-default"] = `${siteUrl}/en${path}`
  return alternates
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const homepageEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1.0,
    alternates: {
      languages: getAlternates(""),
    },
  }))

  const blogIndexEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${siteUrl}/${locale}/blog`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
    alternates: {
      languages: getAlternates("/blog"),
    },
  }))

  const posts = getAllPostsMeta()
  const blogPostEntries: MetadataRoute.Sitemap = posts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: getAlternates(`/blog/${post.slug}`),
      },
    }))
  )

  const projectsIndexEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${siteUrl}/${locale}/projects`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
    alternates: {
      languages: getAlternates("/projects"),
    },
  }))

  const projectEntries: MetadataRoute.Sitemap = projectsData.flatMap((project) => {
    const slug = getProjectSlug(project)
    return locales.map((locale) => ({
      url: `${siteUrl}/${locale}/projects/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: getAlternates(`/projects/${slug}`),
      },
    }))
  })

  return [
    ...homepageEntries,
    ...blogIndexEntries,
    ...blogPostEntries,
    ...projectsIndexEntries,
    ...projectEntries,
  ]
}
