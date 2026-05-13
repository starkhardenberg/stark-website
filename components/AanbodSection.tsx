import TrackItem from './TrackItem'
import { mailtoKennismaking } from '@/lib/contact'
import styles from './AanbodSection.module.css'

const tracks = [
  {
    id: 'trainen',
    num: '01',
    cat: 'Trainen',
    photo: 'foto-trainen-squat.png',
    photoAlt: 'Deelnemer tijdens een squat in de groepsles bij STARK! Hardenberg',
    photoObjectPosition: 'center 30%',
    showTiles: false,
    introLabel: 'Trainen bij STARK',
    readMoreHref: '/trainen',
    readMoreLabel: 'Lees meer over trainen',
    desc:
      'Een sterker lijf. Meer energie. Vertrouwen in wat je aankan, en daardoor blijven doen wat ertoe doet, vandaag en over twintig jaar.\n\nBij ons train je niet tussen apparaten in. Bij STARK is functioneel trainen pas écht functioneel als het werkt voor jouw lijf, jouw niveau en jouw leven. Niet voor de klok of de persoon naast je.\n\nMet een coach die met je mee kijkt en bijstuurt of uitdaagt waar dat past, voor wie jong is, vroeger jong was en alles daartussenin.\n\nNiet eerst fit zijn voordat je kunt starten. Wel fit worden dóór te starten.',

    routeOptions: [
      {
        title: 'Lidmaatschap volwassenen',
        desc: '',
        photo: 'foto-vrouw-slee.jpg',
        photoAlt: 'Training bij STARK!',
        objectPosition: 'top',
        href: '/lidmaatschap-volwassenen',
      },
      {
        title: 'ZilverFitness 55+',
        desc: '',
        photo: 'foto-vrouw-55-lachen.jpg',
        photoAlt: 'ZilverFitness bij STARK!',
        objectPosition: 'top',
        href: '/zilverfitness',
      },
      {
        title: 'Kids & Teens 5–16 jaar',
        desc: '',
        photo: 'foto-kids-kettlebell.jpg',
        photoAlt: 'Kids & Teens bij STARK!',
        objectPosition: 'center',
        href: '/kids-teens',
      },
    ],
    cta: 'Plan een kennismaking',
    ctaHref: mailtoKennismaking,
    light: false,
  },
  {
    id: 'coaching',
    num: '02',
    cat: 'Coaching',
    photo: 'foto-coaching-moment.jpg',
    photoAlt: 'Coachingsgesprek bij STARK!',
    introLabel: 'Coaching bij STARK',
    showTiles: false,
    readMoreHref: '/van-punt-a-naar-punt-b',
    readMoreLabel: 'Lees meer over coaching',
    desc:
      'Een helder hoofd. Een lijf dat aankan wat je vraagt. Afspraken met jezelf die je wél nakomt (en daardoor resultaat dat er voor jou toe doet).\n\nDat is waar onze coachingstrajecten naartoe werken. Lijf en hoofd samen, want het één werkt niet zonder het ander. In een groep of één-op-één, met coaches die patronen herkennen die jij allang niet meer ziet.\n\nGeen quick fix. Wel blijvende verandering, in weken, niet jaren.',
    routeOptions: [
      {
        title: 'Van punt A naar punt B',
        desc: '',
        photo: 'foto-vrouw-barbell.jpg',
        photoAlt: 'Online coaching bij STARK!',
        href: '/van-punt-a-naar-punt-b',
      },
      {
        title: 'Momentum',
        desc: '',
        photo: 'foto-groep-vloer.jpg',
        photoAlt: 'Momentum groepsprogramma bij STARK!',
        href: '/momentum',
      },
      {
        title: 'Impact persoonlijk traject',
        desc: '',
        photo: 'foto-coaching-moment.jpg',
        photoAlt: '1-op-1 coaching bij STARK!',
        objectPosition: '50% 20%',
        href: '/impact',
      },
    ],
    cta: 'Plan een kennismaking',
    ctaHref: mailtoKennismaking,
    light: true,
  },
  {
    id: 'bedrijven',
    num: '03',
    cat: 'Zakelijk',
    photo: 'foto-trainen-battle-rope.png',
    photoAlt:
      'Team in actie: battle ropes tijdens training bij STARK! Hardenberg, zwart-wit, kracht en samenwerking',
    photoObjectPosition: 'center 40%',
    showTiles: false,
    introLabel: 'Zakelijk bij STARK',
    readMoreHref: '/fundament-preventief',
    readMoreLabel: 'Lees meer over zakelijk',
    desc:
      'Sterkere mensen. Stevigere teams. Een bedrijf dat kan dealen met druk en uitdagingen (en daardoor doorpakt waar nodig).\n\nDaar werken we aan, samen met ondernemers en bedrijven. We maken je mensen fysiek sterk en bouwen aan hun mentale weerbaarheid. Voor medewerkers die willen re-integreren, voor mensen die niet wachten tot ze daadwerkelijk omvallen, of voor teams die klem zitten.\n\nGeen brandjes blussen. Wel een fundament dat staat, voor mens, team en bedrijf.',
    routeOptions: [
      {
        title: 'Fundament',
        desc: '',
        photo: 'foto-fundament-tegel.png',
        photoAlt: 'Fundament programma bij STARK!',
        href: '/fundament-preventief',
      },
      {
        title: 'Re-integratie',
        desc: '',
        photo: 'foto-reintegratie-tegel.png',
        photoAlt: 'Re-integratie bij STARK! Hardenberg',
        href: '/fundament-reintegratie',
      },
      {
        title: 'Teamtraject op maat',
        desc: '',
        photo: 'foto-teamtraject-tegel.png',
        photoAlt: 'Teamtraject op maat bij STARK!',
        grayscale: true,
        href: '/fundament-teamtraject',
      },
    ],
    cta: 'Plan een kennismaking',
    ctaHref: mailtoKennismaking,
    light: false,
  },
]

export default function AanbodSection() {
  return (
    <section className={styles.aanbod} id="aanbod">
      <div className={styles.tracks}>
        {tracks.map((track) => (
          <TrackItem key={track.id} track={track} />
        ))}
      </div>
    </section>
  )
}
