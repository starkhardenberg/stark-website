import Image from 'next/image'
import styles from './OverSection.module.css'

export default function OverSection() {
  return (
    <section className={styles.over} id="over">
      <div className={styles.grid}>

        <div className={styles.imgWrap}>
          <Image
            src="/images/team.jpg"
            alt="Het team van STARK! Hardenberg"
            fill
            sizes="(min-width: 900px) 56vw, 100vw"
            className={styles.img}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>Wie wij zijn</p>

          <h2 className={styles.heading}>
            <span className={styles.headingLine}>Weg van huus,</span>
            <span className={styles.headingLine}>en toch thuus.</span>
          </h2>

          <p className={styles.body}>
            Wij zijn het team van STARK! Hardenberg.
          </p>
          <p className={styles.body}>
            Negen trainers die stuk voor stuk ooit gestart zijn in één van onze coachingprogramma&apos;s of als sportend lid. Hierdoor heeft het team onze aanpak aan den lijve ervaren en weten ze hoe het is om te starten, omdat ze ooit zelf op dat punt stonden.
          </p>
          <p className={styles.body}>
            Onze trainers zijn intern opgeleid: theorie, stage, opdrachten en feedback. Zodat ze de STARK! trainingsaanpak volledig eigen hebben gemaakt.
          </p>
          <p className={styles.body}>
            Het draait om jou en jouw doel. Daarom houden we de lijntjes kort en checken we regelmatig bij je in. En is er altijd een vast gezicht dat weet waar je staat.
          </p>
          <p className={styles.body}>
            Je komt hier voor jezelf, en toch doen we het samen. Hard werken, hard lachen gaan bij ons hand in hand.
          </p>
          <p className={styles.body}>
            Wees welkom.
          </p>

          <div className={styles.people}>
            <div className={styles.person}>
              <p className={styles.personName}>Engbert-Jan</p>
              <p className={styles.personRole}>Eigenaar, coach en trainer</p>
              <p className={styles.personQuote}>
                Het allermooiste is als mensen durven vertrouwen op mijn coaching en het lukt.
              </p>
            </div>
            <div className={styles.person}>
              <p className={styles.personName}>Yvonne</p>
              <p className={styles.personRole}>Eigenaar, coach en trainer</p>
              <p className={styles.personQuote}>
                Niets is onmogelijk. Dat mensen te laten ervaren, zowel in hoofd als in hun lijf is goud!
              </p>
            </div>
          </div>

          <a className={styles.teamCta} href="/team">
            Alle 11 gezichten en ons ontstaan
            <span className={styles.teamCtaArrow} aria-hidden>→</span>
          </a>
        </div>

      </div>
    </section>
  )
}
