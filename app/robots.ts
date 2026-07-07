import type { MetadataRoute } from 'next'
import { getSiteUrl, isSiteProduction } from '@/lib/site-seo'

export default function robots(): MetadataRoute.Robots {
  if (!isSiteProduction()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  }
}
