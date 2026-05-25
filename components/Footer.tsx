import { CTA_KENNISMAKING_LABEL, mailtoInfo, hrefKennismaking } from '@/lib/contact'
import styles from './Footer.module.css'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.welcome}>Wees welkom.</p>

        <a href={hrefKennismaking} className={styles.cta}>
          {CTA_KENNISMAKING_LABEL}
          <span aria-hidden>→</span>
        </a>

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

        <p className={styles.meta}>
          &copy; {year} STARK! Hardenberg
          <span className={styles.metaSep} aria-hidden>
            ·
          </span>
          Opgericht 2013
        </p>
      </div>
    </footer>
  )
}
