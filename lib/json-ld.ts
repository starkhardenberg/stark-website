import type { FaqItem } from '@/components/faq/FaqList'
import { ADDRESS, mailtoInfo, PHONE_CALL } from '@/lib/contact'
import {
  STARK_GEO,
  STARK_OPENING_HOURS,
  STARK_POSTAL_CODE,
} from '@/lib/business-info'
import { SITE_URL } from '@/lib/site-seo'

const SCHEMA_DAY: Record<string, string> = {
  Monday: 'https://schema.org/Monday',
  Tuesday: 'https://schema.org/Tuesday',
  Wednesday: 'https://schema.org/Wednesday',
  Thursday: 'https://schema.org/Thursday',
  Friday: 'https://schema.org/Friday',
  Saturday: 'https://schema.org/Saturday',
  Sunday: 'https://schema.org/Sunday',
}

export function getFaqAnswerText(item: FaqItem): string {
  if (item.schemaAnswer) return item.schemaAnswer
  if (typeof item.answer === 'string') return item.answer
  return ''
}

export function buildFaqPageJsonLd(items: readonly FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: getFaqAnswerText(item),
      },
    })),
  }
}

/** Zelfde zin als de description in de metadata van de root layout. */
const HEALTH_CLUB_DESCRIPTION =
  'STARK! Hardenberg. Coaching, bedrijven en trainen. We houden je hand vast en geven je tegelijk een schop onder je kont. Hardenberg, sinds 2013.'

export function buildHealthClubJsonLd() {
  const email = mailtoInfo.replace('mailto:', '')

  return {
    '@context': 'https://schema.org',
    '@type': 'HealthClub',
    name: 'STARK! Hardenberg',
    description: HEALTH_CLUB_DESCRIPTION,
    url: SITE_URL,
    telephone: PHONE_CALL.tel.replace('tel:', ''),
    email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: 'Hardenberg',
      postalCode: STARK_POSTAL_CODE,
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: STARK_GEO.latitude,
      longitude: STARK_GEO.longitude,
    },
    openingHoursSpecification: STARK_OPENING_HOURS.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: SCHEMA_DAY[slot.dayOfWeek],
      opens: slot.opens,
      closes: slot.closes,
    })),
    image: `${SITE_URL}/videos/hero-poster.jpg`,
    foundingDate: '2013',
    areaServed: 'Hardenberg en omgeving',
    sameAs: [
      'https://www.instagram.com/starkhardenberg/',
      'https://www.facebook.com/starkhardenberg/',
    ],
  }
}

const STARK_PROVIDER = {
  '@type': 'HealthClub',
  name: 'STARK! Hardenberg',
  url: SITE_URL,
} as const

export function buildTeamJsonLd() {
  const people = [
    { name: 'Yvonne Alards' },
    { name: 'Engbert-Jan Lubbelinkhof' },
  ]

  return {
    '@context': 'https://schema.org',
    '@graph': people.map((person) => ({
      '@type': 'Person',
      name: person.name,
      jobTitle: 'Mede-eigenaar',
      worksFor: STARK_PROVIDER,
    })),
  }
}

export function buildServiceJsonLd(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: STARK_PROVIDER,
    areaServed: {
      '@type': 'City',
      name: 'Hardenberg',
    },
    url: `${SITE_URL}${path}`,
  }
}
