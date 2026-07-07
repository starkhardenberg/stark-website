import type { MetadataRoute } from 'next'
import { getSiteUrl, SITE_PATHS } from '@/lib/site-seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()

  return SITE_PATHS.map((path) => ({
    url: path === '/' ? baseUrl : `${baseUrl}${path}`,
    lastModified: new Date(),
  }))
}
