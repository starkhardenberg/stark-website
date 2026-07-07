import type { Metadata } from 'next'
import { Barlow, Oswald } from 'next/font/google'
import StructuredData from '@/components/StructuredData'
import { openGraphByPage, OG_IMAGE } from '@/lib/open-graph'
import { buildLocalBusinessJsonLd } from '@/lib/json-ld'
import { getSiteRobots, getSiteUrl } from '@/lib/site-seo'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: 'STARK! Hardenberg — Sterker worden. In lijf en hoofd.',
  description:
    'STARK! Hardenberg. Coaching, bedrijven en trainen. We houden je hand vast en geven je tegelijk een schop onder je kont. Hardenberg, sinds 2013.',
  alternates: {
    canonical: '/',
  },
  robots: getSiteRobots(),
  openGraph: {
    title: openGraphByPage.home.title,
    description: openGraphByPage.home.description,
    locale: 'nl_NL',
    type: 'website',
    url: getSiteUrl(),
    siteName: 'STARK! Hardenberg',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: openGraphByPage.home.title,
    description: openGraphByPage.home.description,
    images: [OG_IMAGE.url],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${oswald.variable} ${barlow.variable}`}>
      <head>
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
      </head>
      <body>
        <StructuredData data={buildLocalBusinessJsonLd()} />
        {children}
      </body>
    </html>
  )
}
