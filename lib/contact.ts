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

export type ContactOntdekt =
  | 'via-lid'
  | 'via-kennis'
  | 'google'
  | 'social'
  | 'langsgelopen'
  | 'werkgever'
  | 'doorverwijzing'
  | 'anders'

/** Bij deze keuze is een naam verplicht (wie bij STARK!) */
export const CONTACT_ONTDEKT_VIA_LID: ContactOntdekt = 'via-lid'

/** Bij deze keuze is toelichting verplicht */
export const CONTACT_ONTDEKT_ANDERS: ContactOntdekt = 'anders'

export const CONTACT_ONTDEKT_OPTIONS: { value: ContactOntdekt; label: string }[] = [
  { value: 'via-lid', label: 'Via iemand die bij STARK! traint' },
  { value: 'via-kennis', label: 'Via vriend(in) of familie' },
  { value: 'google', label: 'Google of online zoeken' },
  { value: 'social', label: 'Social media (Instagram, Facebook, etc.)' },
  { value: 'langsgelopen', label: 'Langsgelopen of voorbij gereden' },
  { value: 'werkgever', label: 'Via mijn werkgever of bedrijf' },
  { value: 'doorverwijzing', label: 'Doorverwijzing (huisarts, fysio, coach, etc.)' },
  { value: 'anders', label: 'Anders' },
]

/** Bellen (algemeen bereikbaar) */
export const PHONE_CALL = {
  display: '06 21248107',
  tel: '+31621248107',
} as const

/** WhatsApp Business (kennismaken) */
export const PHONE_WHATSAPP = {
  display: '06 13 30 80 12',
  /** Zonder + of leading 0, voor wa.me */
  wa: '31613308012',
} as const

export const WHATSAPP_KENNISMAKING_MESSAGE = 'Dag! Ik wil graag kennismaken.'

/** Web-URL (desktop + fallback op mobiel) */
export function whatsappUrl(message: string = WHATSAPP_KENNISMAKING_MESSAGE): string {
  return `https://api.whatsapp.com/send?phone=${PHONE_WHATSAPP.wa}&text=${encodeURIComponent(message)}`
}

/** Deep link naar de WhatsApp-app (mobiel) */
export function whatsappDeepLink(message: string = WHATSAPP_KENNISMAKING_MESSAGE): string {
  return `whatsapp://send?phone=${PHONE_WHATSAPP.wa}&text=${encodeURIComponent(message)}`
}

export const hrefWhatsAppKennismaking = whatsappUrl()

/** Direct mail/telefoon in footer (geen formulier) */
export const mailtoInfo = 'mailto:info@starkhardenberg.nl'

/** @deprecated Gebruik hrefKennismaking — behouden voor geleidelijke migratie */
export const mailtoKennismaking = hrefKennismaking
