import styles from './KennismakingSection.module.css'

export default function KennismakingSection() {
  return (
    <section className={styles.kennismaking} id="kennismaking">
      <div className={styles.inner}>
        <p className={styles.label}>Beginnen</p>

        <h2 className={styles.heading}>
          Trek je schoenen aan.<br />
          <span className={styles.accent}>Begin gewoon.</span>
        </h2>

        <p className={styles.sub}>
          Geen inschrijfformulier, geen verplichting. Een uur lang praten over wat jij wilt en hoe wij kunnen helpen. Dat is alles.
        </p>

        <div className={styles.ctas} id="proefles">
          <a
            className={styles.btnPrimary}
            href="mailto:info@starkhardenberg.nl?subject=Kennismakingsgesprek"
          >
            Plan een kennismaking
          </a>
          <a
            className={styles.btnSecondary}
            href="mailto:info@starkhardenberg.nl?subject=Gratis proefles"
          >
            Boek je gratis proefles
          </a>
        </div>

        <p className={styles.address}>
          Nijverheidsstraat 15c, Hardenberg &nbsp;&middot;&nbsp; info@starkhardenberg.nl
        </p>
      </div>
    </section>
  )
}
