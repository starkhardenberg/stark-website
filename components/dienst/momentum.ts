/** Zelfde agenda als /kennismaken. Eén plek voor de drie knoppen. */
export const BOOKINGS_URL =
  'https://bookings.cloud.microsoft/book/STARKKennismaken1@starkhardenberg.nl/'

export type DienstGroup = {
  name: string
  start: string
  partner?: string
  slots: string[]
}

/** Rooster per groep. Toevoegen, wijzigen of verwijderen zonder de opmaak aan te raken. */
export const MOMENTUM_GROUPS: DienstGroup[] = [
  {
    name: 'Groep 2',
    start: 'start dinsdag 6 oktober',
    partner: 'samen met Sportservice Hardenberg',
    slots: [
      'Dinsdag 19.30–20.30: training, elke week',
      'Donderdag 07.00–08.00: training, om de week',
      'Donderdag 07.00–09.00: coachingsessie met challenge, om de week',
    ],
  },
  {
    name: 'Groep 3',
    start: 'start vrijdag 13 november',
    slots: [
      'Vrijdag 19.30–20.30: training, elke week',
      'Maandag 18.30–19.30: training, om de week',
      'Maandag 18.30–20.30: coachingsessie met challenge, om de week',
    ],
  },
]

export const MOMENTUM_FAQ = [
  {
    question: 'Wat als ik weer afhaak?',
    answer:
      'Daar is Momentum op gebouwd. Het moment dat je wilt afhaken, is het moment waar we mee werken. En de groep rekent op je.',
  },
  {
    question: 'Ik ben al jaren niet actief. Kan ik meedoen?',
    answer:
      'Ja. Iedereen traint op zijn eigen niveau. Heb je een blessure of klachten, dan bespreken we dat in de kennismaking.',
  },
  {
    question: 'Moet ik lid zijn van STARK!?',
    answer: '[ANTWOORD]',
  },
  {
    question: 'Wat als ik een training mis?',
    answer: '[ANTWOORD]',
  },
  {
    question: 'Hoeveel tijd kost de opdracht?',
    answer: '[ANTWOORD]',
  },
] as const
