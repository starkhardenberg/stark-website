import type { AanbodTrack } from '@/components/aanbod/aanbod-tracks'
import { hrefZakelijk } from '@/lib/contact'

/** Twee gelijkwaardige routes op /zakelijk (ondernemerspagina). */
export const zakelijkSoloRoutes: AanbodTrack[] = [
  {
    id: 'alleen-jij',
    num: '01',
    cat: 'Alleen jij',
    mediaLabel: 'Alleen jij',
    photo: 'foto-zakelijk-tegel-ondernemers-sled.jpg',
    photoAlt: 'Solo training bij STARK! Hardenberg',
    photoObjectPosition: 'center 28%',
    photoHoverColor: false,
    eyebrow: 'Drie maanden, één op één',
    readMoreHref: hrefZakelijk,
    readMoreLabel: 'Plan een gesprek',
    light: true,
    menu: [
      {
        label: 'Vorm',
        text: 'Drie maanden, één op één. Trainen op onze vloer, en elke week een coachgesprek. Er zijn twee deuren naar binnen.',
      },
      {
        label: 'Wat je te doen hebt',
        text: 'Het werk dat al maanden blijft liggen, en het besluit dat je voor je uit schuift. Voor ondernemers, DGA\'s en ZZP\'ers.',
      },
      {
        label: 'Jezelf',
        text: 'Je energie, je gezondheid, je conditie. Hoe je erbij zit als je \'s avonds thuiskomt.',
      },
      {
        label: 'Daarna',
        text: 'Na drie maanden kijken we samen wat er nog te doen is. Soms is dat niets. Soms gaan we door. En soms komen je mensen erbij.',
      },
    ],
  },
  {
    id: 'jij-en-je-mensen',
    num: '02',
    cat: 'Jij en je mensen',
    mediaLabel: 'Jij en je mensen',
    photo: 'foto-zakelijk-tegel-werkgevers-groep.jpg',
    photoAlt: 'Groepsgesprek bij STARK! Hardenberg',
    photoObjectPosition: 'center 40%',
    photoHoverColor: false,
    eyebrow: 'Een jaar',
    panelTitle: 'Een jaar.',
    readMoreHref: hrefZakelijk,
    readMoreLabel: 'Plan een gesprek',
    light: true,
    menu: [
      {
        label: 'Vorm',
        text: 'Elke week coaching met je MT en middenkader. Elke week coaching met jou, apart. Over wat alles wat daar gebeurt van jou vraagt. Trainen op onze vloer in Hardenberg. Meten aan het begin, halverwege en aan het eind.',
      },
      {
        label: 'Daarna',
        text: 'Daarna je mensen op de vloer, in dezelfde vorm.',
      },
      {
        label: 'Prijs',
        text: 'Eén traject, één prijs. Jouw eigen coaching zit erin.',
      },
    ],
  },
]
