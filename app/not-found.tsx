import Image from 'next/image'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <a href="/" aria-label="STARK! home">
          <Image
            src="/images/stark_logo_wit.png"
            alt="STARK!"
            width={100}
            height={32}
            className={styles.logo}
          />
        </a>
      </header>

      <div className={styles.content}>
        <p className={styles.label}>404</p>

        <h1 className={styles.heading}>
          <span className={styles.lead}>Verkeerd</span>
          <span className={styles.punch}>ingestapt.</span>
        </h1>

        <p className={styles.sub}>
          Deze pagina bestaat niet. Maar een sterk lijf en een helder hoofd&nbsp;&mdash; die bestaan wel. Terug naar de plek waar het gebeurt.
        </p>

        <div className={styles.ctas}>
          <a className={styles.btnPrimary} href="/">
            Terug naar home
          </a>
          <a className={styles.btnSecondary} href="/#kennismaking">
            Plan kennismakingsgesprek
          </a>
        </div>
      </div>

      <div className={styles.anchorShell}>
        <span>STARK! Hardenberg</span>
        <div className={styles.anchor} />
        <span>Nijverheidsstraat 15c</span>
      </div>
    </main>
  )
}
