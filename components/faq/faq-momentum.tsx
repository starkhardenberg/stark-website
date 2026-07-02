import Link from 'next/link'
import type { FaqItem } from './FaqList'
import { MOMENTUM_NEXT_START_LABEL } from '@/lib/momentum-dates'

export const momentumFaq: FaqItem[] = [
  {
    question: 'Moet ik al fit zijn om mee te doen?',
    answer:
      'Nee. We trainen op jouw niveau. Het gaat om wat je in tien weken in beweging zet, niet om hoe sterk je binnenkomt.',
  },
  {
    question: 'Is dit vooral fysiek of vooral mentaal?',
    answer:
      'Allebei. Juist die combinatie werkt. Het fysieke maakt het mentale voelbaar en daardoor blijft het hangen.',
  },
  {
    question: 'Wat als ik bang ben dat ik weer afhaak?',
    answer:
      'Dat is precies waar Momentum over gaat. We werken met de patronen waardoor je afhaakt, in een groep die je vasthoudt.',
  },
  {
    question: 'Moet ik al lid zijn bij STARK?',
    answer:
      'Nee. Momentum kun je volgen zonder lid te zijn. In een kennismaking bespreken we waar je staat en wat je nodig hebt.',
  },
  {
    question: 'Wat zijn kosten, locatie en startdatum?',
    answer: `${MOMENTUM_NEXT_START_LABEL} Trainen en coaching bij STARK in Hardenberg. Kosten en tijdsinvestering per week bespreken we concreet in de kennismaking.`,
  },
  {
    question: 'Kan mijn werkgever dit regelen of vergoeden?',
    answer: (
      <>
        Dat kan. Sommige werkgevers zetten Momentum in via de arbodienst of een vitaliteitsbudget. Wil je het
        voor een heel team, kijk dan op{' '}
        <Link href="/zakelijk#momentum-teams">Momentum @ Werk</Link>. Wil je zelf meedoen en denk je dat je
        werk kan bijdragen, stuur ons een bericht dan denken we mee.
      </>
    ),
  },
]
