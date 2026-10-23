import type { AanbodTrack } from '@/components/aanbod/aanbod-tracks'
import { L1O1_TEGEL } from '@/components/dienst/leiderschap-1-op-1'
import { TRAJECT_TEGEL } from '@/components/dienst/zakelijk-traject'

/** Drie ingangen op /zakelijk. Zelfde tegelcomponent als trainen/coaching. */
export const zakelijkSoloRoutes: AanbodTrack[] = [
  {
    id: 'leiderschap-1-op-1',
    num: '01',
    cat: 'Leiderschap 1-op-1',
    mediaLabel: 'Alleen jij',
    mediaSubLabel: 'Leiderschap 1-op-1',
    photo: 'foto-zakelijk-tegel-ondernemers-sled.jpg',
    photoAlt: 'Solo training bij STARK! Hardenberg',
    photoObjectPosition: 'center 10%',
    photoHoverColor: false,
    eyebrow: L1O1_TEGEL.eyebrow,
    readMoreHref: '/zakelijk/leiderschap-1-op-1',
    readMoreLabel: 'Lees verder',
    menu: L1O1_TEGEL.menu,
  },
  {
    id: 'jaartraject',
    num: '02',
    cat: 'Draagkracht',
    mediaLabel: 'Jij en je team',
    mediaSubLabel: 'Draagkracht',
    photo: 'foto-zakelijk-tegel-werkgevers-groep.jpg',
    photoAlt: 'Groepsgesprek bij STARK! Hardenberg',
    photoObjectPosition: 'center 40%',
    photoHoverColor: false,
    eyebrow: TRAJECT_TEGEL.eyebrow,
    readMoreHref: '/zakelijk/draagkracht',
    readMoreLabel: 'Lees verder',
    menu: TRAJECT_TEGEL.menu,
  },
  {
    id: 'momentum-at-werk',
    num: '03',
    cat: 'Momentum @ Werk',
    mediaLabel: 'Je mensen',
    mediaSubLabel: 'Momentum @ Werk',
    photo: 'foto-momentum-at-werk-tegel.jpg',
    photoAlt: 'Een groep collega\'s traint samen bij STARK! Hardenberg',
    photoObjectPosition: 'center center',
    photoHoverColor: false,
    eyebrow: 'Tien weken',
    readMoreHref: '/zakelijk/duurzame-inzetbaarheid',
    readMoreLabel: 'Lees verder',
    menu: [
      {
        label: 'Past bij jou als',
        text: 'Eigenaar, directeur of HR. Je wilt dat je mensen sterk zijn in hun werk, in hun lijf en in hun hoofd. Los te boeken, of als vervolg op een leiderschapstraject.',
      },
      {
        label: 'Zo werkt het',
        text: "Vijf tot tien collega's uit je bedrijf. Vijftien trainingen en vijf coachingssessies van twee uur.",
      },
      {
        label: 'Wat zit erin',
        text: 'Iedere deelnemer boekt één resultaat op het werk en haalt een fysiek doel. Je krijgt een rapport met de Work Ability Index voor en na.',
      },
    ],
  },
]
