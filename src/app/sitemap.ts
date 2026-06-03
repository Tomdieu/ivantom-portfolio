import { MetadataRoute } from "next"
import { projectsData, getProjectSlug } from "@/constants/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://ivantomdieu.vercel.app"

  const projectEntries = projectsData.map((project) => ({
    url: `${siteUrl}/projects/${getProjectSlug(project)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...projectEntries,
  ]
}
