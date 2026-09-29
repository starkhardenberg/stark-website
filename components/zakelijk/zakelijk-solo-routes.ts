import type { AanbodTrack } from '@/components/aanbod/aanbod-tracks'
import { L1O1_TEGEL } from '@/components/dienst/leiderschap-1-op-1'

/** Drie ingangen op /zakelijk-v2. Zelfde tegelcomponent als trainen/coaching. */
export const zakelijkSoloRoutes: AanbodTrack[] = [
  {
    id: 'leiderschap-1-op-1',
    num: '01',
    cat: 'Leiderschap 1 op 1',
    mediaLabel: 'Leiderschap\n1 op 1',
    photo: 'foto-zakelijk-tegel-ondernemers-sled.jpg',
    photoAlt: 'Solo training bij STARK! Hardenberg',
    photoObjectPosition: 'center 28%',
    photoHoverColor: false,
    eyebrow: L1O1_TEGEL.eyebrow,
    readMoreHref: '/zakelijk/leiderschap-1-op-1',
    readMoreLabel: 'Lees verder',
    menu: L1O1_TEGEL.menu,
  },
  {
    id: 'jaartraject',
    num: '02',
    cat: 'Zakelijk traject',
    mediaLabel: 'Zakelijk traject',
    photo: 'foto-zakelijk-tegel-werkgevers-groep.jpg',
    photoAlt: 'Groepsgesprek bij STARK! Hardenberg',
    photoObjectPosition: 'center 40%',
    photoHoverColor: false,
    eyebrow: 'Team',
    readMoreHref: '/zakelijk/traject',
    readMoreLabel: 'Lees verder',
    menu: [
      {
        label: 'Past bij jou als',
        text: 'Je wilt dat het team weet wat er moet gebeuren, het toezegt en het ook doet. En jij gaat er zelf in mee.',
      },
      {
        label: 'Zo werkt het',
        text: 'Wekelijks een gesprek met jou, en wekelijks met het team over wat er die week speelt. Daartussen opdrachten over dat werk. En jullie trainen samen.',
      },
      {
        label: 'Wat zit erin',
        text: 'Jullie zien wat er bleef liggen, en zetten het diezelfde week recht. In de training zien jullie elkaar als het zwaar wordt. We beginnen bij het MT, de teamleiders of kantoor, en werken vandaaruit naar de mensen op de vloer.',
      },
    ],
  },
  {
    id: 'momentum-at-werk',
    num: '03',
    cat: 'Momentum @ Werk',
    mediaLabel: 'Momentum @ Werk',
    // Placeholder tot de eigen tegel-foto er is (zelfde stand-in als elders).
    photo: 'foto-fundament-tegel.png',
    photoAlt: 'Momentum @ Werk bij STARK! Hardenberg',
    photoObjectPosition: 'center center',
    photoHoverColor: false,
    eyebrow: 'Groep · 10 weken',
    readMoreHref: '/zakelijk/duurzame-inzetbaarheid',
    readMoreLabel: 'Lees verder',
    menu: [
      {
        label: 'Past bij jou als',
        text: 'Je wilt dat je mensen zichzelf staande houden terwijl het werk voller wordt, en je wilt weten of het werkt.',
      },
      {
        label: 'Zo werkt het',
        text: 'Tien weken, twee keer per week trainen, en om de week een langere sessie waarin coaching en fysieke uitdaging samenvallen. Vaste groep, vaste start, vaste eindstreep.',
      },
      {
        label: 'Wat zit erin',
        text: 'Iedere deelnemer benoemt bij de start één concrete situatie die hem energie kost. In week tien is die opgelost of niet. We meten voor en na, en je krijgt een geanonimiseerde rapportage over de groep. Nooit over een individu.',
      },
      {
        label: 'Hoe starten',
        text: 'Plan een kennismakingsgesprek. Minimaal vijf deelnemers per groep.',
      },
    ],
  },
]
