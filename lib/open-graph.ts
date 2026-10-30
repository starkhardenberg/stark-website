import type { Metadata } from 'next'
import { L1O1_META } from '@/components/dienst/leiderschap-1-op-1'
import { MAW_META } from '@/components/dienst/momentum-at-werk'
import { TRAJECT_META } from '@/components/dienst/zakelijk-traject'
import { getSiteUrl, SITE_URL } from '@/lib/site-seo'

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
      images: [{ ...OG_IMAGE, url: `${SITE_URL}${OG_IMAGE.url}` }],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: og.title,
      description: og.description,
      images: [`${SITE_URL}${OG_IMAGE.url}`],
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
  dropIn: {
    title: 'Drop-in bij STARK! Hardenberg',
    description:
      'Eén of een paar losse lessen voor als je in de buurt bent. Je hoeft geen lid te worden. Kies een les, betaal, en je staat op de lijst.',
  },
  coaching: {
    title: 'Coaching bij STARK! — trajecten lijf en hoofd',
    description:
      'Momentum en Impact: lijf en hoofd in één lijn. Eerst een gesprek, geen verrassingen achteraf. Hardenberg.',
  },
  zakelijk: {
    title: 'STARK! Wark · Leiderschap en duurzame inzetbaarheid',
    description:
      'Coaching en training voor bedrijven in Hardenberg. Leiderschap 1-op-1, Draagkracht voor jou en je team, en Momentum @ Werk voor je mensen.',
  },
  momentum: {
    title: 'Momentum · 10 weken trainen en coachen in Hardenberg · STARK!',
    description:
      '10 weken trainen en coachen in een kleine groep in Hardenberg. Voor wie weet wat er moet gebeuren en het steeds ziet wegzakken. Vaste start, vaste eindstreep.',
  },
  impact: {
    title: 'Impact bij STARK! — 12 weken 1-op-1',
    description:
      'Persoonlijk traject met startpakket, wekelijkse coaching en kleine groep. Voor wie maximale aandacht wil. Daarna door met Impact+.',
  },
  team: {
    title: 'Team STARK! Hardenberg — trainers sinds 2013',
    description:
      'Elf mensen, één aanpak. Acht trainers, twee eigenaren en Tineke. Trainers die zelf als lid begonnen. Maak kennis met het team achter STARK!',
  },
  kennismaken: {
    title: 'Kennismaken bij STARK! — gratis gesprek',
    description:
      'Loop binnen of plan een moment. Ongeveer een uur, vrijblijvend en gratis. We kijken samen wat voor jou het beste past.',
  },
  contact: {
    title: 'Contact STARK! Hardenberg — bel, app of mail',
    description:
      'Adres in Hardenberg, telefoon, WhatsApp en formulier. Je spreekt altijd een mens. Vragen over trainen, coaching of bedrijven? Stuur gerust.',
  },
  leiderschap: {
    title: L1O1_META.title,
    description: L1O1_META.description,
  },
  duurzameInzetbaarheid: {
    title: MAW_META.title,
    description: MAW_META.description,
  },
  draagkracht: {
    title: TRAJECT_META.title,
    description: TRAJECT_META.description,
  },
} as const satisfies Record<string, { title: string; description: string }>

const pagePathByKey: Record<keyof typeof openGraphByPage, string> = {
  home: '/',
  trainen: '/trainen',
  dropIn: '/drop-in',
  coaching: '/coaching',
  zakelijk: '/zakelijk',
  momentum: '/momentum',
  impact: '/impact',
  team: '/team',
  kennismaken: '/kennismaken',
  contact: '/contact',
  leiderschap: '/zakelijk/leiderschap-1-op-1',
  duurzameInzetbaarheid: '/zakelijk/duurzame-inzetbaarheid',
  draagkracht: '/zakelijk/draagkracht',
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
      canonical: getCanonicalUrl(pagePathByKey[page]),
    },
    ...social,
  }
}
