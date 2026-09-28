import styles from './OverSection.module.css'

export default function OverSection() {
  return (
    <section className={styles.over} id="over" aria-label="Wie wij zijn">
      <div className={styles.inner}>
        <div className={styles.measure}>
          <header className={styles.banner}>
            <h2 className={styles.heading}>
              <span className={styles.headingLine}>Weg van huus,</span>
              <span className={styles.headingLine}>en toch thuus</span>
            </h2>
          </header>

          <div className={styles.copyCol}>
            <p className={styles.body}>
              Al onze trainers begonnen ooit zelf bij STARK! Sommigen kwamen om te sporten, anderen
              voor een coachingsprogramma, de één vol enthousiasme en de ander met frisse tegenzin.
              Ze weten dus precies hoe een eerste training voelt, en hoe het is om jezelf tegen te
              komen.
            </p>
            <p className={styles.body}>
              Daarna hebben we ze hier zelf opgeleid, met theorie, stage, opdrachten en veel
              feedback, zodat ze naast hun eigen ervaring ook het vak verstaan. En begeleiden doen
              ze zonder poespas, of zoals wij het zeggen: een schop onder je kont terwijl we je
              hand vasthouden.
            </p>
            <p className={styles.body}>
              Acht trainers, twee eigenaren en onze Tineke, die alles doet wat je pas mist als het
              er niet is. De lijntjes zijn kort, je kunt altijd bij ons terecht, en we weten waar
              je staat omdat we regelmatig bij je inchecken.
            </p>
            <p className={styles.body}>Wees welkom.</p>

            <a className={styles.teamCta} href="/team">
              Ontmoet het hele team
              <span className={styles.teamCtaArrow} aria-hidden>
                →
              </span>
            </a>

            <p className={`starkSectionMeta ${styles.signoff}`}>
              Een plek waar hard werken en hard lachen bij elkaar horen · Sinds 2013 ·
              Hardenberg
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
