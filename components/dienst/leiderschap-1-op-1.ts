/**
 * Leiderschap 1 op 1: alle teksten van de dienstenpagina /zakelijk/leiderschap-1-op-1.
 * Lezer 1: de eigenaar, directeur, MT-lid of teamleider die het zelf gaat doen.
 * Lezer 2: bij iemand in loondienst ook de werkgever (sectie 06, doorstuurblok).
 * Goedgekeurd door Yvonne op 29 september 2026. De quote is nog onder voorbehoud van Julia.
 * Teksten hier aanpassen, niet in de opmaak.
 */

import { IMPACT_SCHEDULE } from './impact'

export const L1O1_META = {
  title: 'Leiderschapscoaching in Hardenberg | Leiderschap 1 op 1 | STARK!',
  description:
    'Leiderschapscoaching bij STARK! in Hardenberg: elke week een uur coaching en twee keer per week trainen. Voor eigenaren, directeuren, MT-leden en teamleiders.',
}

export const L1O1_HERO = {
  word: 'Leiderschap 1 op 1',
  line: 'Jouw resultaten als leider',
  image: '/images/foto-leiderschap-hero.jpg',
  alt: 'Deelnemer in een opdrukpositie naast een kettlebell bij STARK! Hardenberg',
}

/* ---------- 01 ---------- */

export const L1O1_INTRO = {
  title: 'Wat wil jij als leider voor elkaar krijgen?',
  scenes: [
    'Je neemt een beslissing en houdt eraan vast, ook als het schuurt',
    'Je team weet wat je van ze verwacht',
    'Je voert het gesprek op het moment dat het nodig is',
    'Je geeft werk uit handen, en het komt goed',
    'Op vrijdag heb je gedaan wat je maandag van plan was',
  ],
  prose: [
    'Of wat jij als leider wilt bereiken. Je bent eigenaar, directeur, MT-lid of teamleider. Het werk loopt, en je weet dat er nog een stap in zit. In jezelf, en in hoe je je mensen meekrijgt.',
    'Leiderschap 1 op 1 draait om wat je in je werk voor elkaar krijgt. De beslissingen die je neemt en of je eraan vasthoudt. Je plek in het team. Hoe je mensen meekrijgt.',
  ],
  proseStrong: 'Leiderschap 1 op 1 is een eigen coach, elke week een gesprek en twee keer per week trainen.',
  proseAfterStrong:
    'Vanaf een kwartaal, in de praktijk meestal een half jaar of een jaar. Alles gaat over jouw werk en jouw doelen.',
  close: 'Je werkt aan je resultaten als leider.',
  closeAccent: 'Op een manier die werkbaar is, voor jou en voor je team.',
}

/* ---------- 02 ---------- */

export const L1O1_PARTS = [
  {
    title: 'Gesprek',
    text: 'Elke week zit je een uur met je vaste coach: Yvonne of Engbert-Jan. Wat speelde er deze week in je werk? Wat wil je bereiken, en wat doe je de komende week? Wat je in het gesprek bespreekt, zet je in je werkweek om in actie. Wat je vertelt, blijft tussen jullie.',
  },
  {
    title: 'Trainen',
    text: 'Twee keer per week train je in een kleine groep. Je kiest zelf twee van de vier vaste momenten. Elke training komt er een moment waarop het zwaar wordt. Onder gewicht zie je binnen tien seconden wat je doet. Doorzetten, inhouden, wegkijken. Dat doe je in je werk ook. Hier zie je het gebeuren, en oefen je iets anders. Je hoeft nog geen sporter te zijn.',
  },
  {
    title: 'Startgesprek',
    text: 'Bij de start leggen we vast waar je in je werk naartoe wilt. Betaalt je werkgever mee, dan zit je leidinggevende bij dat gesprek. Samen spreken we af of en wanneer we terugkoppelen.',
  },
] as const

export const L1O1_AFSLUITER =
  'In het gesprek bepaal je wat je anders gaat doen. In de training doe je het. Elke week opnieuw.'

export const L1O1_KRIJGT = [
  'Een vaste coach: Yvonne of Engbert-Jan',
  'Elke week een gesprek van een uur, één op één',
  'Twee trainingen per week in een kleine groep, op momenten die jij kiest',
  'Een startgesprek waarin we je richting vastleggen',
  'Je start zodra het jou en ons uitkomt. Er is geen wachtlijst',
] as const

export const L1O1_KRIJGT_NOTE = 'Wat je in de coaching vertelt, blijft tussen jou en je coach.'

/* ---------- 03 ---------- */

export const L1O1_VRAAGT_TITLE = 'Wat het van je vraagt'

export const L1O1_VRAAGT = [
  {
    strong: 'Je gaat voor de hele looptijd.',
    text: 'Bij de start spreken we de looptijd af. Daar teken je voor, of je werkgever als die betaalt. Je gaat door, ook in de weken waarin het werk anders loopt dan gepland. Juist die weken tellen.',
  },
  { strong: 'Je zegt hoe het echt gaat.', text: 'Ook als iets niet gelukt is. Daar begint het werk.' },
  {
    strong: 'Je doet wat je afspreekt.',
    text: 'Elke week kies je zelf wat je in je werk anders doet. En dat doe je dan ook.',
  },
] as const

