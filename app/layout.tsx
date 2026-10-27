import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import BackToTop from '@/components/BackToTop'
import HealthClubJsonLd from '@/components/HealthClubJsonLd'
import { getSiteRobots, SITE_URL } from '@/lib/site-seo'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-display',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

const bronz = localFont({
  src: [
    {
      path: '../public/fonts/MAINFILE-BronzSansSerif-DisplayFont/Web-TT Bronz.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MAINFILE-BronzSansSerif-DisplayFont/Web-TT Bronz.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-bronz',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'STARK! Hardenberg — Sterker worden. In lijf en hoofd.',
  description:
    'STARK! Hardenberg. Coaching, bedrijven en trainen. We houden je hand vast en geven je tegelijk een schop onder je kont. Hardenberg, sinds 2013.',
  robots: getSiteRobots(),
  verification: {
    google: 't7Z9FlmuP9N7mThKFn8PaWSBlS6w2Mj1b0HFGRgcUtg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${barlowCondensed.variable} ${barlow.variable} ${bronz.variable}`}>
      <head>
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
      </head>
      <body>
        <HealthClubJsonLd />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
