/**
 * Zakelijk traject: alle teksten van de dienstenpagina /zakelijk/traject.
 * Lezer: de eigenaar of directeur die het traject koopt en er zelf in meedoet.
 * Goedgekeurd door Yvonne op 29 september 2026.
 * Teksten hier aanpassen, niet in de opmaak.
 */

import { L1O1_PROEF } from './leiderschap-1-op-1'

export const TRAJECT_META = {
  title: 'Teamcoaching in Hardenberg | Zakelijk traject | STARK!',
  description:
    'Het zakelijk traject bij STARK! in Hardenberg: een half jaar tot een jaar teamcoaching, samen trainen en coaching 1 op 1 voor de eigenaar.',
}

export const TRAJECT_HERO = {
  word: 'Zakelijk traject',
  line: 'Jouw team zet de stap',
  image: '/images/foto-traject-hero.jpg',
  alt: 'Deelnemer in gesprek aan tafel bij STARK! Hardenberg, in het zonlicht, zwart-wit',
}

/* ---------- 01 ---------- */

export const TRAJECT_INTRO = {
  title: 'Wat wil jij dat je team voor elkaar krijgt?',
  scenes: [
    'Wat jullie maandag afspreken, is vrijdag gedaan',
    'Een collega zegt wat hij ziet, op het moment dat het speelt',
    'Feedback op het werk gaat over het werk',
    'Het team pakt een klus op zonder dat jij erbovenop zit',
    'Loopt het anders dan gepland, dan schakelt het team samen',
  ],
  /** Leeg: de zin staat nu als brug aan het begin van de broodtekst. */
  sceneOpen: '',
  prose: [
    'Of wat jij voor je team wilt bereiken. Je bent eigenaar of directeur. Je weet waar je met je bedrijf naartoe wilt. Nu wil je dat je team die stap met je zet. Dat ze weten wat er moet gebeuren, het toezeggen en het ook doen.',
    'Een afspraak nakomen, ook als het uitkomt om het niet te doen. Zeggen wat je ziet, op het moment dat het speelt. Horen wat iemand over je werk zegt, en het werk aanpassen. Dat zijn vaardigheden. Een team kan ze samen oefenen.',
  ],
  proseStrong: 'Het zakelijk traject is een half jaar tot een jaar teamcoaching, met je eigen coaching 1 op 1 erbij.',
  proseAfterStrong:
    'Elke week een gesprek met het team en een opdracht over het werk van die week. Het eerste kwartaal traint het team samen, en jij traint mee.',
  close: 'Jij zet de stap.',
  closeAccent: 'Je team zet hem met je mee.',
}

/* ---------- 02 ---------- */

export const TRAJECT_PARTS = [
  {
    title: 'Teamcoaching',
    text: 'Elke week zit het team een uur met Yvonne, Engbert-Jan of allebei, bij STARK! in Hardenberg. Jij zit erbij, als deel van het team. Wat speelde er deze week? Wat hadden jullie afgesproken, en wat is er gedaan? Wat pakken jullie de komende week op?',
  },
  {
    title: 'Opdrachten',
    text: 'Na elke teamcoaching gaat het team aan de slag met een opdracht over het werk van die week. Elk kwartaal heeft een eigen thema. Zo oefenen jullie in je gewone werkweek, met het werk dat er toch al ligt.',
  },
  {
    title: 'Jouw coaching 1 op 1',
    text: 'Daarnaast heb je elke week een uur met je eigen coach: Yvonne of Engbert-Jan. Hier gaat het over jou als eigenaar. Welke beslissingen neem je, hoe houd je eraan vast, en hoe krijg je je mensen mee? Wat je hier vertelt, blijft tussen jou en je coach.',
  },
  {
    title: 'Samen trainen',
    text: 'Het eerste kwartaal traint het team twee keer per week samen, in eigen lessen met Anne, Els en Mark. Jij traint mee. Iedereen traint op zijn eigen niveau. Niemand hoeft al sporter te zijn.',
  },
] as const

export const TRAJECT_AFSLUITER =
  'In de coaching bepalen jullie wat je anders gaat doen. In de training en in het werk doen jullie het. Elke week opnieuw.'

export const TRAJECT_KRIJGT = [
  'Elke week een uur teamcoaching, met Yvonne, Engbert-Jan of allebei',
  'Elke week een opdracht voor het team, over het werk van die week',
  'Voor jou elke week een uur coaching 1 op 1 met je vaste coach',
  'Het eerste kwartaal twee keer per week samen trainen, in eigen lessen met Anne, Els en Mark',
  'Elk kwartaal een evaluatiegesprek met jou',
] as const

export const TRAJECT_KRIJGT_NOTE = 'Alles vindt plaats bij STARK! in Hardenberg.'

/* ---------- 03 ---------- */