export const L1O1_VRAAGT_CLOSE = { text: 'Eén coach, jouw werk.', accent: 'Elke week een stap.' }

/** Rijtje "Soms past iets anders beter". link = optioneel: [linktekst, href]. */
export const L1O1_ANDERS: { before: string; link?: [string, string]; after?: string }[] = [
  {
    before: 'Draait je vraag om jou als mens: je energie, je lijf, en wat je doet als het te veel wordt? Dan past ',
    link: ['Impact', '/impact'],
    after: '.',
  },
  {
    before: 'Wil je dat je team dezelfde stap zet als jij? Dan past het ',
    link: ['zakelijk traject', '/zakelijk/traject'],
    after: '. Daar zit je eigen coaching 1 op 1 al in.',
  },
  { before: 'Wil je alleen fitter en sterker worden? Word dan lid bij STARK!.' },
]

/* ---------- quote ---------- */

/** CONCEPT: tekst nog laten goedkeuren door Julia. Pas daarna live zetten. */
export const L1O1_QUOTE = {
  text: 'Ik krijg mensen op één lijn, en dingen worden echt geregeld. Zonder dat ik er zelf steeds bovenop hoef te zitten.',
  name: 'Julia',
  role: 'deelnemer Leiderschap 1 op 1',
  image: '/images/foto-leiderschap-quote-julia.jpg',
  alt: 'Julia, deelnemer van Leiderschap 1 op 1, zwart-witportret',
}

/* ---------- 04 ---------- */

/**
 * OPEN: anoniem klantvoorbeeld (Wilma; Julia staat al met naam in de quote), alleen na haar akkoord.
 * Zolang `show` false is, laat Cursor deze sectie weg en schuiven de nummers op.
 */
export const L1O1_VOORBEELD = {
  show: false,
  title: 'Bij wie het werkt',
  wie: '',
  start: '',
  gedaan: '',
  veranderd: '',
}

/* ---------- 05 Praktisch ---------- */

export const L1O1_OPZET = [
  'Vanaf een kwartaal, in de praktijk meestal een half jaar of een jaar',
  'Elke week een uur coaching met je vaste coach',
  'Twee keer per week trainen bij STARK! in Hardenberg',
] as const

/** Zelfde momenten als Impact. */
export const L1O1_SCHEDULE = IMPACT_SCHEDULE
export const L1O1_SCHEDULE_NOTE = 'Je kiest er twee per week'

/** Stappen na de kennismaking. De kennismaking zelf staat in het slot. */
export const L1O1_VERLOOP = [
  'Je krijgt een offerte',
  'Startgesprek: we leggen je richting vast. Betaalt je werkgever mee, dan zit je leidinggevende erbij',
  'Je kiest je twee trainingsmomenten',
  'Het eerste gesprek en de eerste training',
] as const
export const L1O1_VERLOOP_NOTE = 'Je start zodra het jou en ons uitkomt. Er is geen wachtlijst.'

export const L1O1_DAARNA_TITLE = 'Na de looptijd'
export const L1O1_DAARNA = [
  'Je verlengt het traject',
  'Je stapt over naar een programma dat past bij je volgende stap',
  'Je blijft trainen bij STARK!',
] as const
export const L1O1_DAARNA_NOTE = 'Wat past, bepalen we samen.'

/* ---------- 06 Voor je werkgever ---------- */

export const L1O1_WERKGEVER = {
  title: 'Voor je werkgever',
  intro: 'Ben je in loondienst en betaalt je werkgever mee? Dit blok kun je in zijn geheel kopiëren en doorsturen.',
  heading: 'Leiderschap 1 op 1 bij STARK! Hardenberg',
  items: [
    {
      label: 'Wat het is',
      text: 'Een individueel coachingtraject op persoonlijk leiderschap in het werk, gecombineerd met fysieke training.',
    },
    {
      label: 'Wat het inhoudt',
      text: 'Elke week een uur coaching met een vaste coach en twee keer per week trainen bij STARK! in Hardenberg. Looptijd vanaf een kwartaal, in de praktijk meestal een half jaar of een jaar.',
    },
    {
      label: 'Waar we aan werken',
      text: 'Aan wat deze medewerker in het werk voor elkaar krijgt: beslissingen nemen en eraan vasthouden, positie innemen in het team, mensen meekrijgen. De richting bepalen we in een startgesprek, samen met de leidinggevende.',
    },
    {
      label: 'Wat de organisatie terugkrijgt',
      text: 'Een medewerker die elke week werkt aan de doelen uit het startgesprek. De leidinggevende bepaalt die doelen mee. Wat de medewerker in het gesprek bespreekt, zet hij in zijn werkweek om in actie.',
    },
    {
      label: 'Hoe we terugkoppelen',
      text: 'Wanneer en hoe we terugkoppelen, spreken we af in het startgesprek. De inhoud van de coaching blijft vertrouwelijk.',
    },
    {
      label: 'Investering',
      text: 'Afhankelijk van de looptijd. Die spreken we bij de start af, en daar teken je als werkgever voor. Na het kennismakingsgesprek volgt een offerte op maat.',
    },
  ],
  /** Onder het blok, ook in de gekopieerde tekst. Cursor zet er de volledige URL van deze pagina achter. */
  footer: 'Lees de hele pagina op',
  copyLabel: 'Kopieer dit blok',
  copiedLabel: 'Gekopieerd',
  mailLabel: 'Mail dit blok',
  mailSubject: 'Leiderschap 1 op 1 bij STARK! Hardenberg',
}

