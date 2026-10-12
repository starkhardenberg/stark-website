/**
 * Momentum @ Werk: alle teksten van de dienstenpagina /zakelijk/duurzame-inzetbaarheid.
 * Lezer: HR of directie (de koper), niet de deelnemer.
 * Goedgekeurd door Yvonne op 29 september 2026.
 * Teksten hier aanpassen, niet in de opmaak.
 */

export const MAW_META = {
  title: 'Vitaliteit en duurzame inzetbaarheid in Hardenberg | Momentum @ Werk | STARK!',
  description:
    'Momentum @ Werk: tien weken trainen en coaching voor je medewerkers bij STARK! in Hardenberg. Vitaliteit en duurzame inzetbaarheid, met een meting voor en na.',
}

export const MAW_HERO = {
  word: 'Momentum @ Werk',
  line: 'Jouw mensen: sterk in hun werk',
  image: '/images/foto-momentum-at-werk-hero.jpg',
  alt: 'Deelnemer trekt een sled bij STARK! Hardenberg, met een coach op de achtergrond',
}

/* ---------- 01 ---------- */

export const MAW_INTRO = {
  title: 'Wat zit er in je mensen?',
  scenes: [
    'Een collega legt zijn verbeteridee eindelijk op tafel',
    'Iemand spreekt een ander aan op een gemiste afspraak en doet dit op een rustige en gepaste manier',
    'Iemand zegt een keer nee zodat hij eerst zijn eigen klus kan afmaken',
    'Na een drukke week is er thuis nog energie over',
    'Bij een fout zegt iemand meteen: “Dit was ik. Zo los ik het op.”',
  ],
  prose: [
    'Wat je mensen aankunnen, kan je bedrijf aan. In een nieuwe machine investeer je zonder te twijfelen. Hij moet aankunnen wat er gevraagd wordt. Voor je mensen geldt hetzelfde. In nagenoeg elk bedrijf zit nog ruimte om te groeien voor dat wat er nu nog niet uitkomt.',
    'Wie sterk is in zijn lijf en hoofd, kan aan wat het werk vraagt. Met werkdruk, met een collega die boos wordt, met een maandag die anders loopt dan gepland.',
  ],
  proseStrong: 'Momentum @ Werk is tien weken, voor vijf tot tien collega’s uit je bedrijf.',
  proseAfterStrong:
    'Ze trainen samen bij STARK! in Hardenberg en krijgen coaching op wat ze in hun werk willen bereiken. Iedere deelnemer boekt één resultaat op het werk: iets wat hij tot nu toe steeds voor zich uit schoof.',
  close: ['Jij investeert in je mensen.', 'Zij laten zien wat erin zit.'],
}

/* ---------- 02 ---------- */

export const MAW_PARTS = [
  {
    title: 'Trainen',
    text: 'Vijftien trainingen van een uur, met Mark, Anne en Els. De ene week twee, de andere week één. Elke training komt er een moment waarop het zwaar wordt. Daar zie je wat iemand doet. Doorzetten, inhouden, afhaken. Dat doen je mensen op het werk ook. Hier zien ze het gebeuren, en oefenen ze iets anders. Niemand hoeft al sporter te zijn. Iedereen kan meedoen.',
  },
  {
    title: 'Coaching',
    text: 'Om de week zit de groep twee uur met Yvonne als coach. Vijf sessies over verantwoordelijkheid nemen, afspraken maken en doen wat je zegt. In elke sessie zit een fysieke uitdaging, want lijf en hoofd staan niet los van elkaar. Wie zich krachtig voelt, maakt krachtige keuzes. Na elke sessie gaat iedereen met een opdracht aan de slag in zijn eigen werkweek.',
  },
  {
    title: 'Het resultaat',
    text: 'Bij de start kiest elke deelnemer één resultaat dat hij in tien weken op het werk boekt. Iets wat al een tijd blijft liggen, en dat verschil maakt in wat hij voor elkaar krijgt, of in het plezier in zijn werk. Een collega aanspreken op een afspraak. Een verbeteridee op tafel leggen. Een keer nee zeggen tegen extra werk. En hij kiest een fysiek doel. Sterker worden in een oefening, sneller worden, spiermassa opbouwen of werken aan een gezond gewicht. Na tien weken is allebei gehaald of niet. Zo simpel is het.',
  },
  {
    title: 'Meten',
    text: 'Voor de start is er een intake met onze coaches. Daarin bepalen we welk resultaat iemand op zijn werk wil oppakken, en welk fysiek resultaat hij wil halen. We doen een nulmeting: hoe hij zijn eigen werkvermogen inschat (de Work Ability Index). Na tien weken volgt een afsluitend gesprek. Daarin bespreken we wat er gehaald is, en leggen we dat vast. We meten de Work Ability Index opnieuw, zodat het verschil met de nulmeting zichtbaar is.',
  },
] as const

export const MAW_AFSLUITER =
  'Tien weken samen trainen en coachen. Je mensen staan daarna steviger, in hun lijf en in hun hoofd, ook als het werk veel van ze vraagt.'

/* ---------- 03 ---------- */

export const MAW_WIE = [
  {
    strong: 'Collega’s uit je eigen bedrijf.',
    text: 'Vijf tot tien mensen, uit hetzelfde team of van verschillende afdelingen door elkaar. Mensen die in hun werk een stap willen zetten.',
  },
  {
    strong: 'Ze kiezen er zelf voor.',
    text: 'Samen met jou bedenken we hoe we je mensen mee krijgen. We laten zien waar ze nu staan, en wat dat ze kost. Wie meedoet, weet waarom.',
  },
  {
    strong: 'Wat in de groep gezegd wordt, blijft daar.',
    text: 'De directeur en de leidinggevenden zitten niet in deze groep. Daardoor durven mensen te zeggen hoe het echt gaat.',
  },
] as const

