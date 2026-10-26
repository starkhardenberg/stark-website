import type { Metadata } from 'next'

/** Canonieke site. Ook op staging en previews wijzen canonicals hierheen. */
export const SITE_URL = 'https://www.starkhardenberg.nl'

export const INDEX_HOST = 'www.starkhardenberg.nl'

export const SITE_PATHS = [
  '/',
  '/trainen',
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

/** Netlify zet CONTEXT op production, deploy-preview of branch-deploy. */
export function isProductionDeploy(): boolean {
  const context = process.env.CONTEXT
  if (context) return context === 'production'
  return getSiteEnv() === 'production'
}

export function isSiteProduction(): boolean {
  return isProductionDeploy()
}

export function getSiteUrl(): string {
  return SITE_URL
}

export function hostnameFromHost(host: string | null | undefined): string {
  return (host ?? '').split(',')[0].trim().split(':')[0].toLowerCase()
}

/** Indexeren mag alleen op het live domein, en niet op een Netlify-preview. */
export function isIndexableRequest(host?: string | null): boolean {
  if (!isProductionDeploy()) return false
  return hostnameFromHost(host) === INDEX_HOST
}

export function getSiteRobots(host?: string | null): NonNullable<Metadata['robots']> {
  if (isIndexableRequest(host)) {
    return { index: true, follow: true }
  }

  return { index: false, follow: false }
}
