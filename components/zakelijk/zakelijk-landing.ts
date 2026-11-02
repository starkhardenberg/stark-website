/**
 * Zakelijk: alle teksten van de zakelijke landingspagina /zakelijk (de ondernemerspagina).
 * Lezer: de eigenaar of directeur. Het begint bij de leiding; daarna komen de mensen (Momentum @ Werk).
 * Goedgekeurd door Yvonne op 29 september 2026.
 * De kop "Vitaliteit begint niet bij de medewerker" is een bewuste uitzondering op de regel zonder tegenstellingen.
 * Teksten hier aanpassen, niet in de opmaak.
 */

import { PROEF_EDITION, parseProefDate } from '@/components/dienst/leiderschap-1-op-1'
import { ADDRESS } from '@/lib/contact'

export const ZAKELIJK_META = {
  title: 'Leiderschap en inzetbaarheid in Hardenberg | STARK! Wark',
  description:
    'Coaching en training voor bedrijven in Hardenberg. Leiderschap 1-op-1, Draagkracht voor jou en je team, en Momentum @ Werk voor je mensen.',
}

export const ZAKELIJK_HERO = {
  lead: 'STARK!',
  punch: 'Wark',
  sub: 'Dat levert tijd,\u00A0geld\u00A0en\u00A0energie',
}

/* ---------- intro ---------- */

export const ZAKELIJK_INTRO = {
  /** Twee regels. Het woord `mark` in regel 1 krijgt de bestaande accentstijl (zoals nu "niet"). */
  titleLine1: 'Vitaliteit begint niet',
  titleMark: 'niet',
  titleLine2: 'bij de medewerker',
  scene: [
    {
      time: '08:30',
      text: 'Maandagochtend. Je loopt binnen. De planning is helder voor iedereen. De twee open vragen van vrijdag zijn al beantwoord. Je hoort het van je teamleider als je koffie haalt.',
    },
    {
      time: '10:00',
      text: 'Je zit met je MT. Een afspraak die niet gehaald is, wordt genoemd, en er ligt meteen een nieuwe. Er wordt gelachen.',
    },
    {
      time: '11:00',
      text: 'Je bent klaar. De rest van de ochtend is voor de klant die je al drie weken wilt bellen.',
    },
    {
      time: 'WOE',
      text: 'Woensdag ben je een dag weg. Je telefoon blijft rustig.',
    },
  ],
  pivotBefore: "Zo'n week begint niet bij ",
  pivotStrikes: ['een sportabonnement', 'een cursus stressmanagement', 'fruit op je werk'] as const,
  pivotJoin: [', ', ' of ', '.'],
  claim: [
    'Bij STARK! leer je zo leiden dat je mensen weten wat er moet gebeuren, het toezeggen en het doen. Met plezier en energie, en zonder dat jij alles zelf doet.',
    'Daarom starten wij op deze laag, bij hoe het werk loopt. Dat is STARK! Wark, ons werk met bedrijven. Dit komt terug op verschillende plekken in het bedrijf.',
  ],
  closeLine1: 'Het regent van boven naar beneden',
  closeLine2: 'Eerst jij.\nDan wie met je leidt.\nDan de vloer.',
  routesLead: [
    'Drie routes die op elkaar aansluiten',
    'en los van elkaar kunnen draaien.',
  ],
}

/* ---------- hoe we werken ---------- */

export const ZAKELIJK_WERK = {
  title: 'Hoe we werken',
  opening: [
    'In elk bedrijf wordt gewerkt zoals er gewerkt wordt. Dat is zo gegroeid, en zo is het de cultuur geworden. Een deel daarvan werkt. Een deel werkt tegen, en dat valt niemand meer op, omdat het normaal is. Zulke patronen doorbreken vraagt tijd en regelmaat. Daarom zien we je elke week, en daarom duurt een traject een langere tijd.',
    'We werken met Straight Line Leadership: leiden zonder omwegen. Wij hebben dat vertaald naar vier stappen die elke week terugkomen.',
  ],
  restart: 'De week erna begint het opnieuw',
  beats: [
    {
      label: 'Zichtbaar maken',
      title: 'Wat die week speelde',
      text: [
        'In de coaching werken we met wat die week speelde. Wat is er gedaan van wat was afgesproken? Wie is er aangesproken, en wie nog niet? Bij wie komt het werk terecht? Wie loopt hard, en wie kan er een tandje bij?',
        'Die week laat zien hoe het bedrijf is opgebouwd. Wordt de geplande omzet gehaald? Zitten de mensen op de juiste plek? Weet iedereen waar het bedrijf heen moet, en werkt iedereen daaraan? Elk bedrijf gaat daar op zijn eigen manier mee om. Die manier bepaalt wat van de grond komt.',
      ],
      mark: 'Dat maken we zichtbaar.',
    },
    {
      label: 'Afspreken',
      title: 'Mensen die de afspraken nakomen',
      text: 'Wat zichtbaar is, zetten we op scherp. Daar maken we afspraken over. Daarna leren mensen te doen wat nodig is om die afspraken na te komen. Ook als er druk op de ketel staat, en ook als het iets is wat ze nog nooit gedaan hebben. Loopt een afspraak anders, dan wordt dat gezegd. Wie het hoort, neemt het aan en zet het recht. Zo komt in beweging wat stilstond.',
      mark: 'Zo worden afspraken nagekomen, ook als het spannend wordt.',
    },
    {
      label: 'Leiden',
      title: 'Jij als leider',
      text: [
        'Leiden is zeggen waar je heen wilt, laten zien wat dat van je mensen vraagt, en ze leren dat te doen. Dat geldt voor de eigenaar, en net zo voor de teamleider op de vloer. Mensen die weten waar je heen wilt en wat hun deel daarin is, willen voor je rennen.',
        'Daarom heb je elke week een eigen gesprek. Daar gaat het over wat jij doet als een afspraak niet wordt nagekomen, wat je laat lopen, en waar je zelf in de weg zit. Wat je daar besluit, laat je de week erna zien aan je team.',
      ],
      mark: 'Leiden leer je door het te doen.',
    },
    {
      label: 'Toetsen',
      title: 'In de trainingszaal toets je het',
      text: 'Wat we in de coaching bespreken, oefen je in de training. Als je intensief traint, is binnen tien seconden zichtbaar wat je doet als het zwaar wordt: doorzetten, inhouden, wegkijken, of precies dat ene setje extra. Datzelfde laat je maandagochtend op kantoor zien. Daarom trainen we. Om te oefenen met wie je bent als het spannend wordt. Fitter worden hoort erbij.',
      mark: 'Op kantoor duurt het maanden voordat iemand het benoemt.',
    },
  ],
}

