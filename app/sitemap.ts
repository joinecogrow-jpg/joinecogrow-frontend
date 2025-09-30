import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://joinecogrow.com"
  const staticPaths = ["","/features/trees","/features/diy","/features/community"]
  const now = new Date()
  return staticPaths.map(p => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === "" ? "daily" : "weekly",
    priority: p === "" ? 1.0 : 0.8
  }))
}
