export const CONTACT_PATH = '/contact'

/** Standaardtekst op conversie-knoppen */
export const CTA_KENNISMAKING_LABEL = 'Kom kennismaken'

export type ContactOnderwerp = 'kennismaking' | 'trainen' | 'coaching' | 'zakelijk' | 'anders'

export const CONTACT_ONDERWERP_OPTIONS: { value: ContactOnderwerp; label: string }[] = [
  { value: 'kennismaking', label: 'Kennismakingsgesprek' },
  { value: 'trainen', label: 'Trainen / lidmaatschap' },
  { value: 'coaching', label: 'Coaching (Momentum / Impact)' },
  { value: 'zakelijk', label: 'Zakelijk / Fundament' },
  { value: 'anders', label: 'Anders / weet ik nog niet' },
]

const VALID_ONDERWERP = new Set(CONTACT_ONDERWERP_OPTIONS.map((o) => o.value))

export function parseOnderwerp(value: string | undefined): ContactOnderwerp {
  if (value && VALID_ONDERWERP.has(value as ContactOnderwerp)) {
    return value as ContactOnderwerp
  }
  return 'kennismaking'
}

/** Centrale URL voor contactformulier; optioneel onderwerp voorgeselecteerd */
export function contactUrl(onderwerp?: ContactOnderwerp): string {
  if (!onderwerp) return CONTACT_PATH
  return `${CONTACT_PATH}?onderwerp=${onderwerp}`
}

export const hrefKennismaking = contactUrl('kennismaking')
export const hrefTrainen = contactUrl('trainen')
export const hrefCoaching = contactUrl('coaching')
export const hrefZakelijk = contactUrl('zakelijk')
export const hrefContactAlgemeen = contactUrl('anders')

/** Direct mail/telefoon in footer (geen formulier) */
export const mailtoInfo = 'mailto:info@starkhardenberg.nl'

/** @deprecated Gebruik hrefKennismaking — behouden voor geleidelijke migratie */
export const mailtoKennismaking = hrefKennismaking
