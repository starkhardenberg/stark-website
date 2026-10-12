import { IMPACT_QUOTE } from '@/components/dienst/impact'
import { MOMENTUM_QUOTE } from '@/components/dienst/momentum'
import { getTestimonialsByIds, heroQuoteAmanda } from './testimonials-data'

export const QUOTE_INTERVAL_MS = 5500

export type PortraitPerson = {
  id: string
  name: string
  image: string
  text: string
  context?: string
  /** Studioshot op zwart. Actiefoto's vullen het vlak. */
  studio?: boolean
  /** Hele foto in het vlak, zonder het hoofd af te snijden. */
  fit?: 'cover' | 'contain'
  imagePosition?: string
}

const quoteIds = [
  'erwin-1',
  'richard-1',
  'yara-1',
  'anne-stegeman-1',
  'mieke-1',
  'renske-1',
  'matthijs-1',
  'elisa-1',
  'gerhard-1',
  'annemarie-1',
  'sandra-1',
  'cora-1',
  'ineke-bouwhuis-1',
  'robbert-1',
  'renee-1',
  'ineke-lokker-1',
] as const

const quotes = new Map(getTestimonialsByIds(quoteIds).map((item) => [item.id, item]))

function withQuote(
  id: string,
  quoteId: (typeof quoteIds)[number],
  image: string,
  options?: { name?: string; context?: string; studio?: boolean; fit?: 'cover' | 'contain'; imagePosition?: string },
): PortraitPerson {
  const quote = quotes.get(quoteId)
  if (!quote) {
    throw new Error(`Quote ontbreekt: ${quoteId}`)
  }
  return {
    id,
    name: options?.name ?? quote.name,
    image,
    text: quote.text,
    context: options?.context ?? quote.context,
    studio: options?.studio,
    fit: options?.fit,
    imagePosition: options?.imagePosition,
  }
}

/** Eén stem per spoor. */
export const homepagePeople: PortraitPerson[] = [
  withQuote('richard', 'richard-1', '/images/quotes/richard.jpg'),
  withQuote('yara', 'yara-1', '/images/quotes/yara.jpg'),
  withQuote('anne-stegeman', 'anne-stegeman-1', '/images/quotes/anne-stegeman.jpg'),
  withQuote('mieke', 'mieke-1', '/images/quotes/mieke.jpg'),
  {
    id: 'amanda',
    name: heroQuoteAmanda.name,
    image: heroQuoteAmanda.image,
    text: heroQuoteAmanda.text,
    context: 'Momentum traject',
    studio: false,
    fit: 'contain',
  },
  withQuote('erwin-de-weerd', 'erwin-1', '/images/quotes/erwin-de-weerd.jpg', {
    name: 'Erwin de Weerd',
  }),
]

/** Renske als eerste, daarna één per groep. */
export const trainenPeople: PortraitPerson[] = [
  withQuote('renske', 'renske-1', '/images/quotes/renske.jpg'),
  withQuote('matthijs', 'matthijs-1', '/images/quotes/matthijs.jpg'),
  withQuote('elisa', 'elisa-1', '/images/quotes/elisa.jpg'),
  withQuote('gerhard', 'gerhard-1', '/images/quotes/gerhard.jpg'),
]

export const momentumPeople: PortraitPerson[] = [
  {
    id: 'annemarie',
    name: MOMENTUM_QUOTE.name,
    image: MOMENTUM_QUOTE.image,
    text: MOMENTUM_QUOTE.text,
    context: MOMENTUM_QUOTE.role,
    studio: false,
    imagePosition: 'center top',
  },
  withQuote('sandra', 'sandra-1', '/images/quotes/sandra.jpg', { context: MOMENTUM_QUOTE.role }),
  withQuote('cora', 'cora-1', '/images/quotes/cora.jpg', { context: MOMENTUM_QUOTE.role }),
  withQuote('ineke-bouwhuis', 'ineke-bouwhuis-1', '/images/quotes/ineke-bouwhuis.jpg', {
    context: MOMENTUM_QUOTE.role,
  }),
]

export const impactPeople: PortraitPerson[] = [
  {
    id: 'rene',
    name: IMPACT_QUOTE.name,
    image: IMPACT_QUOTE.image,
    text: IMPACT_QUOTE.text,
    context: IMPACT_QUOTE.role,
    studio: false,
    imagePosition: 'center top',
  },
  withQuote('robbert', 'robbert-1', '/images/quotes/robbert.jpg', { context: IMPACT_QUOTE.role }),
  withQuote('renee', 'renee-1', '/images/quotes/renee.jpg', { context: IMPACT_QUOTE.role }),
  withQuote('ineke-lokker', 'ineke-lokker-1', '/images/quotes/ineke-lokker.jpg', {
    context: IMPACT_QUOTE.role,
  }),
]
