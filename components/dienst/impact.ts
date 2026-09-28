/**
 * Impact: alle teksten van de dienstenpagina /impact.
 * Goedgekeurd door Yvonne op 28 september 2026 (mockup "Impact dienstenpagina").
 * Teksten hier aanpassen, niet in de opmaak.
 */

export const IMPACT_HERO = {
  word: 'Impact',
  line: 'Nu gaat het over jou',
  image: '/images/foto-impact-hero.jpg',
  alt: 'Deelnemer traint met een sandbag bij STARK! Hardenberg',
}

export const IMPACT_INTRO = {
  title: 'Waar wil jij naartoe?',
  scenes: [
    'Op je vijftigste sterker zijn dan op je veertigste',
    'Die twintig kilo eraf, en er daarna ook af houden',
    "'s Avonds nog puf hebben voor wat jij leuk vindt",
    'Je zorgt voor iedereen. Nu wil je ook iets voor jezelf',
    'Je bent moe van het doorgaan en wilt je energie terug',
  ],
  sceneOpen: 'Of waar jij naartoe wilt.',
  prose: [
    'Misschien gaat het prima en weet je dat er nog een stap in zit. Misschien loop je al een tijd op je tandvlees. Of je wilt eindelijk iets aanpakken wat je al jaren bij je draagt. Waar je ook staat: Impact begint bij jou.',
  ],
  proseStrong: 'Impact is twaalf weken één op één.',
  proseAfterStrong:
    'Je eigen coach, elke week een gesprek, twee keer per week trainen. Alles draait om wat jij nodig hebt.',
  close: 'Twaalf weken lang gaat het over jou.',
  closeAccent: 'Daarna sta je stevig. In je lijf en in je hoofd, ook als het uitdagend wordt.',
}

export const IMPACT_PARTS = [
  {
    title: 'Gesprek',
    text: 'Elke week zit je een uur met je vaste coach: Yvonne of Engbert-Jan. Wat speelt er, wat wil je dat er over twaalf weken anders is, en wat doe je deze week? Wat je vertelt, blijft tussen jullie.',
  },
  {
    title: 'Trainen',
    text: 'Twee keer per week train je in een kleine groep. Je kiest zelf twee van de vier vaste momenten. Elke training kom je op een punt waar je liever stopt. Daar zie je wat je doet. Harder gaan. Doorbijten. Niets zeggen. Afhaken. Dat doe je thuis en op je werk ook. Hier zie je het gebeuren, met je coach ernaast. Je hoeft nog geen sporter te zijn.',
  },
  {
    title: 'Meten',
    text: 'Bij de start doe je een nulmeting, na twaalf weken een eindmeting. Dan zie je zwart op wit wat er veranderd is.',
  },
] as const

export const IMPACT_AFSLUITER =
  'Eerst bouwen we je basis op, fysiek en mentaal. Met energie en kracht in je lijf zet je stappen die nu nog groot lijken.'

export const IMPACT_KRIJGT = [
  'Twaalf weken met een vaste coach: Yvonne of Engbert-Jan',
  'Elke week een gesprek van een uur, één op één',
  'Twee trainingen per week in een kleine groep, op momenten die jij kiest',
  'Een nulmeting bij de start en een eindmeting na twaalf weken',
  'Je start zodra het jou en ons uitkomt. Er is geen wachtlijst',
] as const

export const IMPACT_KRIJGT_NOTE = 'Wat je vertelt, blijft tussen jou en je coach.'

export const IMPACT_EERLIJK = [
  { strong: 'Je komt.', text: 'Twee keer per week, ook als je werk of je hoofd iets anders zegt. Juist die keer telt.' },
  { strong: 'Je zegt hoe het echt gaat.', text: 'Ook als iets niet gelukt is. Daar begint het werk.' },
  { strong: 'Je doet wat je afspreekt.', text: 'Elke week kies je zelf wat je gaat doen. En dat doe je dan ook.' },
] as const

export const IMPACT_EERLIJK_CLOSE = { text: 'Twaalf weken, één coach.', accent: 'Alle aandacht voor jou.' }

