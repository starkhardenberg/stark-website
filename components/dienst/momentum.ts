/** Zelfde agenda als /kennismaken. Eén plek voor de drie knoppen. */
export const BOOKINGS_URL =
  'https://bookings.cloud.microsoft/book/STARKKennismaken1@starkhardenberg.nl/'

/** Vaste tijden, gelden voor elke groep. */
export const MOMENTUM_SCHEDULE = [
  { when: 'Vrijdag 19.30–20.30', what: 'training, elke week' },
  {
    when: 'Maandag, om en om',
    what: 'de ene week training (18.30–19.30), de andere week coachingsessie met challenge (18.30–20.30)',
    note: 'De eerste coachingsessie is op de maandag direct na de start.',
  },
] as const

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
      'Daar is Momentum op gebouwd. Je leert wat je kunt doen op het moment dat je wilt afhaken. En de groep rekent op je.',
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
    question: 'Wat is de investering voor Momentum?',
    answer:
      'Momentum is een serieuze investering. Die hoor je in het kennismakingsgesprek, ruim voordat je iets beslist. Hierboven lees je wat je ervoor terugkrijgt.',
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
