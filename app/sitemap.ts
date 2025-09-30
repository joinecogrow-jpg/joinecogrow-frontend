export default async function sitemap() {
  const base = "https://joinecogrow.com"
  const staticPages = ["","/features/trees","/features/diy","/features/community"]
  return staticPages.map(p => ({
    url: `${base}${p}`, lastModified: new Date(), changeFrequency: "weekly", priority: p===""?1.0:0.8
  }))
}
