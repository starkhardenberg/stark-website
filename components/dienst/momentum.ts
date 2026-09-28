/** Zelfde agenda als /kennismaken. Eén plek voor de drie knoppen. */
export const BOOKINGS_URL =
  'https://bookings.cloud.microsoft/book/STARKKennismaken1@starkhardenberg.nl/'

/** Vaste tijden, gelden voor elke groep. */
export const MOMENTUM_SCHEDULE = [
  { when: 'Vrijdag 19.30–20.30', what: 'training, elke week' },
  {
    when: 'Maandag, om en om',
    what: 'de ene week training (18.30–19.30), de andere week coachingsessie met challenge (18.30–20.30)',
  },
] as const

export const MOMENTUM_SCHEDULE_NOTE = 'De eerste coachingsessie is op de maandag direct na de start.'

export type DienstStart = {
  group: string
  start: string
  firstCoaching: string
}

/** Startdata. Toevoegen, wijzigen of verwijderen zonder de opmaak aan te raken. */
export const MOMENTUM_STARTS: DienstStart[] = [
  { group: 'groep 3', start: 'Vrijdag 29 januari 2027', firstCoaching: 'maandag 1 februari' },
  { group: 'groep 4', start: 'Vrijdag 16 april 2027', firstCoaching: 'maandag 19 april' },
  { group: 'groep 5', start: 'Vrijdag 27 augustus 2027', firstCoaching: 'maandag 30 augustus' },
  { group: 'groep 6', start: 'Vrijdag 5 november 2027', firstCoaching: 'maandag 8 november' },
]

export const MOMENTUM_QUOTE = {
  text: 'Ik wist de stemmetjes om te buigen naar gedachten die me de kracht gaven om tot het gaatje te gaan.',
  name: 'Annemarie',
  role: 'deelnemer Momentum',
  image: '/images/foto-momentum-annemarie.jpg',
  alt: 'Annemarie, deelnemer van Momentum, zwart-witportret',
}

export const MOMENTUM_FAQ = [
  {
    question: 'Wat als ik weer afhaak?',
    answer:
      'Daar is Momentum op gebouwd. Het moment dat je wilt afhaken, is het moment waar we mee werken. En de groep rekent op je.',
  },
  {
    question: 'Ik sport al een poos niet meer. Kan ik meedoen?',
    answer:
      'Ja. Iedereen traint op zijn eigen niveau. Heb je een blessure of klachten, dan bespreken we dat in de kennismaking.',
  },
  {
    question: 'Moet ik lid zijn van STARK!?',
    answer: 'Nee. Momentum is voor iedereen vanaf 16 jaar.',
  },
  {
    question: 'Wat kost Momentum?',
    answer:
      'Momentum is een serieuze investering. Wat het precies kost hoor je in het kennismakingsgesprek, ruim voordat je iets beslist. Hierboven lees je wat je ervoor terugkrijgt.',
  },
  {
    question: 'Wat als ik een training mis?',
    answer:
      'Mis je een training, dan doe je die week mee met een training uit het gewone rooster. Een coachingsessie kun je niet inhalen. Zorg dat je erbij bent, liefst live. Alleen in geval van nood kan online.',
  },
  {
    question: 'Hoeveel tijd kost de opdracht?',
    answer: 'Dat verschilt per opdracht. Soms tien minuten per dag, maar dan wel elke dag. Soms een uur in totaal.',
  },
] as const
