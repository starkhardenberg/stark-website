import Link from 'next/link'
import type { FaqItem } from './FaqList'

export const coachingFaq: FaqItem[] = [
  {
    question: 'Wanneer heb je wat aan coaching?',
    answer:
      'Als je weet wat je zou moeten veranderen, maar het op de momenten die tellen niet lukt. Als sporten of praten op zich het nog niet heeft opgelost. En als je bereid bent eerlijk te kijken naar wat je doet en wat je overslaat. Twijfel je? Dat bespreken we in het kennismakingsgesprek.',
  },
  {
    question: 'Wat is het verschil tussen Momentum en Impact?',
    answer:
      'Momentum is een groepsprogramma van tien weken, fysiek en mentaal. Impact is een individueel traject van twaalf weken met maximale persoonlijke aandacht. Je begint waar jij staat.',
  },
  {
    question: 'Wat maakt jullie coaching anders dan die van anderen?',
    answer:
      'Meestal weet je wel wat je moet doen om iets voor elkaar te krijgen. Dat het moeten doen moeilijk of oncomfortabel voelt, houdt je tegen om het echt te doen. Onze coaching richt zich op de shift in wie je bent op het moment dat je het doet. Wie je bent bepaalt namelijk wat je doet, en dat bepaalt je resultaat. Bij ons horen lijf en hoofd bij elkaar: training en coaching in één traject, met coaches die je patronen herkennen en je scherp houden op de vloer. Kleine groepen, korte lijntjes, en coaches die naast je staan.',
  },
  {
    question: 'Wat gaan we doen tijdens een coaching sessie?',
    answer:
      'We stellen scherpe vragen en spiegelen wat je doet en wat je vermijdt. Dat koppelen we aan wat er op de vloer gebeurt: bewegen, uitdagen, doorzetten als het even tegenzit. Bij Momentum in de groep, bij Impact 1-op-1 met alle aandacht voor jou.',
  },
  {
    question: "Krijg ik bij jullie kant-en-klare schema's voor maaltijden?",
    answer:
      'Kant-en-klare dieetplannen of maaltijdschema\'s horen niet bij hoe wij werken. Als voeding voor jou speelt, nemen we dat mee in je traject, op een manier die past bij je eigen leven en die jij kunt volhouden.',
  },
  {
    question: 'Wat kost coaching en wat zit erin?',
    answer:
      'Coaching bij STARK! is een serieuze investering. Wat het precies kost hangt af van je traject. Dat hoor je in het kennismakingsgesprek, ruim voordat je iets beslist. Hierboven lees je wat je ervoor terugkrijgt.',
  },
  {
    question: 'Kan mijn werkgever dit vergoeden?',
    answer: (
      <>
        Dat kan. Sommige werkgevers zetten Impact of Momentum in via de arbodienst of een vitaliteitsbudget.
        Wil je het voor een heel team, kijk dan op{' '}
        <Link href="/zakelijk#momentum-teams">Momentum @ Werk</Link>. Wil je zelf meedoen en denk je dat je
        werk kan bijdragen, stuur ons een bericht dan denken we mee.
      </>
    ),
    schemaAnswer:
      'Dat kan. Sommige werkgevers zetten Impact of Momentum in via de arbodienst of een vitaliteitsbudget. Wil je het voor een heel team, kijk dan op Momentum @ Werk. Wil je zelf meedoen en denk je dat je werk kan bijdragen, stuur ons een bericht dan denken we mee.',
  },
  {
    question: 'Hoe start ik?',
    answer:
      'Plan een vrijblijvend kennismakingsgesprek. In een uur bespreken we waar je staat, wat je wilt bereiken en welk traject daar het beste bij past.',
  },
]
