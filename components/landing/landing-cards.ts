import type { LandingServiceCardData } from './LandingServiceCard'
import { hrefContactAlgemeen, hrefTrainen, hrefWhatsAppKennismaking } from '@/lib/contact'
import { MOMENTUM_COACHING_START_LINE } from '@/lib/momentum-dates'

export const trainenCards: LandingServiceCardData[] = [
  {
    title: 'Volwassenen (vanaf 16 jaar)',
    image: 'foto-trainen-landingspagina.png',
    imageAlt: 'Volwassenen tijdens een groepsles bij STARK! Hardenberg',
    objectPosition: '85% center',
    menu: [
      {
        label: 'Voor wie',
        text: 'Volwassenen vanaf 16 jaar. Beginner, al langer bezig, of ergens daartussen: je traint op eigen niveau in een vaste groep.',
      },
      {
        label: 'Doel',
        text: 'Sterker, fitter en met meer energie door je week. Meer dan toegang tot een gym: je wordt onderdeel van een groep die elkaar kent en verder helpt.',
      },
      {
        label: 'Wat je krijgt',
        bullets: [
          'Alle groepslessen (kracht, conditie, functionele fitness)',
          'Begeleiding op jou en je techniek',
          'Twee keer per week of onbeperkt',
          'Jaarlijks een incheckgesprek + ledenkorting op clinics',
        ],
      },
      {
        label: 'Hoe starten',
        parts: [
          'Plan een kennismaking via ',
          { href: hrefWhatsAppKennismaking, label: 'WhatsApp', external: true },
          ' of het ',
          { href: hrefContactAlgemeen, label: 'contactformulier' },
          '. Iedereen start met het Startpakket: een nulmeting van je lijf en een basiscursus trainen bij STARK! Daarna word je lid.',
        ],
      },
    ],
  },
  {
    title: 'ZilverFitness (vanaf 55 jaar)',
    image: 'foto-vrouw-55-lachen.jpg',
    imageAlt: 'ZilverFitness deelnemer bij STARK! Hardenberg',
    objectPosition: 'center 10%',
    menu: [
      {
        label: 'Voor wie',
        text: '55-plussers die fit en zelfredzaam willen blijven. Ook na een periode van weinig bewegen.',
      },
      {
        label: 'Doel',
        text: 'Zo lang mogelijk alles blijven doen wat jij zelf wilt doen. Kracht, balans en mobiliteit.',
      },
      {
        label: 'Wat je krijgt',
        text: 'Training specifiek voor 55+, veilige opbouw op jouw niveau, ledenkorting op clinics.',
      },
      {
        label: 'Hoe starten',
        text: 'Plan een proefles via',
        link: { href: 'https://www.zilverfitness.nl', label: 'www.zilverfitness.nl' },
      },
    ],
  },
  {
    title: 'Kids en Teens (5 - 16 jaar)',
    image: 'foto-kids-coaches-v3.png',
    imageAlt: 'Twee coaches in gesprek met kinderen bij STARK! Hardenberg',
    objectPosition: 'center 35%',
    kidsImage: true,
    menu: [
      {
        label: 'Voor wie',
        text: 'Kids 5–9, pre-teens 9–12 en teens 12–16. Per leeftijdsgroep eigen opbouw.',
      },
      {
        label: 'Doel',
        text: 'Sterk worden met plezier. Zelfvertrouwen in je lijf, zonder prestatiedruk.',
      },
      {
        label: 'Wat je krijgt',
        text: 'Kracht, coördinatie en balans. Samenwerken en omgaan met winst en verlies.',
      },
      {
        label: 'Hoe starten',
        parts: [
          'Stuur ons een berichtje via ',
          { href: hrefWhatsAppKennismaking, label: 'WhatsApp', external: true },
          ' of het ',
          { href: hrefContactAlgemeen, label: 'contactformulier' },
          '. Neem je kind mee, kom kennismaken en direct proberen. Twee proeflessen zijn gratis en daarna beslis je.',
        ],
      },
    ],
  },
]

