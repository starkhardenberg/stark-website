import styles from './OverSection.module.css'

export default function OverSection() {
  return (
    <section className={styles.over} id="over" aria-label="Wie wij zijn">
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.headingCol}>
            <p className={styles.eyebrow}>Wie wij zijn</p>
            <h2 className={styles.heading}>
              <span className={styles.headingLine}>Weg van huus,</span>{' '}
              <span className={styles.headingLine}>en toch thuus.</span>
            </h2>
          </div>

          <div className={styles.copyCol}>
            <p className={styles.body}>
              Al onze trainers begonnen ooit zelf bij STARK! Als deelnemer, als sporter, soms met
              tegenzin. Ze weten hoe de eerste training voelt.
            </p>
            <p className={styles.body}>
              Daarom begeleiden ze zonder poespas, mét een arm om je schouder als het nodig is.
              Intern opgeleid: theorie, stage, opdrachten en feedback. Zo dragen ze de STARK!-aanpak
              echt uit.
            </p>
            <p className={styles.body}>
              Negen vaste gezichten, korte lijntjes. Iemand die weet waar je staat en regelmatig bij
              je incheckt.
            </p>
            <p className={styles.body}>
              Sinds 2013 hebben we ruim 200 mensen verder geholpen. Hard werken en hard lachen gaan
              hier hand in hand.
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
