import type { LandingServiceCardData } from './LandingServiceCard'
import { hrefTrainen, hrefWhatsAppKennismaking } from '@/lib/contact'

export const trainenCards: LandingServiceCardData[] = [
  {
    title: 'Volwassenen (vanaf 16 jaar)',
    image: 'foto-trainen-landingspagina.png',
    imageAlt: 'Volwassenen tijdens een groepsles bij STARK! Hardenberg',
    objectPosition: 'center 78%',
    menu: [
      {
        label: 'Voor wie',
        text: 'Volwassenen vanaf 16 jaar die het Startpakket hebben afgerond. Beginner, al langer bezig, of ergens daartussen: je traint op eigen niveau in een vaste groep.',
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
          { href: hrefTrainen, label: 'contactformulier' },
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
    inverted: true,
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
    image: 'foto-kids-kettlebell-v2.png',
    imageAlt: 'Kind met kettlebell tijdens training bij STARK! Hardenberg',
    objectPosition: 'center 18%',
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
          { href: hrefTrainen, label: 'contactformulier' },
          '. Neem je kind mee, kom kennismaken en direct proberen. Twee proeflessen zijn gratis en daarna beslis je.',
        ],
      },
    ],
  },
]

export const coachingCards: LandingServiceCardData[] = [
  {
    title: 'De Eerste Stap',
    image: 'foto-coaching-moment.jpg',
    imageAlt: 'Coachingmoment bij STARK! Hardenberg',
    objectPosition: 'center 40%',
    detailHref: '/de-eerste-stap',
    detailLabel: 'Lees meer over De Eerste Stap',
    menu: [
      {
        label: 'Voor wie',
        text: 'Iedereen die voelt dat er meer in zit, maar nog niet klaar is voor een heel traject. Geen lid of ervaring nodig.',
      },
      {
        label: 'Doel',
        text: 'In 60 minuten helder krijgen waar je staat, wat je werkelijk wil en wie je moet zijn om daar te komen.',
      },
      {
        label: 'Wat je krijgt',
        text: 'Een online sessie, een pakket per post met jouw eigen woorden, en een persoonlijk 1-op-1 gesprek.',
      },
      {
        label: 'Hoe starten',
        text: 'Start de sessie online, eenmalig €57. Daarna plan je je gesprek met Engbert-Jan of Yvonne.',
      },
    ],
  },
  {
    title: 'Momentum',
    image: 'foto-coaching-samen.jpg',
    imageAlt: 'Groepscoaching bij STARK! Hardenberg',
    objectPosition: 'center 30%',
    inverted: true,
    detailHref: '/momentum',
    detailLabel: 'Lees meer over Momentum',
    menu: [
      {
        label: 'Voor wie',
        text: 'Mensen die toe zijn aan blijvend resultaat en het samen willen doen. Maximaal 10 per groep.',
      },
      {
        label: 'Doel',
        text: 'Meer overtuiging, kracht en stappen zetten die voor jou belangrijk zijn. Samen verder dan alleen.',
      },
      {
        label: 'Wat je krijgt',
        text: '20 trainingen, 10 uur groepscoaching, 5 mentale en fysieke challenges.',
      },
      {
        label: 'Hoe starten',
        text: 'Plan een kennismaking. Instappen op vaste startdata.',
      },
    ],
  },
  {
    title: 'Impact',
    image: 'foto-coaching-impact.png',
    imageAlt: 'Persoonlijke coaching bij STARK! Hardenberg',
    objectPosition: 'center 7%',
    detailHref: '/impact',
    detailLabel: 'Lees meer over Impact',
    menu: [
      {
        label: 'Voor wie',
        text: 'Wie maximaal persoonlijke aandacht wil en bereid is drie maanden vol in te gaan.',
      },
      {
        label: 'Doel',
        text: 'Van A naar B komen: fysiek, mentaal en met volledige aandacht voor wat er bij jou speelt.',
      },
      {
        label: 'Wat je krijgt',
        text: 'Startpakket, 2x per week trainen (max. 5 deelnemers), wekelijks 1-op-1 coaching.',
      },
      {
        label: 'Hoe starten',
        text: 'Plan een vrijblijvend kennismakingsgesprek. Doorlopende instroom.',
      },
    ],
  },
]

export const zakelijkCards: LandingServiceCardData[] = [
  {
    title: 'Fundament preventief',
    image: 'foto-fundament-tegel.png',
    imageAlt: 'Preventief Fundament-programma bij STARK! Hardenberg',
    objectPosition: 'center center',
    menu: [
      {
        label: 'Voor wie',
        text: 'Werkgevers die structureel investeren in een groep medewerkers. Vanaf 5 deelnemers.',
      },
      {
        label: 'Doel',
        text: 'Fittere, weerbaardere medewerkers. Betere prestaties en minder verzuim op lange termijn.',
      },
      {
        label: 'Wat je krijgt',
        text: '10 weken: 20 trainingen, 10 uur groepscoaching en 5 challenges. Max. 10 per groep.',
      },
      {
        label: 'Hoe starten',
        text: 'Neem contact op voor een gesprek. We bespreken opbouw, planning en deelnemers.',
      },
    ],
  },
  {
    title: 'Fundament re-integratie',
    image: 'foto-reintegratie-tegel.png',
    imageAlt: 'Re-integratietraject bij STARK! Hardenberg',
    objectPosition: 'center center',
    inverted: true,
    menu: [
      {
        label: 'Voor wie',
        text: 'Werkgevers met een medewerker die is uitgevallen en begeleid wil terugkeren naar werk.',
      },
      {
        label: 'Doel',
        text: 'Duurzame terugkeer. Fysiek én mentaal herstel, geen oppervlakkige quick fix.',
      },
      {
        label: 'Wat je krijgt',
        text: 'Zelfde opbouw als Impact: 12 weken, training en 1-op-1 coaching gecombineerd.',
      },
      {
        label: 'Hoe starten',
        text: 'Contact via werkgever. Inzetbaar vanuit arbobudget waar mogelijk.',
      },
    ],
  },
  {
    title: 'Fundament teamtraject',
    image: 'foto-teamtraject-tegel.png',
    imageAlt: 'Teamtraject op maat bij STARK! Hardenberg',
    objectPosition: 'center center',
    menu: [
      {
        label: 'Voor wie',
        text: 'Teams waar een standaardpakket niet past en resultaten achterblijven om onderliggende redenen.',
      },
      {
        label: 'Doel',
        text: 'Het team versterken én de oorzaak aanpakken. Niet plakken, wel doorpakken.',
      },
      {
        label: 'Wat je krijgt',
        text: 'Gezamenlijke nulmeting, teambijeenkomsten en individuele coaching waar nodig.',
      },
      {
        label: 'Hoe starten',
        text: 'Plan een gesprek. We stellen een traject op maat samen.',
      },
    ],
  },
]
