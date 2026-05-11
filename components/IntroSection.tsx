import styles from './IntroSection.module.css'

export default function IntroSection() {
  return (
    <section className={styles.intro} aria-label="Introductie STARK!">
      <div className={styles.inner}>
        <div className={styles.headingBlock}>
          <p className={styles.label}>Wi&apos;j bint STARK</p>

          <h2 className={styles.heading}>
            <span className={styles.lead}>Eigenwijs</span>
            <span className={styles.punch}>en overtuigd.</span>
          </h2>
        </div>

        <p className={styles.body}>
          Wij doen dingen anders. Want jij wilt weten waar je aan toe bent, geholpen worden op een eerlijke manier
          zonder poespas, en je wilt ervaren dat het je brengt wat je zoekt.
          Geen standaard sportschool, geen quick fix. Wij geloven dat trainen en coaching samen horen, met vaste
          gezichten en korte lijnen. Eigenwijs in onze aanpak, omdat wij weten wat werkt en daar niet omheen draaien.
        </p>

        <p className={styles.body}>
          Wij staan pal achter wat we zeggen. Consequent, eerlijk en met volle overtuiging. Een schop onder je kont
          terwijl we je hand vasthouden. Zo bouwen wij sterke mensen, in lijf én hoofd.
        </p>

        <p className={styles.body}>
          Het start altijd met een gesprek. Of je nou komt om alleen fysiek fitter en sterker te worden of omdat je
          wilt werken aan andere doelen. Want in een gesprek leer je elkaar kennen. En dat is het startpunt.
        </p>

        <a href="#aanbod" className={styles.cta}>
          Bekijk de routes
        </a>
      </div>
    </section>
  )
}
