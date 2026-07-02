import styles from './OverSection.module.css'

export default function OverSection() {
  return (
    <section className={styles.over} id="over" aria-label="Wie wij zijn">
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.headingCol}>
            <p className={styles.eyebrow}>Wie wij zijn</p>
            <h2 className={styles.heading}>
              <span className={styles.headingLine}>Weg van huus,</span>
              <span className={styles.headingLine}>en toch thuus.</span>
            </h2>
          </div>

          <div className={styles.copyCol}>
            <p className={styles.body}>
              Negen trainers die stuk voor stuk ooit gestart zijn in één van onze coachingprogramma&apos;s
              of als sportend lid. Hierdoor heeft het team onze aanpak aan den lijve ervaren en weten ze
              hoe het is om te starten, omdat ze ooit zelf op dat punt stonden.
            </p>
            <p className={styles.body}>
              Onze trainers zijn intern opgeleid: theorie, stage, opdrachten en feedback. Zodat ze de
              STARK trainingsaanpak volledig eigen hebben gemaakt.
            </p>
            <p className={styles.body}>
              Het draait om jou en jouw doel. Daarom houden we de lijntjes kort en checken we
              regelmatig bij je in. En is er altijd een vast gezicht dat weet waar je staat.
            </p>
            <p className={styles.body}>
              Je komt hier voor jezelf, en toch doen we het samen. Hard werken, hard lachen gaan bij
              ons hand in hand.
            </p>
            <p className={styles.body}>Wees welkom.</p>

            <a className={styles.teamCta} href="/team">
              Ontmoet het hele team
              <span className={styles.teamCtaArrow} aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
