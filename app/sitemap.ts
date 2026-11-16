import type { MetadataRoute } from 'next'
import { getSiteUrl, SITE_PATHS } from '@/lib/site-seo'
import { getGepubliceerdeVerhalen } from '@/lib/verhalen'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()

  const pages = SITE_PATHS.map((path) => ({
    url: path === '/' ? baseUrl : `${baseUrl}${path}`,
    lastModified: new Date(),
  }))

  const gepubliceerd = getGepubliceerdeVerhalen()
  const verhalen = gepubliceerd.length === 0
    ? []
    : [
        { url: `${baseUrl}/verhalen`, lastModified: new Date() },
        ...gepubliceerd.map((verhaal) => ({
          url: `${baseUrl}/verhalen/${verhaal.slug}`,
          lastModified: new Date(verhaal.datum),
        })),
      ]

  return [...pages, ...verhalen]
}
