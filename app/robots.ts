import type { MetadataRoute } from 'next'
import { isProductionDeploy, SITE_URL } from '@/lib/site-seo'

const ALLOWED_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Google-Extended',
] as const

const BLOCKED_BOTS = [
  'CCBot',
  'Bytespider',
  'Applebot-Extended',
  'Meta-ExternalAgent',
  'Amazonbot',
  'Diffbot',
  'Omgili',
  'Timpibot',
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
    rules: [
      { userAgent: '*', allow: '/' },
      ...ALLOWED_BOTS.map((userAgent) => ({ userAgent, allow: '/' })),
      ...BLOCKED_BOTS.map((userAgent) => ({ userAgent, disallow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
