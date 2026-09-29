/**
 * Zakelijk: alle teksten van de zakelijke landingspagina /zakelijk (de ondernemerspagina).
 * Lezer: de eigenaar of directeur. Het begint bij de leiding; daarna komen de mensen (Momentum @ Werk).
 * Goedgekeurd door Yvonne op 29 september 2026.
 * De kop "Vitaliteit begint niet bij de medewerker" en de slotregel "niet andersom" zijn een bewuste uitzondering op de regel zonder tegenstellingen.
 * Teksten hier aanpassen, niet in de opmaak.
 */

import { BOOKINGS_URL } from '@/components/dienst/momentum'

export const ZAKELIJK_META = {
  title: 'Leiderschap en teamcoaching in Hardenberg | Zakelijk | STARK!',
  description:
    'Voor eigenaren en directeuren in Hardenberg en omgeving. Coaching en training voor jou en je team bij STARK!. Het begint bij de leiding.',
}

export const ZAKELIJK_HERO = {
  lead: 'Sterker in lijf',
  punch: 'en werk',
  sub: 'Begint bij ons',
}

/* ---------- intro ---------- */

export const ZAKELIJK_INTRO = {
  /** Twee regels. Het woord `mark` in regel 1 krijgt de bestaande accentstijl (zoals nu "niet"). */
  titleLine1: 'Vitaliteit begint niet',
  titleMark: 'niet',
  titleLine2: 'bij de medewerker',
  prose: [
    'Vitaliteit is in veel bedrijven een sportabonnement, een workshop of een cursus stressmanagement. Wij beginnen een laag lager: bij hoe het werk loopt. Daar zit wat mensen energie geeft, of energie kost.',
    'Hoe het werk loopt, zie je terug in tijd, geld en energie. Van iedereen, elke dag.',
    'Dat begint bij hoe er wordt geleid en samengewerkt. Precies daar werken wij, met de eigenaar, het MT en de teamleiders. Mensen die verantwoordelijk zijn voor anderen en daar sterker in willen worden.',
    'Is de leiding op orde, dan landt ook het aanbod om je mensen sterker en fitter te maken.',
  ],
  beats: [
    { id: '01', text: 'Afspraken die worden nagekomen.' },
    { id: '02', text: 'Werk dat in één keer goed gaat.' },
    { id: '03', text: 'Mensen die zelf besluiten nemen.' },
    { id: '04', text: 'Weten waar je aan toe bent.' },
  ],
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
  title: 'Hoe het begint',
  prose: [
    'Een kennismakingsgesprek van een uur. Bij ons of bij jou op de zaak, kosteloos en vrijblijvend.',
    'In het gesprek maken we samen zichtbaar wat het effect is van hoe het nu loopt.',
    'Of kom een keer meedoen. De Proef op de Som is een middag met mensen die in hun werk iets te trekken hebben: eigenaren, directeuren, MT-leden, teamleiders. Je maakt mee hoe we werken, met coaching en training, precies zoals in een traject.',
  ],
  highlight: 'Donderdag 5 november, van 15.00 tot 18.00 uur. Inclusief soep en broodjes. Kosteloos.',
  kennismaking: { label: 'Plan je kennismaking', href: BOOKINGS_URL },
  proef: { label: 'Meld je aan voor de Proef op de Som', href: 'https://proefopdesom.starkhardenberg.nl' },
}

/* ---------- footer ---------- */

export const ZAKELIJK_FOOTER = {
  statement: 'Koffie en verder praten?',
  statementMeta: 'Gratis gesprek · ~1 uur',
}
