import type { Metadata } from 'next'

/** Canonieke site. Ook op staging en previews wijzen canonicals hierheen. */
export const SITE_URL = 'https://www.starkhardenberg.nl'

export const SITE_PATHS = [
  '/',
  '/trainen',
  '/drop-in',
  '/coaching',
  '/zakelijk',
  '/zakelijk/leiderschap-1-op-1',
  '/zakelijk/duurzame-inzetbaarheid',
  '/zakelijk/draagkracht',
  '/momentum',
  '/impact',
  '/team',
  '/kennismaken',
  '/contact',
] as const

export type SitePagePath = (typeof SITE_PATHS)[number]

export function getSiteEnv(): string {
  return process.env.NEXT_PUBLIC_SITE_ENV ?? 'staging'
}

/**
 * Indexeren volgt Netlify CONTEXT.
 * production → index. deploy-preview, branch-deploy, of geen CONTEXT (lokaal) → noindex.
 */
export function isProductionDeploy(): boolean {
  return process.env.CONTEXT === 'production'
}

export function isSiteProduction(): boolean {
  return isProductionDeploy()
}

export function getSiteUrl(): string {
  return SITE_URL
}

export function getSiteRobots(): NonNullable<Metadata['robots']> {
  if (isProductionDeploy()) {
    return { index: true, follow: true }
  }

  return { index: false, follow: false }
}