/** Drie redenen, elk met een vetgedrukte kop en een korte tekst. */
export const TRAJECT_SAMEN = {
  title: 'Waarom je samen traint',
  items: [
    {
      strong: 'Het gebeurt recht voor je.',
      text: 'Iemand wil opgeven. Iemand kan zwaarder. Iemand klaagt. In de training zie je het op het moment dat het gebeurt. Een bijzonder geschikte plek om te oefenen: benoemen wat er gebeurt, en ermee omgaan. Vanuit jezelf en met elkaar.',
    },
    {
      strong: 'Jullie staan gelijk.',
      text: 'Een set van tien is een set van tien, ook voor de eigenaar. Iedereen gaat de uitdaging aan, op zijn eigen niveau. Samen iets zwaars doen en het voor elkaar krijgen, dat verbindt. Elke keer weer winnen, en soms ook niet. Dat hoort erbij. Juist dan doorzetten, dat train je hier. Dat neem je mee naar het bedrijf, voor als het daar anders loopt dan gepland.',
    },
    {
      strong: 'Je wordt fitter en sterker.',
      text: 'Dat geeft je uithoudingsvermogen, energie en kracht. Voor je werkdag, en voor als je weer thuiskomt.',
    },
  ],
  close: 'Na een kwartaal ligt de basis.',
  closeAccent: 'Dan beslis je of je die verder uitbouwt.',
}

/* ---------- 04 ---------- */

export const TRAJECT_VRAAGT_TITLE = 'Wat het van je vraagt'

export const TRAJECT_VRAAGT = [
  {
    strong: 'Jij doet mee.',
    text: 'In de teamcoaching en in de training, net als iedereen. Je team ziet jou de stap zetten.',
  },
  {
    strong: 'Je tekent voor de hele looptijd.',
    text: 'Bij de start spreken we de looptijd af: een half jaar tot een jaar. Daar teken je voor. Jezelf veranderen gaat sneller dan een team veranderen. Bij één persoon werken we vanaf een kwartaal. Bij een team duurt het langer voordat nieuw gedrag van de hele groep is. Daarom werken we met een team minimaal een half jaar. Jullie gaan door, ook in de weken waarin het werk anders loopt dan gepland. Juist die weken tellen.',
  },
  {
    strong: 'Het team zegt hoe het echt gaat.',
    text: 'Ook als een afspraak niet gelukt is. Daar begint het werk.',
  },
] as const

export const TRAJECT_WELK_TEAM = {
  title: 'Met welk team we beginnen',
  text: 'We beginnen bij het team dat het dichtst bij de koers zit. Heeft je bedrijf een MT, teamleiders of een kantoor, dan beginnen we daar. Vandaaruit werken we naar de vloer. Is je bedrijf kleiner, dan doet het hele team mee.',
}

export const TRAJECT_VRAAGT_CLOSE = { text: 'Eén team, één richting.', accent: 'Elke week een stap.' }

/** Rijtje "Soms past iets anders beter". link = optioneel: [linktekst, href]. */
export const TRAJECT_ANDERS: { before: string; link?: [string, string]; after?: string }[] = [
  {
    before: 'Wil je eerst zelf de volgende stap zetten als leider? Dan past ',
    link: ['Leiderschap 1 op 1', '/zakelijk/leiderschap-1-op-1'],
    after: '.',
  },
  {
    before:
      'Wil je dat je mensen sterk blijven in hun lijf en hun hoofd, ook als het werk veel van ze vraagt? Dan past ',
    link: ['Momentum @ Werk', '/zakelijk/duurzame-inzetbaarheid'],
    after: '.',
  },
]

/* ---------- quote ---------- */

/** Vertaling van een uitspraak van Dusan Djukich. */
export const TRAJECT_QUOTE = {
  text: 'Comfort is de duurste plek om te blijven.',
  name: 'Dusan Djukich',
  role: '',
  image: '/images/foto-traject-quote.jpg',
  alt: 'De zaal van STARK! Hardenberg met het bord "Wi’j bint STARK!" boven de sleds',
}

/* ---------- 05 ---------- */

/**
 * OPEN: klantvoorbeeld. Nog geen zakelijke klant die als referentie kan dienen.
 * Zolang `show` false is, laat Cursor deze sectie weg en schuiven de nummers op.
 */
export const TRAJECT_VOORBEELD = {
  show: false,
  title: 'Bij wie het werkt',
  wie: '',
  start: '',
  gedaan: '',
  veranderd: '',
}

/* ---------- 06 Praktisch ---------- */

export const TRAJECT_OPZET = [
  'Een half jaar tot een jaar. Je tekent voor de hele looptijd',
  'Elke week een uur teamcoaching bij STARK! in Hardenberg',
  'Elke week een uur coaching 1 op 1 voor jou',
  'Het eerste kwartaal twee keer per week samen trainen, in eigen lessen',
  'Elk kwartaal een evaluatiegesprek met jou',
] as const

export const TRAJECT_OPZET_NOTE =
  'Na het eerste kwartaal ligt de basis. Dan beslis je of jullie blijven trainen. Hoe, spreken we samen af.'

