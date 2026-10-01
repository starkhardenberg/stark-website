import {
  CTA_KENNISMAKING_LABEL,
  hrefKennismaking,
} from '@/lib/contact'
import type { MenuRow } from '@/components/landing/LandingServiceCard'

export type AanbodTrack = {
  id: string
  num: string
  cat: string
  photo: string
  photoAlt: string
  photoObjectPosition?: string
  /** Optionele zoom (object-fit cover) om randen weg te snijden, bijv. 1.3 */
  photoScale?: number
  /** transform-origin voor de zoom, bijv. '28% 40%' */
  photoScaleOrigin?: string
  /** Zwart-wit filter op de foto (zakelijk-tegels) */
  photoGrayscale?: boolean
  /** Foto kleurt bij hover. Standaard aan als er een landing-link is. */
  photoHoverColor?: boolean
  /** Label op de foto; overschrijft cat.toUpperCase() */
  mediaLabel?: string
  /** Tweede regel onder mediaLabel op de foto, bv. 'VOOR TEAMS' */
  mediaSubLabel?: string
  /** Titel in het panel (zakelijk-tegels) */
  panelTitle?: string
  /** Oranje foto-ondertitel + neutrale panel-eyebrow (zakelijk-tegels) */
  businessContext?: boolean
  introLabel?: string
  readMoreHref?: string
  readMoreLabel?: string
  /** Eyebrow boven menu-inhoud (zakelijk-tegels) */
  eyebrow?: string
  /** Gestructureerde tegel-inhoud i.p.v. desc-paragrafen */
  menu?: MenuRow[]
  desc?: string
  cta?: string
  ctaHref?: string
  light?: boolean
  /** Eén zin voor editorial route-band (homepage) */
  summary?: string
  /** Scanbare punten onder de hook (homepage bands) */
  highlights?: string[]
}

export const aanbodTracks: AanbodTrack[] = [
  {
    id: 'trainen',
    num: '01',
    cat: 'Trainen',
    photo: 'foto-trainen-squat.png',
    photoAlt: 'Deelnemer tijdens een squat in de groepsles bij STARK! Hardenberg',
    photoObjectPosition: 'center 78%',
    introLabel: 'TRAINING',
    readMoreHref: '/trainen',
    readMoreLabel: 'Lees meer over trainen',
    summary:
      'Functioneel trainen op jouw niveau. Laagdrempelig. Je hoeft alleen te beginnen.',
    highlights: [
      'Afwisselende workouts op jouw niveau en tempo',
      'Trainer naast je in de groep, ook als je lijf even tegenwerkt',
    ],
    desc:
      'Een sterker lijf. Meer energie. Vertrouwen in wat je aankan.\n\nBij STARK! draait functioneel trainen om jou: om jouw lijf, jouw niveau en jouw leven. Voor wie jong is, vroeger jong was en alles daartussenin.\n\nJe wordt fit door simpelweg te starten.',
    cta: CTA_KENNISMAKING_LABEL,
    ctaHref: hrefKennismaking,
    light: true,
  },
  {
    id: 'coaching',
    num: '02',
    cat: 'Coaching',
    photo: 'foto-coaching-impact.png',
    photoAlt: 'Coachingsgesprek bij STARK!',
    photoObjectPosition: 'center 16%',
    photoScale: 1.3,
    photoScaleOrigin: '28% 40%',
    introLabel: 'Coaching bij STARK!',
    readMoreHref: '/coaching',
    readMoreLabel: 'Lees meer over coaching',
    summary:
      'Trajecten die lijf en hoofd verbinden. Meer commitment, meer diepgang.',
    highlights: [
      'Lijf en hoofd in één traject',
      'In een groep of één-op-één',
      'Coaches die jouw patronen herkennen',
    ],
    desc:
      'Een helder hoofd. Een lijf dat aankan wat je vraagt. Afspraken met jezelf die je nakomt.\n\nLijf en hoofd versterken elkaar. Daar werken onze coachingstrajecten aan. Of in een groep of één-op-één, met coaches die jouw patronen herkennen.\n\nJe bouwt iets op wat je voor altijd meeneemt, ook na het traject.',
    cta: CTA_KENNISMAKING_LABEL,
    ctaHref: hrefKennismaking,
    light: true,
  },
  {
    id: 'bedrijven',
    num: '03',
    cat: 'Zakelijk',
    photo: 'foto-trainen-battle-rope.png',
    photoAlt:
      'Team in actie: battle ropes tijdens training bij STARK! Hardenberg, zwart-wit, kracht en samenwerking',
    photoObjectPosition: 'center 16%',
    introLabel: 'Zakelijk bij STARK!',
    readMoreHref: '/zakelijk',
    readMoreLabel: 'Lees meer over zakelijk',
    summary:
      'Sterke teams onder druk. Het meest intensieve traject, maatwerk op de werkvloer.',
    highlights: [
      'Fysiek sterk én mentaal weerbaar op de werkvloer',
      'Voor re-integratie, druk op het werk of teams die vastlopen',
      'Maatwerk voor mens, team en bedrijf',
    ],
    desc:
      'In de meeste bedrijven is vitaliteit een sportabonnement met korting. Wij beginnen een laag lager: bij hoe jij leidt.\n\nWat er in het leiderschap blijft liggen, zie je terug bij je mensen op de werkvloer. Dat bepaalt of ze hun werk gedaan krijgen, met energie en met plezier, of niet.\n\nVoor je medewerkers is er Momentum @ Werk. Tien weken om stevig te staan, met een sterk lijf en rust in de kop.',
    cta: CTA_KENNISMAKING_LABEL,
    ctaHref: hrefKennismaking,
    light: true,
  },
]
