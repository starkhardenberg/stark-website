export type RouteKind = 'particulier' | 'bedrijf'

export type RouteChoice = {
  id: string
  title: string
  hint: string
  kind: RouteKind
  question: string
  answers: readonly string[]
}

export const ROUTES: readonly RouteChoice[] = [
  {
    id: 'lijf',
    title: 'Een stark lijf',
    hint: 'Krachttraining en conditie in kleine groepen',
    kind: 'particulier',
    question: 'Hoe staat het er nu voor?',
    answers: [
      'De bank en ik zijn dikke vrienden',
      'Ik begin elke keer weer opnieuw maar zet niet echt door',
      'Ik train al en wil sterker',
    ],
  },
  {
    id: 'zilver',
    title: 'Ik was vroeger jong',
    hint: 'ZilverFitness voor 55-plussers',
    kind: 'particulier',
    question: 'Wat wil je nog lang blijven doen?',
    answers: ['Kleinkinderen optillen', 'De tuin bijhouden', 'Alles, en nog zo lang mogelijk'],
  },
  {
    id: 'kids',
    title: 'Mijn kind wil graag bewegen',
    hint: 'Kids & Teens',
    kind: 'particulier',
    question: 'Wat voor type heb je thuis?',
    answers: [
      'Stuitert door de kamer',
      'Moet nog ontdekken hoe leuk bewegen is',
      'Zoekt nog een sport die past',
    ],
  },
  {
    id: 'kop',
    title: 'Rust in de kop',
    hint: 'Coaching, in een groep of één op één',
    kind: 'particulier',
    question: 'Hoe pak je het het liefst aan?',
    answers: ['Samen met een groep', 'Eén op één', 'Geen idee, denk met me mee'],
  },
  {
    id: 'bedrijf',
    title: 'Eruit halen wat er in mijn bedrijf zit',
    hint: 'Voor leiders, teams en medewerkers',
    kind: 'bedrijf',
    question: 'Wie gaat er aan de bak?',
    answers: ['Ikzelf, als leider', 'Ik en mijn team', 'Onze medewerkers'],
  },
]

export const PROEF_ANSWERS = new Set(['Ikzelf, als leider', 'Ik en mijn team'])

export const ROUTE_BOOKING_URL = 'https://kennismaken.starkhardenberg.nl'
export const ROUTE_PROEF_URL = 'https://proefopdesom.starkhardenberg.nl'

export function routeWhatsAppUrl(step1: string, step2: string) {
  const text = `Hoi Yvonne! Ik heb op de site gekozen: ${step1} · ${step2}. Ik wil graag kennismaken.`
  return `https://wa.me/31613308012?text=${encodeURIComponent(text)}`
}