export const MAW_WIE_CLOSE = '10 weken samen trainen, ieder met een eigen resultaat.'

/** Rijtje "Soms past iets anders beter". link = optioneel: [linktekst, href]. */
export const MAW_ANDERS: { before: string; link?: [string, string]; after?: string }[] = [
  {
    before: 'Wil je dat je leidinggevenden de volgende stap zetten? Dan past het ',
    link: ['zakelijk traject', '/zakelijk/traject'],
    after: '.',
  },
  {
    before: 'Loopt één medewerker nu vast, of zit hij thuis? Dan past ',
    link: ['Impact', '/impact'],
    after: '.',
  },
  {
    before:
      'Willen je mensen alleen fitter en sterker worden? Dan kunnen ze lid worden bij STARK!. We praten graag over wat jullie als werkgever daaraan kunnen bijdragen.',
  },
]

/* ---------- quote ---------- */

export const MAW_QUOTE = {
  text: 'Balans is niet iets wat je vindt, het is iets wat je creëert.',
  name: 'Jana Kingsford',
  role: '',
  image: '/images/foto-momentum-at-werk-quote.jpg',
  alt: 'Door een turnring zie je het STARK!-bord in de zaal in Hardenberg',
}

/* ---------- 04 ---------- */

export const MAW_TERUG = {
  title: 'Wat je terugkrijgt',
  intro:
    'Je investeert in je mensen. Dan wil je weten wat het oplevert. Daarom meten we, en koppelen we terug in een rapport en een gesprek.',
  listTitle: 'In het rapport',
  list: [
    'De Work Ability Index, voor en na',
    'Hoeveel deelnemers hun resultaat op het werk boekten',
    'Hoeveel deelnemers hun fysieke doel haalden',
    'De opkomst',
    'Thema’s die bij de organisatie liggen, zoals het rooster of de bezetting. Die melden we al halverwege',
  ],
  note: 'Over één persoon koppelen we nooit iets terug. Ook niet als het goed gaat, en ook niet als je erom vraagt. Daardoor hebben je mensen er echt iets aan.',
  close: 'Na 10 weken weet je wat het je mensen heeft opgeleverd.',
}

/* ---------- 05 Praktisch ---------- */

export const MAW_OPZET = [
  'Tien weken bij STARK! in Hardenberg',
  'Vijf tot tien collega’s per groep',
  'Tijden in overleg met jullie',
  'In werktijd of in eigen tijd: dat bepalen jullie zelf',
] as const

/** Stappen na de kennismaking. De kennismaking zelf staat in het slot. */
export const MAW_VERLOOP = [
  'Samen brengen we in kaart om welke mensen het gaat en wat we gaan doen om de mensen mee te krijgen',
  'Je krijgt een offerte',
  'We plannen wanneer we wat gaan doen',
  'Onze coaches doen de intake',
  'De eerste training vindt plaats',
] as const
export const MAW_VERLOOP_NOTE = 'Reken op ongeveer zes weken tussen akkoord en start.'

export const MAW_DAARNA = [
  'Je mensen blijven trainen bij STARK!. Wie dat betaalt, spreken we samen af',
  'Een volgende groep uit je bedrijf',
] as const

/* ---------- 06 FAQ ---------- */

export const MAW_FAQ = [
  {
    question: 'Het gaat goed in ons bedrijf. Is dit dan iets voor ons?',
    answer:
      'Ja. Er hoeft niet van alles mis te zijn. Momentum @ Werk is voor bedrijven die de volgende stap willen zetten. Je wilt dat je mensen hun werk aankunnen, ook als het meer van ze vraagt.',
  },
  {
    question: 'Kan het uit het budget voor vitaliteit of duurzame inzetbaarheid?',
    answer:
      'Dat verschilt per organisatie. We denken graag mee. De eigenaar, de controller, de accountant of de arbodienst beslist.',
  },
  {
    question: 'Krijgen wij informatie over individuele medewerkers?',
    answer:
      'Nee. Je krijgt een rapport over de groep, zonder namen. Over één persoon koppelen we nooit iets terug. Ook niet als het goed gaat.',
  },
  {
    question: 'Moeten onze mensen al sporten?',
    answer:
      'Nee. Iedereen traint op zijn eigen niveau. Blessures of klachten bespreken we in de intake.',
  },
  {
    question: 'Wat als er iets speelt in de organisatie zelf?',
    answer:
      'Dan zeggen we dat. Bijvoorbeeld over het rooster, de bezetting of de werkdruk. De thema’s die we zien spelen, melden en bespreken we.',
  },
  {
    question: 'Wat is de investering voor Momentum @ Werk?',
    answer:
      'Momentum @ Werk is een serieuze investering. Die hoor je in het kennismakingsgesprek, ruim voordat je iets beslist. Hierboven lees je wat je ervoor terugkrijgt.',
  },
] as const

/* ---------- 07 ---------- */

export const MAW_SLOT =
  'Een kennismaking van een uur met Yvonne en Engbert-Jan. Bij ons in Hardenberg of bij jullie op de zaak. Wat wil je voor je mensen bereiken, en past Momentum @ Werk daarbij? Past het niet, dan zeggen we dat.'