export const momentumCards: LandingServiceCardData[] = [
  {
    title: 'Fysieke training',
    image: 'foto-coaching-samen.jpg',
    imageAlt: 'Deelnemer midden in een zware oefening tijdens Momentum bij STARK! Hardenberg',
    objectPosition: 'center 40%',
    menu: [
      {
        label: 'Past bij jou als',
        text: 'Je verder komt in een groep die je scherp houdt. Je wilt tempo, groepsdruk en het gevoel dat je er niet alleen voor staat.',
      },
      {
        label: 'Zo werkt het',
        text: '10 weken, vaste startdata. Max. 10 deelnemers, iedereen loopt hetzelfde programma. Coaching gebeurt in de groep.',
      },
      {
        label: 'Wat zit erin',
        text: '20 uur fysieke training. Sterker worden in je lijf en tegelijk je mindset trainen op het moment dat het zwaar wordt.',
      },
    ],
  },
  {
    title: 'Groepscoaching',
    image: 'foto-coaching-moment.jpg',
    imageAlt: 'Coachingsmoment tijdens Momentum bij STARK! Hardenberg',
    objectPosition: 'center 24%',
    inverted: true,
    menu: [
      {
        label: 'Zo werkt het',
        text: 'Vijf sessies van twee uur waarin je patronen leert herkennen en doorbreken. Niet praten over mindset op een stoel — oefenen onder druk.',
      },
      {
        label: 'Wat zit erin',
        text: '10 uur groepscoaching. Tijdens een intensieve work-out hoor je je stemmetjes precies wanneer het zwaar wordt. Daar leer je ze vervangen door gedachten die je verder helpen.',
      },
    ],
  },
  {
    title: 'Challenges',
    image: 'foto-coaching-tegel-momentum.png',
    imageAlt: 'Groep in gesprek tijdens Momentum bij STARK! Hardenberg',
    objectPosition: 'center 35%',
    menu: [
      {
        label: 'Wat zit erin',
        text: '5 mentale en fysieke challenges. Oefenen op het moment dat je normaal uitwijkt. Juist daar gebeurt de doorbraak.',
      },
      {
        label: 'Start',
        text: 'Plan een kennismaking. Daarna instappen op vaste startdata.',
      },
      {
        label: 'Daarna',
        text: 'Als alumni blijf je scherp met Impact+. Je traint verder in onze reguliere groepen.',
      },
    ],
  },
]