/* ---------- ingangen ---------- */

export const ZAKELIJK_INGANGEN = {
  titleLine1: 'Jij, je team',
  titleLine2: 'en je mensen',
}

/* ---------- goede vragen ---------- */

export const ZAKELIJK_FAQ = [
  {
    question: 'Waar begin ik?',
    answer:
      'Bij de Proef op de Som, een middag voor leiders uit de regio. Liever eerst een gesprek? Plan een kennismaking van een uur, bij jou of bij ons.',
  },
  {
    question: 'Wat is het verschil tussen Leiderschap\u00A01\u2011op\u20111 en Draagkracht?',
    answer:
      'Bij Leiderschap 1\u2011op\u20111 zet jij de stap als leider. Bij Draagkracht zet je team die stap met je mee, en heb je daarnaast je eigen coaching 1\u2011op\u20111.',
  },
  {
    question: 'Kan Momentum @ Werk ook los?',
    answer:
      'Ja. Je mensen staan daarna steviger in hun werk. En wat bij de organisatie ligt, zoals het rooster of de bezetting, horen jullie al halverwege.',
  },
  {
    question: 'Moeten we al sporten?',
    answer: 'Nee. Iedereen traint op zijn eigen niveau. Iedereen kan meedoen.',
  },
  {
    question: 'Wat kost het?',
    answer:
      'Dat hangt af van de looptijd en het aantal mensen. Na het kennismakingsgesprek krijg je een offerte op maat.',
  },
]

/* ---------- hoe het begint ---------- */

const proefNext = parseProefDate(PROEF_EDITION.dates[0])
const proefFollowing = PROEF_EDITION.dates[1] ?? ''

export const ZAKELIJK_START = {
  eyebrow: 'Zo begin je bij STARK! zakelijk',
  title: 'De Proef op de Som',
  introBefore:
    'Eén middag met andere leiders uit de regio. Je ziet wat jouw manier van leidinggeven je bedrijf kost aan tijd en geld. ',
  introStrong: 'Je gaat naar huis met één correctie die maandag al werkt.',
  when: PROEF_EDITION.when,
  where: `STARK! Hardenberg, ${ADDRESS.street}`,
  includedLead: 'Met',
  included: PROEF_EDITION.included,
  places: PROEF_EDITION.places,
  date: proefNext,
  nextEdition: proefFollowing,
  href: 'https://proefopdesom.starkhardenberg.nl',
  button: `Meld je aan voor ${proefNext.buttonWhen}`,
  columns: [
    {
      label: 'Voor wie',
      text: 'Eigenaren en directeuren. Neem je MT of je teamleiders mee.',
    },
    {
      label: 'Wat je doet',
      text: 'Een korte introductie, dan een fysieke opdracht met je eigen mensen. Je ziet jezelf doen wat je op de werkvloer ook doet. Iedereen kan meedoen, hoe fit je ook bent.',
    },
    {
      label: 'Wat het oplevert',
      text: 'Eén heldere correctie in je manier van werken. Klein genoeg om maandag door te voeren, merkbaar in je werkdag.',
    },
  ],
  meta: ['Kosteloos', 'Kleding waarin je kunt bewegen'],
}

/* ---------- footer ---------- */

export const ZAKELIJK_FOOTER = {
  statement: 'Koffie en verder praten?',
  statementMeta: 'Gratis gesprek · ~1 uur',
}
