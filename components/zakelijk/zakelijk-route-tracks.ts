import type { AanbodTrack } from '@/components/aanbod/aanbod-tracks'

/** Twee hoofdroutes op /zakelijk — zelfde rijstructuur als coaching. */
export const zakelijkRouteTracks: AanbodTrack[] = [
  {
    id: 'ondernemers',
    num: '01',
    cat: 'Ondernemers',
    mediaLabel: 'Ondernemers',
    photo: 'foto-zakelijk-tegel-ondernemers-sled.jpg',
    photoAlt: 'Solo sled pull training bij STARK! Hardenberg',
    photoObjectPosition: 'center 28%',
    photoHoverColor: false,
    eyebrow: 'Eigenaar / directeur',
    readMoreHref: '/zakelijk/ondernemers',
    readMoreLabel: 'Voor ondernemers',
    light: true,
    menu: [
      {
        label: 'Past bij jou als',
        text: 'Je eigenaar of directeur bent van je eigen bedrijf, en er dingen blijven liggen die jij als enige kunt oplossen.',
      },
      {
        label: 'Zo werkt het',
        text: 'We beginnen bij jou. Drie maanden, één op één. Daarna je leidinggevenden, daarna je ploeg.',
      },
      {
        label: 'Wat zit erin',
        text: 'Twee keer per week trainen, wekelijks een gesprek, en één ding per week dat gedaan moet zijn.',
      },
      {
        label: 'Start',
        text: 'Eén gesprek waarin we uitrekenen wat het je kost dat het blijft liggen.',
      },
      {
        label: 'Daarna',
        text: 'Je leidinggevenden en je team, groep voor groep.',
      },
    ],
  },
  {
    id: 'werkgevers',
    num: '02',
    cat: 'Werkgevers',
    mediaLabel: 'Werkgevers',
    photo: 'foto-zakelijk-tegel-werkgevers-groep.jpg',
    photoAlt: 'Groepsgesprek aan tafel bij STARK! Hardenberg',
    photoObjectPosition: 'center 40%',
    photoHoverColor: false,
    eyebrow: 'Organisatie met HR',
    readMoreHref: '/zakelijk/werkgevers',
    readMoreLabel: 'Voor werkgevers',
    light: true,
    menu: [
      {
        label: 'Past bij jou als',
        text: 'Je organisatie meerdere teams of afdelingen heeft, en je ziet dat mensen op de rand zitten.',
      },
      {
        label: 'Zo werkt het',
        text: 'We beginnen op één afdeling. Tien weken, een groep van vijf tot twaalf, meting bij de start en aan het eind.',
      },
      {
        label: 'Wat zit erin',
        text: 'Twee keer per week trainen, groepscoaching, en een geanonimiseerde groepsrapportage.',
      },
      {
        label: 'Start',
        text: 'Eén pilotgroep. Werkt het, dan is die groep je bewijs voor de volgende afdeling.',
      },
      {
        label: 'Daarna',
        text: 'De volgende afdeling, en een eventueel vervolg wat past bij wat er nodig is.',
      },
    ],
  },
]
