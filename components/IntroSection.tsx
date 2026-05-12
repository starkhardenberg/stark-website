import styles from './IntroSection.module.css'

export default function IntroSection() {
  return (
    <section className={styles.intro} aria-label="Introductie STARK!">
      <div className={styles.inner}>
        <div className={styles.headingBlock}>
          <p className={styles.label}>Wi&apos;j bint STARK</p>

          <h2 className={styles.heading}>
            <span className={styles.lead}>Wij doen het anders.</span>
          </h2>
        </div>

        <p className={styles.body}>
          Geen standaard sportschool. Geen quick fix. Wel vaste gezichten, korte lijnen en een aanpak zonder
          poespas.
        </p>

        <p className={styles.body}>
          Wij geloven dat trainen en coaching onlosmakelijk samengaan — en zijn eigenwijs genoeg om te doen wat écht
          werkt.
        </p>

        <p className={styles.body}>
          Een schop onder je kont, terwijl we je hand vasthouden. Consequent en met volle overtuiging. Zo bouwen we
          sterke mensen — in lijf én hoofd.
        </p>

        <p className={styles.body}>
          Nieuwsgierig naar meer? Het begint altijd met een gesprek. Want elkaar leren kennen, dát is het startpunt.
        </p>

        <div className={styles.ctaRow}>
          <a href="#kennismaking" className={`${styles.cta} ${styles.ctaFilled}`}>
            Plan een kennismaking
          </a>
          <a href="#aanbod" className={styles.cta}>
            Bekijk de routes
          </a>
        </div>
      </div>
    </section>
  )
}
