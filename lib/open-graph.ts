import type { Metadata } from 'next'
import { getSiteRobots, getSiteUrl } from '@/lib/site-seo'

/** Gedeelde OG-kaart (editorial split). Bron: app/opengraph-image.tsx → npm run generate:og */
export const OG_IMAGE = {
  url: '/images/og-stark-card.png',
  width: 1200,
  height: 630,
  alt: 'STARK! Hardenberg — trainen, coaching, bedrijven',
} as const

function getCanonicalUrl(path: string): string {
  return path === '/' ? getSiteUrl() : `${getSiteUrl()}${path}`
}

function buildSocialMetadata(page: keyof typeof openGraphByPage) {
  const og = openGraphByPage[page]
  const path = pagePathByKey[page]
  const url = getCanonicalUrl(path)

  return {
    openGraph: {
      title: og.title,
      description: og.description,
      locale: 'nl_NL',
      type: 'website' as const,
      url,
      siteName: 'STARK! Hardenberg',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: og.title,
      description: og.description,
      images: [OG_IMAGE.url],
    },
  }
}

/** Unieke Open Graph-metadata per pagina (checklist punt 22). */
export const openGraphByPage = {
  home: {
    title: 'STARK! Hardenberg — trainen, coaching, bedrijven',
    description:
      'Functioneel trainen met coaching op de vloer. Momentum, Impact en Momentum @ Werk. Geen poespas, wel resultaat. Hardenberg, sinds 2013.',
  },
  trainen: {
    title: 'Trainen bij STARK! — groepslessen met coaching',
    description:
      'Groepslessen met een trainer naast je. Geen hal vol apparaten. Prijs en route in het kennismakingsgesprek. Hardenberg.',
  },
  coaching: {
    title: 'Coaching bij STARK! — trajecten lijf en hoofd',
    description:
      'Momentum en Impact: lijf en hoofd in één lijn. Eerst een gesprek, geen verrassingen achteraf. Hardenberg.',
  },
  zakelijk: {
    title: 'Bedrijven bij STARK! — Momentum @ Werk',
    description:
      'Preventie die meetbaar is. Minder verzuim, sterkere medewerkers. Momentum @ Werk vanaf vijf deelnemers. Eerlijk over wat past.',
  },
  momentum: {
    title: 'Momentum bij STARK! — 10 weken in de groep',
    description:
      'Tien weken in de groep. Training, groepscoaching en challenges. Max. 10 mensen. Hardenberg.',
  },
  impact: {
    title: 'Impact bij STARK! — 12 weken 1-op-1',
    description:
      'Persoonlijk traject met startpakket, wekelijkse coaching en kleine groep. Voor wie maximale aandacht wil. Daarna door met Impact+.',
  },
  team: {
    title: 'Team STARK! Hardenberg — trainers sinds 2013',
    description:
      'Elf mensen, één aanpak. Trainers die zelf als lid begonnen. Ruim 200 mensen geholpen. Maak kennis met het team achter STARK!',
  },
  kennismaken: {
    title: 'Kennismaken bij STARK! — gratis gesprek',
    description:
      'Loop binnen of plan een moment. Ongeveer een uur, vrijblijvend en gratis. We kijken samen wat voor jou het beste past.',
  },
  contact: {
    title: 'Contact STARK! Hardenberg — bel, mail, langskomen',
    description:
      'Adres in Hardenberg, telefoon, WhatsApp en formulier. Je spreekt altijd een mens. Vragen over trainen, coaching of bedrijven? Stuur gerust.',
  },
} as const satisfies Record<string, { title: string; description: string }>

const pagePathByKey: Record<keyof typeof openGraphByPage, string> = {
  home: '/',
  trainen: '/trainen',
  coaching: '/coaching',
  zakelijk: '/zakelijk',
  momentum: '/momentum',
  impact: '/impact',
  team: '/team',
  kennismaken: '/kennismaken',
  contact: '/contact',
}

export function pageMetadata(
  page: keyof typeof openGraphByPage,
  title: string,
  description: string,
): Metadata {
  const social = buildSocialMetadata(page)
  return {
    title,
    description,
    alternates: {
      canonical: pagePathByKey[page],
    },
    robots: getSiteRobots(),
    ...social,
  }
}
