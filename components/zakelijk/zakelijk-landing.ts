/**
 * Zakelijk: alle teksten van de zakelijke landingspagina /zakelijk (de ondernemerspagina).
 * Lezer: de eigenaar of directeur. Het begint bij de leiding; daarna komen de mensen (Momentum @ Werk).
 * Goedgekeurd door Yvonne op 29 september 2026.
 * De kop "Vitaliteit begint niet bij de medewerker" is een bewuste uitzondering op de regel zonder tegenstellingen.
 * Teksten hier aanpassen, niet in de opmaak.
 */

import { L1O1_PROEF, L1O1_SLOT } from '@/components/dienst/leiderschap-1-op-1'

export const ZAKELIJK_META = {
  title: 'Leiderschap en inzetbaarheid in Hardenberg | STARK! Wark',
  description:
    'Coaching en training voor bedrijven in Hardenberg. Leiderschap 1-op-1, Draagkracht voor jou en je team, en Momentum @ Werk voor je mensen.',
}

export const ZAKELIJK_HERO = {
  label: 'STARK! Wark',
  lead: 'Sterker in lijf',
  punch: 'en werk',
  sub: 'Dat levert tijd,\u00A0geld\u00A0en\u00A0energie',
}

export const ZAKELIJK_JUMPS = [
  { label: 'Leiderschap 1-op-1', href: '#leiderschap-1-op-1' },
  { label: 'Draagkracht', href: '#jaartraject' },
  { label: 'Momentum @ Werk', href: '#momentum-at-werk' },
]

/* ---------- intro ---------- */

export const ZAKELIJK_INTRO = {
  /** Twee regels. Het woord `mark` in regel 1 krijgt de bestaande accentstijl (zoals nu "niet"). */
  titleLine1: 'Vitaliteit begint niet',
  titleMark: 'niet',
  titleLine2: 'bij de medewerker',
  purpose:
    'STARK! Wark is ons werk met bedrijven. Ons doel: jullie halen de resultaten die je wilt halen, en iedereen in het bedrijf doet dat met energie en plezier.',
  opener:
    'Vitaliteit is in veel bedrijven een sportabonnement, een workshop of een cursus stressmanagement. Wij beginnen een laag lager, bij hoe het werk loopt:',
  scenes: [
    'Maandagochtend, half negen. Je loopt binnen. De planning is helder voor iedereen. Je teamleider heeft de twee open vragen van vrijdag al beantwoord, en zegt het als je koffie haalt.',
    'Om tien uur zit je met je MT. Een afspraak die niet gehaald is, wordt genoemd, en er ligt meteen een nieuwe. Er wordt gelachen. Om elf uur ben je klaar. De rest van de ochtend is voor de klant die je al drie weken wilt bellen.',
    'Woensdag ben je een dag weg. Je telefoon blijft rustig.',
  ],
  after:
    'Dat begint bij hoe er wordt geleid en samengewerkt. Precies daar werken wij, met de eigenaar, het MT, de teamleiders en het kantoor.',
  closeLine1: 'Het regent van boven naar beneden',
  closeLine2: 'Dus beginnen we bij jou, en nemen we je team mee',
  close: [
    'Wat de leiding doet, zie je terug op de vloer. Daarom begint het meeste resultaat bij leiderschap: bij jou, en bij je team.',
    'Daarna nemen we de vloer mee met Momentum @ Werk. Medewerkers werken daar aan hetzelfde: afspraken maken, verantwoordelijkheid nemen en doen wat je zegt. En ze worden sterker, in hun lijf en in hun hoofd.',
    'Momentum @ Werk kan ook los. Je mensen staan daarna steviger in hun werk. En wat bij de organisatie ligt, zoals het rooster of de bezetting, horen jullie al halverwege. Zo zie je waar de volgende stap ligt.',
  ],
}

/* ---------- hoe we werken ---------- */

export const ZAKELIJK_WERK = {
  title: 'Hoe we werken',
  lead: 'Bij STARK! leer je zo te leiden dat je mensen weten wat er moet gebeuren, het toezeggen en het ook doen.',
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
      title: 'Jij als eigenaar',
      text: [
        'Ondernemen kun je. Je ziet kansen, je maakt keuzes en je bouwt een bedrijf. Leiden is de volgende stap. Je neemt je mensen mee in wat je met het bedrijf wilt, je laat zien wat dat van hen vraagt, en je leert ze dat te doen. Mensen die weten waar je heen wilt en wat hun deel daarin is, willen voor je rennen.',
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
    question: 'Wat is het verschil tussen Leiderschap 1-op-1 en Draagkracht?',
    answer:
      'Bij Leiderschap 1-op-1 zet jij de stap als leider. Bij Draagkracht zet je team die stap met je mee, en heb je daarnaast je eigen coaching 1-op-1.',
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

export const ZAKELIJK_START = {
  title: 'Zo begin je',
  lead: 'Kom naar de Proef op de Som. Een middag bij STARK! in Hardenberg, met andere leiders uit de regio. Je ziet wat jouw manier van sturen doet met je bedrijf.',
  points: L1O1_PROEF.points,
  highlight: L1O1_PROEF.date,
  practical:
    'Kom in kleding waarin je kunt bewegen. Iedereen kan meedoen, ongeacht hoe fit of sterk je bent. Neem je MT of je teamleiders mee.',
  gesprekBefore: L1O1_SLOT.before,
  gesprekLink: L1O1_SLOT.link,
  gesprekAfter: L1O1_SLOT.rest,
  proef: { label: 'Meld je aan voor de Proef op de Som', href: 'https://proefopdesom.starkhardenberg.nl' },
  kennismakingHref: L1O1_SLOT.href,
}

/* ---------- footer ---------- */

export const ZAKELIJK_FOOTER = {
  statement: 'Koffie en verder praten?',
  statementMeta: 'Gratis gesprek · ~1 uur',
}
