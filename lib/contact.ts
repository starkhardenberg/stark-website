export const CONTACT_PATH = '/contact'
export const KENNISMAKING_PATH = '/kennismaken'

/** Standaardtekst op conversie-knoppen (actiegericht: signaleert plannen, niet 'vragen') */
export const CTA_KENNISMAKING_LABEL = 'Plan kennismaking'

/** Warme paginatitel voor de kennismaken-pagina (knop = actie, titel = uitnodiging) */
export const KENNISMAKING_TITLE = 'Kom kennismaken'

export type ContactOnderwerp = 'trainen' | 'coaching' | 'zakelijk' | 'anders'

export const CONTACT_ONDERWERP_OPTIONS: { value: ContactOnderwerp; label: string }[] = [
  { value: 'trainen', label: 'Trainen / lidmaatschap' },
  { value: 'coaching', label: 'Coaching (Momentum / Impact)' },
  { value: 'zakelijk', label: 'Bedrijven / Fundament' },
  { value: 'anders', label: 'Anders / weet ik nog niet' },
]

const VALID_ONDERWERP = new Set(CONTACT_ONDERWERP_OPTIONS.map((o) => o.value))

export function parseOnderwerp(value: string | undefined): ContactOnderwerp {
  if (value && VALID_ONDERWERP.has(value as ContactOnderwerp)) {
    return value as ContactOnderwerp
  }
  return 'anders'
}

/** Centrale URL voor contactformulier; optioneel onderwerp voorgeselecteerd */
export function contactUrl(onderwerp?: ContactOnderwerp): string {
  if (!onderwerp) return CONTACT_PATH
  return `${CONTACT_PATH}?onderwerp=${onderwerp}`
}

export const hrefKennismaking = KENNISMAKING_PATH
export const hrefTrainen = contactUrl('trainen')
export const hrefCoaching = contactUrl('coaching')
export const hrefZakelijk = contactUrl('zakelijk')
export const hrefContactAlgemeen = CONTACT_PATH

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
  /** Volledige tel:-URI, direct bruikbaar als href */
  tel: 'tel:+31621248107',
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

export const ADDRESS = {
  street: 'Nijverheidsstraat 15c',
  city: '7772 AJ Hardenberg',
  display: 'Nijverheidsstraat 15c, Hardenberg',
  maps: 'https://www.google.com/maps/search/?api=1&query=Nijverheidsstraat+15c,+Hardenberg,+Nederland',
  mapsEmbed:
    'https://maps.google.com/maps?q=Nijverheidsstraat+15c,+7772+AJ+Hardenberg,+Nederland&hl=nl&z=16&output=embed',
} as const

/** @deprecated Gebruik hrefKennismaking */
export const mailtoKennismaking = hrefKennismaking
