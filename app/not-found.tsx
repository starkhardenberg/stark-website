import Image from 'next/image'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <a href="/" aria-label="STARK home">
          <Image
            src="/images/stark_logo_wit.png"
            alt="STARK"
            width={200}
            height={64}
            priority
            className={styles.logo}
          />
        </a>
      </header>

      <div className={styles.content}>
        <p className={styles.label}>404</p>

        <h1 className={styles.heading}>
          Deze pagina heeft een{' '}
          <span className={styles.headingOutline}>blessure</span>
        </h1>

        <p className={styles.sub}>
          Niks aan de hand, even terug naar de basis.
        </p>

        <div className={styles.ctas}>
          <a className={styles.btnPrimary} href="/">
            Terug naar home
          </a>
        </div>
      </div>

      <div className={styles.anchorShell}>
        <span>STARK Hardenberg</span>
        <div className={styles.anchor} aria-hidden="true" />
        <span>Nijverheidsstraat 15c</span>
      </div>
    </main>
  )
}