/** Stappen na de kennismaking. De kennismaking zelf staat in het slot. */
export const TRAJECT_VERLOOP = [
  'Een gesprek met je team. Eerst ieder voor zich op papier, daarna samen. Jij bent erbij',
  'Je krijgt een offerte',
  'Je tekent voor de afgesproken looptijd',
  'We plannen de trainingen en de eerste teamcoaching',
] as const
export const TRAJECT_VERLOOP_NOTE = 'Zo weet je voordat je tekent hoe je team erin staat.'

export const TRAJECT_DAARNA_TITLE = 'Na de looptijd'
export const TRAJECT_DAARNA = [
  'Het volgende team doet mee, bijvoorbeeld de vloer',
  'Je verlengt het traject met je team',
  'Je team blijft trainen bij STARK!',
  'Jij gaat door met Leiderschap 1 op 1',
] as const
export const TRAJECT_DAARNA_NOTE =
  'Zo groeit het uit tot een partnerschap: je mensen trainen en volgen coaching bij ons, in de vorm die bij je bedrijf past. Wat past, bepalen we samen.'

/* ---------- 07 FAQ ---------- */

export const TRAJECT_FAQ = [
  {
    question: 'Het gaat goed met mijn team. Is dit dan iets voor ons?',
    answer:
      'Ja. Het zakelijk traject is voor teams die de volgende stap willen zetten. Het loopt, en je weet dat er nog iets in zit. Daar hoeft geen probleem voor te zijn.',
  },
  {
    question: 'Waarom doe ik als eigenaar zelf mee?',
    answer:
      'Je team zet de stap met jou. In de teamcoaching en in de training ben je deel van het team. Een set van tien is een set van tien, ook voor jou. In je eigen coaching 1 op 1 werk je aan wat bij jou als eigenaar hoort.',
  },
  {
    question: 'Wat is het verschil met Leiderschap 1 op 1?',
    answer:
      'Bij Leiderschap 1 op 1 werk jij aan je eigen resultaten als leider. In het zakelijk traject zet je team dezelfde stap. Je eigen coaching 1 op 1 zit daar al in. Trainen doe je in het traject samen met je team.',
  },
  {
    question: 'Hoe lang duurt het zakelijk traject?',
    answer:
      'Een half jaar tot een jaar. Met een team werken we minimaal een half jaar, omdat het langer duurt voordat nieuw gedrag van de hele groep is. Welke looptijd past, bepalen we samen.',
  },
  {
    question: 'Moeten mensen al sporten?',
    answer:
      'Nee. Iedereen traint op zijn eigen niveau. Blessures of klachten bespreken we voor de start.',
  },
  {
    question: 'Wat gebeurt er met trainen na het eerste kwartaal?',
    answer:
      'Na een kwartaal ligt de basis. Dan beslis je of jullie die verder uitbouwen en blijven trainen bij STARK!. Dat valt buiten het traject. Hoe jullie doortrainen, spreken we samen af.',
  },
  {
    question: 'Hoe weet ik of het werkt?',
    answer:
      'Elk kwartaal hebben we een evaluatiegesprek met jou. We kijken terug en bepalen het thema van het volgende kwartaal. En elke week zie je in de teamcoaching wat er van de afspraken is gedaan.',
  },
  {
    question: 'Wat kost het zakelijk traject?',
    answer:
      'Het zakelijk traject is een serieuze investering. Wat het voor jouw bedrijf kost, hoor je in het kennismakingsgesprek, ruim voordat je iets beslist.',
  },
] as const

/* ---------- 08 ---------- */

export const TRAJECT_SLOT =
  'Een kennismaking van een uur met Yvonne en Engbert-Jan. Bij ons in Hardenberg of bij jou op de zaak, kosteloos en vrijblijvend. Wat wil je dat je team voor elkaar krijgt, en past het zakelijk traject daarbij? Past het niet, dan zeggen we dat.'

/** Zelfde tekst en link als op Leiderschap 1 op 1. */
export const TRAJECT_PROEF = L1O1_PROEF

/* ---------- tegel op /zakelijk (voor zakelijk-solo-routes.ts) ---------- */

/** Vervangt de huidige teksten van de tegel 'jaartraject'. Cursor neemt ze over. */
export const TRAJECT_TEGEL = {
  eyebrow: 'Team · Half jaar tot een jaar',
  menu: [
    {
      label: 'Past bij jou als',
      text: 'Eigenaar of directeur. Je wilt dat je team dezelfde stap zet als jij, en je doet zelf mee.',
    },
    {
      label: 'Zo werkt het',
      text: 'Een half jaar tot een jaar elke week teamcoaching, met een opdracht over het werk van die week. Jij hebt daarnaast je eigen coaching 1 op 1. Het eerste kwartaal traint het team samen.',
    },
    {
      label: 'Wat zit erin',
      text: 'In de coaching bepalen jullie wat je anders gaat doen. In de training en in het werk doen jullie het. We beginnen bij het team dat het dichtst bij de koers zit, en werken vandaaruit naar de vloer.',
    },
  ],
}
