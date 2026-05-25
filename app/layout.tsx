import type { Metadata } from 'next'
import { Barlow, Oswald, Work_Sans } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-quote',
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
    <html lang="nl" className={`${oswald.variable} ${workSans.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  )
}
