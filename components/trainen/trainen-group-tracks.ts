import type { AanbodTrack } from '@/components/aanbod/aanbod-tracks'
import { hrefKennismaking, hrefWhatsAppKennismaking } from '@/lib/contact'

/** Groepstegels op /trainen — zelfde card-systeem als homepage-aanbod. */
export const trainenGroupTracks: AanbodTrack[] = [
  {
    id: 'volwassenen',
    num: '01',
    cat: 'Volwassenen',
    mediaLabel: 'Volwassenen',
    photo: 'foto-trainen-landingspagina.png',
    photoAlt: 'Volwassenen tijdens een groepsles bij STARK! Hardenberg',
    photoObjectPosition: '85% center',
    light: true,
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
          ' of op de ',
          { href: hrefKennismaking, label: 'kennismakingspagina' },
          '. Iedereen start met het Startpakket: een nulmeting van je lijf en een basiscursus trainen bij STARK! Daarna word je lid.',
        ],
      },
    ],
  },
  {
    id: 'zilverfitness',
    num: '02',
    cat: 'ZilverFitness',
    mediaLabel: 'ZilverFitness',
    photo: 'foto-vrouw-55-lachen.jpg',
    photoAlt: 'ZilverFitness deelnemer bij STARK! Hardenberg',
    photoObjectPosition: 'center 10%',
    light: true,
    menu: [
      {
        label: 'Voor wie',
        text: '55-plussers die fit en zelfredzaam willen blijven.\nOok na een periode van weinig bewegen.',
      },
      {
        label: 'Doel',
        text: 'Zo lang mogelijk alles blijven doen wat jij zelf wilt doen.\nKracht, balans en mobiliteit.',
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
    id: 'kids-teens',
    num: '03',
    cat: 'Kids & Teens',
    mediaLabel: 'Kids & Teens',
    photo: 'foto-kids-coaches-v3.png',
    photoAlt: 'Twee coaches in gesprek met kinderen bij STARK! Hardenberg',
    photoObjectPosition: 'center 35%',
    light: true,
    menu: [
      {
        label: 'Voor wie',
        text: 'Kids 5–9, pre-teens 9–12 en teens 12–16.\nPer leeftijdsgroep eigen opbouw.',
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
          ' of plan een ',
          { href: hrefKennismaking, label: 'kennismaking' },
          '. Neem je kind mee, kom kennismaken en direct proberen. Twee proeflessen zijn gratis en daarna beslis je.',
        ],
      },
    ],
  },
]