export const impactCards: LandingServiceCardData[] = [
  {
    title: 'Startpakket',
    image: 'foto-coaching-moment.jpg',
    imageAlt: 'Coachingsmoment bij STARK! Hardenberg',
    objectPosition: 'center 24%',
    menu: [
      {
        label: 'Past bij jou als',
        text: 'Je wilt maximale persoonlijke aandacht en bent bereid twaalf weken vol in te gaan. Jouw situatie vraagt om maatwerk, niet om een vaste groepsdynamiek.',
      },
      {
        label: 'Zo werkt het',
        text: 'Impact begint altijd met het Startpakket: vier 1-op-1 sessies voor een nulmeting en een persoonlijk plan.',
      },
      {
        label: 'Wat zit erin',
        text: 'Vier sessies om te meten waar je nu staat. Van daaruit bouwen we een plan dat past bij jou — niet bij een standaard template.',
      },
    ],
  },
  {
    title: 'Training in kleine groep',
    image: 'foto-vrouw-kettlebell.jpg',
    imageAlt: 'Vrouw met kettlebell bij STARK! Hardenberg',
    objectPosition: 'center center',
    inverted: true,
    menu: [
      {
        label: 'Zo werkt het',
        text: '12 weken, doorlopende instroom. Max. 5 per training. Twee keer per week in een vaste groep van maximaal vijf Impact-deelnemers.',
      },
      {
        label: 'Wat zit erin',
        text: 'Trainen in kleine groep. Geen anonieme zaal, maar een plek waar iedereen weet wie je bent.',
      },
    ],
  },
  {
    title: 'Persoonlijke coaching',
    image: 'foto-coaching-tegel-impact.png',
    imageAlt: 'Schrijven en reflecteren tijdens een coachingsessie bij STARK! Hardenberg',
    objectPosition: '50% 40%',
    menu: [
      {
        label: 'Wat zit erin',
        text: 'Wekelijks een uur 1-op-1 coaching, apart van de groep. Over wat er speelt, wat werkt en wat niet.',
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

export const coachingCards: LandingServiceCardData[] = [
  {
    title: 'Momentum',
    eyebrow: 'Traject in de groep · 10 weken',
    image: 'foto-coaching-tegel-momentum-gesprek.png',
    imageAlt: 'Groep in gesprek tijdens coaching bij STARK! Hardenberg',
    objectPosition: 'center 30%',
    imageFilter: 'grayscale(1) contrast(1.22) brightness(0.9)',
    detailHref: '/momentum',
    detailLabel: 'Bekijk de Momentum-pagina',
    detailAsPageLink: true,
    menu: [
      {
        label: 'Past bij jou als',
        text: 'Je verder komt in een groep die je scherp houdt. Je wilt tempo, groepsdruk en het gevoel dat je er niet alleen voor staat.',
      },
      {
        label: 'Zo werkt het',
        text: '10 weken, vaste startdata. Max. 10 deelnemers, iedereen loopt hetzelfde programma. Coaching gebeurt in de groep.',
      },
      {
        label: 'Wat zit erin',
        text: '20 trainingen, 10 uur groepscoaching en 5 challenges, mentaal én fysiek.',
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
    title: 'Impact',
    eyebrow: 'Traject 1-op-1 · 12 weken',
    image: 'foto-coaching-tegel-impact-gesprek.png',
    imageAlt: 'Coach corrigeert de vorm bij een kettlebell-oefening bij STARK! Hardenberg',
    objectPosition: '52% 38%',
    imageFilter: 'grayscale(1) contrast(1.22) brightness(0.9)',
    detailHref: '/impact',
    detailLabel: 'Bekijk de Impact-pagina',
    detailAsPageLink: true,
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

export const zakelijkCards: LandingServiceCardData[] = [
  {
    title: 'Momentum @ Werk',
    eyebrow: 'Preventief · in de groep',
    image: 'foto-fundament-tegel.png',
    imageAlt: 'Momentum @ Werk bij STARK! Hardenberg',
    objectPosition: 'center center',
    menu: [
      {
        label: 'Voor wie',
        text: 'Werkgevers die hun mensen fit én mentaal sterk willen houden. Vanaf 5 deelnemers.',
      },
      {
        label: 'Zo werkt het',
        parts: [
          'Hetzelfde ',
          { href: '/momentum', label: 'Momentum' },
          ' dat we particulier draaien, nu voor je medewerkers. Trainen en coaching in één.',
        ],
      },
      {
        label: 'Wat erin zit',
        text: '10 weken. 20 trainingen, 10 uur groepscoaching, 5 challenges. Max. 10 per groep.',
      },
      {
        label: 'Starten',
        text: 'Plan een gesprek. We bespreken opbouw, planning en deelnemers.',
      },
    ],
  },
  {
    title: 'Impact voor re-integratie',
    eyebrow: 'Herstel · 1-op-1 + groep',
    image: 'foto-reintegratie-tegel.png',
    imageAlt: 'Impact voor re-integratie bij STARK! Hardenberg',
    objectPosition: 'center center',
    inverted: true,
    menu: [
      {
        label: 'Voor wie',
        text: 'Werkgevers met een medewerker die is uitgevallen en stevig wil terugkomen.',
      },
      {
        label: 'Zo werkt het',
        parts: [
          'Ons ',
          { href: '/impact', label: 'Impact' },
          '-traject, ingezet voor terugkeer naar werk. Lijf en hoofd pak je samen aan, geen quick fix.',
        ],
      },
      {
        label: 'Wat erin zit',
        text: '12 weken. Training in een kleine groep plus wekelijks 1-op-1 coaching.',
      },
      {
        label: 'Starten',
        text: 'Loopt via de werkgever. Vaak inzetbaar vanuit het arbobudget.',
      },
    ],
  },
  {
    title: 'Fundament voor starke teams',
    eyebrow: 'Maatwerk',
    image: 'foto-teamtraject-tegel.png',
    imageAlt: 'Fundament voor starke teams bij STARK! Hardenberg',
    objectPosition: 'center center',
    menu: [
      {
        label: 'Voor wie',
        text: 'Teams die vastlopen en waar een standaardpakket niet past.',
      },
      {
        label: 'Zo werkt het',
        text: 'Eerst kijken wat er speelt, dan pas trainen. We leggen het fundament onder een team dat staat.',
      },
      {
        label: 'Wat erin zit',
        text: 'Nulmeting, teambijeenkomsten en 1-op-1 coaching waar nodig. Duur in overleg.',
      },
      {
        label: 'Starten',
        text: 'Plan een gesprek. We brengen samen in kaart wat nodig is.',
      },
    ],
  },
]
