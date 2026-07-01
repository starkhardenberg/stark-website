import type { Metadata } from 'next'
import { Barlow, Oswald } from 'next/font/google'
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
  title: 'STARK! Hardenberg — Sterker worden. In lijf en hoofd.',
  description: 'STARK! Hardenberg. Coaching, bedrijven en trainen. We houden je hand vast en geven je tegelijk een schop onder je kont. Hardenberg, sinds 2013.',
  openGraph: {
    title: 'STARK! Hardenberg',
    description: 'Coaching, bedrijven en trainen. Hardenberg.',
    locale: 'nl_NL',
    type: 'website',
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
      <body>{children}</body>
    </html>
  )
}
