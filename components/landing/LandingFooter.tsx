import Link from 'next/link'
import { mailtoInfo, mailtoKennismaking } from '@/lib/contact'
import styles from './LandingFooter.module.css'

export default function LandingFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.headline}>Meer weten of gelijk starten?</p>

      <p className={styles.contact}>
        <a href="tel:+31621248107" className={styles.contactLink}>
          06 21248107
        </a>
        <span className={styles.sep} aria-hidden>
          ·
        </span>
        <a href={mailtoInfo} className={styles.contactLink}>
          info@starkhardenberg.nl
        </a>
        <span className={styles.sep} aria-hidden>
          ·
        </span>
        <span className={styles.contactText}>Nijverheidsstraat 15c, Hardenberg</span>
      </p>

      <a href={mailtoKennismaking} className={styles.cta}>
        Plan een kennismaking
        <span aria-hidden>→</span>
      </a>

      <div className={styles.meta}>
        <p>&copy; {new Date().getFullYear()} STARK! Hardenberg</p>
        <Link href="/" className={styles.homeLink}>
          Terug naar home
        </Link>
      </div>
    </footer>
  )
}
