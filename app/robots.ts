import type { MetadataRoute } from 'next'

// Must match the origin used in app/sitemap.ts so the referenced sitemap URL
// resolves to https://lavingroup-iq.com/sitemap.xml.
const SITE_URL = 'https://lavingroup-iq.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
