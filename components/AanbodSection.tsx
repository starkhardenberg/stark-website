import TrackItem from './TrackItem'
import styles from './AanbodSection.module.css'

const tracks = [
  {
    id: 'trainen',
    num: '01',
    cat: 'Trainen',
    photo: 'foto-groep-les.jpg',
    photoAlt: 'Groepsles bij STARK! Hardenberg',
    desc: 'Je wilt bewegen. Sterker worden. Meer energie. Maar je hoeft niet fit te zijn om te beginnen: elke training is op jouw niveau. Je begint gewoon waar jij bent, en wij zorgen dat je er verder mee komt. Geen zaaltje vol apparaten waar je zelf maar uitzoekt wat je doet. Wel groepslessen met coaches die jou écht zien. Iedereen start met vier 1-op-1 sessies zodat we weten wie jij bent en waar we op moeten letten om jou veilig en verantwoord te laten trainen. Als je consequent blijft komen, ga je resultaat zien op alle vlakken: sterker, fitter en beter voorbereid op het echte dagelijkse leven.',

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
    ctaHref: '#kennismaking',
    light: false,
  },
  {
    id: 'coaching',
    num: '02',
    cat: 'Coaching',
    photo: 'foto-coaching-moment.jpg',
    photoAlt: 'Coachingsgesprek bij STARK!',
    desc: 'Je weet wat je moet doen — maar het lukt je niet. Of je loopt vast en je wilt het echt graag anders. Dat is het moment waarop onze coachingstrajecten beginnen. We kijken naar lijf én hoofd, want ze hangen onlosmakelijk samen. Kleine groepen of één-op-één, met coaches die patronen zien die jij zelf niet meer ziet. Deelnemers aan Momentum en Impact rapporteren meer energie, meer richting en meer vertrouwen — niet na jaren, maar na weken. Geen quick fix. Wel blijvende verandering.',
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
    ctaHref: '#kennismaking',
    light: true,
  },
  {
    id: 'bedrijven',
    num: '03',
    cat: 'Bedrijven',
    photo: 'foto-coaching-samen.jpg',
    photoAlt: 'Teamtraining voor bedrijven bij STARK!',
    desc: 'Uitgevallen medewerkers kosten meer dan hun verzuim. Wij werken met bedrijven die verder kijken dan een ziekteverzuimcijfer: re-integratie die wél werkt, preventieve programma\'s die mensen weerbaarder maken, of een teamtraject dat de onderlinge verbinding versterkt. Fysiek én mentaal, want het een werkt niet zonder het ander.',
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
    ctaHref: '#kennismaking',
    light: false,
  },
]

export default function AanbodSection() {
  return (
    <section className={styles.aanbod} id="aanbod">
      <div className={styles.intro}>
        <span className={styles.label}>Het aanbod</span>
        <h2 className={styles.heading}>Kies je route.</h2>
        <p className={styles.sub}>
          Fysiek sterker, mentaal weerbaarder of beide tegelijk. Kies de route die past bij wat jij nu nodig hebt.
        </p>
      </div>

      <div className={styles.tracks}>
        {tracks.map((track) => (
          <TrackItem key={track.id} track={track} />
        ))}
      </div>
    </section>
  )
}
