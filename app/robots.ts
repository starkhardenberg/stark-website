import type { MetadataRoute } from 'next'
import { isProductionDeploy, SITE_URL } from '@/lib/site-seo'

const ALLOWED_BOTS = [
  '*',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'ClaudeBot',
  'Google-Extended',
  'Bingbot',
] as const

export default function robots(): MetadataRoute.Robots {
  if (!isProductionDeploy()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  return {
    rules: ALLOWED_BOTS.map((userAgent) => ({
      userAgent,
      allow: '/',
    })),
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