/* ---------- 07 FAQ ---------- */

export const L1O1_FAQ = [
  {
    question: 'Het gaat goed in mijn werk. Is dit dan iets voor mij?',
    answer:
      'Ja. Leiderschap 1 op 1 is voor wie de volgende stap wil zetten. Het loopt, en je weet dat er nog iets in zit. Daar hoeft geen probleem voor te zijn.',
  },
  {
    question: 'Wat is het verschil met Impact?',
    answer:
      'Leiderschap 1 op 1 gaat over wat je als leider voor elkaar krijgt. Impact gaat over jou als mens: je energie, je lijf, en wat je doet als het te veel wordt. Thuis en op je werk. Het gesprek en de training zien er bij allebei hetzelfde uit. Het verschil zit in waar de gesprekken over gaan. Twijfel je? In het kennismakingsgesprek zoeken we het samen uit.',
  },
  {
    question: 'Wat is het verschil met het zakelijk traject?',
    answer:
      'Bij Leiderschap 1 op 1 werk jij aan je eigen resultaten. In het zakelijk traject zet je team dezelfde stap. Dat traject duurt een half jaar tot een jaar, met elke week teamcoaching. Je eigen coaching 1 op 1 zit daar al in.',
  },
  {
    question: 'Kan mijn werkgever meebetalen?',
    answer:
      'Ja. Dan zit je leidinggevende bij het startgesprek. Hierboven staat een blok dat je kunt doorsturen.',
  },
  {
    question: 'Wat hoort mijn werkgever van wat ik vertel?',
    answer:
      'Wat je in de coaching vertelt, blijft tussen jou en je coach. Of en wanneer we terugkoppelen, spreken we in het startgesprek samen af.',
  },
  {
    question: 'Moet ik al sporten?',
    answer:
      'Nee. Je traint op je eigen niveau. Heb je een blessure of klachten, dan bespreken we dat in de kennismaking.',
  },
  {
    question: 'Wat als ik een training mis?',
    answer:
      'Dan zoeken we een ander moment. Dat kan een ander vast moment zijn, of een training uit het gewone rooster.',
  },
  {
    question: 'Wat kost Leiderschap 1 op 1?',
    answer:
      'Leiderschap 1 op 1 is een serieuze investering. Wat het kost, hangt af van de looptijd. Dat hoor je in het kennismakingsgesprek, ruim voordat je iets beslist.',
  },
] as const

/* ---------- 08 ---------- */

export const L1O1_SLOT =
  'Een kennismaking van een uur met Yvonne, Engbert-Jan of allebei. Bij ons in Hardenberg of bij jou op de zaak, kosteloos en vrijblijvend. Wat wil je als leider bereiken, en past Leiderschap 1 op 1 daarbij? Past het niet, dan zeggen we dat.'

export const L1O1_PROEF = {
  text: 'Of kom eerst een middag meedoen. De Proef op de Som is voor eigenaren, directeuren, MT-leden en teamleiders. Je maakt mee hoe we werken: coaching en training, precies zoals in een traject. De eerste is op donderdag 5 november, van 15.00 tot 18.00 uur. Kosteloos.',
  linkLabel: 'Meld je aan voor de Proef op de Som',
  href: 'https://proefopdesom.starkhardenberg.nl',
}

/* ---------- tegel op /zakelijk (voor zakelijk-solo-routes.ts) ---------- */

/** Vervangt de huidige teksten van de tegel 'leiderschap-1-op-1'. Cursor neemt ze over. */
export const L1O1_TEGEL = {
  eyebrow: '1-op-1 · Vanaf een kwartaal',
  menu: [
    {
      label: 'Past bij jou als',
      text: 'Eigenaar, directeur, MT-lid of teamleider. Je wilt als leider de volgende stap zetten: in je beslissingen, je plek in het team en hoe je mensen meekrijgt.',
    },
    {
      label: 'Zo werkt het',
      text: 'Elke week een uur coaching met je vaste coach. Twee keer per week trainen bij ons in Hardenberg. Vanaf een kwartaal.',
    },
    {
      label: 'Wat zit erin',
      text: 'In het gesprek bepaal je wat je anders gaat doen. In de training doe je het. Daarna zet je het in je werkweek om in actie.',
    },
  ],
}
