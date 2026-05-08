import TrackItem from './TrackItem'
import styles from './AanbodSection.module.css'

const tracks = [
  {
    id: 'trainen',
    num: '01',
    cat: 'Trainen',
    photo: 'foto-groep-les.jpg',
    photoAlt: 'Groepsles bij STARK! Hardenberg',
    desc: 'Je wilt bewegen. Sterker worden. Meer energie. Maar je wilt vooral ook dat je goed begeleid wordt in je bewegingen. Dat is wat trainen bij STARK! is: groepslessen met echte coaching, geen zaaltje vol apparaten waar je zelf maar uitzoekt wat je doet. Iedereen begint met vier 1-op-1 sessies zodat we weten wie jij bent en waar we op moeten letten om jou veilig en verantwoord te laten trainen.',

    routeOptions: [
      {
        title: 'Lidmaatschap volwassenen',
        desc: 'Groepslessen met echte coaching. Twee keer per week of onbeperkt — jij bepaalt het tempo.',
        photo: 'foto-groep-les.jpg',
        photoAlt: 'Groepsles bij STARK!',
      },
      {
        title: 'ZilverFitness 55+',
        desc: 'Bewegen op jouw manier, met coaches die weten wat jouw lijf nodig heeft.',
        photo: 'foto-vrouw-55-lachen.jpg',
        photoAlt: 'ZilverFitness bij STARK!',
      },
      {
        title: 'Kids & Teens 5–16 jaar',
        desc: 'Sterk en zeker in je lijf, van jongs af aan. Veilig, leuk en met echte aandacht.',
        photo: 'foto-kids.jpg',
        photoAlt: 'Kids & Teens bij STARK!',
      },
    ],
    cta: 'Plan kennismakingsgesprek',
    ctaHref: '#kennismaking',
    light: false,
  },
  {
    id: 'coaching',
    num: '02',
    cat: 'Coaching',
    photo: 'foto-coaching-moment.jpg',
    photoAlt: 'Coachingsgesprek bij STARK!',
    desc: 'Je weet wat je moet doen — maar het lukt je niet. Of je loopt vast en je wilt het echt graag anders. Dat is het moment waarop onze coachingstrajecten beginnen. We kijken naar lijf én hoofd, want ze hangen onlosmakelijk samen. Kleine groepen, vaste coaches, en begeleiding die verder gaat dan een trainingsschema.',
    routeOptions: [
      {
        title: 'Van punt A naar punt B',
        desc: 'Online cursus op eigen tempo. Voor wie weet dat er iets moet veranderen maar niet weet hoe.',
        photo: 'foto-vrouw-barbell.jpg',
        photoAlt: 'Online coaching bij STARK!',
      },
      {
        title: 'Momentum',
        desc: 'Tien weken in een kleine groep. Samen werken aan gewoontes, energie en richting.',
        photo: 'foto-groep-vloer.jpg',
        photoAlt: 'Momentum groepsprogramma bij STARK!',
      },
      {
        title: 'Impact persoonlijk traject',
        desc: 'Twaalf weken volledig op jou afgestemd. Lijf én hoofd, met een vaste coach aan je zijde.',
        photo: 'foto-coaching-moment.jpg',
        photoAlt: '1-op-1 coaching bij STARK!',
      },
    ],
    cta: 'Plan kennismakingsgesprek',
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
        title: 'Fundament preventief programma',
        desc: 'Groepsprogramma van tien weken dat medewerkers weerbaarder maakt voordat ze uitvallen.',
        photo: 'foto-coaching-samen.jpg',
        photoAlt: 'Preventief programma bij STARK!',
      },
      {
        title: 'Fundament re-integratie',
        desc: 'Begeleiding op maat voor de medewerker die na ziekte terugkomt. Stap voor stap.',
        photo: 'foto-vrouw-kettlebell.jpg',
        photoAlt: 'Re-integratie bij STARK!',
      },
      {
        title: 'Fundament teamtraject op maat',
        desc: 'Volledig op maat voor jullie team. Fysiek sterker, mentaal meer verbonden.',
        photo: 'foto-groep-vloer.jpg',
        photoAlt: 'Teamtraject bij STARK!',
      },
    ],
    cta: 'Neem contact op',
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
