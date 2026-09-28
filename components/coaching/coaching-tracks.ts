import type { AanbodTrack } from '@/components/aanbod/aanbod-tracks'
import { MOMENTUM_COACHING_START_LINE } from '@/lib/momentum-dates'

/** Traject-tegels op /coaching — zelfde card-systeem als homepage/trainen. */
export const coachingTracks: AanbodTrack[] = [
  {
    id: 'momentum',
    num: '01',
    cat: 'Momentum',
    mediaLabel: 'Momentum',
    photo: 'foto-coaching-tegel-momentum-gesprek.png',
    photoAlt: 'Groep in gesprek tijdens coaching bij STARK! Hardenberg',
    photoObjectPosition: 'center 30%',
    photoHoverColor: false,
    eyebrow: 'Traject in de groep · 10 weken',
    readMoreHref: '/momentum',
    readMoreLabel: 'Bekijk de Momentum-pagina',
    menu: [
      {
        label: 'Past bij jou als',
        text: 'Je hebt het al vaker geprobeerd en weet precies wat er moet gebeuren. Je zoekt geen schema, maar iemand die doorvraagt op het moment dat het schuurt.',
      },
      {
        label: 'Zo werkt het',
        text: '10 weken, vaste start en vaste eindstreep. Een vaste groep van 5 tot 12 mensen, geen instroom halverwege. Coaching gebeurt in de groep.',
      },
      {
        label: 'Wat zit erin',
        text: '20 trainingen op jouw niveau, 10 uur groepscoaching en 5 challenges. Elke week één ding dat gedaan moet zijn.',
      },
      {
        label: 'Start',
        text: MOMENTUM_COACHING_START_LINE,
      },
      {
        label: 'Daarna',
        text: 'Als alumni blijf je scherp met Impact+. Je traint verder in onze reguliere groepen.',
      },
    ],
  },
  {
    id: 'impact',
    num: '02',
    cat: 'Impact',
    mediaLabel: 'Impact',
    photo: 'foto-coaching-tegel-impact-gesprek.png',
    photoAlt: 'Coach corrigeert de vorm bij een kettlebell-oefening bij STARK! Hardenberg',
    photoObjectPosition: '52% 38%',
    photoHoverColor: false,
    eyebrow: 'Traject 1-op-1 · 12 weken',
    readMoreHref: '/impact',
    readMoreLabel: 'Bekijk de Impact-pagina',
    menu: [
      {
        label: 'Past bij jou als',
        text: 'Je wilt maximale persoonlijke aandacht en bent bereid twaalf weken vol in te gaan. Jouw situatie vraagt om maatwerk, niet om een vaste groepsdynamiek.',
      },
      {
        label: 'Zo werkt het',
        text: '12 weken, doorlopende instroom. Max. 5 per training, plus elke week een uur 1-op-1 coaching apart van de groep.',
      },
      {
        label: 'Wat zit erin',
        text: 'Startpakket (4 keer 1-op-1 sporten om de basis te leggen). Aansluitend 2× per week trainen in kleine groep en wekelijks persoonlijke coaching.',
      },
      {
        label: 'Start',
        text: 'Vrijblijvend kennismaken. Start wanneer het voor jou past.',
      },
      {
        label: 'Daarna',
        text: 'Als alumni blijf je scherp met Impact+. Je traint verder in onze reguliere groepen.',
      },
    ],
  },
]
