import type { LandingServiceCardData } from './LandingServiceCard'
import { hrefTrainen, hrefWhatsAppKennismaking } from '@/lib/contact'

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
          { href: hrefTrainen, label: 'contactformulier' },
          '. Neem je kind mee, kom kennismaken en direct proberen. Twee proeflessen zijn gratis en daarna beslis je.',
        ],
      },
    ],
  },
]

export const coachingCards: LandingServiceCardData[] = [
  {
    title: 'Momentum',
    image: 'foto-coaching-tegel-momentum.png',
    imageAlt: 'Groep in gesprek tijdens coaching bij STARK! Hardenberg',
    objectPosition: 'center 35%',
    detailHref: '/momentum',
    detailLabel: 'Lees meer over Momentum',
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
        text: 'Plan een kennismaking. Daarna instappen op vaste startdata.',
      },
      {
        label: 'Daarna',
        text: 'Als alumni blijf je scherp met Impact+. Je traint verder in onze reguliere groepen.',
      },
    ],
  },
  {
    title: 'Impact',
    image: 'foto-coaching-tegel-impact.png',
    imageAlt: 'Coachingsgesprek bij STARK! Hardenberg',
    objectPosition: '42% center',
    inverted: true,
    detailHref: '/impact',
    detailLabel: 'Lees meer over Impact',
    menu: [
      {
        label: 'Past bij jou als',
        text: 'Je wilt maximale persoonlijke aandacht en bent bereid 12 weken vol in te gaan. Jouw situatie vraagt om maatwerk, niet om een vaste groepsdynamiek.',
      },
      {
        label: 'Zo werkt het',
        text: '12 weken, doorlopende instroom. Max. 5 per training, plus elk week een uur 1-op-1 coaching apart van de groep.',
      },
      {
        label: 'Wat zit erin',
        text: 'Startpakket, 2× per week trainen in kleine groep, en wekelijks persoonlijke coaching.',
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
    title: 'Fundament',
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
    title: 'Re-integreren',
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
    title: 'Starke teams',
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
