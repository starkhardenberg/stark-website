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
    desc:
      'Een sterker lijf. Meer energie. Vertrouwen in wat je aankan.\n\nBij STARK draait functioneel trainen om jou: om jouw lijf, jouw niveau en jouw leven. Voor wie jong is, vroeger jong was en alles daartussenin.\n\nJe wordt fit door simpelweg te starten.',
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
    introLabel: 'Coaching bij STARK',
    readMoreHref: '/coaching',
    readMoreLabel: 'Lees meer over coaching',
    desc:
      'Een helder hoofd. Een lijf dat aankan wat je vraagt. Afspraken met jezelf die je nakomt.\n\nLijf en hoofd versterken elkaar. Daar werken onze coachingstrajecten aan. Of in een groep of één-op-één, met coaches die jouw patronen herkennen.\n\nBlijvende verandering, al binnen weken.',
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
    introLabel: 'Zakelijk bij STARK',
    readMoreHref: '/zakelijk',
    readMoreLabel: 'Lees meer over zakelijk',
    desc:
      'Sterkere mensen. Stevigere teams. Een bedrijf dat kan dealen met druk en uitdagingen.\n\nWe maken je mensen fysiek sterk en bouwen aan hun mentale weerbaarheid. Voor medewerkers die willen re-integreren, voor mensen die sterk willen blijven onder druk, of voor teams die klem zitten.\n\nEen fundament dat staat voor iedereen: mens, team en bedrijf.',
    cta: CTA_KENNISMAKING_LABEL,
    ctaHref: hrefKennismaking,
    light: true,
  },
]
