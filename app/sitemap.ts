import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lavingroup-iq.com"

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects/mall-of-iraq`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/al-shaab-hospital`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/diyala-olympic-stadium`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
