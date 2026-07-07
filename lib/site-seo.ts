import type { Metadata } from 'next'

/**
 * LIVEGANG (Netlify Production context):
 *   NEXT_PUBLIC_SITE_ENV=production
 *   NEXT_PUBLIC_SITE_URL=https://[definitief-domein]
 *
 * STAGING (stark.roholt.nl):
 *   NEXT_PUBLIC_SITE_ENV=staging
 *   NEXT_PUBLIC_SITE_URL=https://stark.roholt.nl
 */

export const SITE_PATHS = [
  '/',
  '/trainen',
  '/coaching',
  '/zakelijk',
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

export function isSiteProduction(): boolean {
  return getSiteEnv() === 'production'
}

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://stark.roholt.nl').replace(
    /\/$/,
    '',
  )
}

export function getSiteRobots(): NonNullable<Metadata['robots']> {
  if (isSiteProduction()) {
    return { index: true, follow: true }
  }

  return { index: false, follow: false }
}