/** Rijtje "Soms past iets anders beter". link = optioneel: [linktekst, href]. */
export const IMPACT_ANDERS: { before: string; link?: [string, string]; after?: string }[] = [
  { before: 'Wil je alleen fitter worden? Word dan lid. Dat is goedkoper en het werkt.' },
  { before: 'Werk je liever in een groep? Kijk dan naar ', link: ['Momentum', '/momentum'], after: '.' },
  {
    before: 'Draait je vraag om je resultaten als leider? Dan past ',
    link: ['Leiderschap 1 op 1', '/zakelijk/leiderschap-1-op-1'],
    after: '.',
  },
  { before: 'Stuurt iemand anders je, en wil je zelf eigenlijk niet? Kom dan terug als je er zelf voor kiest.' },
]

export const IMPACT_QUOTE = {
  text: 'Al 40 kilo minder en heel wat ander zwaar gedoe van me afgeschud. Ik ga letterlijk en figuurlijk lichter door het leven.',
  name: 'René',
  role: 'deelnemer Impact',
  image: '/images/foto-impact-rene.jpg',
  alt: 'René, deelnemer van Impact, zwart-witportret',
}

export const IMPACT_SCHEDULE = [
  'Maandag 19.30–20.30',
  'Dinsdag 10.00–11.00',
  'Donderdag 19.30–20.30',
  'Vrijdag 09.00–10.00',
] as const
export const IMPACT_SCHEDULE_NOTE = 'Je kiest er twee per week'

export const IMPACT_START = ['Je start zodra het jou en ons uitkomt', 'Twaalf weken, van nulmeting tot eindmeting'] as const
export const IMPACT_START_NOTE = 'Zonder wachtlijst'

export const IMPACT_FAQ = [
  {
    question: 'Het gaat eigenlijk best goed met me. Is Impact dan iets voor mij?',
    answer:
      'Ja. Juist als het lekker loopt, wil je dat het zo blijft en wil je de volgende stap zetten. Daar hoeft geen probleem voor te zijn. En zit er eerst nog iets in de weg wat je wilt aanpakken? Dan beginnen we daar. Ook dan past Impact.',
  },
  {
    question: 'Wat is het verschil met Momentum?',
    answer:
      'Momentum doe je in een groep, met een vaste start en een vaste opbouw. Bij Impact heb je een eigen coach en draait alles om jouw situatie. Je start zodra het jou en ons uitkomt.',
  },
  {
    question: 'Wat is het verschil met Leiderschap 1 op 1?',
    answer:
      'Impact gaat over jou. Leiderschap 1 op 1 gaat over wat je als leider voor elkaar krijgt. Bij Impact draait het om jou als mens: je energie, je lijf, en wat je doet als het te veel wordt. Thuis en op je werk. Leiderschap 1 op 1 draait om je resultaten als leider: je doelen halen op een manier die werkbaar is, voor jou en voor je team. Daar is geen vaste route voor. Twijfel je? In het kennismakingsgesprek zoeken we het samen uit.',
  },
  {
    question: 'Kan mijn werkgever meebetalen?',
    answer: 'Ja, dat gebeurt vaak. Of en hoe we aan je werkgever terugkoppelen, spreken we samen af.',
  },
  {
    question: 'Ik sport al een poos niet meer. Kan ik meedoen?',
    answer: 'Ja. Je traint op je eigen niveau. Heb je een blessure of klachten, dan bespreken we dat in de kennismaking.',
  },
  {
    question: 'Ik zit thuis met een burn-out. Kan ik meedoen?',
    answer:
      'Ja. We beginnen waar jij staat, in jouw tempo. Ben je onder behandeling, dan kunnen we afstemmen met je arts of bedrijfsarts. Meestal loopt dat via jou.',
  },
  {
    question: 'Wat als ik een training mis?',
    answer: 'Dan zoeken we een ander moment. Dat kan een andere Impact-training zijn, of een training uit het gewone rooster.',
  },
  {
    question: 'Wat kost Impact?',
    answer:
      'Impact is een serieuze investering. Wat het precies kost hoor je in het kennismakingsgesprek, ruim voordat je iets beslist. Hierboven lees je wat je ervoor terugkrijgt.',
  },
] as const

export const IMPACT_SLOT =
  'Een kennismaking van een uur met Yvonne of Engbert-Jan. Waar sta je nu, en waar wil je over twaalf weken staan? Past het, dan starten we zodra het jou en ons uitkomt. We hanteren geen wachtlijst. Past het niet, dan zeggen we dat.'
