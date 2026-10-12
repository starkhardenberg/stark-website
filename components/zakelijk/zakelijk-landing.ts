/**
 * Zakelijk: alle teksten van de zakelijke landingspagina /zakelijk (de ondernemerspagina).
 * Lezer: de eigenaar of directeur. Het begint bij de leiding; daarna komen de mensen (Momentum @ Werk).
 * Goedgekeurd door Yvonne op 29 september 2026.
 * De kop "Vitaliteit begint niet bij de medewerker" en de slotregel "niet andersom" zijn een bewuste uitzondering op de regel zonder tegenstellingen.
 * Teksten hier aanpassen, niet in de opmaak.
 */

import { L1O1_PROEF, L1O1_SLOT } from '@/components/dienst/leiderschap-1-op-1'

export const ZAKELIJK_META = {
  title: 'Leiderschap en teamcoaching in Hardenberg | Zakelijk | STARK!',
  description:
    'Voor eigenaren en directeuren in Hardenberg en omgeving. Coaching en training voor jou en je team bij STARK!. Het begint bij de leiding.',
}

export const ZAKELIJK_HERO = {
  lead: 'Sterker in lijf',
  punch: 'en werk',
  sub: 'Dat levert tijd,\u00A0geld\u00A0en\u00A0energie',
}

/* ---------- intro ---------- */

export const ZAKELIJK_INTRO = {
  /** Twee regels. Het woord `mark` in regel 1 krijgt de bestaande accentstijl (zoals nu "niet"). */
  titleLine1: 'Vitaliteit begint niet',
  titleMark: 'niet',
  titleLine2: 'bij de medewerker',
  opener:
    'Vitaliteit is in veel bedrijven een sportabonnement, een workshop of een cursus stressmanagement. Wij beginnen een laag lager, bij hoe het werk loopt:',
  scenes: [
    'Maandagochtend, half negen. Je loopt binnen. De planning staat. Je teamleider heeft de twee open vragen van vrijdag al beantwoord, en zegt het als je koffie haalt.',
    'Om tien uur zit je met je MT. Een afspraak die niet gehaald is, wordt genoemd, en er ligt meteen een nieuwe. Er wordt gelachen. Om elf uur ben je klaar. De rest van de ochtend is voor de klant die je al drie weken wilt bellen.',
    'Woensdag ben je een dag weg. Je telefoon blijft rustig.',
  ],
  after:
    'Dat begint bij hoe er wordt geleid en samengewerkt. Precies daar werken wij, met de eigenaar, het MT, de teamleiders en het kantoor.',
  closeLine1: 'Het regent van boven naar beneden',
  closeLine2: 'Dus beginnen we bij jou, niet andersom',
}

/* ---------- hoe we werken ---------- */

export const ZAKELIJK_WERK = {
  title: 'Hoe we werken',
  lead: 'Bij STARK! leer je zo te leiden dat je mensen weten wat er moet gebeuren, het toezeggen en het ook doen.',
  beats: [
    {
      title: 'Wat die week speelde',
      text: 'In de coaching werken we met wat die week speelde. Wat is er gedaan van wat was afgesproken? Wie is er aangesproken, en wie nog niet? Bij wie komt het werk terecht? Wie loopt hard, en wie kan er een tandje bij?',
      mark: 'Dat maken we zichtbaar.',
    },
    {
      title: 'Mensen die de afspraken nakomen',
      text: 'Wat zichtbaar is, zetten we op scherp. Daar maken we afspraken over. Daarna leren mensen te doen wat nodig is om die afspraken na te komen. Ook als er druk op de ketel staat, en ook als het iets is wat ze nog nooit gedaan hebben. Loopt een afspraak anders, dan wordt dat gezegd. Wie het hoort, neemt het aan zonder het persoonlijk te maken, en zet het recht. Zo komt in beweging wat stilstond.',
      mark: 'Zo worden afspraken nagekomen, ook als het spannend wordt.',
    },
    {
      title: 'In de trainingszaal toets je het',
      text: 'Wat we in de coaching bespreken, oefen je in de training. Als je intensief traint is binnen tien seconden zichtbaar wat je doet als het zwaar wordt: doorzetten, inhouden, wegkijken, of precies dat ene setje meer. Datzelfde laat je maandagochtend op kantoor zien. Daarom trainen we. Om te oefenen met wie je bent als het spannend wordt. Fitter worden hoort erbij.',
      mark: 'Op kantoor duurt het maanden voordat iemand het benoemt.',
    },
  ],
}

/* ---------- ingangen ---------- */

export const ZAKELIJK_INGANGEN = {
  titleLine1: 'Alleen jij',
  titleLine2: 'of jij en je mensen',
  /** Eén regel onder de twee tegels. link = [linktekst, href]. */
  volgorde: {
    before: 'Leiding op orde? Dan zijn je mensen aan de beurt: ',
    link: ['Momentum @ Werk', '/zakelijk/duurzame-inzetbaarheid'] as [string, string],
    after: '',
  },
}

/* ---------- hoe het begint ---------- */

export const ZAKELIJK_START = {
  title: 'Zo begin je',
  lead: L1O1_PROEF.lead,
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
